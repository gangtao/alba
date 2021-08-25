const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const style = require('./webpack.style.js');

module.exports = merge(
  common,
  style.loadCSS(),
  {
    mode: 'development',
    devtool: 'inline-source-map'
  });
