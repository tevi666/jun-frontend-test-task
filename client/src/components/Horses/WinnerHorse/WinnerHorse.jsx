import React from 'react';
import { Slider } from '@mui/material';
import s from './WinnerHorse.module.css';

const WinnerHorse = ({ horse }) => {
	return (
		<div className={s.sx}>
			<div>{horse.name}</div>
			<Slider
				value={horse.distance}
				max={1000}
			/>
		</div>
	);
};

export default WinnerHorse;