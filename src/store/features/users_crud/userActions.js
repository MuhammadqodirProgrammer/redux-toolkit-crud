import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = 'https://648c3b3f8620b8bae7ec8260.mockapi.io/crud';

// create user
export const createUser = createAsyncThunk('createUser', async (user) => {
	try {
		const resp = await axios.post(base_url, user);
		console.log(resp.data);

		return resp.data;
	} catch (error) {
		return isRejectedWithValue(error.message);
	}
});

// read user

export const getUsers = createAsyncThunk('getUsers', async () => {
	try {
		const resp = await axios.get(base_url);
		console.log(resp.data);
		return resp.data;
	} catch (error) {
		return isRejectedWithValue;
	}
});

// update

export const updateUser = createAsyncThunk('updateUser', async (user) => {
	try {
		const resp = await axios.put(`${base_url}/${user.id}`, user);
		console.log(resp.data);

		return resp.data;
	} catch (error) {
		return isRejectedWithValue(error.message);
	}
});

export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
	try {
		const resp = await axios.delete(`${base_url}/${id}`);
		console.log(resp.data);

		return resp.data;
	} catch (error) {
		return isRejectedWithValue(error.message);
	}
});
