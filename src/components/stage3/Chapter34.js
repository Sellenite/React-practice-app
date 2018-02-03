import React, {Component} from 'react';

/* Redux是一种架构模式 */

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
    const titleDOM = document.getElementById('title4');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent)
        return;
    const contentDOM = document.getElementById('content4');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

/* 统一修改状态函数 */
/* 纯函数，它的作用只能是初始化state和计算新的state，可以建立多个reducer */
function reducer(state, action) {
    if (!state) {
        /* 状态管理默认值 */
        state = {
            title: {
                text: 'React.js 小书',
                color: 'red'
            },
            content: {
                text: 'React.js 小书 内容',
                color: 'blue'
            }
        }
    }
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

/* 定义另外一个纯函数reducer */
function themeReducer(state, action) {
    if (!state)
        return {themeName: 'Red Theme', themeColor: 'red'}
    switch (action.type) {
        case 'UPDATE_THEME_NAME':
            return {
                ...state,
                themeName: action.themeName
            }
        case 'UPDATE_THEME_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            break;
    }
}

createStore(themeReducer);
// ...后续操作参考componentDidMount的操作

/* 抽离出store */
/* 使用观察者模式，使数据变化的时候自动重新渲染 */
function createStore(reducer) {
    let state = null;
    const listeners = [];
    // 推入订阅函数
    const subscrible = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        // 修改数据，reducer是返回修改后的数据
        state = reducer(state, action);
        // 修改数据后将所有订阅的函数全部执行
        listeners.forEach((listener) => listener());
    };
    dispatch({}); // 初始化state
    return {getState, dispatch, subscrible};
}

class Chapter34 extends Component {
    componentDidMount() {
        const store = createStore(reducer);
        let oldState = store.getState(); // 未修改前，去到旧的数据用于比较传值
        // 定义修改数据后执行的订阅渲染函数
        store.subscrible(() => {
            const newState = store.getState(); // 修改后的数据
            renderApp(newState, oldState);
            oldState = newState // 将已经执行过修改的state存入旧state，等待下一次渲染
        });
        // 首次渲染
        renderApp(store.getState());
        // 往下改数据的时候就会自动调用渲染函数
        store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'orange'});
        store.dispatch({type: 'UPDATE_TITLE_TEXT', text: 'change by subscrible watch state reducer'});
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
        }; // obj2 => {a: 233, b: 2, c: 4}
        return (<div>
            <div id="title4"></div>
            <div id="content4"></div>
            <p>{Object.keys(obj2)}</p>
        </div>);
    }
}

export default Chapter34;
