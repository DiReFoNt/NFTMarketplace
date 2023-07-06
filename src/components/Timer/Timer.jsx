import React, { useEffect } from 'react';
import { useState } from 'react';
import './Timer.css';

const Timer = ({ deadline }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const getTime = (deadline) => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime(deadline)
        }, 1000)

        return () => clearInterval(interval);
    }, [seconds, deadline])

    return (
        <div className='timer'>
            {days}d : {hours}h : {minutes}m
        </div>
    );
};

export default Timer;