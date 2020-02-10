import { Router } from 'express';
import UserController from './app/controllers/UserController';



const routes = new Router();


//home
routes.get('/', (req, res) => {
  return res.send('<h1>Página Principal</h1>');
});

//usuário - crud

routes.post('/user', UserController.create );

routes.get('/user/listar', UserController.read );

routes.put('/user', UserController.update );

routes.delete('/user/delete', UserController.delete);


export default routes;
