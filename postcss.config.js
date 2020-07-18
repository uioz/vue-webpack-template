module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("cssnano"),
    // see https://github.com/evrone/postcss-px-to-viewport
    // for mobile platform
    // require('postcss-px-to-viewport')
  ]
}