const routes = require('express').Router();
const BotController = require('./app/controllers/botController');
const AlunoController = require('./app/controllers/alunoController');
const WebHookController = require('./app/controllers/webHookController')
const cors = require('cors');

routes.use(cors());
BotController.index();

//Rotas
//Aluno Controller
routes.get('/aluno/:id', AlunoController.findAlunoById);
routes.get('/aluno/matricula/:matricula', AlunoController.findAlunoByMatricula);
routes.get('/aluno', AlunoController.findAll);
routes.post('/aluno/create', AlunoController.createAluno);
routes.delete('/aluno/:id', AlunoController.deleteAlunoById);

// WebHook
routes.post('/webhook', WebHookController.receive);

module.exports = routes;