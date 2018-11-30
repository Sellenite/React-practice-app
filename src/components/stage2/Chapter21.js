import React, { Component } from 'react';

class Chapter21 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    /* ref获取需要在DidMount后 */
    componentDidMount() {
        // console.log(this.refs.para1);
        // console.log(this.para2);
    }

    render() {
        return (<div>
            <p ref="para1">get ref way1(not recommend)</p>
            {/* 官方推荐做法，使用这个回调函数保存dom */}
            <p ref={para => this.para2 = para}>get ref way2(recommend)</p>
        </div>);
    }
}

export default Chapter21;
