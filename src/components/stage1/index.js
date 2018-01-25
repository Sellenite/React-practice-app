import React, {Component} from 'react';
import Chapter7 from './chapter7';
import Chapter9 from './chapter9';
import Chapter10 from './chapter10';
import Chapter11 from './chapter11';

class Stage1 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<div className="Stage1">
            <Chapter7></Chapter7>
            <Chapter9></Chapter9>
            <Chapter10></Chapter10>
            <Chapter11 wordings={{
                    likedText: '已赞',
                    unlikedText: '赞'
                }} handleClick={(e) => {
                    console.log(this);
                    console.log('func props');
                    console.log(e.target.innerHTML);
                }}></Chapter11>
        </div>);
    }
}

export default Stage1;
