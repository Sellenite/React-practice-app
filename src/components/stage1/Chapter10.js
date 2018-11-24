import React, { Component } from 'react';

class Chapter10 extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    /* 在setState的普通用法并不是即时拿到修改后state的值 */
    originSetState() {
        this.setState({ countFalse: 0 });
        // 此时的this.state.countFalse还是undefined,undefined + 1 = NaN
        this.setState({
            countFalse: this.state.countFalse + 1
        });
        // NaN + 2 = NaN
        this.setState({
            countFalse: this.state.countFalse + 2
        });
    }

    /* 在setState的普通用法无法即时拿到修改后的值，这是第二种方法，首先拿到这个参数 */
    anotherSetState() {
        // 在使用 React.js 的时候，并不需要担心多次进行 setState 会带来性能问题。
        // 实际上只是进行了一次渲染
        this.setState((prevState) => {
            return { count: 0 }
        });
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
        this.setState((prevState) => {
            return {
                count: prevState.count + 2
            }
        });
    }

    render() {
        return (<div>
            <div onClick={this.originSetState.bind(this)}>
                click me use origin setState cant immediately get previous state: {this.state.countFalse}
            </div>
            <div onClick={this.anotherSetState.bind(this)}>
                click me use another setState to get previous state: {this.state.count}
            </div>
        </div>);
    }
}

export default Chapter10;
