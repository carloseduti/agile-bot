const alunoService = require('../services/alunoService');
const webHookService = require('../services/webHookService');
const emailService = require('../services/emailService');
const tipoAtendimento = require('../utils/tipoAtendimento');
const documentoService = require('../services/documentoService')
const gerarPdfService = require('../services/gerarPdfService')
const pathAtendimento = require('../utils/pathAtendimentos')

class WebHookController {

  async webhook(req, res) {

    const intent = req.body.queryResult.intent.displayName;
    const session = req.body.session;
    const { matricula } = req.body.queryResult.parameters;
    const aluno = await new alunoService().findAlunoByMatricula(matricula);

    if (intent == 'valida_matricula') {
      if (aluno) {
        const textResponse = `Prezado ${aluno.nome}, seus dados foram localizados em nosso sistema, podemos prosseguir com o atendimento? \n\nDigite "Sim" para continuar ou "Não" tentar novamente em outra hora! `;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos a matricula informada em nosso sistema, para continuar, escolha uma das opções:\n\n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', session);
        res.send(resultado);
      }
    } else if (intent == 'tentar_novamente') {
      if (aluno) {
        const textResponse = `Prezado ${aluno.nome}, agora sim seus dados foram localizados, deseja prosseguir com o atendimento?`;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontramos sua matricula em nosso sistema, caso não saiba sua matrícula ou esteja com algum outro problema, você pode entrar em contato com nossa Central de Atendimento ao Aluno através do Telefone: (61) 3878-3100. \n\nPara continuar, escolha uma das opções: \n\n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', session);
        res.send(resultado);
      }
    } else if (intent == 'declaracao') {
      if (aluno) {
       const pdf = await new gerarPdfService().gerarPdfByTipo(aluno,tipoAtendimento.DECLARACAO)
      }
    } else if(intent == 'confirma_declaracao'){
      if(aluno){
        console.log('aluno', aluno)
        const textResponse = `Prezado(a) ${aluno.nome}, \nConforme solicitado foi enviado uma declaração para o email ${aluno.email}. \n\n Para solicitar outro serviço digite "Solicitar" ou "Sair" caso deseje finalizar o atendimento!`
        const assunto = `Declaração - ${aluno.nome}`
        const conteudo = await new documentoService().conteudoEmailDeclaracao(aluno)
        await new emailService().send(conteudo, assunto, aluno, pathAtendimento.PATH_DECLARACAO);
        const resultado = await new webHookService().createTextResponse(textResponse, 'valida_matricula_context', session);
        res.send(resultado);
      }
    }
  }
}

module.exports = new WebHookController();
