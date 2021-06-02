const TelegramBot = require('node-telegram-bot-api');
const alunoService = require('../services/alunoService');
const webHookService = require('../services/webHookService');

class WebHookController {
  async webhook(req, res) {
    console.log('teste');
    const intent = req.body?.queryResult.intent.displayName;
    const session = req.body?.session;
    if (intent == 'valida_matricula') {
      const { matricula } = req.body.queryResult.parameters;
      const aluno = await new alunoService().findAlunoByMatricula(matricula);
      if (aluno) {
        const textResponse = `Prezado ${aluno?.nome}, seus dados foram localizados, deseja prosseguir com o atendimento?`;
        const context = 'matricula_encontrada_context';
        const resultado = await new webHookService().createTextResponse(textResponse, context, session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const context = 'tentar_novamente_context';
        const resultado = await new webHookService().createTextResponse(textResponse, context, session);
        res.send(resultado);
      }
    } else if (intent == 'tentar_novamente') {
      const { matricula } = req.body.queryResult.parameters;
      const aluno = await new alunoService().findAlunoByMatricula(matricula);
      if (aluno) {
        const textResponse = `Prezado ${aluno?.nome}, agora sim seus dados foram localizados, deseja prosseguir com o atendimento?`;
        const context = 'matricula_encontrada_context';
        const resultado = await new webHookService().createTextResponse(textResponse, context, session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const context = 'tentar_novamente_context';
        const resultado = await new webHookService().createTextResponse(textResponse, context, session);
        res.send(resultado);
      }
    } else if (intent == 'declaracao') {
      const { matricula } = req.body.queryResult.parameters;
      if (matricula) {
        const aluno = await new alunoService().findAlunoByMatricula(matricula);
        if (aluno) {
          const textResponse = `Entendido, foi enviado um email para: ${aluno?.email}`
          const context = 'tentar_novamente_context';
          const resultado = await new webHookService().createTextResponse(textResponse, context, session);
          
          res.send(resultado);
        }
      }

    }
  }
}

module.exports = new WebHookController();
