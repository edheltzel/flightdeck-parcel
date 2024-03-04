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
		port: 4000, // old habits die hard - 4000 is the default port for Jekyll
		showVersion: true, // show the server version number on the command line
		showAllHosts: false, // show local network IP address for device testing
	});

	// Watch Targets
	config.addWatchTarget("./src/assets");

	// Passthrough Copy
	config.addPassthroughCopy("./src/assets/fonts");
	config.addPassthroughCopy({ "./src/_static": "./" }); // root level files ie: _redirects, robots.txt, etc
	// config.addPassthroughCopy({ "./node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.js" });

	// Layout Aliases
	config.addLayoutAlias("default", "layouts/default.njk");
	config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
	config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend
};
