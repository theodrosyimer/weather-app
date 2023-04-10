import type { ForecastWeatherResponse } from "./forecast-weather.js"
import type { IPLookupWeatherResponse } from "./ip-lookup-weather.js"
import type { RealTimeWeatherResponse } from "./real-time-weather.js"
import type { SearchAutocompleteWeatherResponse } from "./search-autocomplete-weather.js"
import type { TimeZoneWeatherResponse } from "./time-zone-weather.js"

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_WEATHER_API_KEY}`,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
} as const

export type WeatherQuery = {
  lat?: number,
  lon?: number,
  name?: string,
  days?: number,
  ip?: number
}

export async function getRealtimeWeatherFromUserQuery({ lat, lon, name }: WeatherQuery) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response as RealTimeWeatherResponse)
    .catch(err => console.error(err))

  return weatherData
}

export async function getForecastWeatherFromUserQuery({ lat, lon, name, days = 1 }: WeatherQuery) {
  const userInput = lat && lon ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${userInput}&days=${days}`, options)
    .then(response => response.json())
    .then(response => response as ForecastWeatherResponse)
    .catch(err => console.error(err))

  return weatherData
}

export async function getSearchAutocompleteWeatherFromUserQuery({ lat, lon, name }: WeatherQuery) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response as SearchAutocompleteWeatherResponse)
    .catch(err => console.error(err))

  return weatherData
}

export async function getTimeZoneWeatherFromUserQuery({ lat, lon, name }: WeatherQuery) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response as TimeZoneWeatherResponse)
    .catch(err => console.error(err))

  return weatherData
}

export async function getIpLookupFromUserQuery({ ip }: WeatherQuery) {
  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/ip.json?q=${ip}`, options)
    .then(response => response.json())
    .then(response => response as IPLookupWeatherResponse)
    .catch(err => console.error(err))

  return weatherData
}

