const fs = require("fs");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (config) => {
  config.setQuietMode(true); // reduce console output
  /**
   * @TODO remove browseersync once 2.0 is released
   * @see https://github.com/11ty/eleventy/issues/1305
   * @TODO add watch targets for example purposes
   *
   */
  config.setServerOptions({
    showVersion: true, // prints eleventy dev server version on the command line
    injectedScriptsFolder: ".flightdeck",
    watch: [],
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
