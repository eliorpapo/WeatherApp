import { UpcomingDaysForecastItem } from './UpcomingDaysForecastItem'

export const UpcomingDaysForecast = ({ forecasts }) => {
  if (!forecasts) return <div>Loading</div>
  return (
    <div className='upcoming-days-forecast'>
      {forecasts.map((forecast) => (
        <UpcomingDaysForecastItem {...forecast} key={forecast.date} />
      ))}
    </div>
  )
}
