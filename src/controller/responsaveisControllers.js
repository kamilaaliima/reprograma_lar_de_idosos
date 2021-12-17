const Responsaveis = require("../models/responsaveisSchema");


const cadastrarResponsavel = async (request, response) => {
    try {
        const responsavel = await Responsaveis.create(request.body)
        return response.status(201).json({
            message: "Responsável cadastrado com sucesso!",
            responsavel
        })
    }catch (error) {
        return response.status(400).send({message: error.message})
    }
}


const getAll = async (request, response) => {
    try {
        const responsavel = await Responsaveis.find()
        return response.status(200).json(responsavel)

    }catch (error){
        response.status(500).json({
            message: error.message
        })
    }
}

const getByName = async (request, response) =>{
    const nome = request.query.nome;
    const responsavel = await Responsaveis.find({nome: nome})

    return response.status(200).send(responsavel)
}


const getById = async (request, response) => {
    try {
        const { id } = request.params 
        const responsavel = await Responsaveis.findById(id)

        if (responsavel == undefined || id == " "){
            return response.status(404).json({
                message: "Id inválido"
            })
        } 
        return response.status(200).json(responsavel)
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
}


const atualizarResponsavel = async (request, response) => {
    
        
    try {
        const responsavel = await Responsaveis.findById(request.params.id);

        if (responsavel) {
          
            responsavel.nome = request.body.nome || responsavel.nome
            responsavel.cpf = request.body.cpf || responsavel.cpf
            responsavel.rg = request.body.rg || responsavel.rg
            responsavel.email = request.body.email || responsavel.email
            responsavel.numero = request.body.numero || responsavel.numero
            responsavel.endereco = request.body.endereco || responsavel.endereco
           

            const saveResponsavel = await responsavel.save();
            response.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveResponsavel
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
        const responsavel = await Responsaveis.findById(request.params.id)

        if (responsavel == null) {
            return response.status(404).json({message: "Responsável não encontrado!"})
        }
        await responsavel.remove()
        return response.status(200).json({message: "Responsável deletado com sucesso!"})
    }catch (error) {
        return response.status(500).json({message: error.message})
    }
} 
    



module.exports = {
    cadastrarResponsavel,
    getAll,
    getByName,
    getById,
    atualizarResponsavel,
    deleteById
}