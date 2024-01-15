import { produtosRepository } from "../repositories/ProdutosRepository.js";

class DeletarProdutoService {
    execute(id) {
        return produtosRepository.deletar(id);
    }
}

const deletarProdutoService = new DeletarProdutoService();

export { deletarProdutoService }