import { CurrentDayDescriptionItem } from './CurrentDayDescriptionItem'

export const CurrentDayDescription = ({
  forecast = [
    { name: 'PREC', value: 75, unit: '%' },
    { name: 'HIM', value: 72, unit: '%' },
    { name: 'WIND', value: 6, unit: 'km/h' },
    { name: 'Temwp', value: 17, unit: 'c' },
    { name: 'WINsD', value: 6, unit: 'km/h' },
    { name: 'Temp', value: 17, unit: 'c' },
  ],
}) => {
  return (
    <div className='current-day-description'>
      {forecast.map((item) => (
        <CurrentDayDescriptionItem {...item} key={item.name} />
      ))}
    </div>
  )
}
