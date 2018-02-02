import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
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
                cursor: this.props.completed
                    ? 'default'
                    : 'pointer'
            }}>
            {this.props.text}
        </li>);
    }
}

export default Todo;
