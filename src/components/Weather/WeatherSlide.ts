import { getForecastWeatherFromUserQuery } from "../../weather/weatherapi.js"
import type { WeatherQuery } from "../../weather/weatherapi.js"

export async function WeatherSlide({ lat, lon }: WeatherQuery) {
  const weatherData = await getForecastWeatherFromUserQuery({ lat, lon })

  if (!weatherData) return

  return
}
