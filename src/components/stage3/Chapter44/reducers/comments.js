import {INIT_COMMNETS, ADD_COMMENT, DELETE_COMMENT} from '../actions/index';

// reducer，具体的修改方式
export default function(state = [], action) {
    switch (action.type) {
        case INIT_COMMNETS:
            // 初始化评论
            return {comments: action.comments}
        case ADD_COMMENT:
            // 新增评论
            return {
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case DELETE_COMMENT:
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
