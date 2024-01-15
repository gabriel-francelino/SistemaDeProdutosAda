import { AppError } from "../errors/AppError.js";

class ErrorHandlerMiddleware {
  execute(err, req, res, next) {
    if (err) {
      if (err instanceof AppError) {
        return res.status(err.status).send({ mensagem: err.mensagem });
      }

      console.error(err);
      return res.status(500).send({ mensagem: 'Erro interno do servidor' });
    }

    next();
  }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware();

export { errorHandlerMiddleware };