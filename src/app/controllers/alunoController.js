const Aluno = require('../models/Aluno');

class AlunoController {

    async findAll(req, res) {
        Aluno.find(function (error, alunos) {
            if (error) {
                res.send("Erro ao tentar selecionar todos os alunos", error)
            }
            return res.status(200).json({ alunos });
        });
    }

    async findAlunoById(req, res) {
        Aluno.findById(req.params.aluno_id, function (error, aluno) {
            if (error || aluno == null) {
                res.status(400).send("Id não encontrado!");
            }
            return res.status(200).json(aluno);
        });
    }

    async createAluno(req, res) {
        try {
            const alunoModel = new Aluno(req.body);
            const resultado = await alunoModel.save(req.body);
            return res.status(200).json({ resultado });
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Erro ao criar aluno!" });
        }
    }

    async updateAluno(req, res) {
        try {
            Aluno.findById(req.params.id, await function(error,aluno){
                if (error || aluno == null) {
                    res.status(400).send("Id não encontrado!");
                }
                const alunoModel = new Aluno(aluno);
                const resultado = alunoModel.save(aluno);
                return res.status(200).json({ resultado })
            });
         
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Erro ao atualizar Aluno" })
        }
    }

    async deleteAlunoById(req, res) {
        Aluno.deleteOne({ _id: req.params.aluno_id }, function (error) {
            if (error) {
                res.status(400).send("Id não encontrado!")
            }
            return res.status(200).json({ message: "Aluno Deletado com sucesso!" });
        })
    }
}

module.exports = new AlunoController();