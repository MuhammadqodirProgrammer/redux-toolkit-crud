import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createUser,
	deleteUser,
	getUsers,
} from '../../../store/features/users_crud/userActions';

export const UsersCrud = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.usersCrud);

	useEffect(() => {
		dispatch(getUsers());
	}, []);
	console.log('user crud  data ', users);

	return (
		<div>
			<h1>User Crud</h1>

			<button
				onClick={() =>
					dispatch(
						createUser({
							name: `Name: ${users.data.length}`,
							email: 'demo@fE.fef',
							age: 'jsijefef',
							gender: 'Male',
						})
					)
				}
			>
				add user
			</button>

			{users.isLoading ? (
				<h1>Loading...</h1>
			) : (
				users.data?.map((el) => (
					<div key={el.id}>
						<h2>{el?.name}</h2>

						<button onClick={() => dispatch(deleteUser(el.id))}>delete</button>
					</div>
				))
			)}
		</div>
	);
};
