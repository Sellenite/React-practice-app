import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends Component {
    static propTypes = {
        onTodoClick: PropTypes.func,
        todos: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string, completed: PropTypes.bool}).isRequired)
    }

    static defaultProps = {
        todos: [
            {
                text: '测试未完成',
                completed: false
            }, {
                text: '测试完成',
                completed: true
            }
        ],
        onTodoClick: function(index) {
            console.log(index);
        }
    }

    render() {
        return (<ul>
            {this.props.todos.map((todo, index) => <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(index)}/>)}
        </ul>);
    }
}

export default TodoList;
