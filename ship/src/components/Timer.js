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
            jetz zuschlagen
            <br></br>
            Nur noch: {Math.floor(timeLeft / 60)}Minuten {timeLeft % 60}Sekunden verfügbar
        </div>
    );
};

export default Timer;
