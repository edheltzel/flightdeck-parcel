const fs = require("fs");

module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  /**
   * @todo remove once 2.0 is released
   */
  config.setBrowserSyncConfig({
    open: true,
    notify: true,
    // 404
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
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
