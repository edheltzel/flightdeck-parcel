const fd = require('./flightdeck.manifest');
const htmlmin = require('html-minifier');
module.exports = function (eleventyConfig) {
  // watch for changes
  eleventyConfig.addWatchTarget(fd.sass.src);

  // copy stuff
  eleventyConfig.addPassthroughCopy(fd.sass.dest);
  eleventyConfig.addPassthroughCopy(fd.js.dest);
  eleventyConfig.addPassthroughCopy(fd.img.dest);
  eleventyConfig.addPassthroughCopy(fd.fonts.dest);

  // add collections

  // workflow
  //minify html
  if (fd.html.minify == true) {
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified;
      }

      return content;
    });
  }
  eleventyConfig.setBrowserSyncConfig(fd.bs);
  return {
    dir: {
      input: 'src',
      output: '_site', // default
    },
  };
};
