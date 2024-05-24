// src/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const interval = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <div>
            Verbleibende Zeit: {Math.floor(timeLeft / 60)}m {timeLeft % 60}s
        </div>
    );
};

export default Timer;
