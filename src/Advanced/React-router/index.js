/*
 * @Author: yuuhei
 * @Date:   2018-02-08 14:36:24
 * @Last Modified by:   yuuhei
 * @Last Modified time: 2018-02-08 17:24:21
 */

import React, {
	Component
} from 'react';

import {
	Route,
	Link
} from 'react-router-dom';
import './index.scss';

import RerirectPage from './components/redirect.js';

/* stateless component */
/* 在括号内接收props，match是由于路由组件传进来的 */
const Params = ({
	match
}) => {
	return (
		<div>
			<p>Selected: {match.params.id}</p>
		</div>
	);
}

class ReactRouter extends Component {
	render() {
		const {
			match
		} = this.props;
		return (
			<div>
				<header className="ReactRouter-router-header">
					<ul>
						<li>
							<Link to={`${match.url}/redirect`}>redirect</Link>
						</li>
					</ul>
				</header>
				<div>
					<Route path={`${match.url}/:id`} component={Params}/>
					<Route path={`${match.url}/redirect`} component={RerirectPage}/>
					<Route exact path={`${match.url}`} render={() => {
						return <h3>Please select one</h3>
					}} />
				</div>
			</div>
		);
	}
}

export default ReactRouter;