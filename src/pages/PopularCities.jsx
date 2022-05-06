import { CityWeather } from '../components/CityWeather'
import { useEffect } from 'react'
import { popularCitiesNames } from '../data'

export const PopularCities = () => {
  useEffect(() => {
    const getPopularCities = async () => {}
    getPopularCities()
  }, [])
  if (!popularCitiesNames) return <div>Loading...</div>
  return (
    <div className='popular-cities'>
      <h1 className='page-header'>Popular Locations</h1>
      <div className='cities-container'>
        {popularCitiesNames.map((city) => (
          <CityWeather city={city} key={city.name} />
        ))}
      </div>
    </div>
  )
}
