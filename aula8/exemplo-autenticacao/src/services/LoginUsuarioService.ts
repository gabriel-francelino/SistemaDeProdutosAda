import jwt from 'jsonwebtoken';
import { criptografar } from "../helpers/CryptHelper";
import { usuariosRepository } from "../repositories/UsuariosRepository";

interface Request {
  email: string;
  senha: string;
}

class LoginUsuarioService {
  async execute({ email, senha }: Request) {
    const usuario = await usuariosRepository.buscarPorEmail(email);

    if (!usuario) {
      throw new Error('Usuário ou senha inválidos');
    }

    const senhaInformada = criptografar(senha);
    if (usuario.senha !== senhaInformada) {
      throw new Error('Usuário ou senha inválidos');
    }

    const secret = process.env.JWT_SECRET!;

    const accessToken = jwt.sign(
      { id: usuario.id, nome: usuario.nome },
      secret,
      { expiresIn: '1d' }
    );

    return  { accessToken };
  }
}

const loginUsuarioService = new LoginUsuarioService();

export { loginUsuarioService };