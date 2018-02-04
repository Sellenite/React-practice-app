import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

import AddTodo from '../components/AddTodo';

/* mapStateToProps和onFilterChange的return内容都作为props传入component，在component可以用this.props.xxx拿到 */
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            dispatch(addTodo(text));
        }
    }
}

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
