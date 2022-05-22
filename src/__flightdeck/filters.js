const moment = require("moment-timezone");

module.exports = (config) => {
  config.addFilter("common", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });
  config.addFilter("dateAndTime", (date) => {
    const utc = Date.now();
    return moment.utc(utc).tz("America/New_York").format("YYYY-MM-DD, HH:mm:ss z");
  });
};
