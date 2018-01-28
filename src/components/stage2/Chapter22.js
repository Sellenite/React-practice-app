import React, {Component} from 'react';

/* 容器内组件 */
class Card extends Component {
    render() {
        return (
            <div>
                {/* 在子组件中使用this.props.children拿到嵌套的数组 */}
                <div>
                    should be left:
                    {this.props.children[0]}
                </div>
                <div>
                    should be right:
                    {this.props.children[1]}
                </div>
            </div>
        );
    }
}

class Chapter22 extends Component {
    render() {
        return (
            <div>
                <Card>
                    {/* 嵌套结构会经常用到 */}
                    <div>left</div>
                    <div>right</div>
                </Card>
            </div>
        );
    }
}

export default Chapter22;
