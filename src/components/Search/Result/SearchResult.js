export function SearchResult({ cityInfos, lat, lon, name }) {
  return (
    `
      <div data-name="${name}" data-lat="${lat}" data-lon="${lon}" class="search-result">${cityInfos}</div>
    `
  )
}
