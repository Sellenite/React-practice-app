import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends Component {
    static propTypes = {
        onTodoClick: PropTypes.func,
        todos: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string, completed: PropTypes.bool}).isRequired)
    }

    render() {
        return (<ul>
            {this.props.todos.map((todo, index) => <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(todo.id)}/>)}
        </ul>);
    }
}

export default TodoList;
