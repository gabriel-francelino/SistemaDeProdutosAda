import { Compra } from "../../models/Compra";
import { comprasRepository } from "../../repositories/ComprasRepository";

class ListarCompraService {
    execute(): Compra[] {
        return comprasRepository.listar();
    }
}

const listarCompraService = new ListarCompraService();

export { listarCompraService };