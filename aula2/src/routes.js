import { Router  } from 'express';
import { v4 as uuid } from 'uuid';

import { produtosController } from './controllers/ProdutosController.js';

const routes = new Router();

const produtos = [];

routes.get('/produtos', produtosController.listar);
routes.get('/produtos/:id', produtosController.buscar);
routes.post('/produtos', produtosController.cadastrar);
routes.put('/produtos/:id', produtosController.atualizar);

routes.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex(item => item.id === id);
  
  if (index !== -1) {
    produtos.splice(index, 1);
    return res.status(204).send();
  } 
  
  return res.status(404).send({ mensagem: 'Produto não encontrado' });
});

export { routes };