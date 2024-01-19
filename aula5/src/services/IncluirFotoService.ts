import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError";
import { Produto } from "../models/Produto";
import { fotosRepository } from "../repositories/FotosRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

class IncluirFotoService {
    execute(idProduto: string, idFoto: string): Produto {
        const produto = produtosRepository.buscar(idProduto);

        if(!produto){
            throw new AppError('Produto não foi encontrado', StatusCodes.NOT_FOUND);
        }

        if (produto.foto) {
            throw new AppError('Cada produto pode ter somente uma foto', StatusCodes.NOT_ACCEPTABLE)
        }

        const foto = fotosRepository.buscar(idFoto);

        if(!foto){
            throw new AppError('Foto não foi encontrada', StatusCodes.NOT_FOUND);
        }

        produto.foto = foto;

        return produtosRepository.editar(produto);
    }
}

const incluirFotoService = new IncluirFotoService();

export { incluirFotoService };