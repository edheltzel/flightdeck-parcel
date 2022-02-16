const fd = require('./flightdeck.manifest');
const htmlmin = require('html-minifier');

module.exports = function (config) {
  // watch for changes
  config.addWatchTarget(fd.sass.src);

  // copy stuff
  config.addPassthroughCopy(fd.sass.dest);
  config.addPassthroughCopy(fd.js.dest);
  config.addPassthroughCopy(fd.img.dest);
  config.addPassthroughCopy(fd.fonts.dest);

  // add collections

  //minify html
  const isProd = process.env.ELEVENTY_ENV === 'production';
  let htmlMinify = function (value, outputPath) {
    if (outputPath && outputPath.indexOf('.html') > -1) {
      return htmlmin.minify(value, {
        userShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      });
    }
  };

  // launch browser on start
  config.setBrowserSyncConfig(fd.bs);

  return {
    dir: {
      input: 'src',
      output: '_site', // default
    },
  };
};
