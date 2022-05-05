import { CityWeather } from '../components/CityWeather'

export const FavoriteCities = () => {
  return (
    <div className='page favorite-cities'>
      <h1 className='page-header'>Your Favorites</h1>
      <CityWeather />
    </div>
  )
}
