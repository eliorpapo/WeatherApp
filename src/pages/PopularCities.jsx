import { CityWeather } from '../components/CityWeather'
import { popularCitiesNames } from '../data'

export const PopularCities = () => {
  return (
    <div className='popular-cities page'>
      <h1 className='page-header'>Popular Locations</h1>
      <div className='cities-container'>
        {popularCitiesNames.map((city) => (
          <CityWeather city={city} key={city.name} />
        ))}
      </div>
    </div>
  )
}
