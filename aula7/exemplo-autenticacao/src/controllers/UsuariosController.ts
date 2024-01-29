import { NextFunction, Request, Response } from "express";

import { cadastrarUsuarioService } from '../services/CadastrarUsuarioService';
import { loginUsuarioService } from "../services/LoginUsuarioService";

class UsuariosController {
  signUp(req: Request, res: Response, next: NextFunction) {
    const { nome, email, senha } = req.body;
    const usuario = cadastrarUsuarioService.execute({ nome, email, senha });
    res.status(201).send(usuario);
    next();
  }

  signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const resposta = loginUsuarioService.execute({ email, senha });
      res.send(resposta);
      next();
    } catch(err) {
      next(err);
    }
  }
}

const usuariosController = new UsuariosController();

export { usuariosController };