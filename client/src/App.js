import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import './App.css';
import { openSocket } from './store/slices/socketSlice';
import MainPage from './pages/MainPage';

const socket = io(process.env.REACT_APP_API);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(openSocket(socket));
	}, []);

	return (
		<div>
			<MainPage />
		</div>
	);
}

export default App;