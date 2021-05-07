const Aluno = require('../models/Aluno');


class AlunoServices {

    async findAluno(id) {
        try {
            const resultado = await Aluno.findById(id)
            return resultado

        } catch (error) {
            throw new Error("Erro ao pesquisar o Aluno", error)
        }
    }

    async findAlunoAll() {
        try {
            const resultado = await Aluno.find()
            return resultado
        } catch (error) {
            throw new Error("Erro ao pesquisar o Aluno", error)
        }
    }

    async createAluno(aluno) {
        try {
            const resultado = await new Aluno(aluno).save(aluno);
            return resultado;
        } catch (error) {
            throw new Error("Erro ao criar aluno", error)
        }

    }

    async deleteAluno(id){
        try {
            const resultado = await Aluno.findByIdAndDelete(id)
            return resultado;
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar aluno", error)
        }
    }

}

module.exports = AlunoServices;