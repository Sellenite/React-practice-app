import React, { Component } from 'react';
// import './style.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class Chapter14 extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment) {
        if (!comment)
            return;
        if (!comment.username)
            return alert('请输入用户名');
        if (!comment.content)
            return alert('请输入评论内容');
        this.state.comments.push(comment);
        this.setState({ comments: this.state.comments });
    }

    render() {
        return (<div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
            <CommentList comments={this.state.comments}></CommentList>
        </div>);
    }
}

export default Chapter14;
