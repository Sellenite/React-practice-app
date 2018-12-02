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
function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title1');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content) {
    const contentDOM = document.getElementById('content1');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

/* 统一修改状态函数 */
function dispatch(action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break;
    }
}

class Chapter30 extends Component {
    componentDidMount() {
        dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' });
        renderApp(appState);
    }

    render() {
        return (<div>
            <div id="title1"></div>
            <div id="content1"></div>
        </div>);
    }
}

export default Chapter30;
