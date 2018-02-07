/* 用户actions types */
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

/* 网络请求actions types */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

/* actions */
export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export const invalidateSubreddit = (subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

const receivePosts = (subreddit, json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

/* thunk action creator */
/* 你可以使用任意多异步的 middleware 去做你想做的事情，但是需要使用普通对象作为最后一个被 dispatch 的 action */
const fetchPosts = (subreddit) => {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    // 这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求
    // 但reducer必须保持纯净
    return (dispatch) => {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(requestPosts(subreddit));
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。

        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        // 这里返回的是fetch的Promise对象，所以fetchPosts可以使用.then()，传参是下面的json，也就是state
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`).then(response => response.json()).then(json =>
            // 可以多次 dispatch！
            // 这里，使用 API 请求结果来更新应用的 state。
            // chunk中最后一个被dispatch的action，是一个普通对象，用来带回同步方式
            dispatch(receivePosts(subreddit, json)));
        // 在实际应用中，还需要
        // 捕获网络请求的异常。
    }
}

/* 假如我连续进行了两次请求，在第一次请求的fetch没完成之前，isFetching还是处于true状态，这时候第二个请求就会被驳回，等待第一个请求结束，具体查看fetchPostsIfNeeded的最后结果 */
const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

// thunk 的一个优点是它的结果可以再次被 dispatch：
export const fetchPostsIfNeeded = (subreddit) => {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么。

    // 当缓存的值是可用时，使用缓存值
    // 减少网络请求很有用。
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // 在 thunk 里 dispatch 另一个 thunk！
            // 这里可以return一个参数，由于fetchPosts返回一个Promise，所以这里的fetchPostsIfNeeded可以使用.then()
            return dispatch(fetchPosts(subreddit));
        } else {
            // 告诉调用代码不需要再等待，手动触发Promise，让fetchPostsIfNeeded执行后有.then()方法。
            return Promise.resolve('post data is already cached, you can press refresh to update current post lists.');
        }
    }
}