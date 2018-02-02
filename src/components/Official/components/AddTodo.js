import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    static propTypes = {
        onAddClick: PropTypes.func
    }

    static defaultProps = {
        onAddClick: function(value) {
            console.log(value);
        }
    }

    handleClick(e) {
        let value = this.input.value.trim();
        if (!value) {
            alert('请输入内容');
            return;
        }
        this.props.onAddClick(value);
        this.input.value = ''
    }

    render() {
        return (<div>
            <input type="text" ref={(input) => this.input = input}/>
            <button onClick={this.handleClick.bind(this)}>Add</button>
        </div>);
    }
}

export default AddTodo;
