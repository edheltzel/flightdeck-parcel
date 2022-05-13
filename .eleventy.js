const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

// 11ty plugins

// shortcodes, filters, transforms
// const addFilters = require("./src/__flightdeck/filters");
// const addShortcodes = require("./src/__flightdeck/shortcodes");
// const addTransforms = require("./src/__flightdeck/transforms");

module.exports = (config) => {
  config.on("eleventy.after", () => {
    return esbuild.build({
      entryPoints: ["./src/_js/app.js", "./src/_scss/app.scss"],
      bundle: true,
      outdir: "./src/assets",
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
      plugins: [sassPlugin()],
    });
  });

  // watch for changes and copy stuff
  config.addWatchTarget("./src/_scss/");
  config.addWatchTarget("./src/_js/");
  config.addPassthroughCopy({ "./src/assets/_scss": "/assets/css" }); //moves styles to dist after esbuild
  config.addPassthroughCopy({ "./src/assets/_js": "/assets/js" }); //moves styles to dist after esbuild
  // config.addPassthroughCopy("./src/assets/"); // copies all assets

  // layout aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend

  // launch browser on start
  config.setBrowserSyncConfig({
    open: true,
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
