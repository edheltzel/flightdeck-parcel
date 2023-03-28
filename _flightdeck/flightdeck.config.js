const addWorkflow = require("./workflow");
const addFilters = require("./filters");
const addTransforms = require("./transforms");
const addShortcodes = require("./shortcodes");
const addPlugins = require("./plugins");
const addComponents = require("./components");

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
