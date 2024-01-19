import { Produto } from "./Produto";

export interface ItemCompra {
    produto: Produto;
    quantidade: number;
}

export interface Compra {
    id?: string;
    nomeComprador: string;
    dataCompra: Date;
    itensCompra?: ItemCompra[];   
}