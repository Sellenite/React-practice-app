import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* context start */
/* context的目的是可以让任意深度的子组件进行共用 */
/* 一般不要主动使用context，必须进行数据共享的时候使用redux即可 */
class Index extends Component {
    /* 如果要设置context，这个是必须写的 */
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            themeColor: 'red'
        }
    }

    /* 如果要设置context，这个是必须写的 */
    getChildContext() {
        return {themeColor: this.state.themeColor}
    }

    render() {
        return (<div>
            <Header/>
            <Main/>
        </div>)
    }
}

class Header extends Component {
    render() {
        return (<div>
            <h2>This is header</h2>
            <Title/>
        </div>)
    }
}

class Main extends Component {
    render() {
        return (<div>
            <h2>This is main</h2>
            <Content/>
        </div>)
    }
}

class Title extends Component {
    /* 如果要设置context，这个是必须写的 */
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render() {
        this.context.themeColor = 'green';
        return (<h1 style={{
                color: this.context.themeColor
            }}>React.js 小书标题</h1>)
    }
}

class Content extends Component {
    render() {
        return (<div>
            <h2>React.js 小书内容</h2>
        </div>)
    }
}

/* context end */

class Chapter29 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<div>
            {/* 一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。 */}

            {/* 如果一个组件设置了 context，那么它的子组件都可以直接访问到里面的内容，它就像这个组件为根的子树的全局变量。任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态。 */}
            <Index/>
        </div>);
    }
}

export default Chapter29;
