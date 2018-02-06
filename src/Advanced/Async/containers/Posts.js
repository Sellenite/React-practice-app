/*
 * @Author: Sellenite
 * @Date:   2018-02-06 15:52:20
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-06 22:06:40
 */

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Posts from '../components/Posts.js';

class PostsContainer extends Component {
	render() {
		const {
			isFetching,
			posts
		} = this.props;
		return (
			<div>
				{
					isFetching && posts.length === 0 &&
					<h2>Loading...</h2>
				}
				{
					!isFetching && posts.length === 0 &&
					<h2>Empty.</h2>
				}
				{
					posts.length > 0 &&
					<div style={{ opacity: isFetching ? 0.5 : 1}}>
						<Posts posts={posts} />
					</div>
				}
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
		items
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	};
	return {
		isFetching,
		posts: items
	}
}

PostsContainer = connect(mapStateToProps)(PostsContainer);

export default PostsContainer;