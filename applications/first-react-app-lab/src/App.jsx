// App.jsx
import './App.css'
import { useState } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'

const weatherForecastsArr = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  }
]

export default function App() {
  const [forecasts, setForecasts] = useState(
    weatherForecastsArr.map(f => ({ ...f, activities: f.activities || [] }))
  )

  function handleDelete(idx) {
    setForecasts(prev => prev.filter((_, i) => i !== idx))
  }

  function handleActivityChange(id, value) {
    if (!value) return
    setForecasts(prev =>
      prev.map((item, idx) =>
        idx === id
          ? { ...item, activities: [ ...(item.activities || []), value ] }
          : item
      )
    )
  }

  function addActivityByDay(day, value) {
    if (!value) return
    setForecasts(prev =>
      prev.map(item =>
        item.day === day
          ? { ...item, activities: [ ...(item.activities || []), value ] }
          : item
      )
    )
  }

  return (
    <>
      <h1>Local Weather</h1>
      <nav><Link to="/">All Days</Link></nav>

      <Routes>
        <Route path="/" element={<section> {forecasts.map((weatherItem, idx) => (
                <div key={weatherItem.day} style={{ marginBottom: 16 }}>
                  <WeatherForecast id={idx} weatherItem={weatherItem} handleDelete={handleDelete} onActivityChange={handleActivityChange} />
                  <div style={{ marginTop: 8 }}>
                    <Link to={`/forecast/${weatherItem.day}`}>Details</Link>
                  </div>
                </div>
              ))}
            </section>
          }
        />

        <Route
          path="/forecast/:day"
          element={<ForecastDetail forecasts={forecasts} onAdd={addActivityByDay} />}/>

        <Route path="*" element={<p>Page not found</p>} />
    </Routes>
    </>
  )
}

function ForecastDetail({ forecasts, onAdd }) {
  const { day } = useParams()
  const forecast = forecasts.find(f => f.day === day)
  const [text, setText] = useState('')

  if (!forecast) {
    return (
      <div>
        <p>Day not found: {day}</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  function submit(e) {
    e.preventDefault()
    const v = text.trim()
    if (v) {
      onAdd(day, v)
      setText('')
    }
  }

  const list = forecast.activities || [] // safe fallback

  return (
    <div style={{ border: '1px solid #ddd', padding: 12 }}>
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt} />
      <p><strong>Conditions:</strong> {forecast.conditions}</p>
      <p><strong>Time:</strong> {forecast.time}</p>

      <h3>Activities</h3>
      {list.length ? (
        <ul>{list.map((a, i) => <li key={i}>{a}</li>)}</ul>
      ) : (
        <p><em>No activities yet</em></p>
      )}

      <form onSubmit={submit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add activity"
        />
        <button type="submit">Add</button>
      </form>

      <p style={{ marginTop: 12 }}><Link to="/">← Back</Link></p>
    </div>
  )
}
