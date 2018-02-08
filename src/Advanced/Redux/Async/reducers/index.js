import {
    combineReducers
} from 'redux';
import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions';

const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

/* 对网络状态进行修正 */
const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
}

const postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        /* 多项匹配，三个case都执行以下return */
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
});

export default rootReducer;