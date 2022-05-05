export const UpcomingDaysForecastItem = ({ date, temp, weatherIcon }) => {
  const imgSrc = require(`../assets/images/weather-icons/${weatherIcon}.png`)
  return (
    <div className='upcoming-days-forecast-item'>
      <img width='45' src={imgSrc} alt='' />
      <p className='capitalize'>{date}</p>
      <p className='bold'>{temp}&deg;</p>
    </div>
  )
}
