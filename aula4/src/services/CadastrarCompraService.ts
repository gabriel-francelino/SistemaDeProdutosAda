import { CompraDTO } from "../dto/CompraDTO";
import { Compra, ItemCompra } from "../models/Compra";
import { Produto } from "../models/Produto";
import { comprasRepository } from "../repositories/ComprasRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

class CadastrarCompraService {
    execute({ nomeComprador, itens }: CompraDTO): Compra {
        console.log(itens);
        let itensCompra: ItemCompra[] = [];
        for (const item of itens) {
            const produto: Produto = produtosRepository.buscar(item.idProduto);
            const quantidade: number = item.quantidade;
            const novoItem: ItemCompra = { produto, quantidade };
            console.log(novoItem);
            itensCompra.push(novoItem);
        }
        const compra = { nomeComprador, dataCompra: new Date(), itensCompra };
        return comprasRepository.cadastrar(compra);
    }
}

const cadastrarCompraService = new CadastrarCompraService();

export { cadastrarCompraService };