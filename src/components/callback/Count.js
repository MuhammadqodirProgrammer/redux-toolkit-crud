import React from 'react';

const Count = ({ name, count }) => {
	console.log('Render ', name, count);
	return (
		<div>
			{name} - {count}
		</div>
	);
};

export default React.memo(Count);
