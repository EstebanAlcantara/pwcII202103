/* eslint-disable prettier/prettier */
import ExpHbs from 'express-handlebars';
import path from 'path';

export default (app) => {
  app.engine(
      'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));
  return app;
};
