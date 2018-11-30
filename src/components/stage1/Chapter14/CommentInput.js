import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    handleInputChange(e) {
        // 可根据自定义属性处理所有输入框的onChange事件
        // 最好使用data-*或aria-*的格式来定义自定义属性
        let type = e.target.getAttribute('data-type');
        this.setState({
            [type]: e.target.value
        });
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({ username, content });
        }
    }

    render() {
        return (<div className='comment-input'>
            <div className='comment-field'>
                <span className='comment-field-name'>用户名：</span>
                <div className='comment-field-input'>
                    <input value={this.state.username} onChange={this.handleInputChange.bind(this)} data-type="username" />
                </div>
            </div>
            <div className='comment-field'>
                <span className='comment-field-name'>评论内容：</span>
                <div className='comment-field-input'>
                    <textarea value={this.state.content} onChange={this.handleInputChange.bind(this)} data-type="content" />
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
