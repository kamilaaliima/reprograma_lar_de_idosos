const mongoose = require("mongoose"); 

const voluntariosSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
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
        unique: true,
        required:true, 
        lowercase: true
    },
    endereço: {
        type: String,
        required: true
    },
    ultimaVisita: {
        type: Date,
        required: true,
        default: new Date
    }



});

module.exports = mongoose.model("voluntarios", voluntariosSchema)