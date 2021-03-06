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
        const textResponse = `${aluno.nome}, localizei seus dados em nosso sistema. \n\nPara que me informe o serviço desejado, digite "Prosseguir" para continuar. `;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', 2, session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não encontrei a matricula informada em nosso sistema. \nPor favor, escolha uma das opções:\n\n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', 2, session);
        res.send(resultado);
      }
    } else if (intent == 'tentar_novamente') {
      if (aluno) {
        const textResponse = `${aluno.nome}, agora sim localizei os seus dados. \n\nPara que me informe o serviço desejado, digite "Prosseguir" para continuar.`;
        const resultado = await new webHookService().createTextResponse(textResponse, 'matricula_encontrada_context', 3, session);
        res.send(resultado);
      } else {
        const textResponse = 'Infelizmente não consegui encontrar essa matrícula em nosso sistema, caso não a tenha em mãos ou esteja com algum outro problema, você pode entrar em contato com a Central de Atendimento ao Aluno através do telefone: (61) 3878-3100. \n\nPara continuar, escolha uma das opções: \n\n 1 - Tentar novamente \n 2 - Finalizar atendimento';
        const resultado = await new webHookService().createTextResponse(textResponse, 'tentar_novamente_context', 2, session);
        res.send(resultado);
      }
    } else if (intent == 'declaracao') {
      if (aluno) {
        const textResponse = `${aluno.nome}, você escolheu o serviço: Declaração. \n\nDeseja que eu encaminhe o documento para o seu e-mail?`
        const resultado = await new webHookService().createTextResponse(textResponse, 'confirma_declaracao_context', 3, session);
        await new gerarPdfService().gerarPdfByTipo(aluno, tipoAtendimento.DECLARACAO)
        res.send(resultado);
      }
    } else if (intent == 'confirma_declaracao') {
      if (aluno) {
        const textResponse = `Feito, ${aluno.nome}. \nEnviei para o e-mail: ${aluno.email}. \n\nPara solicitar outro serviço digite "Solicitar" ou "Sair" caso deseje finalizar o atendimento!`
        const assunto = `Declaração - ${aluno.nome}`
        const conteudo = await new documentoService().conteudoEmailDeclaracao(aluno)
        await new emailService().send(conteudo, assunto, aluno, pathAtendimento.PATH_DECLARACAO);
        const resultado = await new webHookService().createTextResponse(textResponse, 'valida_matricula_context', 3, session);
        res.send(resultado);
      }
    }
  }
}

module.exports = new WebHookController();
