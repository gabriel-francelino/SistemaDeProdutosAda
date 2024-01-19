import { produtosRepository } from '../repositories/ProdutosRepository';

class ListarProdutosService {
  execute() {
    return produtosRepository.listar();
  }
}

const listarProdutosService = new ListarProdutosService();

export { listarProdutosService };