const { DateTime } = require("luxon");
const site = require("../_data/site");

module.exports = (config) => {
  // Human readable date & time
  config.addFilter("basicDate", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });
  config.addFilter("fullDate", (date) => {
    const utc = Date.now();
    return moment
      .utc(utc)
      .tz("America/New_York")
      .format("MMM DD, YYYY - HH:mm:ss");
  });

// Prefixes the given URL with the site's base URL.

  const toAbsoluteUrl = (url) => {
    return new URL(url, site.baseUrl).href;
  };
  config.addFilter('toAbsoluteUrl', toAbsoluteUrl);
};
