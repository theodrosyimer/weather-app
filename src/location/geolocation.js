import { getCityFromCoordinates } from "./locationIQ-api.ts"
import { localStorageStrategy } from "../store/local-storage.ts"

let city = document.querySelector(".city")

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
export async function getLocation() {

  if (navigator.geolocation) {
    // TODO: ask geolocation permissions for mobile devices
    handlePermission()

    navigator.geolocation.getCurrentPosition(showPosition, showError, options)
  } else {
    city.innerHTML = "Geolocation is not supported by this browser."
  }
}

async function showPosition(position) {
  let { address: { town } } = await getCityFromCoordinates({
    lat: position.coords.latitude,
    lon: position.coords.longitude
  })

  city.innerHTML = town


  const initObject = {
    name: town,
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    currentLocation: true
  }

  localStorageStrategy.init('savedTowns', [initObject])
  return
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      city.innerHTML = "User denied the request for Geolocation."
      break
    case error.POSITION_UNAVAILABLE:
      city.innerHTML = "Location information is unavailable."
      break
    case error.TIMEOUT:
      city.innerHTML = "The request to get user location timed out."
      break
    case error.UNKNOWN_ERROR:
      city.innerHTML = "An unknown error occurred."
      break
  }
}


export function handlePermission() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      // console.log(`Permissions: ${result.state}`)
      return
    }
    if (result.state === "prompt") {
      // console.log(`Permissions: ${result.state}`)
      navigator.geolocation.getCurrentPosition(showPosition, showError, options)

      return
    }
    if (result.state === "denied") {
      // console.log(`Permissions: ${result.state}`)
      return
    }
    result.addEventListener("change", () => {
      console.log(`Permissions: ${result.state}`)
    })
  })
}


