const htmlmin = require("html-minifier");

const isProd = process.env.ELEVENTY_ENV === "production";

module.exports = (config) => {
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
