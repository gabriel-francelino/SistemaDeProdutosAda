import { Router  } from 'express';

import { produtosController } from './controllers/ProdutosController.js';
import { infoRequestMiddleware } from  './middlewares/InfoRequestMiddleware.js';
import { tempoDeRespostaMiddleware } from  './middlewares/TempoDeRespostaMiddleware.js';
import { dateRequestMiddleware } from './middlewares/DateRequestMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware.js';

const routes = new Router();

routes.use(infoRequestMiddleware.execute);
routes.use(dateRequestMiddleware.execute);
routes.use(tempoDeRespostaMiddleware.executeBefore);

routes.get('/produtos', produtosController.listar);
routes.get('/produtos/:id', produtosController.buscar);
routes.post('/produtos', produtosController.cadastrar);
routes.put('/produtos/:id', produtosController.editar);
routes.delete('/produtos/:id', produtosController.excluir);

routes.use(errorHandlerMiddleware.execute);
routes.use(tempoDeRespostaMiddleware.executeAfter);

export { routes };