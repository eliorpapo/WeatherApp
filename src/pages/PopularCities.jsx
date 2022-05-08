// import { CityWeather } from '../components/CityWeather'
import { lazy, Suspense } from 'react'
import { popularCitiesNames } from '../data'
const CityWeather = lazy(() => import('../components/CityWeather'))

export const PopularCities = () => {
  return (
    <div className='popular-cities page'>
      <h1 className='page-header'>Popular Locations</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='cities-container'>
          {popularCitiesNames.map((city) => (
            <CityWeather city={city} key={city.name} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}
