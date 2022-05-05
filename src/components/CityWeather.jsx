import { CurrentDay } from './CurrentDay'
import { CurrentDayDescription } from './CurrentDayDescription'
import { UpcomingDaysForecast } from './UpcomingDaysForecast'
import { useSelector } from 'react-redux'

export const CityWeather = ({ forecasts, currWeather }) => {
  const { selectedCity } = useSelector((state) => state.weatherModule)

  if (!selectedCity) return <div>Loading...</div>

  return (
    <div className='city-container'>
      <div className='city-left-col card'>
        <CurrentDay location={selectedCity.name} currWeather={currWeather} />
      </div>
      <div className='city-right-col'>
        <CurrentDayDescription currWeather={currWeather} />
        <UpcomingDaysForecast forecasts={forecasts} />
      </div>
    </div>
  )
}
