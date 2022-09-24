const addWorkflow = require("./.flightdeck/workflow");
const addTransforms = require("./.flightdeck/transforms");
const addFilters = require("./.flightdeck/filters");
const addShortcodes = require("./.flightdeck/shortcodes");
const addPlugins = require("./.flightdeck/plugins");

module.exports = (config) => {
  addWorkflow(config); // browsersync, layout aliases, watch, passthrough copy
  addTransforms(config); // htmlmin
  addFilters(config); // universal filters
  addShortcodes(config); // copyright year, youtube embeds, etc.
  addPlugins(config); // eleventy plugins
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    markdownTemplateEngine: "njk",
  };
};
