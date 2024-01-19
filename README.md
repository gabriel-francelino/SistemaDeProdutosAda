# SistemaDeProdutosAda

Módulo de Programação Web com `Express.js` da formação Back-end da [Ada Tech](https://ada.tech/sou-aluno/programas/ifood-vem-ser-tech).

## Conteúdo

- [Aula 1](./aula1/cadastro-produtos/): Introdução ao Express.js, rotas e métodos http.
- [Aula 2](./aula2/): Padrão de projeto MVC.
- [Aula 3](./aula3/): Middlewares e Tratamento de erros.
- [Aula 4](./aula4/): Conversão de JavaScript para Typescript.
- [Aula 5](./aula5/): Uploads de arquivos.

## Endpoints

### Produtos

- POST `/produtos` - Cadastra um novo produto
    ```json
    {
	    "nome":"Fanta Laranja 600ml",
	    "preco":5.99
    }
    ```

- GET `/produtos` - Retorna todas os produtos cadastrados

- GET `/produtos/:id` - Retorna o produto com o id especificado

- DELETE `/produtos/:id` - Deleta o produto com o id especificado

- PUT `/produtos/:id` - Atualiza o produto com o id especificado

- PATCH `/produtos/:id/foto` - inclui uma foto ao produto com o id especificado
    ```json
    {
	    "idFoto":"c1d48f8d-bb4d-434d-b3b3-289240a1c042"
    }
    ```

### Compras

- POST `/compras` - Cadastra uma nova compra
    ```json
    {
	    "nomeComprador":"Gabriel",
	    "itens":[
	    	{
	    	    "idProduto":"5acdb7cf-4f09-449e-beee-732915b9a81e",
	    	    "quantidade":1
	    	},
	    	{
	    	    "idProduto":"f241520b-e0a0-476f-bb5f-751b9b0ad588",
	    	    "quantidade":2
	    	}
	    ]
    }
    ```

- GET `/compras` - Retorna todas as compras cadastradas

- GET `/compras/:id` - Retorna a compra com o id especificado

<!-- - DELETE `/compras/:id` - Deleta a compra com o id especificado

- PUT `/compras/:id` - Atualiza a compra com o id especificado -->

### Fotos

- POST `/fotos` - rota para fazer o upload de fotos dos produtos
    - Obs: Arquivo de foto enviado via insomina ou postman

## Como executar

1. Acesse o projeto da aula desejada:
```bash
cd aula5/
```

2. Instalando dependências:
```bash
npm i 
```

3. Executando o projeto:
```bash
npm start
```

## Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
<!-- ![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) -->