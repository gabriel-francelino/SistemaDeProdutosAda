import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { cadastrarCompraService } from '../services/CadastrarCompraService';

class ComprasController {
  cadastrar(req: Request, res: Response, next: NextFunction) {
    try {
      const compra = cadastrarCompraService.execute(req.body);
      return res.status(StatusCodes.CREATED).send(compra);
    } catch (err) {
      next(err);
    }
  }
}

const comprasController = new ComprasController();

export { comprasController };