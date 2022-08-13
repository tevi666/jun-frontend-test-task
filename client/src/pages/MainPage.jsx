import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Confetti from 'react-confetti';
import ListHorses from '../components/Horses/ListHorses';
import Table from '../components/Table/Table';
import ResultsModal from '../components/Modal/ResultModal';
import s from './MainPage.module.css';

const MainPage = () => {
	const {
		socket: { socket },
		raceData: { finished },
	} = useSelector(state => state);

	useEffect(() => {
		if (socket) {
			socket.emit('start');
		}
	}, [socket]);

	return (
		<div>
			<Confetti recycle={finished} numberOfPieces={80} />
			<ResultsModal />
			<div className={s.flex}>
				<Table />
				<ListHorses />
			</div>
		</div>
	);
};

export default MainPage;