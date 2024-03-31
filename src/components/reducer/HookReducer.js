import React from 'react';
import { useReducer } from 'react';

const initialState = {
	count: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				count: state.count + action.payload,
			};
		case 'decrement':
			return {
				...state,
				count: state.count - action.payload,
			};
		case 'reset':
			return {
				...state,
				count: 0,
			};
	}
};

export const HookReducer = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>HookReducer</h1>

			<h2> {count.count} </h2>

			<button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
				increment 10
			</button>
			<button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
				decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>reset</button>
		</div>
	);
};
