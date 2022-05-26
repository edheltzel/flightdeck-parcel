const transforms = require("./src/__flightdeck/transforms");
const filters = require("./src/__flightdeck/filters");
const shortcodes = require("./src/__flightdeck/shortcodes");
const workflows = require("./src/__flightdeck/workflows");

module.exports = (config) => {
  // workflow
  config.addPlugin(workflows);

  // transforms - esbuild, sass, htmlmin
  config.addPlugin(transforms);

  // filters
  config.addPlugin(filters);

  // shortcodes
  config.addPlugin(shortcodes);

  // watch & copy stuff
  config.addWatchTarget("./src/assets");
  config.addPassthroughCopy("./src/assets/fonts"); // copies fonts
  config.addPassthroughCopy("./src/assets/images"); // copies images

  // layout aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
