const embedEverything = require("eleventy-plugin-embed-everything");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = (config) => {
  config.addPlugin(embedEverything);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(EleventyRenderPlugin);
};
