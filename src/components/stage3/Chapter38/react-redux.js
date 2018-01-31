import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* 仿Redux + Context，由于子组件有多次重复的获取context的代码，这里将它们提升为Pure/Dumb Component，并且使用高阶组件帮助我们取context数据然后使用props传入Pure/Dumb Component */

// 用于包裹所有需要共享数据的子组件并传入store作为props，进行提供store
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {store: this.props.store}
    }

    render() {
        return (<div>
            {this.props.children}
        </div>);
    }
}

// 需要告诉高阶组件需要什么数据和做什么，这里传入mapStateToProps和mapDispatchToProps
// 这样的传参其实是一个设计，记得就好
// 用于连接单个需要共享数据的子组件
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super();
            this.state = {
                allProps: {}
            }
        }

        componentWillMount() {
            const {store} = this.context;
            this._updateProps();
            store.subscrible(() => this._updateProps());
        }

        _updateProps() {
            const {store} = this.context;
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props) // 额外传入
                : {}; // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props) // 额外传入
                : {}; // 防止 mapDispatchToProps 没有传入
            this.setState({
                // 整合普通的 props 和从 state 生成的 props
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            });
        }

        render() {
            // {...this.state.allProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return (<WrappedComponent {...this.state.allProps}/>);
        }
    }

    return Connect;
}
