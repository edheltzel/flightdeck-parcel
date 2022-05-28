const transforms = require("./src/__flightdeck/transforms");
const filters = require("./src/__flightdeck/filters");
const shortcodes = require("./src/__flightdeck/shortcodes");
const workflows = require("./src/__flightdeck/workflows");

module.exports = (config) => {
  // workflow - browsersync, layout aliases, watch, passthrough copy

  config.addPlugin(workflows);

  // transforms - esbuild, sass, htmlmin
  config.addPlugin(transforms);

  // filters - universal filters
  config.addPlugin(filters);

  // shortcodes
  config.addPlugin(shortcodes);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
