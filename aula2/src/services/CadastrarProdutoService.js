import { produtosRepository } from '../repositories/ProdutosRepository.js';

class CadastarProdutoService {
    execute(produto) {
        const produto_criado = produtosRepository.inserir(produto);
    
        if (!produto_criado) {
          return null;
        }
    
        return produto_criado;
      }
}

const cadastrarProdutoService = new CadastarProdutoService();

export { cadastrarProdutoService };