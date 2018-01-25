import React, {Component} from 'react';
import logo from './images/logo.svg';
import './css/App.css';

class App extends Component {
    render() {
        return (<div className="App">
            <header>
                {/* 这种写法应该是经过配置的 */}
                <img src={logo} alt="" className="App-logo"/>
            </header>
        </div>);
    }
}

export default App;
