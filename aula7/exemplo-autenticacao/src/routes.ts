import { Request, Response, Router } from 'express';
import { usuariosController } from './controllers/UsuariosController';
import { authMiddleware } from './middlewares/AuthMiddleware';

const routes = Router();

routes.post('/sign-in', usuariosController.signIn);
routes.post('/sign-up', usuariosController.signUp);

routes.use(authMiddleware);

routes.get('/teste', (req: Request, res: Response) => {
  res.send({ mensagem: 'Rota privada acessada com sucesso' });
})

export { routes };