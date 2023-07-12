import React, { useEffect, useState } from 'react';
import '../../styles/Timer.css';

const Timer = ({ deadline }) => {
    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const getTime = (deadline) => {
        const time = Date.parse(deadline) - Date.now();

        setTimer({
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime(deadline)
        }, 1000)

        return () => clearInterval(interval);
    }, [timer.seconds, deadline])

    return (
        <div className='timer'>
            {timer.days}d : {timer.hours}h : {timer.minutes}m
        </div>
    );
};

export { Timer };