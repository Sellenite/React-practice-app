import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    static defaultProps = {
        comments: []
    }

    render() {
        return (<div>
            {
                this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index}></Comment>
                })
            }
        </div>);
    }
}

export default CommentList;
