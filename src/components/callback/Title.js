import React from 'react';

const Title = () => {
	console.log('Render title');
	return <h1>useCallbackHook</h1>;
};

export default React.memo(Title);
