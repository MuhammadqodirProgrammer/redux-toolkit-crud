import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('fetchUser', async () => {
	const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
	return resp.data;
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: [],
		isLoading: false,
		error: false,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchUser.rejected, (state, action) => {
			state.error = true;
		});
	},
});


export default userSlice.reducer;
