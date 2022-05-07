import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import { useSelector } from 'react-redux'

export const CurrentDay = ({ location, currWeather }) => {
  const { isMetric } = useSelector((state) => state.weatherModule)

  const imgSrc = require(`../assets/images/weather-icons/${currWeather.weatherIcon}.png`)

  const scaleTxt = isMetric ? 'C' : 'F'
  const scaleTitle = isMetric ? 'Metric' : 'Imperial'

  return (
    <div className='current-day'>
      <div className='current-day-img' />
      <div className='current-day-gradient' />
      <div className='current-day-info'>
        <div className='current-day-info-section'>
          <h2 className='bold'>{currWeather.date.day}</h2>
          <p>{currWeather.date.date}</p>
          <p className='flex align-center'>
            {location}
            <FmdGoodOutlinedIcon style={{ height: '19px' }} />
          </p>
        </div>
        <div className='self-center'>
          <img src={imgSrc} alt='' />
        </div>
        <div className='current-day-info-section'>
          <h2 className='bold'>
            {currWeather.currTemp[scaleTitle].Value}°{scaleTxt}
          </h2>
          <h5>{currWeather.weatherConditions}</h5>
        </div>
      </div>
    </div>
  )
}
