import React from 'react';
import s from './ListHorses.module.css';
import finishedLine from '../../assets/image/Finish-Line-PNG-HD.png';
import Ticket from '../Tickets/Ticket';

const ListHorses = () => {
	return (
		<div className={s.lines}>
			<h1 className={s.start}>START</h1>
			<h1 className={s.finish}>FINISH</h1>
			<img className={s.finishedLine} src={finishedLine} alt="finishedLine" />
			<img className={s.startLine} src={finishedLine} alt="startLine" />
			<Ticket />
		</div>
	);
};

export default ListHorses;