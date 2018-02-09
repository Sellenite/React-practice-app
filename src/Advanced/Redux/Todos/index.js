import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { addTodo } from './actions/index';

import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';

class Index extends Component {
    render() {
        return (
            <div>
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Footer></Footer>
            </div>
        )
    }
}

// 第二个参数是chrome调试redux的工具
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 手动订阅，每次操作一次dispatch就会执行所有订阅的内容
let unsubscribe = store.subscribe(() => console.log(store.getState()));
// 执行返回的函数可以取消这个订阅
unsubscribe();
// 手动执行用户行为，测试添加todo功能
store.dispatch(addTodo('这个是用于测试手动加入的'));

class Todos extends Component {

    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}

export default Todos;
