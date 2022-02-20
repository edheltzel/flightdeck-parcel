module.exports = {
  assets: {
    scss: {
      src: './src/_scss/app.scss',
      outputStyle: 'expanded', //"expanded" | "compressed" | "nested" | "compact"
      sourceMap: true,
      outFile: './dist/assets/css/app.css',
    },
    css: {
      src: './dist/assets/css',
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
