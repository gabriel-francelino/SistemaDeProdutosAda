import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import multer from 'multer';
import { v4 as uuid } from 'uuid';

import { cadastrarFotoService } from "../services/CadastrarFotoService";
import { AppError } from "../errors/AppError";

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, 'uploads/');
  },
  filename: (req: Request, file: Express.Multer.File, cb: Function) => {
    // Padrão de nomenclatura: nomeOriginal_timestamp.extensao
    const { originalname } = file; // agua-com-gas.jpeg
    const nameParts = originalname.split('.'); // ['agua-com-gas', 'jpeg']
    const fileName = `${nameParts[0]}_${uuid()}.${nameParts[1]}`;

    cb(null, fileName);
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new Error('Tipo de arquivo inválido'));
  }
}

const limits = {
  fileSize: 2048 * 1024 // 1MB
}

const upload = multer({ storage, fileFilter, limits }).single('arquivo');

class FotosController {
  cadastrar(req: Request, res: Response, next: NextFunction) {

    upload(req, res, (err) => {
      if (err) {
        console.log(err.code)
        if (err instanceof multer.MulterError) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            // console.error('Tamanho máximo excedido');
            next(new AppError('Tamanhp máximo do arquivo excedido (2MB)'));
          }
        }else{
          next(new AppError('Erro de arquivo'));
        }
      } else {
        console.log(req.file)
        const { originalname, mimetype, filename, size } = req.file;
        const foto = cadastrarFotoService.execute({
          nome: originalname,
          tipo: mimetype,
          hash: filename,
          tamanho: size
        });
        res.status(StatusCodes.CREATED).send(foto);
        next();
      }
    });
  }
}

const fotosController = new FotosController();

export { fotosController };