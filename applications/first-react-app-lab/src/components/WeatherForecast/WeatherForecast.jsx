import './WeatherForecast.css'
import { useState } from 'react'

export default function WeatherForecast({ id, weatherItem, handleDelete, onActivityChange }) {
    const [showCondition, setShowCondition] = useState(true)

    return (
        <div className={`weather ${weatherItem.conditions}`}>
            <h2>{weatherItem.day}</h2>
            <img src={weatherItem.img} alt={weatherItem.imgAlt} />

            <div style={{ visibility: showCondition ? 'visible' : 'hidden' }}>
                <p>Conditions: {weatherItem.conditions}</p>
                <p>Time: {weatherItem.time}</p>

                <ul>
                    {(weatherItem.activities || []).map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>

                <form onSubmit={e => {
                    e.preventDefault()
                    const value = e.target.activities.value.trim()
                    if (value) {
                        onActivityChange(id, value)
                        e.target.activities.value = ''
                    }
                }}>
                    <label htmlFor={`activity-${id}`}>Activity</label>
                    <input type="text" name="activities" id={`activity-${id}`} />
                </form>
            </div>

            <button onClick={() => setShowCondition(!showCondition)}>Show/Hide</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}
