import { AppError } from '../errors/AppError.js';
import { produtosRepository } from '../repositories/ProdutosRepository.js';

class CadastrarProdutoService {
  execute(produto) {
    const {nome, preco} = produto;
    if(!nome || !preco) throw new AppError('Dados inseridos incorretamente');
    const novoProduto = produtosRepository.cadastrar(produto);
    return novoProduto;
  }
}

const cadastrarProdutoService = new CadastrarProdutoService();

export { cadastrarProdutoService };