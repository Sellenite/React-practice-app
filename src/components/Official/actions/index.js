/* 如果想异步dispatch一个actions需要中间层redux-chunk */
/* https://github.com/gaearon/redux-thunk */

// function incrementAsync() {
//     return dispatch => {
//         setTimeout(() => {
//              Yay! Can invoke sync or async actions with `dispatch`
//             dispatch(increment());
//         }, 1000);
//     };
// }

/* action 类型 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_VISIBLE_TODOS = 'TOGGLE_VISIBLE_TODOS';

/* 其它的常量 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/* action 创建函数 */
export const addTodo = (text) => {
    return {type: ADD_TODO, text}
}

export const completeTodo = (index) => {
    return {type: COMPLETE_TODO, index}
}

export const setVisibility = (filter) => {
    return {type: SET_VISIBILITY_FILTER, filter}
}
