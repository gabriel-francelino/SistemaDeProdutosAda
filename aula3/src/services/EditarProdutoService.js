import { AppError } from '../errors/AppError.js';
import { produtosRepository } from '../repositories/ProdutosRepository.js';

class EditarProdutoService {
  execute(produto) {
    const produtoExistente = produtosRepository.buscar(produto.id);

    if (!produtoExistente) {
      throw new AppError('Produto não encontrado', 404);
    }

    const produtoEditado = produtosRepository.editar(produto);
    return produtoEditado;
  }
}

const editarProdutoService = new EditarProdutoService();

export { editarProdutoService };