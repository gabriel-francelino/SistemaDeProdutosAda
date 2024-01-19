import { v4 as uuid } from 'uuid';
import { Compra, ItemCompra } from '../models/Compra';
import { AppError } from '../errors/AppError';

class ComprasRepository {
    private compras: Compra[] = [];

    cadastrar(compra): Compra {
        compra.id = uuid()
        this.compras.push(compra);
        return compra;
    }

    listar(): Compra[] {
        return this.compras;
    }

    buscar(id): Compra | undefined {
        const compra = this.compras.find(compra => compra.id === id);

        return compra;
    }
}

const comprasRepository = new ComprasRepository();

export { comprasRepository };