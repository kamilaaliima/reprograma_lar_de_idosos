const app = require('./src/app');
const PORT = 8084 ;

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));