import { StatusCodes } from "http-status-codes";
import { CompraDTO } from "../dto/CompraDTO";
import { AppError } from "../errors/AppError";
import { Compra, ItemCompra } from "../models/Compra";
import { Produto } from "../models/Produto";
import { comprasRepository } from "../repositories/ComprasRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

class CadastrarCompraService {
    execute({ nomeComprador, itens }: CompraDTO): Compra {

        if (!nomeComprador) {
            throw new AppError('Nome do comprador é obrigatório', StatusCodes.BAD_REQUEST);
        }

        if (itens.length < 1) {
            throw new AppError('Não é possível efetuar uma compra sem produtos', StatusCodes.BAD_REQUEST);
        }  

        let itensCompra: ItemCompra[] = this.criarListaDeCompras(itens);
        const compra = { nomeComprador, dataCompra: new Date(), itensCompra };
        return comprasRepository.cadastrar(compra);
    }

    private criarListaDeCompras(itens: any): ItemCompra[] {
        let itensCompra: ItemCompra[] = [];
        for (const item of itens) {
            const quantidade: number = item.quantidade;

            if(quantidade < 1) {
                throw new AppError('A quantidade do protudo deve ser maior que 0', StatusCodes.BAD_REQUEST);
            }

            const produto: Produto = produtosRepository.buscar(item.idProduto);
            const novoItem: ItemCompra = { produto, quantidade };
            console.log(novoItem);
            itensCompra.push(novoItem);
        }
        return itensCompra;
    }
}

const cadastrarCompraService = new CadastrarCompraService();

export { cadastrarCompraService };