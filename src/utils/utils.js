function getTimeAsString() {
  const now = new Date()
  const hours = now.getHours().toString()
  const minutes = `0${now.getMinutes()}`.slice(-2)
  const seconds = `0${now.getSeconds()}`.slice(-2)

  return { hours, minutes, seconds }
}
