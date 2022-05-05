import { CurrentDay } from './CurrentDay'
import { CurrentDayDescription } from './CurrentDayDescription'
import { UpcomingDaysForecast } from './UpcomingDaysForecast'
import { useEffect, useState } from 'react'
import { demoDataCurrWeather, forecastDemo } from '../data'

export const CityWeather = ({ city }) => {
  const [currWeather, setCurrWeather] = useState()
  const [forecasts, setForecasts] = useState()

  useEffect(() => {
    const getWeatherData = async () => {
      await Promise.all([getCurrWeather(), getForecast()])
    }
    getWeatherData()
  }, [])

  const getCurrWeather = async () => {
    // const currWeather = await apiService
    //   .currentWeather(city.key)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    const currWeather = demoDataCurrWeather
    setCurrWeather(currWeather)
  }

  const getForecast = async () => {
    // const forecasts = await apiService
    //   .getForecast(city.key)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    const forecasts = forecastDemo
    setForecasts(forecasts)
  }

  if (!currWeather) return <div>Loading...</div>
  return (
    <div className='city-container'>
      <div className='city-left-col card'>
        <CurrentDay location={city.name} currWeather={currWeather} />
      </div>
      <div className='city-right-col'>
        <CurrentDayDescription currWeather={currWeather} />
        <UpcomingDaysForecast forecasts={forecasts} />
      </div>
    </div>
  )
}
