const { DateTime } = require("luxon"); //bundled with 11ty

/**
 * Human readable date format for date
 * @example {{ page.date | postDate }}
 * @param {string} postDate
 * @returns {string} May 20, 1982
 */
const postDate = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
};

/**
 * Human readable format for date with time
 * @example {{ page.date | postDateTime }}
 * @param {string} postDateTime
 * @returns {string} May 20, 1982, 5:30 PM EDT
 */
const postDateTime = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
};

module.exports = { postDate, postDateTime };
