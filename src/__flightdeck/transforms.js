const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const htmlmin = require("html-minifier");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (config) => {
  // esbuild & sass + autoprefixer
  config.on("eleventy.after", () => {
    return esbuild.build({
      bundle: true,
      entryPoints: {
        "assets/js/app": "./src/assets/js/app.js",
        "assets/css/app": "./src/assets/scss/app.scss",
      },
      loader: { ".scss": "css" },
      minify: isProd,
      outdir: "./dist",
      plugins: [
        sassPlugin({
          async transform(source, resolveDir) {
            const { css } = await postcss([
              autoprefixer,
              postcssPresetEnv({ stage: 0 }),
            ]).process(source, { from: undefined });
            return css;
          },
        }),
      ],
      sourcemap: !isProd,
    });
  });

  // minify HTML
  if (isProd) {
    config.addTransform("htmlMin", async function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          collapseWhitespace: true,
          minifyCSS: true,
          removeComments: true,
          useShortDoctype: true,
        });
        return minified;
      }
      return content;
    });
  }
};
