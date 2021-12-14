const { request } = require("express")
const Funcionarios = require("../models/funcionariosSchema")

const cadastrarFuncionario = async (request, response) => {
    try {
        const funcionario = await Funcionarios.create(request.body)
        return response.status(201).json({
            message: "Funcionário cadastrado com sucesso!",
            funcionario
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}



const getAll = async (request, response) => {
    try {
        const funcionario = await Funcionarios.find()
        return response.status(200).json(funcionario)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) =>{
    const nome = request.query.nome;
    await Funcionarios.find({nome: nome})

    return response.status(200).send(Funcionarios)
}


const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const funcionario = await Funcionarios.findById(id)

        if (funcionario == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(funcionario)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}


const updateById = async (request, response) => {
    try {
        const { id } = request.params
        const body = request.body
        const update = { new: true }

        const funcionario = await Funcionarios.findByIdAndUpdate(id, body, update)
        return response.status(200).send(funcionario)
    }catch (error) {
        return response.status(404).send({message: "Funcionário não encontrado"})
    }
}


const deleteById = async (request, response) => {
    try {
        const funcionario = await Funcionarios.findById(request.params.id)

        if (funcionario == null) {
            return response.status(404).json({message: "Funcionário não encontrado!"})
        }
        await funcionario.remove()
        return response.status(200).json({message: "Funcionário deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarFuncionario,
    getAll,
    getByName,
    getById,
    updateById,
    deleteById
}