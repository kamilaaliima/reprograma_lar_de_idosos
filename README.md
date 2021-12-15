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

<p align="justify"> Este projeto final consiste em uma API fundamentada no CRUD, que são: CREATE (CRIAR), READ (LER), UPDATE (ATUALIZAR) e DELETE (DELETAR).

<br><br>


## 🛠️ Tecnologias Utilizadas

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Bibliotecas Aplicadas

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [modemon](https://www.npmjs.com/package/nodemon)

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
    
    
    
