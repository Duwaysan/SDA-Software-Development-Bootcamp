// import React from 'react'
import './WeatherForecast.css';

export default function WeatherForecast({ weatherItem }) {
console.log(weatherItem)
    // console.log(day, "ling 6 in weather")
    
    return (
        <>
        <div className="weather">
            <h2>{weatherItem.day}</h2>
            <img src= {weatherItem.img} alt={weatherItem.imgAlt} />
            <p>-- <span>conditions: </span>{weatherItem.conditions} --</p>
            <p><span>time: </span>{weatherItem.time}</p>
        </div>
        </>
    )
}
