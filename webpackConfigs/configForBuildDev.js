// enabled source-map
// support as

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { templatePath } = require('./common.js');

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // see https://vue-loader.vuejs.org/guide/pre-processors.html#excluding-node-modules
        // exclude: file => (
        //   /node_modules/.test(file) &&
        //   !/\.vue\.js/.test(file)
        // ),
        loader: "babel-loader",
      },
      // see https://vue-loader.vuejs.org/zh/guide/linting.html#eslint
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader",
      },
      // see https://github.com/webpack-contrib/eslint-loader#usage
      // see https://babeljs.io/setup#installation
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },
      {
        // see https://github.com/webpack-contrib/sass-loader#implementation
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // see https://github.com/webpack-contrib/css-loader#importloaders
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        // see https://github.com/webpack-contrib/url-loader#getting-started
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode:'static'
    }),
    new VueLoaderPlugin(),
    // see https://github.com/webpack-contrib/sass-loader#extracts-css-into-separate-files
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].bundle.css",
      chunkFilename: "[name].[hash].chunk.css",
    }),
    new HtmlWebpackPlugin({
      template: templatePath,
      scriptLoading: "defer",
    }),
  ],
};
