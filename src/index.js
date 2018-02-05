import React from 'react';
import ReactDOM from 'react-dom';

import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
