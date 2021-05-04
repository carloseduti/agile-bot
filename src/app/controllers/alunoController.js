const axios = require('axios');
const Aluno = require('../models/Aluno');

class AlunoController {

    async index(req, res) {
        const api = await axios.get('https://api.hgbrasil.com/weather');
        return res.status(200).json({ result: api.data })
    }

    async store() {
        
    }

    async create(req, res) {
        try {
            const alunoModel = new Aluno(req.body);
            const resultado = await alunoModel.save(req.body);
            return res.status(200).json({ resultado })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Não CRIOU!" })
        }
    }

    async update() {
    }

    async delete() {
    }
}

module.exports = new AlunoController();