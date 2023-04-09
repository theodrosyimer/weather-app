import { SavedTowns } from "./components/Search/Saved/SavedTowns.js"
import { SearchResults } from "./components/Search/Result/SearchResults.js"
import { localStorageStrategy } from "./store/local-storage.js"
import { getLocation } from "./location/geolocation.js"

await getLocation()

const searchBtn = document.querySelector('[data-search-dropdown]')
const searchDropdown = document.querySelector('#search-dropdown')

const formElement = document.querySelector('#search-form')
const inputElement = document.querySelector('#search-input')

searchBtn.addEventListener('click', async (e) => {
  const outputElement = document.querySelector('#search-output')

  if (searchDropdown.classList.contains('show')) {
    searchDropdown.classList.remove('show')
    searchDropdown.style.display = 'none'

    // document.body.style.overflow = 'visible'
    return
  }
  outputElement.innerHTML = await SavedTowns()

  searchDropdown.style.display = 'block'
  searchDropdown.classList.add('show')
  // document.body.style.overflow = 'hidden'
})

formElement.addEventListener('submit', async (e) => {
  e.preventDefault()
  const outputElement = document.querySelector('#search-output')

  if (!inputElement.value.length) return

  let query = inputElement.value
  outputElement.innerHTML = await SearchResults(query)

  outputElement.addEventListener(('click'), async (e) => {
    if (e.target.matches('.search-result')) {
      const lat = e.target.dataset.lat
      const lon = e.target.dataset.lon
      const name = e.target.dataset.name

      const storedTowns = localStorageStrategy.getItem('savedTowns')

      storedTowns.push({ name, lat, lon, currentLocation: false })
      localStorageStrategy.setItem('savedTowns', storedTowns)
      outputElement.innerHTML = await SavedTowns()
      return
    }
  }, { once: true })
})

inputElement.addEventListener('focus', (e) => {
  const outputElement = document.querySelector('#search-output')

  if (inputElement.value.length) return

  outputElement.innerHTML = ''
})

inputElement.addEventListener('blur', async (e) => {
  const outputElement = document.querySelector('#search-output')

  if (inputElement.value.length) return

  outputElement.innerHTML = await SavedTowns()
})

inputElement.addEventListener('input', async (e) => {
  const outputElement = document.querySelector('#search-output')

  if (!e.currentTarget.value.length) {
    outputElement.innerHTML = await SavedTowns()
  }
})
