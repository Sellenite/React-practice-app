import React, { Component } from 'react';

/* Redux是一种架构模式 */

/* 状态管理 */
/* const出来的对象只是不能够将整个对象修改，修改对象的属性是可以的 */
const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red'
    },
    content: {
        text: 'React.js 小书 内容',
        color: 'blue'
    }
}

/* 渲染函数 */
function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title2');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content) {
    const contentDOM = document.getElementById('content2');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

/* 统一修改状态函数 */
function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}

/* 抽离出store */
/* 使用观察者模式，使数据变化的时候自动重新渲染 */
function createStore(state, stateChanger) {
    const listeners = [];
    // 推入订阅函数
    const subscrible = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        stateChanger(state, action);
        // 将所有订阅的函数全部执行
        listeners.forEach((listener) => listener());
    };
    return { getState, dispatch, subscrible };
}

class Chapter31 extends Component {
    componentDidMount() {
        const store = createStore(appState, stateChanger);
        // 订阅
        store.subscrible(() => renderApp(store.getState()));
        // 首次渲染
        renderApp(store.getState());
        // 往下改数据的时候就会自动调用渲染函数
        store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'gray' });
        store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'change by subscrible' });
    }

    render() {
        return (<div>
            <div id="title2"></div>
            <div id="content2"></div>
        </div>);
    }
}

export default Chapter31;
