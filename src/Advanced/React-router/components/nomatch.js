import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CustomLink from './custom-link.js';

/* Switch组件能默认渲染第一个child和进行redirect设定，或者定义404 */
/* 还可以进行动画切换设定 */
const NoMatch = ({match}) => {
    return (
        <div>
            <ul>
                <li>
                    <CustomLink to={`${match.url}`} label={'Home'} exact={true} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/old-match`} label={'Old Match, to be redirect'} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/will-match`} label={'Will Match'} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/will-not-match`} label={'Will Not Match'} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/also-will-not-match`} label={'Also Will Not Match'} />
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}`} exact component={Home} />
                {/* Switch里进行redirect */}
                <Redirect from={`${match.url}/old-match`} to={`${match.url}/will-match`} />
                <Route path={`${match.url}/will-match`} component={WillMatch} />
                {/* 定义404组件，所有改父路由访问不到的都使用这个组件展示 */}
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

const Home = () => {
    return (
        <p>
            A <code>Switch</code> renders the first child <code>Route</code>
            {" "} that matches. A <code>Route</code> with no <code>path</code> always matches.
        </p>
    )
}

const WillMatch = () => {
    return (
        <p>
            Match!
        </p>
    )
}

const NotFound = ({location}) => {
    return (
        <h3>404 not found {location.pathname}</h3>
    )
}

export default NoMatch;