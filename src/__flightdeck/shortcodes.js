const copyright = require("./shortcodes/copyright");
const yt = require("./shortcodes/youtube");

module.exports = (config) => {
  config.addShortcode("copyright", copyright);
  config.addShortcode("youtube", yt);
};
