import { produtosRepository } from '../repositories/ProdutosRepository.js';

class CadastrarProdutoService {
  execute(produto) {
    const novoProduto = produtosRepository.cadastrar(produto);
    return novoProduto;
  }
}

const cadastrarProdutoService = new CadastrarProdutoService();

export { cadastrarProdutoService };