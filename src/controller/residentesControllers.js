const Residentes = require("../models/residentesSchema");
const mongoose = require("mongoose");

const cadastrarResidentes = async (request, response) => {
    try {
        const residente = await Residentes.create(request.body)
        return response.status(201).json({
            message: "Residente cadastrado com sucesso!",
            residente
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const residente = await Residentes.find()
        return response.status(200).json(residente)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}



const pesquisarPorNome = async (request, response) =>{
    
       
        const nome = request.query.nome
        const residente = await Residentes.find({nome: nome})

        return response.status(200).json(residente)


}

const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const residente = await Residentes.findById(id)

        if (residente == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(residente)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}


const alterarResidente = async (request, response) => {
    try {
        const residente = await Residentes.findById(request.params.id);

        if (residente) {
          
            residente.nome = request.body.nome || residente.nome
            residente.idade = request.body.idade || residente.idade
            residente.rg = request.body.rg || residente.rg
            residente.cpf = request.body.cpf || residente.cpf
            residente.responsavel = request.body.responsavel || residente.responsavel
            residente.dataDeInclusao = request.body.dataDeInclusao || residente.dataDeInclusao
                     

            const saveResidente = await residente.save();
            response.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveResidente
            })
        }

        response.status(400).json({
            mensagem: "Descupa, mas não conseguimos encontrar esse usuário"
        })
    } catch (error) {
        return response.status(404).send({ message: error.message });
    }
}


const deleteById = async (request, response) => {
    try {
        const residente = await Residentes.findById(request.params.id)

        if (residente == null) {
            return response.status(404).json({message: "Residente não encontrado!"})
        }
        await residente.remove()
        return response.status(200).json({message: "Residente deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarResidentes,
    getAll,
    pesquisarPorNome,
    getById,
    alterarResidente,
    deleteById
}