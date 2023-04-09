import { localStorageStrategy } from "../../../store/local-storage.js"
import { getForecastWeatherFromUserQuery } from "../../../weather/weatherapi.js"
import { SavedTown } from "./SavedTown.js"

export async function SavedTowns() {
  const storedTowns = localStorageStrategy.getItem('savedTowns')

  let savedTownsHTML = ''

  await Promise.all(storedTowns.map(async city => {
    const { name } = city

    let data = await getForecastWeatherFromUserQuery({ name })

    if (!data || data == null) return

    savedTownsHTML += SavedTown(data, city)
  }))

  return savedTownsHTML
}
