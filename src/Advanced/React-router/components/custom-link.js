import React from 'react';
import { Route, Link } from 'react-router-dom';

/* 自定义Link，使用Route和children进行配合渲染，路由匹配时match有值，否则为null */
/* 利用children传入的match是否为true可以进行一些当前路由的样式修改 */
const CustomLink = ({to, label, exact}) => {
    /* exact为完全匹配，匹配根路径很有用 */
    return (
        <Route path={to} exact={exact} children={({match}) => {
                                             return (
                                                 <Link to={to} className={match ? 'activeLink' : 'normalLink'}>
                                                     {label}
                                                 </Link>
                                             )
                                         }} />
    )
}

export default CustomLink;