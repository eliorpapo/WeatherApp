import axios from 'axios'
import { getDateFromTimeStamp } from './utilService'

// const ACCUWEATHER_APIKEY = '0IgI2QvEABm0S8V9BbsV7d7ZnQ52FW3E'
// const ACCUWEATHER_APIKEY = 'tusvZaqpQhQRhAuEXlaRMqMMkcJIQAAU'
// const ACCUWEATHER_APIKEY = 'rO2nkWz2dOqubxGNnDneAg0WtKGS2Ypn'
// const ACCUWEATHER_APIKEY = 'AeG000iUcMK0QpCzzJtD9v287MU0vZx3'
const ACCUWEATHER_APIKEY = '3eTKU7usATbtnxhRJzCk7tkGKANKpOT1'

async function getCities() {
  const { data } = await axios
    .get(`https://restcountries.com/v3.1/all`)
    .catch((err) => {
      console.log('err', err)
      throw err
    })
  const cities = data.map((country) => {
    if (country.capital) return (country = country.capital[0])
  })

  return cities
}

const language = 'en-us'

export const apiService = {
  autoComplete,
  currentWeather,
  getForecast,
  locateCity,
  getCities,
}

async function locateCity() {
  let position = await _getLongAndLat().catch((err) => {
    console.log('err', err)
    throw err
  })
  if (!position) {
    const currLocation = { name: 'Tel Aviv', countryId: 'IL', key: '215854' } //Tel Aviv by default
    return currLocation
  }
  const pos = {
    lat: '' + position.coords.latitude,
    lng: '' + position.coords.longitude,
  }
  const currLocation = await _getCityFromPos(pos).catch((err) => {
    console.log('err', err)
    throw err
  })
  return currLocation
}

async function autoComplete(str) {
  var cities = []
  const { data } = await axios
    .get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_APIKEY}&q=${str}&language=${language}`
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

async function currentWeather(cityKey) {
  const { data } = await axios
    .get(
      `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${ACCUWEATHER_APIKEY}&language=${language}&details=true`
    )
    .catch((err) => {
      console.log('err', err)
      throw err
    })
  const currWeather = _createCurrWeather(data[0])
  return currWeather
}

async function getForecast(cityKey, isMetric = true) {
  const { data } = await axios
    .get(
      `https://dataservice.accuweather.com//forecasts/v1/daily/5day/${cityKey}?apikey=${ACCUWEATHER_APIKEY}&language=${language}&details=false&metric=${isMetric}`
    )
    .catch((err) => {
      console.log('err', err)
      throw err
    })
  const forecast = _createForecast(data.DailyForecasts)
  return forecast
}

async function _getCityFromPos(pos) {
  const { data } = await axios
    .get(
      `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ACCUWEATHER_APIKEY}&q=${pos.lat},${pos.lng}&language=${language}&details=false&toplevel=false`
    )
    .catch((err) => {
      throw err
    })
  const currLocation = {
    name: data.EnglishName,
    key: data.Key,
  }
  return currLocation
}

function _createForecast(data) {
  const forecasts = []
  data.forEach((forecast) => {
    var dateStr = new Date(forecast.Date)
    dateStr = dateStr.toDateString()
    dateStr = dateStr.slice(0, 3) // only the day

    var tempFormat =
      (forecast.Temperature.Minimum.Value +
        forecast.Temperature.Maximum.Value) /
      2
    tempFormat = tempFormat.toFixed(0)

    const currForecast = {
      date: dateStr,
      temp: tempFormat,
      weatherIcon: forecast.Day.Icon,
    }
    forecasts.push(currForecast)
  })
  return forecasts
}

function _createCurrWeather(data) {
  const currWeather = {
    minTemp: data.TemperatureSummary.Past24HourRange.Minimum,
    maxTemp: data.TemperatureSummary.Past24HourRange.Maximum,
    currTemp: data.Temperature,
    weatherConditions: data.WeatherText,
    weatherIcon: data.WeatherIcon,
    date: getDateFromTimeStamp(data.EpochTime),
    wind: data.Wind.Speed.Metric,
    airPressure: data.Pressure,
    humidity: data.RelativeHumidity,
    visibility: data.Visibility,
  }
  return currWeather
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

function _getLongAndLat() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  )
}
