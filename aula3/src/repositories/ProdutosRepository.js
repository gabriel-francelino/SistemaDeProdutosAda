import { v4 as uuid } from 'uuid';

class ProdutosRepository {
  #produtos = [
    {
      id: "f241520b-e0a0-476f-bb5f-751b9b0ad588",
      nome: "Água 500ml",
      preco: 2.99
    },
    {
      id: "5acdb7cf-4f09-449e-beee-732915b9a81e",
      nome: "Refrigerante 300ml",
      preco: 4.99
    }
  ];

  listar() {
    return this.#produtos;
  }

  buscar(id) {
    return this.#produtos.find(item => item.id === id);
  }

  cadastrar(produto) {
    produto.id = uuid();
    this.#produtos.push(produto);

    return produto;
  }

  editar(produto) {
    const index = this.#produtos.findIndex(item => item.id === produto.id);
    this.#produtos[index] = produto;
    return produto;
  }

  excluir(id) {
    const index = this.#produtos.findIndex(item => item.id === id);
    const produto = this.#produtos[index];
    this.#produtos.splice(index, 1);
    return produto;
  }
}

const produtosRepository = new ProdutosRepository();

export { produtosRepository };