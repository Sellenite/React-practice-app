/*
 * @Author: yuuhei
 * @Date:   2018-02-08 14:36:24
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-10 22:11:17
 */

import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import './index.scss';

import ParamsPage from './components/params.js';
import RerirectPage from './components/redirect.js';
import PreventTransition from './components/prevent-transition.js';
import NoMatch from './components/nomatch.js';
import Sidebar from './components/sidebar.js';

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
                            <Link to={`${match.url}/prevent-transition`}>
                                prevent-transition
                            </Link>
                            <Link to={`${match.url}/nomatch`}>
                                nomatch
                            </Link>
                            <Link to={`${match.url}/sidebar`}>
                                sidebar
                            </Link>
                        </li>
                    </ul>
                </header>
                <div>
                    {/* 参数可以传入多个，然后访问的时候要对上参数才能够出现 */}
                    <Route path={`${match.url}/:id/:sub`} component={ParamsPage} />
                    <Route path={`${match.url}/redirect`} component={RerirectPage} />
                    <Route exact path={`${match.url}`} render={() => {
                                                                   return <h3>Please select one</h3>
                                                               }} />
                    <Route path={`${match.url}/prevent-transition`} component={PreventTransition} />
                    <Route path={`${match.url}/nomatch`} component={NoMatch} />
                    <Route path={`${match.url}/sidebar`} component={Sidebar} />
                </div>
            </div>
        )
    }
}

export default ReactRouter;