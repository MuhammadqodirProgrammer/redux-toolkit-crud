import counterSlice from './features/counter/counterSlice';

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/get_users/userSlice';
import usersCrudSlice from './features/users_crud/userSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		user: userSlice,
		usersCrud: usersCrudSlice,
	},
});
