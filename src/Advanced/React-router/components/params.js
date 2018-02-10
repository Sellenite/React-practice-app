import React from 'react';

/* stateless component */
/* 在括号内接收props，match是由于路由组件传进来的 */
const ParamsPage = ({match}) => {
    return (
        <div>
            <p>
                Selected Main Router and Sub Router:
                <span style={{ color: '#FFF', background: '#e63c6a' }}>{" "} {match.params.id} {" - "} {match.params.sub}</span>
            </p>
        </div>
    )
}

export default ParamsPage;