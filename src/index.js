import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';

import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));