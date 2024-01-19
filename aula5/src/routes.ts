import { Router  } from 'express';
import path from 'path';
import multer from 'multer';

import { produtosController } from './controllers/ProdutosController';
import { comprasController } from './controllers/ComprasController';
import { infoRequestMiddleware } from  './middlewares/InfoRequestMiddleware';
import { tempoDeRespostaMiddleware } from  './middlewares/TempoDeRespostaMiddleware';
import { dataRequisicaoMiddleware } from './middlewares/DataRequisicaoMiddleware';
import { errorHandlerMiddleware } from './middlewares/ErrorHandlerMiddleware';
import { fotosController } from './controllers/FotosController';

const routes = Router();
const upload = multer({ dest: 'uploads/' });

routes.use(infoRequestMiddleware.execute);
routes.use(dataRequisicaoMiddleware.execute);
routes.use(tempoDeRespostaMiddleware.executeBefore);

routes.get('/produtos', produtosController.listar);
routes.get('/produtos/:id', produtosController.buscar);
routes.post('/produtos', produtosController.cadastrar);
routes.put('/produtos/:id', produtosController.editar);
routes.delete('/produtos/:id', produtosController.excluir);
routes.patch('/produtos/:id/foto', produtosController.incluirFoto);

routes.post('/compras', comprasController.cadastrar);

routes.post('/fotos', upload.single('arquivo'), fotosController.cadastrar);



routes.use(tempoDeRespostaMiddleware.executeAfter);
routes.use(errorHandlerMiddleware.execute);

export { routes };