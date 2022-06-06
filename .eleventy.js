const transforms = require("./src/__flightdeck/transforms");
const workflow = require("./src/__flightdeck/workflow");

const addShortcodes = require("./src/__flightdeck/shortcodes");
const addFilters = require("./src/__flightdeck/filters");

module.exports = (config) => {
  // workflow - browsersync, layout aliases, watch, passthrough copy
  config.addPlugin(workflow);

  // transforms - esbuild, sass, htmlmin
  config.addPlugin(transforms);

  // filters - universal filters
  addFilters(config);

  // shortcodes - copyright year, youtube embeds, etc.
  addShortcodes(config);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
