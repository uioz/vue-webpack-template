const PathJoin = require("path").join;
const contextPath = PathJoin(__dirname, "..");
const srcPath = PathJoin(contextPath, "./src");
const outputPath = PathJoin(contextPath, "./dist");
const templatePath = PathJoin(__dirname, "../public/template.html");
const distPath = PathJoin(__dirname, "../dist");

module.exports = {
  contextPath,
  srcPath,
  outputPath,
  templatePath,
  distPath,
  publicPath:'/'
}