const esbuild = require("esbuild");
const sass = require("sass");
const path = require("node:path");

// 11ty plugins

// shortcodes, filters, transforms
// const addFilters = require("./src/__flightdeck/filters");
// const addShortcodes = require("./src/__flightdeck/shortcodes");
// const addTransforms = require("./src/__flightdeck/transforms");

module.exports = (config) => {
  // esbuild
  config.on("eleventy.after", () => {
    return esbuild.build({
      entryPoints: {"assets/js/app": "./src/assets/js/app.js"},
      bundle: true,
      outdir: "./dist",
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
    });
  });

  // copy stuff
  config.addPassthroughCopy("./src/assets/fonts"); // copies fonts
  config.addPassthroughCopy("./src/assets/images"); // copies images

  // adds Sass templating
  config.addTemplateFormats("scss");
  config.addExtension("scss", {
    outputFileExtension: "css",
    compile: function (loadStyles, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }
      let result = sass.compileString(loadStyles, {
        loadPaths: [parsed.dir || ".", this.config.dir.includes],
        style: process.env.ELEVENTY_ENV === "production" ? "compressed" : "expanded",
      });

      return async () => result.css;
    },
  });
  // watch
  config.addWatchTarget("./src/assets/");

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
