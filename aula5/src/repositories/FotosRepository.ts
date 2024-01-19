import { v4 as uuid } from 'uuid';
import { Foto } from '../models/Foto';

class FotosRepository {
    private fotos: Foto[] = [];

    cadastrar(foto: Foto) {
        foto.id = uuid();
        this.fotos.push(foto);

        return foto;
    }

    buscar(id: string) {
        return this.fotos.find(foto => foto.id === id);
    }
}

const fotosRepository = new FotosRepository();

export { fotosRepository };