const fs = require("fs");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (config) => {
  config.setQuietMode(true); // reduce console output

  /**
   * @todo remove once 2.0 is released
   */
  // config.setBrowserSyncConfig({
  //   open: false,
  //   notify: true,
  //   // 404
  //   callbacks: {
  //     ready: function (err, browserSync) {
  //       const content_404 = fs.readFileSync("dist/404/index.html");

  //       browserSync.addMiddleware("*", (req, res) => {
  //         // Provides the 404 content without redirect.
  //         res.write(content_404);
  //         res.end();
  //       });
  //     },
  //   },
  // });

  config.setServerOptions({
    /**
     * @link https://github.com/11ty/eleventy/issues/1305
     * @see https://www.11ty.dev/docs/dev-server/
     * @description local dev server runs on port 8080 by default-> http://localhost:8080
    */
    // port: 8080,
    showVersion: true, // prints eleventy dev server version on the command line
    injectedScriptsFolder: ".flightdeck",
  });

  // Watch Targets
  config.addWatchTarget("./src/assets");

  // Passthrough Copy
  config.addPassthroughCopy("./src/assets/fonts");
  config.addPassthroughCopy({ "./src/assets/seo": "./" });

  // Layout Aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend
};
