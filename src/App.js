import React, {Component} from 'react';
import logo from './images/logo.svg';
import 'normalize.css';
import './css/App.css';

import Stage1 from './components/stage1/index.js';

class App extends Component {
    render() {
        return (<div className="App">
            <header>
                {/* 这种写法应该是经过配置的 */}
                <img src={logo} alt="" className="App-logo"/>
                <p> Stage1 start ==================</p>
                <Stage1/>
            </header>
        </div>);
    }
}

export default App;
