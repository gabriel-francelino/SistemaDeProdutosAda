import { Router  } from 'express';
import { v4 as uuid } from 'uuid';

import { produtosController } from './controllers/ProdutosController.js';

const routes = new Router();

const produtos = [];

routes.get('/produtos', produtosController.listar);
routes.get('/produtos/:id', produtosController.buscar);
routes.post('/produtos', produtosController.cadastrar);
routes.put('/produtos/:id', produtosController.atualizar);
routes.delete('/produtos/:id', produtosController.deletar);

export { routes };