const x = document.querySelector(".test")
getLocation()

function getLocation() {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, options)
  } else {
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}

async function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude

  await getCityInfos({
    lat: position.coords.latitude,
    long: position.coords.longitude
  })
  return
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break
  }
}

async function getCityInfos({ lat, long }) {
  let data = await fetch(`https://eu1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_API_KEY}&lat=${lat}&lon=${long}&format=json`)
  let { address, boundingbox, display_name, place_id } = await data.json()
  console.log(address, boundingbox, display_name, place_id)
}
