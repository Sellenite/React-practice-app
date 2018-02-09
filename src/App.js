import React, { Component } from 'react';
import logo from './images/logo.svg';
import 'normalize.css';
import './css/App.scss';

import { Route, Link } from 'react-router-dom';

import Stage1 from './components/stage1/index.js';
import Stage2 from './components/stage2/index.js';
import Stage3 from './components/stage3/index.js';

import Redux from './Advanced/Redux/index.js';
import ReactRouter from './Advanced/React-router/index.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-router-header">
                    {/* 这种写法应该是经过配置的 */}
                    <img src={logo} alt="" className="App-logo" />
                    <ul>
                        <li>
                            <Link to="/">
                                Stage1
                            </Link>
                            <Link to="/Stage2">
                                Stage2
                            </Link>
                            <Link to="/Stage3">
                                Stage3
                            </Link>
                            <Link to="/Redux">
                                Redux
                            </Link>
                            <Link to="/ReactRouter">
                                ReactRouter
                            </Link>
                        </li>
                    </ul>
                </header>
                <div>
                    <Route exact path="/" component={Stage1} />
                    <Route path="/Stage2" component={Stage2} />
                    <Route path="/Stage3" component={Stage3} />
                    <Route path="/Redux" component={Redux} />
                    <Route path="/ReactRouter" component={ReactRouter} />
                </div>
            </div>
        )
    }
}

export default App;