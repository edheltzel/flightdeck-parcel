const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (esbuildBundle) =>{
  config.on("eleventy.after", () => {
    return esbuild.build({
      entryPoints: {
        "assets/js/app": "./src/assets/js/app.js",
        "assets/css/app": "./src/assets/scss/app.scss",
      },
      loader: { ".scss": "css" },
      bundle: true,
      outdir: "./dist",
      minify: isProd,
      sourcemap: isProd,
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
}
