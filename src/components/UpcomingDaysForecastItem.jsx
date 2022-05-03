export const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => {
  const imgSrc = require(`../assets/images/weather-icons/${imgUrl}.png`)
  return (
    <div className='upcoming-days-forecast-item'>
      <img width='45' src={imgSrc} alt='' />
      <p className='capitalize'>{weekday}</p>
      <p className='bold'>{temperature}&deg;</p>
    </div>
  )
}
