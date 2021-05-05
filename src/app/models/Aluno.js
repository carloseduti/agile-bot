const moongose = require('mongoose');
const Schema = moongose.Schema;

const AlunoSchema = new Schema({
    nome: String,
    email: String,
    matricula: String
});

module.exports = moongose.model('Aluno', AlunoSchema)