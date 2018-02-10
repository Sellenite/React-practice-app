import React from 'react';

import { Route } from 'react-router-dom';
import CustomLink from './custom-link.js';

const Sidebar = ({match}) => {
    const routes = [
        {
            path: `${match.url}`,
            exact: true,
            label: 'home',
            sidebar: () => <div>
                               Home
                           </div>,
            main: () => <h2>Home Content</h2>
        },
        {
            path: `${match.url}/user-center`,
            exact: false,
            label: 'user-center',
            sidebar: () => <div>
                               User Center
                           </div>,
            main: () => <h2>User Center Content</h2>
        },
        {
            path: `${match.url}/setting`,
            exact: false,
            label: 'setting',
            sidebar: () => <div>
                               Setting
                           </div>,
            main: () => <h2>Setting Content</h2>
        }
    ];

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '10px', width: '200px', background: '#F0F0F0' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {routes.map((item, index) => {
                         return (
                             <li key={index}>
                                 <CustomLink to={item.path} exact={item.exact} label={item.label} />
                             </li>
                         )
                     })}
                </ul>
                {routes.map((item, index) => {
                     return (
                         <Route key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.sidebar} />
                     )
                 })}
            </div>
            <div style={{ flex: 1, padding: '10px' }}>
                {routes.map((item, index) => {
                     return (
                         <Route key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.main} />
                     )
                 })}
            </div>
        </div>
    )
}

export default Sidebar;