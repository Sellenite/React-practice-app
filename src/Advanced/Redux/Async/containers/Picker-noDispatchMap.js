/*
 * @Author: Sellenite
 * @Date:   2018-02-06 15:04:59
 * @Last modified by:   yuuhei
 * @Last modified time: 2018-02-06 16:02:26
 */

import React, {
	Component
} from 'react';

import {
	selectSubreddit,
	fetchPostsIfNeeded,
	invalidateSubreddit
} from '../actions/index.js';

import {
	connect
} from 'react-redux';

import Picker from '../components/Picker.js';

class PickerContainer extends Component {
	// 初始发起请求数据
	componentDidMount() {
		/* 没有使用mapDispatchToProps的时候container可以在props拿到store的dispatch */
		/* 同理没有使用mapStateToProps的时候container可以在props拿到store的state */
		const {
			selectedSubreddit,
			dispatch,
			state
		} = this.props;
		dispatch(fetchPostsIfNeeded(selectedSubreddit)).then(info => console.log(info));
		console.log(state); // 这里的的state是在mapStateToProps里返回出来到props的
	}

	// 点击刷新时发起请求数据
	handleRefreshClick(e) {
		e.preventDefault();
		const {
			selectedSubreddit,
			dispatch
		} = this.props;
		dispatch(invalidateSubreddit(selectedSubreddit));
		dispatch(fetchPostsIfNeeded(selectedSubreddit)).then(info => console.log(info));
	}

	// options列表更改时发起请求数据
	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
			const {
				selectedSubreddit,
				dispatch
			} = nextProps;
			dispatch(fetchPostsIfNeeded(selectedSubreddit)).then(info => console.log(info));
		}
	}

	render() {
		const {
			dispatch,
			selectedSubreddit,
			isFetching,
			lastUpdated
		} = this.props;
		return (
			<div>
				{/* 这里onChange只做选择的更改，请求数据放在componentWillReceiveProps里 */}
				<Picker value={selectedSubreddit}
					options={['reactjs', 'frontend']}
					onChange={(nextSubreddit) => {
						dispatch(selectSubreddit(nextSubreddit))
					}}/>
				<p>
					{
						lastUpdated &&
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
						</span>
					}
					{
						!isFetching &&
						<a onClick={this.handleRefreshClick.bind(this)}
							style={{color: 'red', textDecoration: 'underline', cursor: 'pointer'}}>
							Refresh
						</a>
					}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const {
		selectedSubreddit,
		postsBySubreddit
	} = state;
	const {
		isFetching,
		lastUpdated
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true
	};
	return {
		selectedSubreddit,
		isFetching,
		lastUpdated,
		/* 如果需要在container使用的话可以return回去传入props */
		state
	}
}

PickerContainer = connect(mapStateToProps)(PickerContainer);

export default PickerContainer;