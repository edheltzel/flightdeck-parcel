/**
 * TODO: see if these are worth adding 👉 https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/
 *
 */

// Human readable date & time - https://momentjs.com/timezone/docs/#/data-formats/
const moment = require("moment-timezone");

module.exports = (config) => {
  config.addFilter("basicDate", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });
  config.addFilter("fullDate", (date) => {
    const utc = Date.now();
    return moment.utc(utc).tz("America/New_York").format("YYYY-MM-DD, HH:mm:ss");
  });
};
