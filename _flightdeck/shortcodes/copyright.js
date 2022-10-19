/**
 * Get the current year - copyright
 * @example {% copyright %}
 */
module.exports = (copyright) => {
  return `&copy; ${new Date().getFullYear()} &nbsp;`;
};
