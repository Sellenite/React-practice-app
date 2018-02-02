import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTodo, VisibilityFilters} from '../actions/index';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
    static propTypes = {
        todos: PropTypes.array,
        onTodoClick: PropTypes.func
    }
    render() {
        return (<TodoList todos={this.props.todos} onTodoClick={(index) => this.props.onTodoClick(index)}/>);
    }
}

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

const mapStateToProps = (state) => {
    return {
        todos: mapVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (index) => {
            dispatch(completeTodo(index));
        }
    }
}

TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

export default TodoListContainer;
