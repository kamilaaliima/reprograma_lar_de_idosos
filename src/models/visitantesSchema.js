const mongoose = require("mongoose"); 

const visitantesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    nome: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required:true, 
        lowercase: true
    },
    numero:{
        type: String,
        required:true
        
    },
    endereco: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("visitantes", visitantesSchema)