import { useState } from 'react';

import { GetUsersWhichReduxToolkit } from './components/redux_components/GetUsersWhichReduxToolkit/GetUsersWhichReduxToolkit';
import { CallbackContainer } from './components/callback/CallbackContainer';
import { HookReducer } from './components/reducer/HookReducer';
import HookMemo from './components/memo/HookMemo';
import Counter from './components/redux_components/Counter/Counter';
import { UsersCrud } from './components/redux_components/UsersCrud/UsersCrud';
import './App.css';

function App() {
	const [choose, setChoose] = useState(true);

	return (
		<div className='App'>
			<h1>Choose Comonent </h1>

			<button
				style={{ backgroundColor: choose ? 'teal' : '' }}
				onClick={() => setChoose(true)}
			>
				Redux-toolkit misollarni ko'rish uchun bosing
			</button>
			<button
				style={{ backgroundColor: choose ? 'teal' : '' }}
				onClick={() => setChoose(false)}
			>
				Hook larni ko'rish uchun bosing
			</button>

			{choose ? (
				<>
					{/* toolkit orqali counter  */}
					<Counter />
					{/* Userlarni get redux-toolkit qilish  */}
					<GetUsersWhichReduxToolkit />
					{/* crud amal bajarish uchun component */}
					<UsersCrud />
				</>
			) : (
				<>
					<CallbackContainer />
					<HookReducer />
					<HookMemo />
				</>
			)}
		</div>
	);
}

export default App;
