import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    /* 作为TodoList的子组件，渲染单个todo */
    static propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string,
        completed: PropTypes.bool
    }

    render() {
        return (<li onClick={this.props.onClick} style={{
                textDecoration: this.props.completed
                    ? 'line-through'
                    : 'none',
                cursor: 'pointer',
                userSelect: 'none'
            }}>
            {this.props.text}
        </li>);
    }
}

export default Todo;
