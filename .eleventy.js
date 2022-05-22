const transforms = require("./src/__flightdeck/transforms");
const filters = require("./src/__flightdeck/filters");

// const addShortcodes = require("./src/__flightdeck/shortcodes");

module.exports = (config) => {
  // transforms - esbuild, sass, htmlmin
  config.addPlugin(transforms);

  // filters - human readable date & time
  config.addPlugin(filters);

  // shortcodes
  // config.addPlugin(shortcodes);

  // watch & copy stuff
  config.addWatchTarget("./src/assets");
  config.addPassthroughCopy("./src/assets/fonts"); // copies fonts
  config.addPassthroughCopy("./src/assets/images"); // copies images

  // layout aliases
  config.addLayoutAlias("default", "default.njk");
  config.addLayoutAlias("post", "post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "page.njk"); // consider using nunjucks extend

  /**
   * TODO: Remove BS once 2.0 is released.
   */
  // launch browser on start
  config.setBrowserSyncConfig({
    open: false,
    notify: true,
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
