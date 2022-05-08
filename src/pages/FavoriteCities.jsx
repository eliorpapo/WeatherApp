import { useEffect, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../store/actions/favoriteActions'
import Loader from '../components/Loader'
const CityWeather = lazy(() => import('../components/CityWeather'))

export const FavoriteCities = () => {
  const { favorites } = useSelector((state) => state.favoriteModule)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavorites())
  }, [])

  return (
    <div className='favorite-cities page'>
      <h1 className='page-header'>Your Favorites</h1>
      <Suspense fallback={<Loader />}>
        <div className='cities-container'>
          {favorites.map((city) => (
            <CityWeather city={city} key={city.name} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}
