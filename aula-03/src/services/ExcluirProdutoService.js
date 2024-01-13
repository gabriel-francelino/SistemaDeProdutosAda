import { produtosRepository } from '../repositories/ProdutosRepository.js';

class ExcluirProdutoService {
  execute(id) {
    const produto = produtosRepository.buscar(id);

    if (!produto) {
      return null;
    }

    return produtosRepository.excluir(id);
  }
}

const excluirProdutoService = new ExcluirProdutoService();

export { excluirProdutoService };