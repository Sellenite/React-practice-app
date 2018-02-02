// 一般来说是一个store管理多个reducer，这里做的简化例子只做了一个reducer，没有做多个reducer合并的适配，注意，官方redux有combineReducers方法
export function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscrible = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        // 修改state
        state = reducer(state, action);
        // 修改state后执行所有监听
        listeners.forEach((listener) => listener());
    };
    dispatch({}); // state初始化
    return {getState, dispatch, subscrible};
}
