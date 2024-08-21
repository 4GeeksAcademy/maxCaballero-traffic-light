
import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLight((prevLight) => (prevLight + 1) % 3);
        }, 1000);

        return () => clearInterval(interval);}, []);

    return (
        <div className="traffic-light">
            <div className={`light red ${activeLight === 0 ? 'active' : ''}`}></div>
            <div className={`light yellow ${activeLight === 1 ? 'active' : ''}`}></div>
            <div className={`light green ${activeLight === 2 ? 'active' : ''}`}></div>
        </div>
    );
};

export default TrafficLight;
