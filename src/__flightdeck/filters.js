const baseUrl = require("./filters/baseUrl");
const limit = require("./filters/limit");
const date = require("./filters/date");
const excerpt = require("./filters/excerpt");

module.exports = (config) => {
  config.addFilter("limit", limit.postLimit);
  config.addFilter("stripFilename", limit.stripFilename);
  config.addFilter("baseUrl", baseUrl);
  config.addFilter("postDate", date.postDate);
  config.addFilter("postDateTime", date.postDateTime);
  config.addFilter("excerpt", excerpt);
};
