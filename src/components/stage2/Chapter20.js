import React, {Component} from 'react';

class Chapter20 extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    /* update hook */
    componentWillReceiveProps(nextProps) {
        this.setState({
            stateProps: this.props
        });
        console.log('componentWillReceiveProps: ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate: ', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate: ', nextProps, nextState);
    }

    render() {
        return (<div>
            Chapter20
        </div>);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: ', prevProps, prevState);
        console.log(this.state.stateProps);
    }
}

export default Chapter20;
