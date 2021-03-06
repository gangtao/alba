const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const parts = require('./webpack.part.js');

module.exports = merge(
  common,
  parts.loadCSS(),
  {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].js',
    }
  });
