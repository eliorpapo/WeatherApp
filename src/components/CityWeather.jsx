import { CurrentDay } from './CurrentDay'
import { CurrentDayDescription } from './CurrentDayDescription'
import { UpcomingDaysForecast } from './UpcomingDaysForecast'

export const CityWeather = () => {
  return (
    <div className='city-container'>
      <div className='city-left-col card'>
        <CurrentDay />
      </div>
      <div className='city-right-col'>
        <CurrentDayDescription />
        <UpcomingDaysForecast />
      </div>
    </div>
  )
}
