const gerarEmailService = require('./gerarPdfService')
const tipoAtendimento = require('../utils/tipoAtendimento');
const emailService = require('../services/emailService')
const pathAtendimento = require('../utils/pathAtendimentos')
const documentoService = require('../services/documentoService')

class SecretariaService {

    async enviarDocumentoPorTipo(aluno, tipo) {
        try {
            if(tipo == tipoAtendimento.DECLARACAO){
                const conteudo = await new documentoService().conteudoEmailDeclaracao(aluno)
                console.log(conteudo)
                const assunto = `Declaração - ${aluno.nome} - ${aluno.matricula}`
                const email = aluno.email;
                await new gerarEmailService().gerarPdfByTipo(aluno, tipo);
                await new emailService().send(conteudo, assunto, email, aluno.matricula, pathAtendimento.PATH_DECLARACAO);
            }
        } catch (error) {
            throw new Error("Erro ao enviar email", error)
        }

    }

}

module.exports = SecretariaService