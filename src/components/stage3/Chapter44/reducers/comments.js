import {COMMENTS} from '../actionTypes/actionTypes';

// reducer，具体的修改方式
export default function(state, action) {
    if (!state) {
        state = {
            comments: []
        }
    }
    switch (action.type) {
        case COMMENTS.INIT_COMMNETS:
            // 初始化评论
            return {comments: action.comments}
        case COMMENTS.ADD_COMMENT:
            // 新增评论
            return {
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case COMMENTS.DELETE_COMMENT:
            // 删除评论
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
        default:
            return state
    }
}
