import { NextFunction, Request, Response } from 'express';
import { cadastrarCompraService } from '../services/CadastrarCompraService';
import { StatusCodes } from 'http-status-codes';
import { Compra } from '../models/Compra';
import { CompraDTO } from '../dto/CompraDTO';

class ComprasController {
    cadastrar(req: Request, res: Response, next: NextFunction) {
        try {
            const compraDTO: CompraDTO = req.body;
            const novaCompra: Compra = cadastrarCompraService.execute(compraDTO);
            res.status(StatusCodes.CREATED).send(novaCompra);
            next();
        } catch (error) {
            next(error);
        }
    }
}

const comprasController = new ComprasController();

export { comprasController }