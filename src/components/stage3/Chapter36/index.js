import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Content from './Content';

/* 仿Redux + Context 第一步 */

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscrible = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        // 修改state
        state = reducer(state, action);
        // 修改state后执行所有监听
        listeners.forEach((listener) => listener());
    };
    dispatch({}); // state初始化
    return { getState, dispatch, subscrible };
}

/* reducer的职责是返回一个全新的state，而不是修改传入的state，是一个纯函数 */
function themeReducer(state, action) {
    // 定义默认值
    if (!state)
        return { themeColor: 'red' }
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

// 在ThemeSwitch定义了dispatch，在其他子组件使用了subscrible
const store = createStore(themeReducer);

class Chapter36 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    /* 将store绑定context */
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return { store }
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Chapter36;
