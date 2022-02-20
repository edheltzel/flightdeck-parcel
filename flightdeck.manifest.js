module.exports = {
  assets: {
    scss: {
      src: './src/_scss/app.scss',
      outputStyle: 'expanded', //"expanded" | "compressed" | "nested" | "compact"
      sourceMap: true,
      outFile: './_site/assets/css/app.css',
    },
    css: {
      src: './_site/assets/css',
    },
    images: './src/assets/images',
    fonts: 'fonts',
  },
  workflow: {
    bs: {
      notify: true,
      open: true,
    },
  },
};
