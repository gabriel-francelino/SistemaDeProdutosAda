# Trabalho Aula 06

## Requisitos:

Utilizando o projeto de cadastro de produtos desenvolvido em sala de aula, configure o upload de arquivos para atender aos seguintes requisitos:
- Os arquivos devem ser salvos com o nome no formato `nomeOriginal_UUID.extensao`
- Não deve ser possível salvar arquivos com mais de 2Mb. Caso um arquivo com mais de 2Mb seja enviado, deve-se retornar uma resposta com status 400 e mensagem "Tamanho máximo do arquivo excedido (2Mb)"
- Somente imagens devem ser permitidas. Se um arquivo que não seja imagens for enviado retornar uma resposta com status 400 e mensagem "Formato de arquivo inválido. Arquivo deve ser uma imagem".