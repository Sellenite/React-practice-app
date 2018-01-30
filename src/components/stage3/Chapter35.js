import React, {Component} from 'react';

class Chapter35 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<div>
            <p>
                1、定一个 reducer function reducer (state, action) => (初始化 state 和 switch case)
            </p>
            <p>2、生成 store const store = createStore(reducer)</p>

            <p>3、监听数据变化重新渲染页面 store.subscribe(() => renderApp(store.getState()))</p>

            <p>4、首次渲染页面 renderApp(store.getState())</p>

            <p>5、后面可以随意 dispatch 了，页面自动更新 store.dispatch(...)</p>
        </div>
        );
    }
}

export default Chapter35;
