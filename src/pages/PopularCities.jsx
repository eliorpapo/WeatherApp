import { lazy, Suspense } from 'react'
import { popularCitiesNames } from '../data'
import Loader from '../components/Loader'
const CityWeather = lazy(() => import('../components/CityWeather'))

export const PopularCities = () => {
  return (
    <div className='popular-cities page'>
      <h1 className='page-header'>Popular Locations</h1>
      <Suspense fallback={<Loader />}>
        <div className='cities-container'>
          {popularCitiesNames.map((city) => (
            <CityWeather city={city} key={city.name} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}
