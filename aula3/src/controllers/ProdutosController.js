import { listarProdutosService } from '../services/ListarProdutosService.js';
import { buscarProdutoService } from '../services/BuscarProdutoService.js';
import { cadastrarProdutoService } from '../services/CadastrarProdutoService.js';
import { editarProdutoService } from '../services/EditarProdutoService.js';
import { excluirProdutoService } from '../services/ExcluirProdutoService.js';

class ProdutosController {
  listar(req, res, next) {
    const produtos = listarProdutosService.execute();
    res.send(produtos);
    next();
  }

  buscar(req, res, next) {
    try {
      const { id } = req.params;
      const produto = buscarProdutoService.execute(id);
      res.send(produto);
      next();
    } catch (err) {
      next(err);
    }
  }

  cadastrar(req, res) {
    const produto = cadastrarProdutoService.execute(req.body);
    return res.status(201).send(produto);
  }

  editar(req, res) {
    const { id } = req.params;
    const dadosProduto = req.body;
    const produto = { id, ...dadosProduto  };
    const produtoEditado = editarProdutoService.execute(produto);
    return res.send(produtoEditado);
  }

  excluir(req, res) {
    const { id } = req.params;
    const produto = excluirProdutoService.execute(id);

    if (!produto) {
      return res.status(404).send({ mensagem: 'Produto não encontrado' });
    }

    return res.send(produto);
  }
}

const produtosController = new ProdutosController();

export { produtosController };