import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';

class FooterContainer extends Component {
    render() {
        return (<Footer/>);
    }
}

export default FooterContainer;
