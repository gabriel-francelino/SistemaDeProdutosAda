import { Produto } from '../models/Produto';
import { produtosRepository } from '../repositories/ProdutosRepository';

class CadastrarProdutoService {
  execute(produto: Produto) {
    const novoProduto = produtosRepository.cadastrar(produto);
    return novoProduto;
  }
}

const cadastrarProdutoService = new CadastrarProdutoService();

export { cadastrarProdutoService };