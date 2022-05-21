module.exports = (theDate) => {
  const dateObj= new Date(theDate)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const  daySx = appendSuffix(dateObj.getDate())
  return `${daySx} ${ months[dateObj.getMonth()]}`
}
