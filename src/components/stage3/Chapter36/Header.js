import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    /* 从context拿到store */
    static contextTypes = {
        store: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            themeColor: ''
        }
    }

    componentWillMount() {
        const { store } = this.context;
        this._updateThemeColor();
        store.subscrible(() => this._updateThemeColor());
    }

    _updateThemeColor() {
        const { store } = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor });
    }

    render() {
        return (
            <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
        );
    }
}

export default Header;
