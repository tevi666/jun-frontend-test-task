import React from 'react';
import { useSelector } from 'react-redux';
import s from './ResultModal.module.css';
import Button from '../Button/Button';
import { Modal } from '@mui/material';

const ResultsModal = () => {


	const {
		dataSlice: { resultList, finished },
	} = useSelector(state => state);
	return (
		<Modal
			open={finished}
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

				<Button />
			</div>
		</Modal>
	);
};

export default ResultsModal;