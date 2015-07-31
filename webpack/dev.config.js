var path = require('path');
var webpack = require('webpack');
var assetPath = path.resolve(__dirname, '../static/dist');
var host = 'localhost';
var port = 3001;

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      'webpack-dev-server/client?http://' + host + ':' + port,
      'webpack/hot/only-dev-server',
      './src/client.js'
    ]
  },
  output: {
    path: assetPath,
    filename: 'bundle.js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?stage=0&optional=runtime']},
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.json$/]),
    new webpack.NoErrorsPlugin()
  ]
};
