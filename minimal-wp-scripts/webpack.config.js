const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const finalConfig = {
  ...defaultConfig,
  plugins: [
    ...defaultConfig.plugins,
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/@wordpress/components/build-style/style.css",
          to: "components-style.css",
        },
        {
          from: "node_modules/@wordpress/block-editor/build-style/style.css",
          to: "block-editor-style.css",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
};
//console.log(JSON.stringify(finalConfig, null, 2));
module.exports = finalConfig;
