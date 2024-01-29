import { fotosRepository } from "../repositories/FotosRepository";

interface Request {
  nome: string;
  tipo: string;
  hash: string;
  tamanho: number;
}

class CadastrarFotoService {
  execute(data: Request) {
    const foto = fotosRepository.cadastrar(data);
    return foto;
  }
}

const cadastrarFotoService = new CadastrarFotoService();

export { cadastrarFotoService };