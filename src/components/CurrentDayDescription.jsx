import { useSelector } from 'react-redux'
export const CurrentDayDescription = ({ currWeather }) => {
  const { wind, visibility, humidity, airPressure, maxTemp, minTemp } =
    currWeather

  const { isMetric } = useSelector((state) => state.weatherModule)
  const scaleTitle = isMetric ? 'Metric' : 'Imperial'
  return (
    <div className='current-day-description'>
      <div className='current-day-description-item'>
        <p className='bold uppercase'>Wind</p>
        <p>
          {wind.Value} {wind.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Visibility</p>
        <p>
          {visibility[scaleTitle].Value} {visibility[scaleTitle].Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Humidity</p>
        <p>{humidity} %</p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Air Pressure</p>
        <p>
          {airPressure[scaleTitle].Value} {airPressure[scaleTitle].Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Max temp</p>
        <p>
          {maxTemp[scaleTitle].Value} &deg;
          {maxTemp[scaleTitle].Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Min temp</p>
        <p>
          {minTemp[scaleTitle].Value} &deg;
          {minTemp[scaleTitle].Unit}
        </p>
      </div>
    </div>
  )
}
