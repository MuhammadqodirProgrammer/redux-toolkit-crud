import React, { useState, useMemo, useEffect } from 'react';

const HookMemo = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState(true);

	const themeStyle = useMemo(() => {
		return {
			backgroundColor: theme ? '#333' : '#fff',
			color: !theme ? '#333' : '#fff',
		};
	}, [theme]);

	const handleCounter = (number) => {
		console.log('change counter');
		for (let index = 0; index < 10000000; index++) {}
		return number + 1;
	};

	useEffect(() => {
		console.log('Change theme');
	}, [theme]);

	const result = useMemo(() => handleCounter(count), [count]);

	return (
		<div style={themeStyle}>
			<h1>HookMemo</h1>

			<h2>{result}</h2>

			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setTheme(!theme)}>Chenge theme</button>
		</div>
	);
};

export default HookMemo;
