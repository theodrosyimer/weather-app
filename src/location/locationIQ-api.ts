import type { LocationIQReverseResponse, LocationIQForwardResponse } from "./locationIQ.js"

type LocationIQQuery = { lat?: number, lon?: number, query?: string }

export async function getCityFromCoordinates({ lat, lon }: LocationIQQuery) {
  let data = await fetch(`https://eu1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATION_API_KEY}&lat=${lat ?? 0}&lon=${lon ?? 0}&format=json`)

  let response: LocationIQReverseResponse = await data.json()

  return response
}

export async function getCitiesFromQuery({ query }: LocationIQQuery) {
  let response = await fetch(`https://eu1.locationiq.com/v1/search?key=${import.meta.env.VITE_LOCATION_API_KEY}&format=json&q=${query ?? 'paris'}`)

  const cities: LocationIQForwardResponse = await response.json()

  return cities
}

// export async function getCitiesDetailsFromResults(cities) {
//   const citiesDetails = await Promise.all(cities.map(async city => {
//     console.log(city)
//     let r = await getCityFromCoordinates({ lat: city.lat, lon: city.lon })
//     return r
//   }))
//   console.log(citiesDetails)
//   return citiesDetails

// }
