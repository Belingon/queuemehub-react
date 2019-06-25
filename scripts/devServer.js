// This file configures the development web server
// which supports hot reloading and synchronized testing.
import path from 'path';
import proxy from 'http-proxy-middleware';
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackConfig from '../config/webpack.config.dev';

const compiler = webpack(webpackConfig);
const app = express();

app.use(middleware(compiler, {
  logLevel: 'warn', publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use('/api/v1', proxy({target: 'http://localhost:8080'}))

app.get('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});