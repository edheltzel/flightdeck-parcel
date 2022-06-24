const addTransforms = require("./src/__flightdeck/transforms");
const addWorkflow = require("./src/__flightdeck/workflow");
const addShortcodes = require("./src/__flightdeck/shortcodes");
const addFilters = require("./src/__flightdeck/filters");
const addPlugins = require("./src/__flightdeck/plugins");

module.exports = (config) => {
  addWorkflow(config); // workflow - browsersync, layout aliases, watch, passthrough copy
  addTransforms(config); // transforms - esbuild, sass, htmlmin
  addFilters(config); // filters - universal filters
  addShortcodes(config); // shortcodes - copyright year, youtube embeds, etc.
  addPlugins(config); // plugins - eleventy plugins
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
