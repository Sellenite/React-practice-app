import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from './react-redux';

import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <div>
                <p style={{
                    color: this.props.themeColor
                }}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        );
    }
}

// 定义需要context的数据
const mapStateToProps = (state) => {
    return { themeColor: state.themeColor }
}

Content = connect(mapStateToProps)(Content);

export default Content;
