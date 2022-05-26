module.exports = (config) => {
  /**
   * Get the current year - copyright
   * @example {% year %}
   */
  config.addShortcode(
    "copyright",
    () => `&copy; ${new Date().getFullYear()} &nbsp;`
  );
};
