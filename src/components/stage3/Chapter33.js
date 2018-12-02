import React, { Component } from 'react';

/* Redux是一种架构模式 */

/* 状态管理 */
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
/* 本节优化如果数据无改变，就不执行对于的渲染函数 */
function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState)
        return; // 数据没有变化就不渲染了
    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle)
        return;
    const titleDOM = document.getElementById('title3');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent)
        return;
    const contentDOM = document.getElementById('content3');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

/* 统一修改状态函数 */
function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            // 构建新的对象并且返回，与修改前的数据区别开来
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            };
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            };
        default:
            // 没有执行返回原来的数据
            return state;
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
        // 修改数据，stateChanger是返回修改后的数据
        state = stateChanger(state, action);
        // 修改数据后将所有订阅的函数全部执行
        listeners.forEach((listener) => listener());
    };
    return { getState, dispatch, subscrible };
}

class Chapter33 extends Component {
    componentDidMount() {
        const store = createStore(appState, stateChanger);
        let oldState = store.getState(); // 未修改前，去到旧的数据用于比较传值
        // 定义修改数据后执行的订阅渲染函数
        store.subscrible(() => {
            const newState = store.getState(); // 修改后的数据
            renderApp(newState, oldState);
            oldState = newState // 新旧交替，等待下一次渲染
        });
        // 首次渲染
        renderApp(store.getState());
        // 往下改数据的时候就会自动调用渲染函数
        store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'darkred' });
        store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'change by subscrible watch state' });
    }

    render() {
        // 扩展运算符将原来的对象/数组等的东西全部映射复制过来
        // 扩展运算符是浅复制，并且支持扩展，覆盖对象属性
        let obj1 = {
            a: 1,
            b: 2
        };
        const obj2 = {
            ...obj1,
            a: 233,
            c: 4
        };
        // console.log(obj2);  {a: 233, b: 2, c: 4}
        let arr = []
        for (let [key, value] of Object.entries(obj2)) {
            arr.push(`${key}: ${value}`, '; ');
        }
        return (<div>
            <div id="title3"></div>
            <div id="content3"></div>
            <div>{arr}</div>
        </div>);
    }
}

export default Chapter33;
