import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setFinished,
    setResultList,
    setTick,
} from '../../store/slices/dataSlice';
import WinnerHorse from '../Horses/WinnerHorse/WinnerHorse';
const Ticket = () => {
    const {
        dataSlice: { tick },
        socket: { socket },
    } = useSelector(state => state);
    const dispatch = useDispatch();

    const findRestHorses = (finishedHorses, horses) => {
        const finishedHorseNames = finishedHorses.map(horse => horse.name);
        const restHorses = [];
        horses.forEach(horse => {
            if (!finishedHorseNames.includes(horse.name)) {
                restHorses.push(horse);
            }
        });

        return restHorses;
    };

    const findFinishers = horses => {
        const finishers = horses.filter(horse => horse.distance === 1000);

        if (finishers.length > 0) {
            return finishers;
        }

        return null;
    };

    const checkAllFinished = horses => {
        const finished = horses.every(horse => horse.distance === 1000);

        return finished;
    };

    const listenTickerAndCalculateResult = () => {
        let result = [];

        socket.on('ticker', data => {
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
        <>
            {tick.length > 0 ? (
                tick.map(horse => <WinnerHorse horse={horse} key={horse.name} />)
            ) : (
                <CircularProgress />
            )}
        </>
    )
}
export default Ticket
