<h1 align="center"> Reprograma - projeto para Lar de Idosos </h1>


<img src="./src/assets/casacanva1.png" width="100%">


## Sumário  


* [Apresentação](#apresentação)
* [Funcionalidades](#funcionalidades)
* [Aprendizados](#aprendizados)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Arquitetura MVC](#arquitetura-mvc)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Rotas](#rotas)
* [Referências](#referencias)
* [Conclusão](#conclusao)




## 💻 Apresentação

<br>

<p align="justify">API desenvolvida como projeto final para conclusão do bootcamp de Backend da {Reprograma}. 

<p align="justify">Sempre tive uma ligação com pessoas idosas, parte disso por ter sido criada pela minha avó, então surgiu a vontade de criar esse projeto em prol de ajudar instituições, casas para idosos, que no seu dia dia dependam de ajuda voluntária e de doações. 

<p align="justify">Essa API visa otimizar a organização dos dados das instituições, levando mais segurança por meio dos registros dos idosos residentes, resposáveis, funcionários, voluntários da casa e visitantes. 


<br><br>


## 🔗 Link


<br><br>

## ⚙️ Funcionalidades

- Cadastro dos idosos residentes, seus responsáveis, funcionários, voluntário e visitantes;
- Registro dos horários e data de visita;
- Registro do horários dos funcionários e voluntários;
- Simplificar o dia a dia da instituição levando segurança aos que moram e trabalham nela;

<br><br>

## 📚 Aprendizados

<p align="justify"> Este projeto final consiste em uma API fundamentada no CRUD, integrado com o banco de dados. Nela podemos listar os funcionários, idosos, responsáveis por esses idosos, por exemplo, cadastrar, atualizar e deletar cadastros.

- Definição CRUD: 
    
      CREATE (CRIAR)
      READ (LER)
      UPDATE (ATUALIZAR) 
      DELETE (DESTRUIÇÃO)


<br><br>


## 🛠️ Tecnologias Utilizadas


<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-aqua">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-aqua">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-aqua">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-aqua">
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-aqua">
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-aqua">
<a  href="https://dashboard.heroku.com/apps"><img  alt="Heroku"  src="https://img.shields.io/badge/Heroku-aqua">
<a  href=""><img  alt="Mit"  src="https://img.shields.io/badge/Licence MIT-aqua"></a>


### Bibliotecas Aplicadas

<p  align="justify">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-aqua">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-aqua">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-aqua">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-aqua">
<a  href="https://www.npmjs.com/package/cors"><img  alt="npm version"  src="https://img.shields.io/badge/cors-2.8.5-aqua">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-aqua">

<br>


## 📁 Arquitetura MVC

```
 📁 reprograma_lar_de_idosos
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 residentesControllers.js
   |         |- 📑 funcionariosControllers.js
   |         |- 📑 voluntariosControllers.js 
   |         |- 📑 responsaveisControllers.js 
   |         |- 📑 visitantesControllers.js 
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 funcionariosSchema.js
   |         |- 📑 residentesSchema.js
   |         |- 📑 responsaveisSchema.js
   |         |- 📑 visitantesSchema.js
   |         |- 📑 voluntariosSchema.js
   |
   |    |- 📁 routes
   |         |- 📑 index.js 
   |         |- 📑 funcionariosRoutes.js 
   |         |- 📑 residentesRoutes.js 
   |         |- 📑 responsaveisRoutes.js 
   |         |- 📑 voluntatiosRoutes.js 
   |         |- 📑 visitantesRoutes.js 
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js

```
<br>

## 🔃 Rotas

* local: http://localhost:8084

* Heroku:

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>


## 🔃 Manipulação das Rotas de residentes:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/residentes`           | Retorna todos residentes             |
| GET          | `/nome`                 | Retorna  específico por nome    
| GET          | `//:id`          | Retorna  específico por id      |
| POST         | `//cadastrar`    | Cria/cadastra um novo           |
| PUT          | `//:id`          | Altera informações de um        |
| DELET        | `//:id`          | Remove um  específico           |

<br>


## 🚧 Projeto em Construção (futuras melhorias)

<br>

### Minhas Redes

- [LinkedIn](gfhgh)
- [GitHub]()

###  💜 
 
<br> 
    
## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).
    
    
    
