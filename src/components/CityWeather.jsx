import { CurrentDay } from './CurrentDay'
import { CurrentDayDescription } from './CurrentDayDescription'
import { UpcomingDaysForecast } from './UpcomingDaysForecast'

export const CityWeather = ({ forecasts, currWeather, cityName }) => {
  return (
    <div className='city-container'>
      <div className='city-left-col card'>
        <CurrentDay location={cityName} currWeather={currWeather} />
      </div>
      <div className='city-right-col'>
        <CurrentDayDescription currWeather={currWeather} />
        <UpcomingDaysForecast forecasts={forecasts} />
      </div>
    </div>
  )
}
