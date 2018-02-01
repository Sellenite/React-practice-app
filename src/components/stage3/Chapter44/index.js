import React, {Component} from 'react';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'

const store = createStore(commentsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class Chapter44 extends Component {
    render() {
        return (<Provider store={store}>
            <CommentApp/>
        </Provider>);
    }
}
