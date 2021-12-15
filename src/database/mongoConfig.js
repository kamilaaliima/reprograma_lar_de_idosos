require("dotenv-safe").config();

const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado com sucesso :)")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}