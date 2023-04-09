export const localStorageStrategy = {
  init,
  getItem,
  setItem,
  removeItem,
  clear,
}

function init(primaryKey, data) {
  if (!localStorage.getItem(primaryKey)) {
    initSession(primaryKey, data)
    return
  }
}

function initSession(primaryKey, data) {
  localStorage.setItem(primaryKey, JSON.stringify(data))
}

function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function removeItem(key) {
  localStorage.removeItem(key)
}

function clear() {
  localStorage.clear()
}
