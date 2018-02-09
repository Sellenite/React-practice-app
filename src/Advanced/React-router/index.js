/*
 * @Author: yuuhei
 * @Date:   2018-02-08 14:36:24
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-09 20:40:25
 */

import React, { Component} from 'react';

import { Route, Link} from 'react-router-dom';
import './index.scss';

import ParamsPage from './components/params.js';
import RerirectPage from './components/redirect.js';

class ReactRouter extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <header className="ReactRouter-router-header">
                    <ul>
                        <li>
                            <Link to={`${match.url}/redirect`}>
                                redirect
                            </Link>
                        </li>
                    </ul>
                </header>
                <div>
                    <Route path={`${match.url}/:id`} component={ParamsPage} />
                    <Route path={`${match.url}/redirect`} component={RerirectPage} />
                    <Route exact path={`${match.url}`} render={() => {
                                                                   return <h3>Please select one</h3>
                                                               }} />
                </div>
            </div>
        )
    }
}

export default ReactRouter;