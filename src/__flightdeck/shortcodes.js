module.exports = (config) => {
  // Get the current year - copyright
  config.addShortcode("copyright", () => `&copy; ${new Date().getFullYear()} &nbsp;`);
};
