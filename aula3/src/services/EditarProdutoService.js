import { produtosRepository } from '../repositories/ProdutosRepository.js';

class EditarProdutoService {
  execute(produto) {
    const produtoExistente = produtosRepository.buscar(produto.id);

    if (!produtoExistente) {
      return null;
    }

    const produtoEditado = produtosRepository.editar(produto);
    return produtoEditado;
  }
}

const editarProdutoService = new EditarProdutoService();

export { editarProdutoService };