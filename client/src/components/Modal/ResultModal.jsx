import { Button, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFinished, setResultList } from '../../store/slices/dataSlice';
import s from './ResultModal.module.css'

const ResultsModal = () => {
	const {
		socket: { socket },
		dataSlice: { resultList, finished },
	} = useSelector((state) => state);
	const dispatch = useDispatch();

	const startNewRound = () => {
		socket.connect();
		socket.emit('start');
	};

	const setDefaultValues = () => {
		dispatch(setFinished(false));
		dispatch(setResultList([]));
	};

	const handleClose = () => {
		setDefaultValues();
		startNewRound();
	};

	return (
		<Modal
			open={finished}
			aria-labelledby='parent-modal-title'
			aria-describedby='parent-modal-description'
		>
			<div className={s.modal}>
				<h1 className={s.h1}>
					Results
				</h1>
				{resultList.map((item, index) => (
					<div className={s.content}
						key={item.name}
						index={index}
					>
						{index + 1} place: {item.name}
					</div>
				))}

				<Button
					className={s.btn}
					onClick={() => {
						handleClose();
					}}
				>
					New round
				</Button>
			</div>
		</Modal>
	);
};

export default ResultsModal;