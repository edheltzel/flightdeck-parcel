const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

// 11ty plugins

// shortcodes, filters, transforms
// const addFilters = require("./src/__flightdeck/filters");
// const addShortcodes = require("./src/__flightdeck/shortcodes");
// const addTransforms = require("./src/__flightdeck/transforms");

module.exports = (config) => {
  config.on("eleventy.after", () => {
    return esbuild.build({
      entryPoints: {
        "assets/js/app": "./src/assets/_js/app.js",
        "assets/css/app": "./src/assets/_scss/app.scss",
      },
      loader: { ".scss": "css" },
      bundle: true,
      outdir: "./dist",
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
      plugins: [
        sassPlugin({
          async transform(source, resolveDir) {
            const { css } = await postcss([
              autoprefixer,
              postcssPresetEnv({ stage: 0 }),
            ]).process(source);
            return css;
          },
        }),
      ],
    });
  });

  // watch for changes and copy stuff
  config.addWatchTarget("./src/assets/_scss/");
  config.addWatchTarget("./src/assets/_js/");
  // config.addPassthroughCopy({ "./src/assets/_scss": "/assets/css" }); //moves styles to dist after esbuild
  // config.addPassthroughCopy({ "./src/assets/_js": "/assets/js" }); //moves styles to dist after esbuild
  config.addPassthroughCopy("./src/assets/fonts"); // copies fonts
  config.addPassthroughCopy("./src/assets/images"); // copies images

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
