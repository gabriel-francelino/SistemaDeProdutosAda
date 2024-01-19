import { StatusCodes } from "http-status-codes";
import { AppError } from "../../errors/AppError";
import { Compra } from "../../models/Compra";
import { comprasRepository } from "../../repositories/ComprasRepository";
import { buscarProdutoService } from "../produtos/BuscarProdutoService";

class BuscarCompraService {
    execute(id: string): Compra {
        const compra: Compra | undefined = comprasRepository.buscar(id);

        if (!compra) {
            throw new AppError('Compra não encontrada', StatusCodes.NOT_FOUND);
        }

        return compra;
    }
}

const buscarCompraService = new BuscarCompraService();

export { buscarCompraService };