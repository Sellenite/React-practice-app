import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
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
        // 所有子组件都执行了订阅，只要dispatch修改对应的state，就会执行
        store.subscrible(() => this._updateThemeColor());
    }

    _updateThemeColor() {
        const { store } = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor });
    }

    // 使用dispatch action去改变主题颜色，记得subscrible才会执行订阅
    handleSwitchColor(color) {
        const { store } = this.context;
        store.dispatch({ type: 'CHANGE_COLOR', themeColor: color });
    }

    render() {
        return (
            <div>
                <button style={{
                    color: this.state.themeColor
                }} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{
                    color: this.state.themeColor
                }} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        );
    }
}

export default ThemeSwitch;
