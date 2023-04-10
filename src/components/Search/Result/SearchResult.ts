type SearchResultParameters = {
  cityInfos: string,
  lat: string,
  lon: string,
  name: string
}


export function SearchResult({ cityInfos, lat, lon, name }: SearchResultParameters) {
  return (
    `
      <div data-name="${name}" data-lat="${lat}" data-lon="${lon}" class="search-result">${cityInfos}</div>
    `
  )
}
