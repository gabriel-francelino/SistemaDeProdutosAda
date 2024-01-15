class TempoDeRespostaMiddleware {
  executeBefore(req, res, next) {
    console.time('tempo_de_resposta');
    next();
  }

  executeAfter(req, res, next) {
    console.timeEnd('tempo_de_resposta');
    next();
  }
}

const tempoDeRespostaMiddleware = new TempoDeRespostaMiddleware();

export { tempoDeRespostaMiddleware };