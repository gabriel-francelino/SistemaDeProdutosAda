import { CompraDTO } from "../dto/CompraDTO";
import { Compra, ItemCompra } from "../models/Compra";
import { Produto } from "../models/Produto";
import { comprasRepository } from "../repositories/ComprasRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

class CadastrarCompraService {
    execute({ nomeComprador, itens }: CompraDTO): Compra {
        let itensCompra: ItemCompra[] = CadastrarCompraService.criarListaDeCompras(itens);
        const compra = { nomeComprador, dataCompra: new Date(), itensCompra };
        return comprasRepository.cadastrar(compra);
    }

    private static criarListaDeCompras(itens: any): ItemCompra[] {
        let itensCompra: ItemCompra[] = [];
        for (const item of itens) {
            const produto: Produto = produtosRepository.buscar(item.idProduto);
            const quantidade: number = item.quantidade;
            const novoItem: ItemCompra = { produto, quantidade };
            console.log(novoItem);
            itensCompra.push(novoItem);
        }
        return itensCompra;
    }
}

const cadastrarCompraService = new CadastrarCompraService();

export { cadastrarCompraService };