interface ItemCompraDTO {
    idProduto: string;
    quantidade: number;
}

export interface CompraDTO {
    nomeComprador: string;
    itens: ItemCompraDTO[];
}