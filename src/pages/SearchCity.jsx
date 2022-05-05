import { CityWeather } from '../components/CityWeather'
import { SearchBar } from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { setCity } from '../store/actions/weatherActions'
import { useEffect, useState } from 'react'
import { apiService } from '../services/apiService'
import { demoDataCurrWeather, forecastDemo } from '../data'

export const SearchCity = () => {
  const [currWeather, setCurrWeather] = useState()
  const [forecasts, setForecasts] = useState()
  const { selectedCity } = useSelector((state) => state.weatherModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCity(selectedCity))
  }, [])

  useEffect(() => {
    const getWeatherData = async () => {
      if (selectedCity) {
        await Promise.all([getCurrWeather(), getForecast()])
      }
    }
    getWeatherData()
  }, [selectedCity])

  const getCurrWeather = async () => {
    // const currWeather = await apiService
    //   .currentWeather(selectedCity.key)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    const currWeather = demoDataCurrWeather
    setCurrWeather(currWeather)
  }

  const getForecast = async () => {
    // const forecasts = await apiService
    //   .getForecast(selectedCity.key)
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    const forecasts = forecastDemo
    setForecasts(forecasts)
  }

  const setChosenCity = (val) => {
    dispatch(setCity(val))
  }

  return (
    <div className='search-city page'>
      <h1 className='page-header'>Looking For Somewhere?</h1>
      <SearchBar setCity={setChosenCity} />
      {forecasts && (
        <CityWeather
          cityName={selectedCity.name}
          forecasts={forecasts}
          currWeather={currWeather}
        />
      )}
    </div>
  )
}
