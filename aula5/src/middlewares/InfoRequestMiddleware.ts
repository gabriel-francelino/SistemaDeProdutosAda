import { NextFunction, Request, Response } from "express";

class InfoRequestMiddleware {
  execute(req: Request, res: Response, next: NextFunction) {
    console.log(`Request Info: ${req.method} ${req.originalUrl}`);
  
    next();
  }
}

const infoRequestMiddleware = new InfoRequestMiddleware();

export { infoRequestMiddleware };