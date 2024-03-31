import { createSlice } from '@reduxjs/toolkit';
import { createUser, deleteUser, getUsers, updateUser } from './userActions';

const userSlice = createSlice({
	name: 'users',
	initialState: {
		data: [],
		loading: false,
		error: '',
		searchData: [],
	},

	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(createUser.pending, (state, action) => {
				console.log(action, 'acion');
				state.loading = true;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.loading = false;
				state.data.push(action.payload);
			})
			.addCase(createUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(updateUser.pending, (state, action) => {
				console.log(action, 'acion');
				state.loading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.loading = false;
				state.data = state.data.map((element) =>
					element.id === action.payload.id ? action.payload : element
				);
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(deleteUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				const { id } = action.payload;

				if (id) {
					state.data = state.data.filter((element) => element.id !== id);
				}
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.loading = true;
				state.error = action.payload;
			});
	},
});

export default userSlice.reducer;
