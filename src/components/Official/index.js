import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';

import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';

class Index extends Component {
    render() {
        return (<div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
            <Footer></Footer>
        </div>);
    }
}

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Official extends Component {

    render() {
        return (<Provider store={store}>
            <Index/>
        </Provider>);
    }
}

export default Official;
