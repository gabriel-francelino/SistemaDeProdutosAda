export interface Compra {
  id?: string;
  nomeComprador: string;
  itens: ItemCompra[];
  data: Date;
  valorTotal: number;
}

interface ItemCompra {
  idProduto: string;
  quantidade: number;
}