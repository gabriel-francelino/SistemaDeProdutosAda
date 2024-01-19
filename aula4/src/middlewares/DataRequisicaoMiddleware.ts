import { NextFunction, Request, Response } from "express";

class DataRequisicaoMiddleware {
  static DATE_FORMATTER = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });

  execute(req: Request, res: Response, next: NextFunction) {
    const data = DataRequisicaoMiddleware.DATE_FORMATTER.format(new Date());
    console.log(`Requisição recebida em: ${data}`);

    next();
  }
}

const dataRequisicaoMiddleware = new DataRequisicaoMiddleware();

export { dataRequisicaoMiddleware };