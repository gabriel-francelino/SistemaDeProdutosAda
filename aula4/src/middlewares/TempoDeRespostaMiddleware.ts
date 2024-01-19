import { NextFunction, Request, Response } from "express";

class TempoDeRespostaMiddleware {
  executeBefore(req: Request, res: Response, next: NextFunction) {
    console.time('tempo_de_resposta');
    next();
  }

  executeAfter(req: Request, res: Response, next: NextFunction) {
    console.timeEnd('tempo_de_resposta');
    next();
  }
}

const tempoDeRespostaMiddleware = new TempoDeRespostaMiddleware();

export { tempoDeRespostaMiddleware };