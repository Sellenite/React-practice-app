import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import PropTypes from 'prop-types';

import AddTodo from '../components/AddTodo';

class AddTodoContainer extends Component {
    static propTypes = {
        onAddClick: PropTypes.func
    }

    render() {
        return (<AddTodo onAddClick={(text) => this.props.onAddClick(text)}/>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            dispatch(addTodo(text));
        }
    }
}

AddTodoContainer = connect(null, mapDispatchToProps)(AddTodoContainer);

export default AddTodoContainer;
