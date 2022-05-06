import { CurrentDay } from './CurrentDay'
import { CurrentDayDescription } from './CurrentDayDescription'
import { UpcomingDaysForecast } from './UpcomingDaysForecast'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { demoDataCurrWeather, forecastDemo } from '../data'
import { apiService } from '../services/apiService'
import { favoriteService } from '../services/favoriteService'
import { removeFavorite, addFavorite } from '../store/actions/favoriteActions'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import Tooltip from '@mui/material/Tooltip'

export const CityWeather = ({ city }) => {
  const [currWeather, setCurrWeather] = useState()
  const [forecasts, setForecasts] = useState()
  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const getWeatherData = async () => {
      Promise.all([getCurrWeather(), getForecast()]).then(isCityFavorite())
    }
    getWeatherData()
  }, [])

  const getCurrWeather = async () => {
    // const currWeather = await apiService
    //   .currentWeather(city.key)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    const currWeather = demoDataCurrWeather
    setCurrWeather(currWeather)
  }

  const getForecast = async () => {
    // const forecasts = await apiService.getForecast(city.key).catch((err) => {
    //   console.log(err.message)
    // })

    const forecasts = forecastDemo
    setForecasts(forecasts)
  }

  const isCityFavorite = async () => {
    const iSCity = await favoriteService.isFavorite(city.key)
    if (iSCity) setIsFavorite(true)
    else setIsFavorite(false)
  }

  const toggleFavorite = () => {
    if (isFavorite) removeFromFavorites()
    else addToFavorites()
  }

  const addToFavorites = () => {
    setIsFavorite(true)
    dispatch(addFavorite(city))
  }

  const removeFromFavorites = () => {
    setIsFavorite(false)
    dispatch(removeFavorite(city.key))
  }

  if (!currWeather || !forecasts) return <div>Loading...</div>
  return (
    <div className='city-container'>
      {isFavorite && (
        <Tooltip title='Add To Favorite'>
          <BookmarkIcon
            onClick={toggleFavorite}
            id='add-to-favorite-btn'
            style={{ color: 'yellow' }}
          />
        </Tooltip>
      )}
      {!isFavorite && (
        <Tooltip title='Remove From Favorite'>
          <BookmarkAddOutlinedIcon
            onClick={toggleFavorite}
            id='add-to-favorite-btn'
          />
        </Tooltip>
      )}

      <div className='city-left-col card'>
        <CurrentDay location={city.name} currWeather={currWeather} />
      </div>
      <div className='city-right-col'>
        <CurrentDayDescription currWeather={currWeather} />
        <UpcomingDaysForecast forecasts={forecasts} />
      </div>
    </div>
  )
}
