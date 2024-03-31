import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../store/features/get_users/userSlice';
export const GetUsersWhichReduxToolkit = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(fetchUser());
	}, []);
	console.log("get user componet data ",data);
	return (
		<div>
			<h1> get users Users </h1>

			{data.isLoading ? (
				<h1>Loading...</h1>
			) : (
				data.data?.map((el) => <h2 key={el.id}>{el?.name}</h2>)
			)}
		</div>
	);
};
