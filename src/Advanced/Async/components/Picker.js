/*
 * @Author: Sellenite
 * @Date:   2018-02-06 14:48:12
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-06 16:35:47
 */

import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

export default class Picker extends Component {
	static propTypes = {
		value: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.string),
		onChange: PropTypes.func
	};

	render() {
		return (
			<span>
				<h1>{this.props.value}</h1>
				<select onChange={e => this.props.onChange(e.target.value)} value={this.props.value}>
					{this.props.options.map((option) => {
						return <option value={option} key={option}>{option}</option>
					})}
				</select>
			</span>
		);
	}
}