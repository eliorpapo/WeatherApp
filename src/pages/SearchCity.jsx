import { SearchBar } from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { setCity } from '../store/actions/weatherActions'
import { Suspense, useEffect, lazy } from 'react'
import Loader from '../components/Loader'

const CityWeather = lazy(() => import('../components/CityWeather'))

export const SearchCity = () => {
  const { selectedCity } = useSelector((state) => state.weatherModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCity(selectedCity))
  }, [])

  const setChosenCity = (val) => {
    dispatch(setCity(val))
  }

  if (!selectedCity) return <div>Loading...</div>
  return (
    <div className='search-city-page page'>
      <h1 className='page-header'>Looking For Somewhere?</h1>
      <Suspense fallback={<Loader />}>
        <SearchBar setCity={setChosenCity} />
        <CityWeather city={selectedCity} />
      </Suspense>
    </div>
  )
}
