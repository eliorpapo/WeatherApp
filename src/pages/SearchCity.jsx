import { CityWeather } from '../components/CityWeather'
import { SearchBar } from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { setCity } from '../store/actions/weatherActions'
import { useEffect, useState } from 'react'
import { apiService } from '../services/apiService'

export const SearchCity = () => {
  const [currWeather, setCurrWeather] = useState()
  const [forecasts, setForecasts] = useState()
  const { selectedCity } = useSelector((state) => state.weatherModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCity(selectedCity))
  }, [])

  useEffect(() => {
    if (selectedCity) {
      getCurrWeather()
      getForecast()
    }
  }, [selectedCity])

  const getCurrWeather = async () => {
    const currWeather = await apiService
      .currentWeather(selectedCity.key)
      .catch((err) => {
        console.log(err.message)
      })
    setCurrWeather(currWeather)
  }

  const getForecast = async () => {
    const forecasts = await apiService
      .getForecast(selectedCity.key)
      .catch((err) => {
        console.log(err.message)
      })
    setForecasts(forecasts)
  }

  const setChosenCity = (val) => {
    dispatch(setCity(val))
  }
  return (
    <div className='search-city page'>
      <h1 className='page-header'>Looking For Somewhere?</h1>
      <SearchBar setCity={setChosenCity} />
      <CityWeather forecasts={forecasts} currWeather={currWeather} />
    </div>
  )
}
