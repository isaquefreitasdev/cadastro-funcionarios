# README

Este repositório contém um código Node.js para um aplicativo de gerenciamento de funcionários. O aplicativo utiliza o framework Express.js e o banco de dados MongoDB para realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de funcionários.

## Pré-requisitos

Antes de executar o aplicativo, verifique se você possui os seguintes pré-requisitos:

- Node.js instalado (versão 10 ou superior)
- MongoDB instalado e em execução

## Instalação

1. Clone este repositório para o seu ambiente local.

```
git clone https://github.com/isaquefreitasdev/cadastro-funcionarios
```

2. Navegue até o diretório clonado.

```
cd cadastro-funcionarios
```

3. Instale as dependências do projeto.

```
npm install
```

## Configuração

1. Abra o arquivo `app.js` e localize a linha onde a conexão com o MongoDB é estabelecida:

```javascript
mongoose.connect("mongodb+srv://<USUÁRIO>:<SENHA>@<URL DO CLUSTER>/<NOME DO BANCO DE DADOS>")
```

Substitua `<USUÁRIO>`, `<SENHA>`, `<URL DO CLUSTER>` e `<NOME DO BANCO DE DADOS>` pelas suas próprias credenciais e informações do MongoDB.

2. O aplicativo utiliza a porta 3000 por padrão. Caso deseje alterar a porta, abra o arquivo `app.js` e localize a seguinte linha:

```javascript
app.listen(3000, () => {
  console.log("listening on port 3000");
});
```

Altere o número da porta para o valor desejado.

## Uso

1. Inicie o servidor do aplicativo.

```
npm start
```

2. O servidor estará em execução e pronto para receber solicitações.

3. Para interagir com a API do aplicativo, você pode utilizar ferramentas como o Postman ou enviar solicitações HTTP diretamente.

## Rotas Disponíveis

- `GET /all`: Retorna todos os funcionários cadastrados.
- `GET /search/:cpf`: Busca um funcionário pelo CPF.
- `POST /add`: Cadastra um novo funcionário.
- `PUT /update`: Atualiza as informações de um funcionário.
- `DELETE /remove/:cpf`: Remove um funcionário pelo CPF.

Certifique-se de incluir os dados corretos nas solicitações POST e PUT, seguindo o formato especificado no modelo do funcionário.

## Modelo do Funcionário

O modelo do funcionário é definido no arquivo `models/employe.js` e possui os seguintes campos:

- `nome` (String, obrigatório, mínimo de 4 caracteres): Nome do funcionário.
- `cpf` (Number, obrigatório, exatamente 11 dígitos): CPF do funcionário.
- `rg` (Number, obrigatório, mínimo de 8 e máximo de 9 dígitos): RG do funcionário.
- `email` (String, obrigatório): E-mail do funcionário.
- `phone` (Number, obrigatório, máximo de 9 dígitos): Número de telefone do funcionário.
- `bankAccount` (Number, obrigatório, máximo de 20 dígitos): Número da conta bancária do funcionário.
- `money` (Number, obrigatório): Valor em dinheiro relacionado ao funcionário

.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).