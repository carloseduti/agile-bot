const moongose = require('mongoose');
const Schema = moongose.Schema;

const AlunoSchema = new Schema({
    nome: String,
    email: String,
    matricula: String,
    cpf: String,
    rg: String,
    curso: String,
    semestre: String,
    inicio: Date,
    conclusao: Date

});


module.exports = moongose.model('Aluno', AlunoSchema)