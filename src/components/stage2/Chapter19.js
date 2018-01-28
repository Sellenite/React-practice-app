import React, {Component} from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    /* 这里建立的定时器在组件移除的时候需要清除，不然会造成严重的内存泄露 */
    /* 这个钩子一般做的是事Ajax 数据拉取、定时器的启动等 */
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    /* setState 只能在已经挂载或者正在挂载的组件上调用 */
    /* 数据清理或定时器清理一般会在这里做 */
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

class Chapter19 extends Component {
    constructor() {
        super();
        this.state = {
            isClockShow: true
        }
    }

    handleClock() {
        this.setState({
            isClockShow: !this.state.isClockShow
        });
    }

    render() {
        return (
            <div>
                {this.state.isClockShow ? <Clock /> : null}
                <button onClick={this.handleClock.bind(this)}>click me to hide/show clock</button>
            </div>
        );
    }
}

export default Chapter19;
