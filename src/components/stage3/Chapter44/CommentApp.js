import React, {Component} from 'react';
import './style.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class Chapter44 extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments();
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
        this.setState({comments: comments});
        this._saveComments(comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments.slice();
        comments.splice(index, 1);
        this.setState({comments: comments});
        this._saveComments(comments);
    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    _loadComments() {
        const comments = localStorage.getItem('comments');
        if (comments) {
            this.setState({comments: JSON.parse(comments)});
        }
    }

    render() {
        return (<div className="wrapper">
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
            <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}></CommentList>
        </div>);
    }
}

export default Chapter44;
