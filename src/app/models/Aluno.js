const moongose = require('mongoose');

const aluno = new moongose.Schema({
    nome:{
        type: String
    },
    matricula:{
         type: String
     },
    email:{
        type: String
    } 
});

module.exports = Aluno = moongose.model('aluno', aluno);