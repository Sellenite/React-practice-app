import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/* 根据是否需要高度的复用性，把组件划分为 Dumb 和 Smart 组件，约定俗成地把它们分别放到 components 和 containers 目录下 */

/* Dumb 基本只做一件事情 —— 根据 props 进行渲染。而 Smart 则是负责应用的逻辑、数据，把所有相关的 Dumb（Smart）组件组合起来，通过 props 控制它们。 */

/* Smart 组件可以使用 Smart、Dumb 组件；而 Dumb 组件最好只使用 Dumb 组件，否则它的复用性就会丧失。 */

/* 一般Dumb复用性较好；Smart针对特定场景更多，复用较差 */
import Header from './containers/Header';
import Content from './containers/Content';

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

// 创建store
const store = createStore(themeReducer);

// Provider只能够传入一个single-element
class Index extends Component {
    constructor() {
        super();
        this.state = {};
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

class Chapter43 extends Component {
    render() {
        return (
            <Provider store={store}>
                <Index></Index>
            </Provider>
        );
    }
}

export default Chapter43;
