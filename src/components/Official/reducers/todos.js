import {ADD_TODO, COMPLETE_TODO} from '../actions/index';

/* 用于确保是独一无二的，代替避免点击判断索引index时的错乱问题，id第一个值是0 */
let nextId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false,
                    id: nextId++
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.id), {
                    ...state[action.id],
                    completed: true
                },
                ...state.slice(action.id + 1)
            ]
        default:
            return state
    }
}

export default todos;
