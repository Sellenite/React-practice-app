import React, {Component} from 'react';

/* 高阶组件，它是一个函数，传入一个组件，返回一个新组件 */
/* 高阶组件是为了组件之间代码的复用，新的组件和传入的组件通过 props 传递信息 */
function higherOrderComponent(WarnrappedComponent, name) {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: null
            }
        }

        componentWillMount() {
            const data = localStorage.getItem(name) || '';
            this.setState({data: data});
        }

        render() {
            return (<WarnrappedComponent data={this.state.data}/>);
        }
    }
    return NewComponent;
};

export default higherOrderComponent;
