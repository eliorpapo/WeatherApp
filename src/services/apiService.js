import axios from 'axios'
import { makeId } from './utilService'

// const APIKEY = '0IgI2QvEABm0S8V9BbsV7d7ZnQ52FW3E';
const APIKEY = 'tusvZaqpQhQRhAuEXlaRMqMMkcJIQAAU'
// const APIKEY = 'rO2nkWz2dOqubxGNnDneAg0WtKGS2Ypn'
// const APIKEY = 'AeG000iUcMK0QpCzzJtD9v287MU0vZx3';

const language = 'en-us'

export const apiService = {
  autoComplete,
}

async function autoComplete(str) {
  var cities = []
  const { data } = await axios
    .get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${str}&language=${language}`
    )
    .catch((err) => {
      console.log('err', err)
      throw err
    })
  data.forEach((city) => {
    const isInclude = _isInclude(cities, city.LocalizedName) //checking because the api might give the same city twice. try t for example
    if (!isInclude) {
      const cityObj = _createCityObj(city)
      cities.push(cityObj)
    }
  })
  return cities
}

function _createCityObj(city) {
  const cityObj = {
    name: city.LocalizedName,
    countryId: city.Country.ID,
    key: city.Key,
  }
  return cityObj
}

function _isInclude(cities, cityName) {
  for (var i = 0; i < cities.length; i++) {
    if (cities[i].name === cityName) return true
  }
  return false
}
