const { DateTime } = require("luxon"); //bundled with 11ty
const site = require("../_data/site");

module.exports = (config) => {
  // Human readable dates
  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  config.addFilter("postDateTime", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED);
  });


// Prefixes the given URL with the site's base URL.
  const domain= (url) => {
    return new URL(url, site.baseUrl).href;
  };
  config.addFilter('domain', domain);
};

// Prepend & Append
