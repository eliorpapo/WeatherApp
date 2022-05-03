import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

export const CurrentDay = ({
  weekday = 'Sunday',
  date = 'May 16th',
  location = 'Berlin',
  temperature = 15,
  weatherIcon = 20,
  weatherDescription = 'Light Rain',
}) => {
  const imgSrc = require(`../assets/images/weather-icons/${weatherIcon}.png`)

  return (
    <div className='current-day'>
      <div className='current-day-img' />
      <div className='current-day-gradient' />
      <div className='current-day-info'>
        <div className='current-day-info-section'>
          <h2 className='bold'>{weekday}</h2>
          <p>{date}</p>
          <p className='flex align-center'>
            {location}
            <FmdGoodOutlinedIcon style={{ height: '19px' }} />
          </p>
        </div>
        <div className='self-center'>
          <img src={imgSrc} alt='' />
        </div>
        <div className='current-day-info-section'>
          <h2 className='bold'>{temperature}°C</h2>
          <h5>{weatherDescription}</h5>
        </div>
      </div>
    </div>
  )
}
