export const localStorageStrategy = {
  init,
  getItem,
  setItem,
  removeItem,
  clear,
}
export type CityCoordinate = {
  name: string,
  lat: number,
  lon: number
  currentLocation: Boolean
}

type CitiesCoordinates = CityCoordinate[]

function init(primaryKey: string, data: CitiesCoordinates) {
  if (!localStorage.getItem(primaryKey)) {
    initSession(primaryKey, data)
    return
  }
}

function initSession(primaryKey: string, data: CitiesCoordinates) {
  localStorage.setItem(primaryKey, JSON.stringify(data))
}

function getItem(key: string) {
  const item = localStorage.getItem(key)
  if (!item) return
  return JSON.parse(item) as CitiesCoordinates
}

function setItem(key: string, value: CitiesCoordinates) {
  localStorage.setItem(key, JSON.stringify(value))
}

function removeItem(key: string) {
  localStorage.removeItem(key)
}

function clear() {
  localStorage.clear()
}
