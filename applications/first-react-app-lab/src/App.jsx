import './App.css'
import { useState } from 'react';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { Route, Routes} from 'react-router'



const weatherForecastsArr = [
  { day: 'Mon', img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg', imgAlt: 'sun icon', conditions: 'sunny', time: 'Morning',activities: []},
  { day: 'Tue', img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg', imgAlt: 'moon icon', conditions: 'clear', time: 'Night',activities: []},
  { day: 'Wed', img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg', imgAlt: 'clouds with lightning icon', conditions: 'stormy', time: 'All Day',activities: []},
  { day: 'Thu', img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg', imgAlt: 'sun overcast by clouds icon', conditions: 'overcast', time: 'Evening',activities: []},
  { day: 'Fri', img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg', imgAlt: 'moon overcast by clouds icon', conditions: 'cloudy', time: 'Night',activities: []},
];

const App = () => {
  const [weatherForecasts,setWeatherForecasts] = useState([...weatherForecastsArr])
  const [activities,setActivities] = useState([])
  
  function handleDelete(idx) {
    const arr=[...weatherForecasts]
    let filteredWeatherForcasts = arr.filter((el, wfIdx) => {
      return wfIdx !== idx;
    })
    setWeatherForecasts(filteredWeatherForcasts)
  }
  function handleActivityChange(id, value) {
  if (!value) return
  setWeatherForecasts(wf =>
    wf.map((item, idx) => {
  if (idx === id) {
    setActivities([...item.activities,value])
    return { ...item, activities: [...item.activities, value] }
  } else {
    return item
  }
})
  )
}
  
  return (
      <>
    <h1>Local Weather</h1>
    <section>
        {
          weatherForecasts.map((weatherItem, indx) => (
            <WeatherForecast key={indx} id={indx} weatherItem={weatherItem}  handleDelete={handleDelete} onActivityChange={handleActivityChange} />
          ))
        }
        
    </section>
  </>
  )
}

export default App
