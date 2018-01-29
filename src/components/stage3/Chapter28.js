import React, {Component} from 'react';

import higherOrderComponent from './higherOrderComponent';

/* 一般组件 */
class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data} readOnly/>
    }
}

// 二次封装
InputWithUserName = higherOrderComponent(InputWithUserName, 'username');

class Chapter28 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<div>
            <InputWithUserName />
        </div>);
    }
}

export default Chapter28;
