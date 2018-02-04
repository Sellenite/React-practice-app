import {combineReducers} from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({todos, visibilityFilter});

/* combineReducers实质，其实也是一个reducer，用于组合总的state，使用store.getState()会获得以下return对象的key和value值，基本功能等同于以下代码： */

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
// }

export default todoApp;
