import { Router } from 'express';
// importando el router de home
import homeRouter from './home';
// importando router de users
import userRouter from './user';

const addRoutes = (app) =>{
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  return app;
};

export default {
  addRoutes,
}
