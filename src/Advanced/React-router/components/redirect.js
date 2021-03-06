import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import CustomLink from './custom-link.js';

/* match.url其实对于子路由Route来说就是该路由RerirectPage的path */
/* 每个路由被用component或render渲染出来的都有match, location, history这三个props */
const RerirectPage = ({match, location, history}) => {
    return (
        <div>
            <StatusBarWithRouter />
            <ul>
                <li>
                    {/* 自定义Link */}
                    <CustomLink to={`${match.url}/public`} label={'Public Page'} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/protected`} label={'Protected Page'} />
                </li>
            </ul>
            <div>
                <Route path={`${match.url}/public`} component={Public} />
                {/* 自定义组件，在里面进行一些跳转包装 */}
                <PrivateRoute path={`${match.url}/protected`} redirectPath={`${match.url}/login`} component={Protected} />
                <Route path={`${match.url}/login`} component={Login} />
            </div>
        </div>
    )
}

/* 模拟状态 */
const fakeAction = {
    isLogin: false,
    doLogin(callback) {
        this.isLogin = true;
        setTimeout(callback, 100)
    },
    doSignout(callback) {
        this.isLogin = false;
        setTimeout(callback, 100)
    }
}

/* 使用了withRouter高阶组件可以在props得到{ match, location, history } */
const StatusBar = ({match, location, history}) => {
    if (fakeAction.isLogin) {
        return (
            <p>
                Welcome!
                <button onClick={() => {
                                     fakeAction.doSignout(() => history.push(`${match.url}`))
                                 }}>
                    Sign out
                </button>
            </p>
        )
    } else {
        return (
            <p>
                You are not logged in.
            </p>
        )
    }
}

/* 使用高阶组件withRouter进行封装，使其得到路由信息 */
const StatusBarWithRouter = withRouter(StatusBar);

/* 在Route外面包裹一层 */
/* render和component这两个属性功能相似，render可以进行返回一个jsx */
/* Route中的render得到的props与使用Route的component传入的几个路由props相同，都是match, location, history */
/* 这里对传入的component做一个重命名处理 */
const PrivateRoute = ({component: PrivateComponent, redirectPath, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
                             return (
                             fakeAction.isLogin ? <PrivateComponent /> : <Redirect to={redirectPath} />
                             )
                         }} />
    )
}

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        }
    }

    login() {
        fakeAction.doLogin(() => {
            this.setState({
                redirectToReferrer: true
            })
        })
    }

    render() {
        const Redirectfrom = '/ReactRouter/redirect/protected';

        if (this.state.redirectToReferrer) {
            return (<Redirect to={Redirectfrom} />)
        }

        return (
            <div>
                <p>
                    You must log in to view the page at
                    {Redirectfrom}
                </p>
                <button onClick={this.login.bind(this)}>
                    Log in
                </button>
            </div>
        )
    }
}

export default RerirectPage;