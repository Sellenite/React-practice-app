import React, {Component} from 'react';

class Chapter41 extends Component {
    render() {
        return (<div>
            <p>
                React.js解决组件之间的共享实质还是状态提升，现在只是使用了Redux的架构模式来管理context的规范
            </p>
            <p>
                我们尝试通过构建一个高阶组件 connect 函数的方式，把所有的重复逻辑和对 context 的依赖放在里面 connect 函数里面，而其他组件保持 Pure（Dumb） 的状态，让 connect 跟 context 打交道，然后通过 props 把参数传给普通的组件。
            </p>
            <p>
                而每个组件需要的数据和需要触发的 action 都不一样，所以调整 connect，让它可以接受两个参数 mapStateToProps 和 mapDispatchToProps，分别用于告诉 connect 这个组件需要什么数据和需要触发什么 action。
            </p>
            <p>
                最后为了把所有关于 context 的代码完全从我们业务逻辑里面清除掉，我们构建了一个 Provider 组件。Provider 作为所有组件树的根节点，外界可以通过 props 给它提供 store，它会把 store 放到自己的 context 里面，好让子组件 connect 的时候都能够获取到。
            </p>
            <p>
                Provider只能够传入一个single-element
            </p>
            <p>
                Provider、connect存在于react-redux；createStore存在于redux；
            </p>
            <p>
                以上是Redux的管理流程
            </p>
        </div>);
    }
}

export default Chapter41;
