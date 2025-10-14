// import React from 'react'
import './WeatherForecast.css';
import { useState } from 'react';

export default function WeatherForecast({ weatherItem ,id, handleDelete}) {

    const [showCondition, setShowCondition] = useState(true)
    return (
        <>
        <div className={"weather" `${weatherItem.conditions}`}>
            <h2>{weatherItem.day}</h2>
            <img src= {weatherItem.img} alt={weatherItem.imgAlt} />
            <div style={{ visibility: `${showCondition ? "visible" : "hidden"}` }}>
                <p><span>conditions: </span>{weatherItem.conditions}</p>
                <p><span>time: </span>{weatherItem.time}</p>
            </div>
            <button onClick={() => setShowCondition(!showCondition)}>Show/Hide</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
        </>
    )
}
