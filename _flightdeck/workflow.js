const fs = require("fs");

const isProd = process.env.ENV === "production";

module.exports = (config) => {
  config.setQuietMode(true); // reduce console output
  config.setServerOptions({
    /**
     * @link https://github.com/11ty/eleventy/issues/1305
     * @see https://www.11ty.dev/docs/dev-server/
     * @description local dev server runs on port 8080 by default-> http://localhost:8080
    */
    showVersion: true, // show the server version number on the command line
    showAllHosts: true, // show local network IP address for device testing
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
