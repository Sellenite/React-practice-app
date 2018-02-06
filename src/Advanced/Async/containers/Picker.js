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
		const {
			selectedSubreddit,
			handleFetchPosts
		} = this.props;
		handleFetchPosts(selectedSubreddit);
	}

	// 点击刷新时发起请求数据
	handleRefreshClick(e) {
		e.preventDefault();
		const {
			selectedSubreddit,
			handleInvalidateSubreddit,
			handleFetchPosts
		} = this.props;
		handleInvalidateSubreddit(selectedSubreddit);
		handleFetchPosts(selectedSubreddit);
	}

	// options列表更改时发起请求数据
	componentWillReceiveProps(nextProps) {
		if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
			const {
				selectedSubreddit,
				handleFetchPosts
			} = nextProps;
			handleFetchPosts(selectedSubreddit);
		}
	}

	render() {
		const {
			selectedSubreddit,
			handleSelectSubreddit,
			isFetching,
			lastUpdated
		} = this.props;
		return (
			<div>
				{/* 这里onChange只做选择的更改，请求数据放在componentWillReceiveProps里 */}
				<Picker value={selectedSubreddit}
					options={['reactjs', 'frontend']}
					onChange={(nextSubreddit) => {
						handleSelectSubreddit(nextSubreddit);
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
		lastUpdated
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleSelectSubreddit: (nextSubreddit) => {
			dispatch(selectSubreddit(nextSubreddit));
		},
		handleFetchPosts: (selectedSubreddit) => {
			dispatch(fetchPostsIfNeeded(selectedSubreddit));
		},
		handleInvalidateSubreddit: (selectedSubreddit) => {
			dispatch(invalidateSubreddit(selectedSubreddit));
		}
	}
}

PickerContainer = connect(mapStateToProps, mapDispatchToProps)(PickerContainer);

export default PickerContainer;