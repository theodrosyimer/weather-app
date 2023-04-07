import { SearchResult } from "./SearchResult.js"
import { /* getCitiesDetailsFromResults,  */getCitiesFromQuery } from "../user-location.js"

export async function SearchResults(query) {
  let searchResultsHTML = ''

  let cities = await getCitiesFromQuery({ query })
  console.log(cities)

  // let citiesDetails = await getCitiesDetailsFromResults(cities)
  // console.log(citiesDetails)

  cities.forEach(city => {
    searchResultsHTML += SearchResult(`${city.display_name.split(',').slice(0, 2).join()}, ${city.display_name.split(',').slice(-2).join()}`)
  })

  return searchResultsHTML
}
