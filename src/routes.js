import { Router } from 'express';

//rota usuário
import UserController from './app/controllers/UserController';


//rota para logar
import SessionController from './app/controllers/SessionController';
//rota recipiente
import RecipientController from './app/controllers/RecipientController';

import User from './app/models/User';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();


//home
// routes.get('/', async (req, res) => {

//   const user = await User.create({
//     name: 'Gledson luciano',
//     email: 'gledsondf@gmail.com',
//     password_hash: '123456',

//   })
//   return res.json(user);
// });

//usuário - crud

routes.post('/user', UserController.create);

routes.get('/user/listar', UserController.read );

//rota para logar
routes.post('/login', SessionController.store);
//tudo abaixo deste middleware global , precisa estar autenticado para continuar
routes.use(authMiddleware);

routes.put('/user', UserController.update );

//rota recipient
routes.post('/destinatario', RecipientController.store);
routes.put('/destinatario', RecipientController.update);


export default routes;
