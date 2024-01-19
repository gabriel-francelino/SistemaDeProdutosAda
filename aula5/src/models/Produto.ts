import { Foto } from "./Foto";

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  foto?: Foto;
}