import { v4 as uuid } from 'uuid';

import { Foto } from "../models/Foto";

class FotosRepository {
  private fotos: Foto[] = [];

  buscar(id: string) {
    return this.fotos.find(item => item.id === id);
  }

  cadastrar(foto: Foto) {
    foto.id = uuid();
    this.fotos.push(foto);

    return foto;
  }
}

const fotosRepository = new FotosRepository();

export { fotosRepository };