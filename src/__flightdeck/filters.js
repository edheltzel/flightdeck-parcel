const { DateTime } = require("luxon"); //bundled with 11ty
const site = require("../_data/site");

module.exports = (config) => {
  /**
   * Human readable dates
   * @usage {{ page.date | postDate }}
   */
  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  config.addFilter("postDateTime", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED);
  });

  /**
   * Prefixes the given URL with the site's base URL.
   * @usage {{ page.url | domain }}
   */
  config.addFilter("domain", (url) => {
    return new URL(url, site.baseUrl).href;
  });

  /**
   * Return a subset of array items limited to the passed number. via: 11tyrocks
   * @usage {{ for item in collections.all | limit(3) }}
   */
  config.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });
};
