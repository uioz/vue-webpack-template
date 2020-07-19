const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;
const { templatePath,distPath,publicPath } = require('./common.js');

module.exports = {
  module: {
    rules: [
      // see https://vue-loader.vuejs.org/zh/guide/linting.html#eslint
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "eslint-loader",
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },
      {
        // see https://github.com/webpack-contrib/sass-loader#implementation
        test: /\.s[ac]ss$/i,
        use: [
          "vue-style-loader",
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
  devtool: "eval-source-map",
  devServer: {
    contentBase: distPath,
    publicPath,
    proxy: {},
    port: 8080,
    compress: true,
    // show error when there are compiler erros or warnings.
    overlay: true,
    // enable hot replacement
    hot: true,
    hotOnly: true,
    // Tells dev-server to open the browser after server had been started
    open: true,
    quiet: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: templatePath,
      scriptLoading: "defer",
    }),
  ],
};
