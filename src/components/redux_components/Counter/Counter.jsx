import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	increment,
} from '../../../store/features/counter/counterSlice';

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Counter which redux-toolkit</h1>
			<p>Count: {count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>

			<hr />
		</div>
	);
};

export default Counter;
