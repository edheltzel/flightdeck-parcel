// new filters are added here so eleventy will see them.
const date = require('./filter/date');

module.exports = function (config) {
  config.addFilter('date', date)

  // JSON.stringify filter
  config.addFilter('limit', function(array, limit) {
    return array.slice(0, limit)
  })
}
