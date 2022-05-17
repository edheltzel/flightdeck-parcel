const minHtml = require("html-minifier");

// Minify HTML for production build
module.exports = function (content, outputPath) {
  if (outputPath.endsWith(".html")) {
    const minified = minHtml.minify(content, {
      userShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    });
    return minifed;
  }
  return content;
};
