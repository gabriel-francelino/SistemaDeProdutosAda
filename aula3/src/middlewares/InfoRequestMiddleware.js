class InfoRequestMiddleware {
  execute(req, res, next) {
    console.log(`Request Info: ${req.method} ${req.originalUrl}`);
  
    next();
  }
}

const infoRequestMiddleware = new InfoRequestMiddleware();

export { infoRequestMiddleware };