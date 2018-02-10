/*
 * @Author: yuuhei
 * @Date:   2018-02-08 14:36:24
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-10 11:20:55
 */

import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import './index.scss';

import ParamsPage from './components/params.js';
import RerirectPage from './components/redirect.js';
import PreventTransition from './components/prevent-transition.js';
import NoMatch from './components/nomatch.js';

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
                        </li>
                    </ul>
                </header>
                <div>
                    <Route path={`${match.url}/:id`} component={ParamsPage} />
                    <Route path={`${match.url}/redirect`} component={RerirectPage} />
                    <Route exact path={`${match.url}`} render={() => {
                                                                   return <h3>Please select one</h3>
                                                               }} />
                    <Route path={`${match.url}/prevent-transition`} component={PreventTransition} />
                    <Route path={`${match.url}/nomatch`} component={NoMatch} />
                </div>
            </div>
        )
    }
}

export default ReactRouter;