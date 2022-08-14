import React from 'react';
import { useSelector } from 'react-redux';
import s from './Table.module.css';
import { Typography } from '@mui/material';

const Table = () => {
    const {
        dataSlice: { tick, resultList },
    } = useSelector(state => state);

    const mergeList = (tick, resultList) => {
        const resultListNames = resultList.map(horse => horse.name);
        const rest = tick
            .filter(horse => !resultListNames.includes(horse.name))
            .sort((a, b) => b.distance - a.distance);
        const mergedList = [...resultList, ...rest];

        return mergedList;
    };

    return (
        <div
            className={s.sx}
        >
            {[...mergeList(tick, resultList)].map((horse, index) => (
                <div className={s.table} key={horse.name}>
                    <div key={horse.name}
                    >
                        <Typography
                            variant='h2'
                            className={!index && 'text-green-700'}
                        >
                            {index + 1}
                        </Typography>
                        {horse.name}
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default Table;