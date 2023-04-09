const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_WEATHER_API_KEY}`,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

export async function getRealtimeWeatherFromUserQuery({ lat, lon, name }) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))

  return weatherData
}

export async function getForecastWeatherFromUserQuery({ lat, lon, name, days = 1 }) {
  const userInput = lat && lon ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${userInput}&days=${days}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))

  return weatherData
}

export async function getSearchAutocompleteWeatherFromUserQuery({ lat, lon, name }) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))

  return weatherData
}

export async function getTimeZoneWeatherFromUserQuery({ lat, lon, name }) {
  const userInput = name == null ? `${lat},${lon}` : name

  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${userInput}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))

  return weatherData
}

export async function getIpLookupFromUserQuery({ ip }) {
  const weatherData = fetch(`https://weatherapi-com.p.rapidapi.com/ip.json?q=${ip}`, options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err))

  return weatherData
}

