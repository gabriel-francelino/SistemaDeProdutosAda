import { NextFunction, Request, Response } from 'express';

import { listarProdutosService } from '../services/produtos/ListarProdutosService';
import { buscarProdutoService } from '../services/produtos/BuscarProdutoService';
import { cadastrarProdutoService } from '../services/produtos/CadastrarProdutoService';
import { editarProdutoService } from '../services/produtos/EditarProdutoService';
import { excluirProdutoService } from '../services/produtos/ExcluirProdutoService';

class ProdutosController {
  listar(req: Request, res: Response, next: NextFunction) {
    const produtos = listarProdutosService.execute();
    res.send(produtos);
    next();
  }

  buscar(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const produto = buscarProdutoService.execute(id);
      res.send(produto);
      next();
    } catch (err) {
      next(err);
    }
  }

  cadastrar(req: Request, res: Response, next: NextFunction) {
    const produto = cadastrarProdutoService.execute(req.body);
    res.status(201).send(produto);
    next();
  }

  editar(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const dadosProduto = req.body;
      const produto = { id, ...dadosProduto  };
      const produtoEditado = editarProdutoService.execute(produto);
      res.send(produtoEditado);
      next();
    } catch (err) {
      next(err);
    }
  }

  excluir(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const produto = excluirProdutoService.execute(id);
      res.send(produto);
      next();
    } catch (err) {
      next(err);
    }
  }
}

const produtosController = new ProdutosController();

export { produtosController };