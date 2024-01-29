import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError";
import { produtosRepository } from "../repositories/ProdutosRepository";
import { fotosRepository } from "../repositories/FotosRepository";

class AssociarProdutoFotoService {
  execute(idProduto: string, idFoto: string) {
    const produto = produtosRepository.buscar(idProduto);

    if (!produto) {
      throw new AppError('Produto não encontrado', StatusCodes.NOT_FOUND);
    }

    const foto = fotosRepository.buscar(idFoto);

    if (!foto) {
      throw new AppError('Foto não encontrada', StatusCodes.NOT_FOUND);
    }

    produto.foto = foto;
    const produtoEditado = produtosRepository.editar(produto);
    return produtoEditado;
  }
}

const associarProdutoFotoService = new AssociarProdutoFotoService();

export { associarProdutoFotoService };