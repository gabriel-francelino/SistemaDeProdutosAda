import { AppError } from "../errors/AppError";
import { Compra } from "../models/Compra";
import { comprasRepository } from "../repositories/ComprasRepository";
import { produtosRepository } from "../repositories/ProdutosRepository";

interface Request {
  nomeComprador: string;
  itens: RequestItem[];
}

interface RequestItem {
  idProduto: string;
  quantidade: number;
}

class CadastrarCompraService {
  execute({ nomeComprador, itens }: Request) {
    if (!nomeComprador) {
      throw new AppError('Nome do comprar é obrigatório');
    }

    if (!itens || itens.length === 0) {
      throw new AppError('Itens de compra são obrigatórios');
    }

    let valorTotal = 0;
    for (const item of itens) {
      const produto = produtosRepository.buscar(item.idProduto);

      if (!produto) {
        throw new AppError('Produto não encontrado');
      }

      valorTotal += produto.preco * item.quantidade;
    }

    const novaCompra: Compra = {
      nomeComprador,
      itens,
      data: new Date(),
      valorTotal
    };

    return comprasRepository.cadastrar(novaCompra);
  }
}

const cadastrarCompraService = new CadastrarCompraService();

export { cadastrarCompraService };