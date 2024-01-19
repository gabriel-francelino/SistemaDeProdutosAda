import { v4 as uuid } from 'uuid';
import { Compra, ItemCompra } from '../models/Compra';

class ComprasRepository {
    private compras: Compra[] = [];

    cadastrar(compra): Compra {
        compra.id = uuid()
        this.compras.push(compra);
        return compra;
    }
}

const comprasRepository = new ComprasRepository();

export { comprasRepository };