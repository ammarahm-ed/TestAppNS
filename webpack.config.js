const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
	config.module
	  .rule("load_files")
	  .test(/\.(js|ts|jsx|tsx)$/)
	  .use("babel-loader")
	  .before("ts")
	  .loader("babel-loader")
	  .options({
		presets: ["module:metro-react-native-babel-preset"],
		plugins: ['@babel/plugin-proposal-export-namespace-from']
	  });
	  config.optimization.minimize(false);
  });

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig();
};
