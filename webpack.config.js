const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }
    ]
  },
  'plugins': [
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    }),
    new HtmlWebpackPlugin({
      // template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
