const express = require('express');
const { v4: uuid } = require('uuid');

const app = express();
app.use(express.json());

const produtos = [
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

app.get('/produtos', (req, res) => {
  res.status(200).send(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(produto => produto.id === id);

  !produto ? res.status(404).send('Produto não encontrado') : res.status(200).send(produto);
});

app.post('/produtos', (req, res) => {
  const id = uuid();
  const novo_produto = { id, ...req.body};
  produtos.push(novo_produto);

  res.status(201).send(novo_produto);
});

app.put('/produtos/:id', (req, res) => {
  const produto_atualizado = req.body;
  const { id } = req.params;

  const index = produtos.findIndex(produto => produto.id === id);

  if (index == -1) {
    res.status(404).send('Produto não encontrado');
  } else {
    produtos[index] = {id, ...produto_atualizado};
    res.status(200).send(produtos[index]);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});