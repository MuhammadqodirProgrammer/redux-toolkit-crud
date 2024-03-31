import React from 'react';

const Button = ({ handleFunction, children }) => {
	return <button onClick={handleFunction}>{children}</button>;
};
export default React.memo(Button);
