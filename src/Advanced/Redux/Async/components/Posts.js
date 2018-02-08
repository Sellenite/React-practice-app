/*
 * @Author: Sellenite
 * @Date:   2018-02-06 14:48:12
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-06 21:06:40
 */

import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
	static propTypes = {
		posts: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string
		}))
	}

	render() {
		return (
			<ul>
				{this.props.posts.map((post, index) => {
					return <li key={index}>{post.title}</li>
				})}
			</ul>
		);
	}
}