import { fotosRepository } from "../repositories/FotosRepository";
import { Foto } from "../models/Foto";

class CadastrarFotoService {
  execute(foto: Foto) {
    const novaFoto: Foto = fotosRepository.cadastrar(foto);
    return novaFoto;
  }
}

const cadastrarFotoService = new CadastrarFotoService();

export { cadastrarFotoService };