// aciton types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// actions
// 一般情况下action只会影响特定reducer，可以写在一起更容易维护
export const initComments = (comments) => {
    return {type: INIT_COMMENTS, comments}
}

export const addComment = (comment) => {
    return {type: ADD_COMMENT, comment}
}

export const deleteComment = (commentIndex) => {
    return {type: DELETE_COMMENT, commentIndex}
}

// reducer
export default function(state, action) {
    if (!state) {
        state = {
            comments: []
        };
    }
    switch (action.type) {
            /* 初始化评论 */
        case INIT_COMMENTS:
            return {comments: action.comments};
            /* 新增评论 */
        case ADD_COMMENT:
            return {
                comments: [
                    ...state.comments,
                    action.comments
                ]
            };
            /* 删除评论 */
        case DELETE_COMMENT:
            return {
                comments: [
                    /* 在不影响原数组下的删除特定索引值的技巧，splice会影响原数组 */
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            };
        default:
            return {state};
    }
}
