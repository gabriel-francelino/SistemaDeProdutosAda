import { listarProdutosService } from '../services/ListarProdutosService.js';
import { buscarProdutoService } from '../services/BuscarProdutoService.js';
import { StatusCodes } from 'http-status-codes';
import { cadastrarProdutoService } from '../services/CadastrarProdutoService.js';
import { atualizarProdutoService } from '../services/AtualizarProdutoService.js';

class ProdutosController {
  listar(req, res) {
    const produtos = listarProdutosService.execute();
    return res.send(produtos);
  }

  buscar(req, res) {
    const { id } = req.params;
    const produto = buscarProdutoService.execute(id);

    if (!produto) {
      return res.status(StatusCodes.NOT_FOUND).send({ mensagem: "Produto não encontrado" });
    }

    return res.send(produto);
  }

  cadastrar(req, res) {
    const produto = cadastrarProdutoService.execute(req.body);

    if (!produto) {
      return res.status(StatusCodes.BAD_REQUEST).send({ mensagem: "Produto não encontrado" });
    }

    return res.send(produto);
  }

  atualizar(req, res) {
    const { id } = req.params;
    const produto = { id, ...req.body };

    const produtoAtualizado = atualizarProdutoService.execute(produto);

    if(!produtoAtualizado) {
      return res.status(StatusCodes.BAD_REQUEST).send({ mensagem: "Produto não encontrado" });
    }

    return res.send(produtoAtualizado);
  }
}

const produtosController = new ProdutosController();

export { produtosController };