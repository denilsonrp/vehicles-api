# API de veículos


### Configuração do projeto:

- Para instalação dos pacotes, execute ``` yarn install ```.

- Duplicar o arquivo ```.env.example``` e renomeá-lo para ```.env```.

- O arquivo ```.env``` contém as variáveis de ambiente que o projeto necessita para executar. Preencha as variáveis de acordo com as suas configurações de banco de dados MySQL.

- Executar ``` yarn knex migrate:latest ```, para criar a tabela necessária no banco de dados.


### Executando o projeto:

- Para rodar o projeto, execute ``` node app.js ```. A API será executada na porta preenchida na variável ```APP_PORT``` do arquivo ```.env```.


### Endpoints:

- `GET /vehicles`

Retorna um array com todos os veículos cadastrados no banco de dados.
Nessa rota é possível passar o parâmetro ```vehicle``` para buscar por veículos que correspondam ao termo pesquisado, e o parâmetro ```page```, que indica a paginação atual dos registros.

- `GET /vehicles/:id`

Retorna um único veículo cadastrado no banco de dados, considerando o parâmetro id.

- `POST /vehicles/`

Cadastra um novo veículo no banco de dados. A rota espera receber o payload a seguir:

```
"vehicle": "Corsa", // obrigatório
"brand": "Chevrolet", // obrigatório
"year": 2000, // obrigatório
"description": "Corsa Top",
"sold": true
```

- `PUT /vehicles/:id`

Edita um único veículo cadastrado no banco de dados, considerando o parâmetro id.

- `DELETE /vehicles/:id`

Remove um único veículo cadastrado no banco de dados, considerando o parâmetro id.
