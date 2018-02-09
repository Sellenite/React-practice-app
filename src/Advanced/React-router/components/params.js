import React from 'react';

/* stateless component */
/* 在括号内接收props，match是由于路由组件传进来的 */
const ParamsPage = ({
	match
}) => {
	return (
		<div>
			<p>Selected: {match.params.id}</p>
		</div>
	);
}

export default ParamsPage;