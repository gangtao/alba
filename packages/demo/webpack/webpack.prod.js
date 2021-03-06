const { merge } = require('webpack-merge');
const CompressionPlugin = require("compression-webpack-plugin");

const common = require('./webpack.common.js');
const parts = require('./webpack.part.js');

module.exports = merge(common,
  parts.clean(),
  parts.extractCSS({
    use: "css-loader",
  }),
  parts.minifyJavaScript(),
  parts.manifest(),
  {
    mode: 'production',
    devtool: false,
    plugins: [new CompressionPlugin()]
  });
