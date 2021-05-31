const routes = require('express').Router();
const AlunoController = require('./app/controllers/alunoController');
const WebHookController = require('./app/controllers/webHookController')
const cors = require('cors');

routes.use(cors());

//Rotas
//Aluno Controller
routes.get('/aluno/:id', AlunoController.findAlunoById);
routes.get('/aluno/matricula/:matricula', AlunoController.findAlunoByMatricula);
routes.get('/aluno', AlunoController.findAll);
routes.post('/aluno/create', AlunoController.createAluno);
routes.delete('/aluno/:id', AlunoController.deleteAlunoById);

// WebHook
 routes.post('/webhook', WebHookController.webhook);

module.exports = routes;