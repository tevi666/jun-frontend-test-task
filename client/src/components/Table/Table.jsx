import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import s from './Table.module.css'

const Table = () => {
    const {
        raceData: { tick, resultList },
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
                <div className={s.table}>
                    <div key={horse.name}
                    index={index}
                    >
                        <Typography
                            variant='h2'
                            sx={!index && { color: 'green', fontWeight: 'bold' }}
                        >
                            {index + 1}
                        </Typography>
                        {horse.name}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;