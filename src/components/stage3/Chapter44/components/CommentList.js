import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (<div>
            {/* 将数据交给父组件传递，好让各个子组件共享数据，这个行为叫做状态提升 */}
            {/* 其实数据也可以存在这里，但是万一以后有可能又需要一个差不多的list，而且是用同一个数据源，那么在没有redux管理数据之前，状态提升是最佳选择 */}
            {
                this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} index={index} onDeleteComment={this.handleDeleteComment.bind(this)}></Comment>
                })
            }
        </div>);
    }
}

export default CommentList;
