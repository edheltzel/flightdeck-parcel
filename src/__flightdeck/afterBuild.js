/* cSpell:disable */
const esbuildBundle = requre("./afterBuild/esbuild.js")

module.exports =  (config) => {

  if (process.env.ELEVENTY_ENV === "production") {
    config.addTransform("htmlmin", minifyHtml);
  }
};
