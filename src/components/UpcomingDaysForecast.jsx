import { UpcomingDaysForecastItem } from './UpcomingDaysForecastItem'

export const UpcomingDaysForecast = ({
  days = [
    { weekday: 'mon', temperature: 17, imgUrl: 1 },
    { weekday: 'the', temperature: 17, imgUrl: 2 },
    { weekday: 'wed', temperature: 17, imgUrl: 13 },
    { weekday: 'we2d', temperature: 17, imgUrl: 13 },
    { weekday: 'wewd', temperature: 17, imgUrl: 13 },
  ],
}) => {
  return (
    <div className='upcoming-days-forecast'>
      {days.map((day) => (
        <UpcomingDaysForecastItem {...day} key={day.weekday} />
      ))}
    </div>
  )
}
