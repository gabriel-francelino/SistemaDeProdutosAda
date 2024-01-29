import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import multer from "multer";
import { StatusCodes } from "http-status-codes";

class ErrorHandlerMiddleware {
  execute(err: Error | AppError, req: Request, res: Response, next: NextFunction) {
    if (err) {
      if (err instanceof AppError) {
        return res.status(err.status).send({ mensagem: err.mensagem });
      }
      return res.status(500).send({ mensagem: 'Erro interno do servidor' });
    }

    next();
  }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware();

export { errorHandlerMiddleware };