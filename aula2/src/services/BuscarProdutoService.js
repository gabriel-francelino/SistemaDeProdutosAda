import { produtosRepository } from '../repositories/ProdutosRepository.js';

class BuscarProdutoService {
  execute(id) {
    const produto = produtosRepository.buscar(id);

    if (!produto) {
      return null;
    }

    return produto;
  }
}

const buscarProdutoService = new BuscarProdutoService();

export { buscarProdutoService };