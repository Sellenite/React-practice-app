import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

import wrapWithLoadData from './wrapWithLoadData.js';

class Chapter28Plus extends Component {
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: props.data
        }
    }

    handleSubmitComment(comment) {
        if (!comment)
            return;
        if (!comment.username)
            return alert('请输入用户名');
        if (!comment.content)
            return alert('请输入评论内容');
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({ comments: comments });
        this.props.saveData(comments);
    }

    handleDeleteComment(index) {
        // 由于react的数据更新是根据前后的不同进行，所以需要替换一个全新的数组
        const comments = this.state.comments.slice();
        comments.splice(index, 1);
        this.setState({ comments: comments });
        this.props.saveData(comments);
    }

    render() {
        return (<div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
            <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}></CommentList>
        </div>);
    }
}

Chapter28Plus = wrapWithLoadData(Chapter28Plus, 'comments');

export default Chapter28Plus;
