const minifyHtml = require("./transforms/minifyHtml");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (config) => {
  if (isProd) {
    config.addPlugin(minifyHtml);
  }
};
