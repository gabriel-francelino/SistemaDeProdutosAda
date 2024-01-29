import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { listarProdutosService } from '../services/ListarProdutosService';
import { buscarProdutoService } from '../services/BuscarProdutoService';
import { cadastrarProdutoService } from '../services/CadastrarProdutoService';
import { editarProdutoService } from '../services/EditarProdutoService';
import { excluirProdutoService } from '../services/ExcluirProdutoService';
import { associarProdutoFotoService } from '../services/AssociarProdutoFotoService';

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
    res.status(StatusCodes.CREATED).send(produto);
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

  associarFoto(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: idProduto } = req.params;
      const { idFoto } = req.body;
      const produto = associarProdutoFotoService.execute(idProduto, idFoto);
      res.send(produto);
      next();
    } catch (err) {
      next(err);
    }
  }
}

const produtosController = new ProdutosController();

export { produtosController };