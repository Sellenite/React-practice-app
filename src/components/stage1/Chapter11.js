import React, {Component} from 'react';

class Chapter11 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    /* 默认props，传入即被覆盖 */
    static defaultProps = {
        wordings: {
            likedText: '已点赞',
            unlikedText: '点赞'
        }
    }

    render() {
        return (<div>
            {/* 父元素传参可以是字符串、数字、对象、数组、甚至是函数等等 */}
            {this.props.wordings.likedText}, {this.props.wordings.unlikedText}
            <div onClick={this.props.handleClick.bind(this)}>
                click me func props from parent
            </div>
        </div>);
    }
}

export default Chapter11;
