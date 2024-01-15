import { produtosRepository } from "../repositories/ProdutosRepository.js";

class AtualizarProdutoService {
    execute(produto) {
        const produtoAtualizado = produtosRepository.atualizar(produto);

        if(!produto){
            return null;
        }

        return produtoAtualizado;
    }
}

const atualizarProdutoService = new AtualizarProdutoService();

export { atualizarProdutoService }