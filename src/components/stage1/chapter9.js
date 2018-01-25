import React, {Component} from 'react';

class Chapter9 extends Component {
    constructor() {
        super();
        this.state = {
            useInEvent: 'hello'
        }
    }

    /* 注意使用事件bind传参，e是在最后一个 */
    testEvent(payload, e) {
        console.log(e.target.innerHTML);
        console.log(this);
        console.log(payload);
    }

    render() {
        return (<div>
            {/* 驼峰式事件只能够写在普通的html标签，写在组件会被当做props */}
            <div onClick={this.testEvent.bind(this, this.state.useInEvent)}>
                this is title, click me
            </div>
        </div>);
    }
}

export default Chapter9;
