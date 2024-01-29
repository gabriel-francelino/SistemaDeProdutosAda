import { NextFunction, Request, Response } from "express";

import { cadastrarUsuarioService } from '../services/CadastrarUsuarioService';
import { loginUsuarioService } from "../services/LoginUsuarioService";

class UsuariosController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    const { nome, email, senha } = req.body;
    const usuario = await cadastrarUsuarioService.execute({ nome, email, senha });
    res.status(201).send(usuario);
    next();
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, senha } = req.body;
      const resposta = await loginUsuarioService.execute({ email, senha });
      res.send(resposta);
      next();
    } catch(err) {
      next(err);
    }
  }
}

const usuariosController = new UsuariosController();

export { usuariosController };