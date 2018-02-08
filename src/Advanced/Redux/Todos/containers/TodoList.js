import {connect} from 'react-redux';
import {completeTodo, VisibilityFilters} from '../actions/index';

import TodoList from '../components/TodoList';

/* 在这里根据filter对todos的显示筛选 */
const mapVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

/* mapStateToProps和onFilterChange的return内容都作为props传入component，在component可以用this.props.xxx拿到 */

// 这里的state来自connect从context拿到的store.getState()后返回的state结果
const mapStateToProps = (state) => {
    return {
        todos: mapVisibleTodos(state.todos, state.visibilityFilter)
    }
}

// 这里的dispatch来自connect从context拿到的store.dispatch()
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(completeTodo(id));
        }
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
