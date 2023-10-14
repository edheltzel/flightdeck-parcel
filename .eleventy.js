const addWorkflow = require("./_flightdeck/workflow");
const addFilters = require("./_flightdeck/filters");
const addTransforms = require("./_flightdeck/transforms");
const addShortcodes = require("./_flightdeck/shortcodes");
const addPlugins = require("./_flightdeck/plugins");
const addComponents = require("./_flightdeck/components");

module.exports = (config) => {
  addWorkflow(config); // browsersync, layout aliases, watch, passthrough copy
  addFilters(config); // universal filters
  addTransforms(config); // htmlmin
  addShortcodes(config); // copyright year, youtube embeds, etc.
  addPlugins(config); // eleventy plugins
  addComponents(config); // custom components for Flightdeck Autopilot
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
