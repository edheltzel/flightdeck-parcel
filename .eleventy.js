const fd = require('./flightdeck.manifest');
const htmlmin = require('html-minifier');

module.exports = function (config) {
  // watch for changes
  config.addWatchTarget(fd.css.scss.src);

  // copy stuff
  config.addPassthroughCopy(path.join(fd.input + fd.assets)); // copy everything in ./src/assets/

  // add collections

  //minify html
  const isProd = process.env.ELEVENTY_ENV === 'prod';
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
  // config.setBrowserSyncConfig(fd.bs);

  return {
    dir: {
      input: fd.input,
      output: fd.output,
    },
  };
};
