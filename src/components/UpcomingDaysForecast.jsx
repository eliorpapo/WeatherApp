import { UpcomingDaysForecastItem } from './UpcomingDaysForecastItem'

export const UpcomingDaysForecast = ({ forecasts }) => {
  return (
    <div className='upcoming-days-forecast'>
      {forecasts.map((forecast) => (
        <UpcomingDaysForecastItem {...forecast} key={forecast.date} />
      ))}
    </div>
  )
}
