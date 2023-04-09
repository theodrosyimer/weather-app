export async function getCityFromCoordinates({ lat, lon }) {
  let data = await fetch(`https://eu1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATION_API_KEY}&lat=${lat}&lon=${lon}&format=json`)

  let { address, boundingbox, display_name, place_id } = await data.json()

  return { address, boundingbox, display_name, place_id }
}

export async function getCitiesFromQuery({ query }) {
  let response = await fetch(`https://eu1.locationiq.com/v1/search?key=${import.meta.env.VITE_LOCATION_API_KEY}&format=json&q=${query}`)

  const cities = await response.json()

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
