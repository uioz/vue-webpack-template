const BaseConfig = require("./base.config");
const BuildProdConfig = require("./configForBuildProd");
const BuildDevConfig = require("./configForBuildDev");
const devConfig = require("./configForDev");

module.exports = function(env) {
  const lodashMerge = require("lodash.merge");
  const { distPath } = require('./common.js')
  const RmdirSync = require("fs").rmdirSync;

  try {
    RmdirSync(distPath, {
      recursive: true,
    });
  } finally {
    switch (env) {
      case "build:prod":
        return lodashMerge({ mode: "production" }, BaseConfig, BuildProdConfig);
      case "build:dev":
        return lodashMerge({ mode: "production" }, BaseConfig, BuildDevConfig);
      case "dev":
        return lodashMerge({ mode: "development" }, BaseConfig, devConfig);
      default:
        throw new Error(
          "by default there has three different environments will come in build:prod, build:dev, dev.\n but can't find in webpack.config.js now!"
        );
    }
  }
};
