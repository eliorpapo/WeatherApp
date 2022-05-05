export const CurrentDayDescription = ({ currWeather }) => {
  const { wind, visibility, humidity, airPressure, maxTemp, minTemp } =
    currWeather
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
          {visibility.Metric.Value} {visibility.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Humidity</p>
        <p>{humidity} %</p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Air Pressure</p>
        <p>
          {airPressure.Metric.Value} {airPressure.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Max temp</p>
        <p>
          {maxTemp.Metric.Value} &deg;
          {maxTemp.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Min temp</p>
        <p>
          {minTemp.Metric.Value} &deg;
          {minTemp.Metric.Unit}
        </p>
      </div>
    </div>
  )
}
