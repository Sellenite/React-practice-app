import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from './react-redux';

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <h1 style={{
                color: this.props.themeColor
            }}>React.js 小书</h1>
        );
    }
}

// 定义需要context的数据
const mapStateToProps = (state) => {
    return { themeColor: state.themeColor }
}

// 柯里化传参
Header = connect(mapStateToProps)(Header);

export default Header;
