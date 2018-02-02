import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
    render() {
        return (<TodoList/>);
    }
}

export default TodoListContainer;
