import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Header from './Header';
import Content from './Content';

/* reducer的职责是返回一个全新的state，而不是修改传入的state，是一个纯函数 */
function themeReducer(state, action) {
    // 定义默认值
    if (!state)
        return {themeColor: 'red'}
    // 定义行为
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            };
        default:
            return state;
    }
}

// 创建store
// 第二个参数为开启浏览器对redux的调试
const store = createStore(themeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Provider只能够传入一个single-element
class Index extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (<div>
            <Header/>
            <Content/>
        </div>);
    }
}

class Chapter42 extends Component {
    render() {
        return (<Provider store={store}>
            <Index></Index>
        </Provider>);
    }
}

export default Chapter42;
