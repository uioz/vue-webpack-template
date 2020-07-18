const PathJoin = require("path").join;
const contextPath = PathJoin(__dirname, "..");
const srcPath = PathJoin(contextPath, "./src");
const outputPath = PathJoin(contextPath, "./dist");

module.exports = {
  context: contextPath,
  entry: "./src/main.js",
  output: {
    path: outputPath,
    filename: "[name].[hash].bundle.js", // for entry modules
    chunkFilename: "[name].[hash].chunk.js", // for non-entry modules
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
};
