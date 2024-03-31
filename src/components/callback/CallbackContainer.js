import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

export const CallbackContainer = () => {
	const [age, setAge] = useState(20);
	const [salary, setSalary] = useState(100);

	const hendleAge = useCallback(() => {
		return setAge(age + 1);
	}, [age]);

	const hendleSalary = useCallback(() => {
		return setSalary(salary + 1);
	}, [salary]);
	return (
		<div>
			<Title />
			<Count name='age' count={age} />
			<Button handleFunction={hendleAge}>handle age </Button>

			<Count name='salary' count={salary} />
			<Button handleFunction={hendleSalary}>handle salary </Button>
		</div>
	);
};
