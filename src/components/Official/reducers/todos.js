import {ADD_TODO, TOGGLE_TODO} from '../actions/index';

/* 根据id判断completed，重新从单个todo对象渲染整个list */
let nextId = 0;

// 单个todo，是一个对象
const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                text: action.text,
                completed: false,
                id: nextId++
            }
        case TOGGLE_TODO:
            if (state.id !== action.id)
                return state;
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

// todolist，是一个数组
const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(null, action)
            ]
        case TOGGLE_TODO:
            return state.map(item => todo(item, action))
        default:
            return state
    }
}

export default todos;
