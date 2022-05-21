const afterBuild = require("./src/__flightdeck/afterBuild");



// flightdeck partials
// const addFilters = require("./src/__flightdeck/filters");
// const addShortcodes = require("./src/__flightdeck/shortcodes");
// const addTransforms = require("./src/__flightdeck/transforms");

module.exports = (config) => {
  config.addPlugin(afterBuild);
  // watch for changes and copy stuff
  config.addWatchTarget("./src/assets");
  config.addPassthroughCopy("./src/assets/fonts"); // copies fonts
  config.addPassthroughCopy("./src/assets/images"); // copies images

  // layout aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend

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
