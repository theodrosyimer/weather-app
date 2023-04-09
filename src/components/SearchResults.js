import { SearchResult } from "./SearchResult.js"
import { /* getCitiesDetailsFromResults,  */getCitiesFromQuery } from "../location/geolocation.js"

export async function SearchResults(query) {
  let searchResultsHTML = ''

  let cities = await getCitiesFromQuery({ query })

  // let citiesDetails = await getCitiesDetailsFromResults(cities)
  // console.log(citiesDetails)

  cities.forEach(city => {
    const cityDetailsPartial = `${city.display_name.split(',').slice(0, 2).join()}, ${city.display_name.split(',').slice(-2).join()}`

    searchResultsHTML += SearchResult({
      cityInfos: cityDetailsPartial,
      lat: city.lat,
      lon: city.lon,
      name: city.display_name.split(',')[0]
    })
  })

  return searchResultsHTML
}
