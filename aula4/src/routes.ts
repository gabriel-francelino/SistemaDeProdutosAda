import { Router  } from 'express';

import { produtosController } from './controllers/ProdutosController';
import { infoRequestMiddleware } from  './middlewares/InfoRequestMiddleware';
import { tempoDeRespostaMiddleware } from  './middlewares/TempoDeRespostaMiddleware';
import { dataRequisicaoMiddleware } from './middlewares/DataRequisicaoMiddleware';
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware';
import { comprasController } from './controllers/ComprasController';

const routes = Router();

routes.use(infoRequestMiddleware.execute);
routes.use(dataRequisicaoMiddleware.execute);
routes.use(tempoDeRespostaMiddleware.executeBefore);

routes.get('/produtos', produtosController.listar);
routes.get('/produtos/:id', produtosController.buscar);
routes.post('/produtos', produtosController.cadastrar);
routes.put('/produtos/:id', produtosController.editar);
routes.delete('/produtos/:id', produtosController.excluir);

routes.post('/compras', comprasController.cadastrar);
routes.get('/compras', comprasController.listar);
routes.get('/compras/:id', comprasController.buscar);

routes.use(tempoDeRespostaMiddleware.executeAfter);
routes.use(errorHandlerMiddleware.execute);

export { routes };