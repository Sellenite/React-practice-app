/*
 * @Author: yuuhei
 * @Date:   2018-02-08 14:03:55
 * @Last Modified by:   Sellenite
 * @Last Modified time: 2018-02-09 20:41:15
 */

import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import './index.scss';
import Todos from './Todos/index.js';
import Async from './Async/index.js';

class Redux extends Component {
    render() {
        const {match} = this.props;

        return (
            <div>
                <header className="Redux-router-header">
                    <ul>
                        <li>
                            <Link to={`${match.url}/Todos`}>
                                Todos
                            </Link>
                            <Link to={`${match.url}/Async`}>
                                Async
                            </Link>
                        </li>
                    </ul>
                </header>
                <div>
                    <Route path={`${match.url}/Todos`} component={Todos} />
                    <Route path={`${match.url}/Async`} component={Async} />
                    {/* 没有匹配子路由时显示的内容 */}
                    <Route exact path={match.url} render={() => {
                                                              return (<h3>Please Choose one of Redux demo</h3>)
                                                          }} />
                </div>
            </div>
        )
    }
}

export default Redux;