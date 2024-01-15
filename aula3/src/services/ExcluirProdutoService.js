import { AppError } from '../errors/AppError.js';
import { produtosRepository } from '../repositories/ProdutosRepository.js';

class ExcluirProdutoService {
  execute(id) {
    const produto = produtosRepository.buscar(id);

    if (!produto) {
      throw new AppError('Produto não encontrado', 404);
    }

    return produtosRepository.excluir(id);
  }
}

const excluirProdutoService = new ExcluirProdutoService();

export { excluirProdutoService };