import { CityWeather } from '../components/CityWeather'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadFavorites } from '../store/actions/favoriteActions'

export const FavoriteCities = () => {
  const { favorites } = useSelector((state) => state.favoriteModule)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavorites())
  }, [])
  if (!favorites) return <div>Loading...</div>
  return (
    <div className='favorite-cities page'>
      <h1 className='page-header'>Your Favorites</h1>
      <div className='cities-container'>
        {favorites.map((city) => (
          <CityWeather city={city} key={city.name} />
        ))}
      </div>
    </div>
  )
}
