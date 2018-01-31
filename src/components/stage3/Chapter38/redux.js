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
