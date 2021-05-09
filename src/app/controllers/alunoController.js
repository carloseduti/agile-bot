const Aluno = require('../models/Aluno');
const AlunoServices = require('../services/alunoService');;

class AlunoController {

    async findAll(req, res) {
        try {
            const resultado = await new AlunoServices().findAlunoAll();
            return res.status(200).json({ result: resultado })
        } catch (error) {
            return res.status(500).json({ message: 'error' + ' ' + error })
        }
    }

    async findAlunoById(req, res) {
        try {
            const id = req.params.id;
            const resultado = await new AlunoServices().findAlunoById(id);
            return res.status(200).json({ result: resultado })

        } catch (error) {
            return res.status(500).json({ message: 'error' + ' ' + error })
        }
    }

    async createAluno(req, res) {
        try {
            const resultado = await new AlunoServices().createAluno(req.body);
            return res.status(200).json({ message: resultado })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao criar aluno"+ ' ' + error})
        }
    }

    async deleteAlunoById(req, res) {
        try {
            const id = req.params.id;
            const resultado = await new AlunoServices().deleteAluno(id);
            return res.status(200).json({ message: resultado});
        } catch (error) {
            return res.status(500).json({ messagem: "Erro ao deletar aluno" + '' + error})
        }
    }

    async findAlunoByMatricula(req, res){
        try {
            const matricula = req.params.matricula
            const resultado = await new AlunoServices().findAlunoByMatricula(matricula);
            return res.status(200).json({ message: resultado});
        } catch (error) {
            return res.status(500).json({ messagem: "Erro ao encontrar aluno" + '' + error})
        }
    }
}

module.exports = new AlunoController();