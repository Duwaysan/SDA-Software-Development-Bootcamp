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
  const [weatherForecasts,setWeatherForcasts] = useState([...weatherForecastsArr])
  
  function handleDelete(idx) {
    const arr=[...weatherForecasts]
    let filteredWeatherForcasts = arr.filter((el, wfIdx) => {
      return wfIdx !== idx;
    })
    setWeatherForcasts(filteredWeatherForcasts)
    console.log(filteredWeatherForcasts)
    // setWeatherForcasts(arr)
  }
  function handleActivityChange(id,value){
    setWeatherForcasts(elem =>
      elem.map((item,idx) => {
        id === idx ? {...item,activities:[...item.activities,value]}: item
        console.log(item)
      })
    )
    
  } 
  
  return (
      <>
    <h1>Local Weather</h1>
    <form>

    <label htmlFor="activity">Activitiy </label>
    {/* <input id="activity" name="activity" type="text" value={weatherItem.activities} onChange={handleActivitiyAdd} /> */}
    </form>
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
