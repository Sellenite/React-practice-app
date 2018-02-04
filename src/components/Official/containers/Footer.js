import {connect} from 'react-redux';
import {setVisibility} from '../actions/index';

import Footer from '../components/Footer';

/* mapStateToProps和onFilterChange的return内容都作为props传入component，在component可以用this.props.xxx拿到 */
const mapStateToProps = (state) => {
    return {filter: state.visibilityFilter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (filter) => {
            dispatch(setVisibility(filter));
        }
    }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
