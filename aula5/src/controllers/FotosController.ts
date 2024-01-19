import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import path from 'path';

import { cadastrarFotoService } from '../services/CadastrarFotoService';
import { Foto } from '../models/Foto';


class FotosController {

  cadastrar(req: Request, res: Response, next: NextFunction) {
    const { originalname, mimetype, filename, size } = req.file;

    const foto: Foto = {nome: originalname, tipo: mimetype, hash: filename, tamanho: size}; 
    
    const novaFoto: Foto = cadastrarFotoService.execute(foto);
    res.status(StatusCodes.CREATED).send(novaFoto);
    next();    
  }
}

const fotosController = new FotosController();

export { fotosController };