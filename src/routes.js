const routes = require('express').Router();
const BotController = require('./app/controllers/botController');
const AlunoController = require('./app/controllers/alunoController');
const cors = require('cors');

routes.use(cors());

BotController.index();

//Rotas
//Aluno Controller
routes.get('/aluno/index', AlunoController.index);
routes.post('/aluno/create', AlunoController.create);





module.exports = routes;