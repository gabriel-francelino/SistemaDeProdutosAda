import { criptografar } from '../helpers/CryptHelper';
import { usuariosRepository } from '../repositories/UsuariosRepository';

interface Request {
  nome: string;
  email: string;
  senha: string;
}

class CadastrarUsuarioService {
  execute({ nome, email, senha }: Request) {
    const senhaCriptografada = criptografar(senha);
    const usuario = usuariosRepository.cadastrar({ 
      nome, 
      email, 
      senha: senhaCriptografada 
    });
    return usuario;
  }
}

const cadastrarUsuarioService = new CadastrarUsuarioService();

export { cadastrarUsuarioService };