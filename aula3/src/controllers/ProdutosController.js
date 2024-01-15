import { listarProdutosService } from '../services/ListarProdutosService.js';
import { buscarProdutoService } from '../services/BuscarProdutoService.js';
import { cadastrarProdutoService } from '../services/CadastrarProdutoService.js';
import { editarProdutoService } from '../services/EditarProdutoService.js';
import { excluirProdutoService } from '../services/ExcluirProdutoService.js';

class ProdutosController {
  listar(req, res, next) {
    try {
      const produtos = listarProdutosService.execute();
      res.send(produtos);
      next();
    } catch (error) {
      next(error);
    }
  }

  buscar(req, res, next) {
    try {
      const { id } = req.params;
      const produto = buscarProdutoService.execute(id);
      res.send(produto);
      next();
    } catch (error) {
      next(error);
    }
  }

  cadastrar(req, res, next) {
    try {
      const produto = cadastrarProdutoService.execute(req.body);
      res.status(201).send(produto);
      next();
    } catch (error) {
      next(error);
    }
  }

  editar(req, res, next) {
    try {
      const { id } = req.params;
      const dadosProduto = req.body;
      const produto = { id, ...dadosProduto };
      const produtoEditado = editarProdutoService.execute(produto);
      res.send(produtoEditado);
      next();
    } catch (error) {
      next(error);
    }
  }

  excluir(req, res, next) {
    try {
      const { id } = req.params;
      const produto = excluirProdutoService.execute(id);
      res.send(produto);
      next();
    } catch (error) {
      next(error);
    }
  }
}

const produtosController = new ProdutosController();

export { produtosController };