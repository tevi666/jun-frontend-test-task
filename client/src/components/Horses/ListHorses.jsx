import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	setFinished,
	setResultList,
	setTick,
} from '../../store/slices/dataSlice';
import WinnerHorse from './WinnerHorse/WinnerHorse';
import s from './ListHorses.module.css'
import finishedLine from '../../assets/Finish-Line-PNG-HD.png'
import tick from '../../Tickets/ticket'

const ListHorses = () => {
	const {
		dataSlice: { tick },
		socket: { socket },
	} = useSelector((state) => state);
	const dispatch = useDispatch();

	const findRestHorses = (finishedHorses, horses) => {
		const finishedHorseNames = finishedHorses.map((horse) => horse.name);
		const restHorses = [];
		horses.forEach((horse) => {
			if (!finishedHorseNames.includes(horse.name)) {
				restHorses.push(horse);
			}
		});

		return restHorses;
	};

	const findFinishers = (horses) => {
		const finishers = horses.filter((horse) => horse.distance === 1000);

		if (finishers.length > 0) {
			return finishers;
		}

		return null;
	};

	const checkAllFinished = (horses) => {
		const finished = horses.every((horse) => horse.distance === 1000);

		return finished;
	};

	const listenTickerAndCalculateResult = () => {
		let result = [];

		socket.on('ticker', (data) => {
			dispatch(setTick(data));
			const notFinished = findRestHorses(result, data);
			const finishers = findFinishers(notFinished);
			if (finishers) {
				result.push(...finishers);

			}

			if (checkAllFinished(data)) {
				dispatch(setResultList(result));
				result = [];
				socket.disconnect();
				dispatch(setFinished(true));
			}
		});
	};

	useEffect(() => {
		if (socket) {
			socket.emit('start');
			listenTickerAndCalculateResult();
		}
	}, [socket]);
	return (
		<div className={s.lines}>
			<h1 className={s.start}>START</h1>
			<h1 className={s.finish}>FINISH</h1>
			<img className={s.finishedLine} src={finishedLine} alt="finishedLine" />
			<img className={s.startLine} src={finishedLine} alt="startLine" />
			{tick.length > 0 ? (
				tick.map(horse => <WinnerHorse horse={horse} key={horse.name} />)
			) : (
				<CircularProgress />
			)}
		</div>
	);
};

export default ListHorses;