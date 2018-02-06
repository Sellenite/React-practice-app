/*
 * @Author: Sellenite
 * @Date:   2018-02-06 15:04:21
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-06 17:20:01
 */

import React, {
	Component
} from 'react';

import PickerContainer from './Picker.js';
import PostsContainer from './Posts.js';

export default class AsyncApp extends Component {
	render() {
		return (
			<div>
				<PickerContainer />
				<PostsContainer />
			</div>
		);
	}
}