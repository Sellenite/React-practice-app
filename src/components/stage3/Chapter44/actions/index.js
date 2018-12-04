// action types
export const INIT_COMMNETS = 'INIT_COMMNETS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// actions
export const initComments = (comments) => {
    return { type: INIT_COMMNETS, comments };
}

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment };
}

export const deleteComment = (commentIndex) => {
    return { type: DELETE_COMMENT, commentIndex };
}
