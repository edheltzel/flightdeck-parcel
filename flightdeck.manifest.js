// const htmlmin = require('html-minifier');

module.exports = {
  html: {
    minify: false,
  },
  sass: {
    src: './src/_scss/**/*.scss',
    dest: './_site/assets/css',
  },
  js: {
    src: './src/assets/js/',
    dest: './_site/assets/js',
  },
  img: {
    src: './src/assets/images',
    dest: './src/assets/images', //11ty addPassthroughCopy will move this
  },
  fonts: {
    src: './src/assets/fonts',
    dest: './src/assets/fonts', //11ty addPassthroughCopy will move this
  },
  //browsersync config
  bs: {
    notify: true,
    open: true,
  },
};
