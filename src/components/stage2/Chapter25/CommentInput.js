import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handleContentChange(e) {
        this.setState({ content: e.target.value });
    }

    handleUsernameBlur(e) {
        this._saveUsername(e.target.value);
    }

    /* 私有方法标记方式，用于函数中调用的函数，提醒不是直接在render直接调用 */
    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({ username: username });
        }
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({ username, content, createdTime: +new Date() });
            this.setState({
                content: ''
            });
        }
    }

    componentWillMount() {
        this._loadUsername();
    }

    componentDidMount() {
        this.textarea.focus();
    }

    render() {
        return (<div className='comment-input'>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} />
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(textarea) => this.textarea = textarea} />
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                    发布
                </button>
            </div>
        </div>);
    }
}

export default CommentInput;
