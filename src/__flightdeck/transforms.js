/* cSpell:disable */
const minifyHtml = require("./transforms/minifyhtml");

module.exports = function (config) {
  if (process.env.ELEVENTY_ENV === "production") {
    config.addTransform("htmlmin", minifyHtml);
  }
};
