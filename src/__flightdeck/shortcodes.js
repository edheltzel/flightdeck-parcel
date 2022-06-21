const copyright = require("./shortcodes/copyright");
const youtube = require("./shortcodes/youtube");

module.exports = (config) => {
  config.addShortcode("copyright", copyright);
  config.addShortcode("youtube", youtube);
};
