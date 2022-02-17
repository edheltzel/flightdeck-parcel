const fd = require('./flightdeck.manifest');
const htmlmin = require('html-minifier');

module.exports = function (config) {
  // copy stuff
  config.addPassthroughCopy(fd.assets.images);

  // layout aliases
  config.addLayoutAlias('base', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/post.njk'); // consider using nunjucks extend
  config.addLayoutAlias('page', 'layouts/page.njk'); // consider using nunjucks extend

  // add collections

  //minify html only for in production
  const isProd = process.env.ELEVENTY_ENV === 'prod';
  const minifyHtml = function (value, outputPath) {
    if (outputPath && outputPath.indexOf('.html') > -1) {
      return htmlmin.minify(value, {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        userShortDoctype: true,
      });
    }
  };

  if (isProd) {
    config.addTransform('htmlmin', minifyHtml);
  }

  // launch browser on start
  config.setBrowserSyncConfig(fd.workflow.bs);

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
