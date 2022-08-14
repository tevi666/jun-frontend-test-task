import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFinished, setResultList } from '../../store/slices/dataSlice';
import s from './Button.module.css';
const Button = () => {
    const {
        socket: { socket },
    } = useSelector(state => state);
    const dispatch = useDispatch();
    const setDefaultValues = () => {
        dispatch(setFinished(false));
        dispatch(setResultList([]));
    };
    const startNewRound = () => {
        socket.connect();
        socket.emit('start');
    };
    const handleClose = () => {
        setDefaultValues();
        startNewRound();
    };
    return (
        <button
            data-testid='btn'
            className={s.btn}
            onClick={() => {
                handleClose();
            }}
        >
            New round
        </button>
    );
};

export default Button;