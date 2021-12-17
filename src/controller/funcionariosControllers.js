const Funcionarios = require("../models/funcionariosSchema");
const mongoose = require("mongoose");

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
    const funcionario = await Funcionarios.find({nome: nome})

    return response.status(200).send(funcionario)
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


const atualizarFuncionario = async (request, response) => {
    try {
        const funcionario = await Funcionarios.findById(request.params.id);
        if (funcionario) {
          
            funcionario.nome = request.body.nome || funcionario.nome
            funcionario.cpf = request.body.cpf || funcionario.cpf
            funcionario.rg = request.body.rg || funcionario.rg
            funcionario.especialidade = request.body.especialidade || funcionario.especialidade
            funcionario.email = request.body.email || funcionario.email
            funcionario.numero = request.body.numero || funcionario.numero
            funcionario.endereco = request.body.endereco || funcionario.endereco
            funcionario.dataDeInclusao = request.body.dataDeInclusao || funcionario.dataDeInclusao
            funcionario.horarios = request.body.horarios || funcionario.horarios

            const saveFuncionario = await funcionario.save();
            response.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveFuncionario
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
        const funcionario = await Funcionarios.findById(request.params.id)
        console.log(funcionario);

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
    atualizarFuncionario,
    deleteById
}