import { CityWeather } from '../components/CityWeather'
import { useEffect, useState } from 'react'
import { apiService } from '../services/apiService'
import { getRandomInt } from '../services/utilService'
import { toast } from 'react-toastify'
import InfiniteScroll from 'react-infinite-scroll-component'

export const RandomCities = () => {
  const [randomCities, setRandomCities] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities()
  }, [])

  useEffect(() => {
    const starter = async () => {
      if (cities.length === 250) {
        const city1 = await getCapitalWeather()
        const city2 = await getCapitalWeather()
        const city3 = await getCapitalWeather()
        setRandomCities([city1, city2, city3])
      }
    }
    starter()
  }, [cities])

  const getCities = async () => {
    const cities = await apiService
      .getCities()
      .catch((err) => toast.error(err.message))
    setCities(cities)
  }

  const getCapitalWeather = async () => {
    const num = getRandomInt(cities.length)
    const cityObj = await apiService
      .autoComplete(cities[num])
      .catch((err) => toast.error(err.message))
    const citiesArr = [...cities]
    citiesArr.splice(num, 1)
    setCities(citiesArr)
    if (cityObj.length === 0) {
      getCapitalWeather()
      return
    }
    if (randomCities.length === 0) return cityObj[0]
    else setRandomCities([...randomCities, cityObj[0]])
  }

  if (!randomCities) return <div>Loading...</div>

  return (
    <div className='random-cities page'>
      <h1 className='page-header'>Random Capitals Around The World</h1>
      <div className='random-cities-container'>
        <InfiniteScroll
          dataLength={cities.length} //This is important field to render the next data
          next={getCapitalWeather}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {randomCities.map((city) => (
            <CityWeather city={city} key={city.name} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}
