import { v4 as uuid } from 'uuid';
import { Usuario } from "../models/Usuario";

class UsuariosRepository {
  private usuarios: Usuario[] = [];

  cadastrar(usuario: Usuario) {
    usuario.id = uuid();
    this.usuarios.push(usuario);
    return usuario;
  }

  buscarPorEmail(email: string) {
    return this.usuarios.find(item => item.email === email);
  }
}

const usuariosRepository = new UsuariosRepository();

export { usuariosRepository };