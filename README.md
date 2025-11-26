API de Pontos de Vacinação – Projeto Integrador (ADS)

Este projeto consiste em uma API REST desenvolvida em Node.js + Express, com o objetivo de disponibilizar dados sobre cidades e pontos de vacinação. Foi desenvolvido como parte do Projeto Integrador.
Tecnologias Utilizadas:
- Node.js
- Express
- JavaScript
- Arquitetura em camadas (Routes, Controllers, Services)
  
Estrutura do Projeto
PROJETO-INTEGRADOR-API-VACINA/

│
├── server.js

├── package.json
│

└── src/

├── routes.js
│

├── controllers/

│ ├── citiesController.js

│ └── vaccinationPointsController.js
│

└── services/

├── citiesService.js

└── vaccinationPointsService.js

A arquitetura segue a divisão em camadas (MVC simplificado):
Routes: gerencia os endpoints da API
Controllers: recebe a requisição e envia resposta
Services: contém os dados e regras de negócio

Como Rodar o Projeto
Instalar o Node.js
Para verificar:
bash
node -v
npm -v

Clonar o repositório
git clone https://github.com/luckamelo/PROJETO-INTEGRADOR-API-VACINA.git

Entrar na pasta do projeto
cd PROJETO-INTEGRADOR-API-VACINA

Instalar dependências
npm install

Iniciar o servidor
npm start

Acessando a API
Com o servidor rodando, abra no navegador:
http://localhost:3000/
A API retornará:
API de Vacinação – funcionando!

Endopoints disponíveis
Listar todas as cidades
GET /cities
Exemplo de resposta:
[
{ "id": 1, "name": "Maceió" },
{ "id": 2, "name": "Arapiraca" }
]

Buscar uma cidade específica
GET /cities/:id
Exemplo:
/cities/1
Resposta:
{ "id": 1, "name": "Maceió" }

Para cidade inexistente:
{ "error": "Cidade não encontrada" }

Listar pontos de vacinação por cidade
GET /vaccination-points/:cityId
Exemplo:
/vaccination-points/1
Resposta:
[
{
"id": 101,
"cityId": 1,
"name": "UBS Ponta Verde",
"address": "Rua Engenheiro Mário de Gusmão, 500 - Ponta Verde, Maceió",
"openingHours": "08:00 - 17:00",
"vaccinesAvailable": ["Sarampo", "Meningite", "Pólio"]
}
]

Como Testar a API
Pode ser testada usando:
•	Navegador
•	Postman
•	Insomnia
•	Thunder Client (VS Code)

Exemplo no Postman:
GET → http://localhost:3000/cities
GET → http://localhost:3000/cities/1
GET → http://localhost:3000/vaccination-points/1

Objetivo do Projeto:
Demonstrar domínio de API REST utilizando Node.js
Criar uma solução modular seguindo boas práticas
Aplicar conceitos de rotas, lógica de negócio e controle de dados
Disponibilizar pontos de vacinação de maneira organizada

Autor
Lucas Melo

Projeto desenvolvido para o curso de Análise e Desenvolvimento de Sistemas (ADS).

