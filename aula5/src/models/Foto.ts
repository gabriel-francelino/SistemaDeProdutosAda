export interface Foto {
  id?: string;
  nome: string;
  tipo: string;
  hash: string;
  tamanho: number;
  foto?: Foto;
}