const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true // 在生产环境中启用sourcemap ，需要devtool设置为true
    }),
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('production') // 设置为production后，很多需会自行压缩
    })
  ]
});
