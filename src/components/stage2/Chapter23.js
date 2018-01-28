import React, {Component} from 'react';

class Chapter extends Component {
    constructor() {
        super();
        this.state = {
            content: '<h1>React.js</h1>',
            color: 'red'
        }
    }

    render() {
        return (
            <div>
                {/* 这样插入的字符串就不会被转义，一般不要这么做 */}
                <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
                <p style={{fontSize: '16px', color: this.state.color}}>style color</p>
            </div>
        );
    }
}

export default Chapter;
