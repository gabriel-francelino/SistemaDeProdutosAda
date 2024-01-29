import { v4 as uuid } from 'uuid';
import { Usuario } from "../models/Usuario";
import { db } from '../database';

class UsuariosRepository {
  private usuarios: Usuario[] = [];

  async cadastrar(usuario: Usuario) {
    usuario.id = uuid();
    const sql = 'INSERT INTO usuarios (id, nome, email, senha) VALUES (?, ?, ?, ?)';
    const values = [
      usuario.id,
      usuario.nome,
      usuario.email,
      usuario.senha
    ];

    await new Promise((resolve, reject) => {
      db.query(sql, values, (error, result) => {
        if (error) return reject(error);

        return resolve(result[0]);
      });
    });

    const novoUsuario = await this.buscarPorEmail(usuario.email);
    
    return novoUsuario as Usuario;
  }

  async buscarPorEmail(email: string) {
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    const values = [ email ];

    // Promise -> promessa -> algo que vai acontecer
    const usuario = await new Promise((resolve, reject) => {
      db.query(sql, values, (error, result) => {
        if (error) return reject(error);

        return resolve(result[0]);
      });
    });

    return usuario as Usuario;
  }
}

const usuariosRepository = new UsuariosRepository();

export { usuariosRepository };