const gerarEmailService = require('./gerarPdfService')
const tipoAtendimento = require('../utils/tipoAtendimento');
const emailService = require('../services/emailService')
const pathAtendimento = require('../utils/pathAtendimentos')
const documentoService = require('../services/documentoService')

class SecretariaService {

    async enviarDocumentoPorTipo(aluno, tipo) {
        if (tipo == tipoAtendimento.DECLARACAO) {
            const conteudo = await new documentoService().conteudoEmailDeclaracao(aluno)
            const assunto = `Declaração - ${aluno.nome}`
            await new gerarEmailService().gerarPdfByTipo(aluno, tipo);
            await new emailService().send(conteudo, assunto, aluno, pathAtendimento.PATH_DECLARACAO);
        }
    }

}

module.exports = SecretariaService