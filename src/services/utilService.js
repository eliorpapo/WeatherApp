export function makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export function getDayFromTimeStamp(timeStamp) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  var date = new Date(0)
  date.setUTCSeconds(timeStamp)
  var formattedDate = {
    day: weekday[date.getDay()],
    date: ('' + date).substr(4, 7),
  }
  return formattedDate
}
