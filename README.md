# reprograma_lar_de_idosos
Projeto final turma on14 Back-end. 

<img src="./assets/casacanva.png" width="100%">

💻 Sobre o projeto






🚀 Descrição da API 



🔗 Link


⚙️ Funcionalidades/Objetivos


📚 Aprendizados
O projeto final consiste em uma API fundamentada no CRUD, que são: CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO).


🛠️ Tecnologias utilizadas nesse projeto

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

JavaScript
Git/Github
Node.js
MongoDb
MongoCompass
MongoDBatlas
Postman
Vscode
heroku
Pacotes Utilizados
Express
Nodemon
dotenv
Mongoose
cors
modemon
swagger-ui-express

📁 Arquitetura MVC
 📁 reprograma-estante-de-historias
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 residentesControllers.js
   |         |- 📑 funcionariosControllers.js
   |         |- 📑 voluntariosControllers.js 
   |         |- 📑 responsaveisControllers.js 
   |         |- 📑 visitantesControllers.js 
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |    |- 📁 models
   |         |- 📑 autor.js
   |         |- 📑 comentario.js
   |         |- 📑 livro.js
   |
   |    |- 📁 routes
   |         |- 📑 autores.routes.js 
   |         |- 📑 comentarios.routes.js
   |         |- 📑 livros.routes.js
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
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js


🔃 Rotas
local: http://localhost:7070

Heroku: https://estante-de-historias.herokuapp.com/

Utilize o Postman ou Insomnia para para chamar e testar os endpoints da API localmente ou via Heroku

🔃 Retorna a documentação no swagger
Swagger - Heroku: https://estante-de-historias.herokuapp.com/api-docs/

Método HTTP	Endpoint	Descrição
GET	http://localhost:7070/api-docs	documentação swagger
🔃 Retorna teste com apresentação
Método HTTP	Endpoint	Descrição
GET	http://localhost:7070/	Mensagem de apresentação (Index)
🔃 Manipulação das Rotas de Autores:
Método HTTP	Endpoint	Descrição
GET	/autores	Retorna todos os autores
GET	/nome	Retorna autor específico por nome
GET	/autores/:id	Retorna autor específico por id
POST	/autores/cadastrar	Cria/cadastra um novo autor
PUT	/autores/:id	Altera informações de um autor
DELET	/autores/:id	Remove um autor específico
🔃 Manipulação das Rotas de Comentarios:
Método HTTP	Endpoint	Descrição
GET	/comentario	Retorna todos os comentários
GET	/comentario/:id	Retorna um comentário específico por id
POST	/comentario/criar	Cria um novo comentário
PUT	/comentario/:id	Altera informações de um comentário
DELET	/comentario/:id	Remove um comentário específico
🔃 Manipulação das Rotas de Livros:
Método HTTP	Endpoint	Descrição
GET	/livros	Retorna todos os livros cadastrados
GET	/livros/genero	Retorna um livro específico gênero
GET	/livros/:id	Retorna um livro específico por id
POST	/livros/cadastrar	Cria/cadastra um novo livro
PUT	/livros/:id	Altera informações de um livro
PATCH	/livros/:id	atualiza informações por parte
DELET	/livros/:id	Remove um livro específico
POST	/livros/:id/like	Dar um like em um livro
POST	/livros/:id/dislike	Dar um dislike em um livro
✅ Dados para Collection Autores
id: autogerado e obrigatório
nome: texto e obrigatório
biografia: texto e obrigatório
email: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório

✅ API deve retornar seguinte JSON:
{
    "message": "Autor cadastrado com sucesso!",
    "autor": {
        "_id": "60df0799f34e3c6ebca1dce0",
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
        "__v": 0
    }
}

✅ Dados para Collection Livros
id: autogerado e obrigatório
like: opcional
titulo: texto e obrigatório
sinopse: texto e obrigatório
autor: referência do autor cadastrado previamente obrigatório
genero: texto e obrigatório
paginas: número e obrigatório
idioma: texto e obrigatório
exibição: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório

✅ API deve retornar seguinte JSON:
{
    "likes": 1,
    "criadoEm": "2021-07-02T12:43:39.099Z",
    "_id": "60df0a0382bb996448b380c0",
    "titulo": "O casamento",
    "sinopse": "PARA OS NOIVOS É O DIA MAIS IMPORTANTE DE SUAS VIDAS Meses atrás, os amigos diriam que o namoro de Plínio e Diana tinha prazo de validade. Eles se conheceram de um jeito bizarro, pensam completamente diferente e nenhuma das famílias aprova o relacionamento. Mas eles resistiram a tudo. E agora vão se casar. PARA O DETETIVE É A MELHOR CHANCE DE PEGAR UM CRIMINOSO O mais ntegro dos convidados esconde um segredo devastador. Mas alguém sabe e está disposto a espremê-lo com chantagens.Enquanto a plateia espera ansiosa em frente ao altar, algo brutal acontece na antessala. Só quando veem as paredes lavadas com sangue é que os convidados se rendem ao desespero. Começa uma confusão para interromper a marcha nupcial e chamar a polícia. Ninguém sabe o que fazer. E Bardelli, que lidava com um caso de extorsão, descobre que se meteu em algo muito pior. Agora, ele é o único capaz de encontrar respostas. O problema é que as mortes não param de acontecer...",
    "autor": {
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "_id": "60df0799f34e3c6ebca1dce0",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
         "__v": 0
    },
    "genero": "suspense",
    "paginas": 368,
    "idioma": "poetugues",
    "exibicao": "download do livro",
    "__v": 0
}

✅ Dados para Collection comentário
id: autogerado e obrigatório
comentario: texto e obrigatório
criadoEm: data gerada automaticamente e obrigatório

✅ API deve retornar seguinte JSON:
{
    "criadoEm": "2021-07-05T16:34:19.089Z",
    "_id": "60df0bdcf0a295a0f4207f91",
    "comentario": "Nunca tinha lido nada de Victor Bonini e confesso que me surpreendi e muito. História bem traçada e com final que para mim, foi inimaginável.",
    "__v": 0
} 

🚧 Projeto em Construção (futuras melhorias)

Autenticação das Rotas
Sistema de login
Uma rota para que os autores possam enviar seus manuscritos para as editoras cadastradas
Ranking
Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação
Caso queira contribuir com meu projeto, será totalmente bem-vindo!!!


👨‍💻 Autora