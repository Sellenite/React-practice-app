import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setVisibility} from '../actions/index';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';

class FooterContainer extends Component {
    static propTypes = {
        filter: PropTypes.string,
        onFilterChange: PropTypes.func
    }

    render() {
        return (<Footer filter={this.props.filter} onFilterChange={(filter) => this.props.onFilterChange(filter)}/>);
    }
}

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

FooterContainer = connect(mapStateToProps, mapDispatchToProps)(FooterContainer);

export default FooterContainer;
