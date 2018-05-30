const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 创建多个实例
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   'css-loader'
        // ]
        use: ['style-loader', 'css-loader']
        // use: extractCSS.extract(['style-loader', 'css-loader'])
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css'
    // }),
    // extractCSS,
    // extractLESS,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
