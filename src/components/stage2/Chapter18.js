import React, {Component} from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>I am Header</div>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }
}

class Chapter18 extends Component {
    constructor() {
        super();
        this.state = {
            showHeader: true
        }
    }

    hideHeader() {
        this.setState({
            showHeader: false
        });
    }

    render() {
        return (
            <div>
                {/* 这样操作Header实质会删除子组件，会调用子组件的Unmount方法 */}
                {this.state.showHeader ? <Header /> : null}
                <button onClick={this.hideHeader.bind(this)}>click me to hide Header</button>
            </div>
        );
    }
}

export default Chapter18;
