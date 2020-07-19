const { contextPath,srcPath,outputPath,publicPath } = require('./common.js');

module.exports = {
  context: contextPath,
  entry: "./src/main.js",
  output: {
    path: outputPath,
    filename: "[name].[hash].bundle.js", // for entry modules
    chunkFilename: "[name].[hash].chunk.js", // for non-entry modules
    publicPath,
  },
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
  optimization:{
    splitChunks:{
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'runtime'
    }
  }
};
