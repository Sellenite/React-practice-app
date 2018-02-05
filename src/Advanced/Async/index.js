import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import {selectSubreddit, fetchPosts} from './actions';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

// 使用了chorme redux-devtool的写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 允许我们在action里 dispatch() 函数
// 一个很便捷的 middleware，用来打印 action 日志
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()));
