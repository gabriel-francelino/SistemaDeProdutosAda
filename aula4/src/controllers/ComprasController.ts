import { NextFunction, Request, Response } from 'express';
import { cadastrarCompraService } from '../services/compras/CadastrarCompraService';
import { StatusCodes } from 'http-status-codes';
import { Compra } from '../models/Compra';
import { CompraDTO } from '../dto/CompraDTO';
import { listarCompraService } from '../services/compras/ListarCompraService';
import { buscarCompraService } from '../services/compras/BuscarCompraService';

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

    listar(req: Request, res: Response, next: NextFunction){
        try {
            const compras = listarCompraService.execute();
            res.send(compras);
            next();
        } catch (error) {
            next(error);
        }
    }

    buscar(req: Request, res: Response, next: NextFunction){
        try {
            const {id} = req.params;
            const compras = buscarCompraService.execute(id);
            res.send(compras);
            next();
        } catch (error) {
            next(error);
        }
    }
}

const comprasController = new ComprasController();

export { comprasController }