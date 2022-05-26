module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  /**
   * @todo remove once 2.0 is released
   */
  config.setBrowserSyncConfig({
    open: true,
    notify: true,
  });

  // watch & copy stuff
  config.addWatchTarget("./src/assets");
  config.addPassthroughCopy("./src/assets/fonts");
  config.addPassthroughCopy("./src/assets/images");

  // layout aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend
};
