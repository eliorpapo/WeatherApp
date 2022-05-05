import { CityWeather } from '../components/CityWeather'

export const PopularCities = () => {
  const cityObjs = [
    { name: 'Berlin', key: 178087 },
    { name: 'Tel Aviv', key: 215854 },
    { name: 'Beijing', key: 101924 },
    { name: 'New York', key: '349727' },
  ]

  return (
    <div className='popular-cities'>
      <h1 className='page-header'>Popular Locations</h1>
      <div className='cities-container'>
        {cityObjs.map((city) => (
          <CityWeather city={city} />
        ))}
      </div>
    </div>
  )
}
