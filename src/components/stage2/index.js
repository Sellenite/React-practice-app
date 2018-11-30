import React, { Component } from 'react';

import Chapter18 from './Chapter18';
import Chapter19 from './Chapter19';
import Chapter20 from './Chapter20';
import Chapter21 from './Chapter21';
import Chapter22 from './Chapter22';
import Chapter23 from './Chapter23';
import Chapter24 from './Chapter24';
import Chapter25 from './Chapter25/CommentApp';

class Stage2 extends Component {
    constructor() {
        super();
        this.state = {
            testLifeCycle: 0,
            comments: {
                username: 'yuuhei',
                content: 'satellite'
            }
        }
    }

    handleLifeCycle() {
        this.setState({
            testLifeCycle: this.state.testLifeCycle + 1
        });
    }

    render() {
        return (<div>
            <Chapter18></Chapter18>
            <Chapter19></Chapter19>
            <Chapter20 life={this.state.testLifeCycle}></Chapter20>
            <button onClick={this.handleLifeCycle.bind(this)}>test Chapter20 life-cycle</button>
            <Chapter21></Chapter21>
            <Chapter22></Chapter22>
            <Chapter23></Chapter23>
            <Chapter24 comments={this.state.comments}></Chapter24>
            <Chapter25></Chapter25>
        </div>);
    }
}

export default Stage2;
