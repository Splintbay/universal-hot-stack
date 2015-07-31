var path = require('path');
var webpack = require('webpack');
var assetPath = path.resolve(__dirname, '../static/dist');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': './src/client.js'
  },
  output: {
    path: assetPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    loader: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=0&optional=runtime'}
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
};
