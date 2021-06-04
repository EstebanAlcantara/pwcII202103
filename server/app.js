/* eslint-disable no-console */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import winston from 'winston';

import indexRouter from '@s-routes/index';
import usersRouter from '@s-routes/users';

import configTemplateEngine from '@s-config/Template-Engine';

// iportando modulos de express
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from '../webpack.dev.config';

//  Consultar el modo en que se estqa ejecutando nuestro programa
const env = process.env.NODE_ENV || 'developement';

const app = express();

// verificnado el modo de ejecuion de la aplicacion
if (env === 'development') {
  console.log('> Ejecutando en modo desarrollador: WebPAck hot cargando');

  // agregando le ruta HMR
  // habilita la recarga del front-end caundo hay cambios
  // fuente del front-end
  webpackDevConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackDevConfig.entry,
  ];

  // agregando plugin
  webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  // creando compilador de webpack
  const compiler = webpack(webpackDevConfig);

  //  agregando el middleware a la cadena de middlewares
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    })
  );

  // agregando el webpack hot middleware
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log('>ejecutando en modo produccion');
}

// view engine setup
configTemplateEngine(app);

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
