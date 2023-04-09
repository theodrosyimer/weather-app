export function SavedTown({ location, current, forecast: { forecastday } }, { currentLocation }) {

  return `
      <div data-lat="${location.lat}" data-lon="${location.lon}"  class="city-card-grid">
          <div class="flex">
            <div class="location-grid">
              <div class="city">${currentLocation ? 'My Location' : location.name}</div>
              <div class="time">${location.localtime.split(' ')[1]}</div>
            </div>
            <div class="current-temperature">${Math.floor(current.temp_c)}°</div>
          </div>

          <div class="flex">
            <div class="short-description">${current.condition.text}</div>
            <div class="highest-lowest-temperatures">
              H: <span class="highest-temp">${Math.floor(forecastday[0].day.maxtemp_c)}°</span>
              L: <span class="lowest-temp">${Math.floor(forecastday[0].day.mintemp_c)}°</span>
            </div>
          </div>
        </div>
  `
}
