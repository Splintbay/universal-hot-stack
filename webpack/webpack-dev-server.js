import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './dev.config';

const host = 'localhost';
const port = 3001;

const serverOptions = {
  contentBase: 'http://' + host + ':' + 3000,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  stats: {colors: true}
}
const compiler = webpack(config);
const devServer = new webpackDevServer(compiler, serverOptions);

devServer.listen(port, host, () => {
  console.info(' ==> Webpack dev server listening on %s:%s', host, port);
});
