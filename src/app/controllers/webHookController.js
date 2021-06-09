const alunoService = require('../services/alunoService');
const webHookService = require('../services/webHookService');
const emailService = require('../services/emailService');
const tipoAtendimento = require('../utils/tipoAtendimento');
const secretariaService = require('../services/secretariaService');

class WebHookController {

  async saveALuno(aluno) {
    const resultado = aluno
    return resultado;
  }

  async webhook(req, res) {
    const intent = req.body.queryResult.intent.displayName;
    const session = req.body.session;
    if (intent == 'valida_matricula') {
      const { matricula } = req.body.queryResult.parameters;
      console.log("matricula -- >", matricula)
      const aluno = await new alunoService().findAlunoByMatricula(matricula);
      if (aluno) {
        const textResponse = `Prezado ${aluno.nome}, encontrei aqui seus dados, deseja prosseguir com o atendimento? \n\nDigite "Sim" para continuar ou "Não" caso deseje sair! `;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n\n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', session);
        res.send(resultado);
      }
    } else if (intent == 'tentar_novamente') {
      const { matricula } = req.body.queryResult.parameters;
      const aluno = await new alunoService().findAlunoByMatricula(matricula);
      if (aluno) {
        const textResponse = `Prezado ${aluno.nome}, agora sim seus dados foram localizados, deseja prosseguir com o atendimento?`;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', session);
        res.send(resultado);
      }
    } else if (intent == 'declaracao') {
      const aluno = await new alunoService().findAlunoByMatricula('12345');
      if (aluno) {
        const textResponse = `Entendido, foi enviado um email para: ${aluno.email}, Deseja algo mais? \n\nDigite "Opções" para menu ou "Sair" caso deseje finalizar o atendimento!`
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', session);
        await new secretariaService().enviarDocumentoPorTipo(aluno, tipoAtendimento.DECLARACAO)
        res.send(resultado);
      }
    }
  }
}

module.exports = new WebHookController();
