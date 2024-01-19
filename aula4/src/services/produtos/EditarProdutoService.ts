import { StatusCodes } from 'http-status-codes';

import { produtosRepository } from '../../repositories/ProdutosRepository';
import { AppError } from '../../errors/AppError';
import { Produto } from '../../models/Produto';

class EditarProdutoService {
  execute(produto: Produto) {
    const produtoExistente = produtosRepository.buscar(produto.id);

    if (!produto?.nome) {
      throw new AppError('Nome do produto é obrigatório');
    }

    if (!produtoExistente) {
      throw new AppError('Produto não encontrado', StatusCodes.NOT_FOUND);
    }

    const produtoEditado = produtosRepository.editar(produto);
    return produtoEditado;
  }
}

const editarProdutoService = new EditarProdutoService();

export { editarProdutoService };