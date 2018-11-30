import React, { Component } from 'react';
/* 验证的需要额外安装，react 16已将它独立出来了 */
import PropTypes from 'prop-types';

class Chapter24 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    /* static这里跟小写 */
    static propTypes = {
        /* 类型控制，如果不传入对应类型会出现warning，最后可加上是否必须传入 */
        comments: PropTypes.object.isRequired
    }

    /* 有以下类型和更多 */
    // PropTypes.array
    // PropTypes.bool
    // PropTypes.func
    // PropTypes.number
    // PropTypes.object
    // PropTypes.string
    // PropTypes.node
    // PropTypes.element
    // ...
    // check https://reactjs.org/docs/typechecking-with-proptypes.html

    render() {
        const { comments } = this.props;
        return (<div>
            <p>{comments.username}</p>
            <p>{comments.content}</p>
        </div>);
    }
}

export default Chapter24;
