import { produtosRepository } from '../repositories/ProdutosRepository.js';

class ListarProdutosService {
  execute() {
    return produtosRepository.listar();
  }
}

const listarProdutosService = new ListarProdutosService();

export { listarProdutosService };