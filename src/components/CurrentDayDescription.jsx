export const CurrentDayDescription = ({ currWeather }) => {
  if (!currWeather) return <div>Loading..</div>
  return (
    <div className='current-day-description'>
      <div className='current-day-description-item'>
        <p className='bold uppercase'>Wind</p>
        <p>
          {currWeather.wind.Value} {currWeather.wind.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Visibility</p>
        <p>
          {currWeather.visibility.Metric.Value}{' '}
          {currWeather.visibility.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Humidity</p>
        <p>{currWeather.wind.Value} %</p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Air Pressure</p>
        <p>
          {currWeather.airPressure.Metric.Value}{' '}
          {currWeather.airPressure.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Max temp</p>
        <p>
          {currWeather.maxTemp.Metric.Value} &deg;
          {currWeather.maxTemp.Metric.Unit}
        </p>
      </div>

      <div className='current-day-description-item'>
        <p className='bold uppercase'>Min temp</p>
        <p>
          {currWeather.minTemp.Metric.Value} &deg;
          {currWeather.minTemp.Metric.Unit}
        </p>
      </div>
    </div>
  )
}
