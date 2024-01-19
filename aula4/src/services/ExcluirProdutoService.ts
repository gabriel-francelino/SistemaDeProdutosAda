import { StatusCodes } from 'http-status-codes';

import { produtosRepository } from '../repositories/ProdutosRepository';
import { AppError } from '../errors/AppError';

class ExcluirProdutoService {
  execute(id: string) {
    const produto = produtosRepository.buscar(id);

    if (!produto) {
      throw new AppError('Produto não encontrado', StatusCodes.NOT_FOUND);
    }

    return produtosRepository.excluir(id);
  }
}

const excluirProdutoService = new ExcluirProdutoService();

export { excluirProdutoService };