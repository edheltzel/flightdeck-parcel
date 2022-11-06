const { DateTime } = require("luxon"); //bundled with 11ty

/**
 * Human readable date format for date
 * @param {string} postDate
 * @returns {string} July 20, 1699
 * @example {{ page.date | postDate }}
 */
const postDate = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
};

/**
 * Human readable format for date with time
 * @param {string} postDateTime
 * @returns {string} July 20, 1969, 10:56 PM EDT
 * @example {{ page.date | postDateTime }}
 */
const postDateTime = (date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
};

module.exports = { postDate, postDateTime };
