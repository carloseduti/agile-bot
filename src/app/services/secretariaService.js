const gerarEmailService = require('./gerarPdfService')
const tipoAtendimento = require('../utils/tipoAtendimento');
const emailService = require('../services/emailService')
const pathAtendimento = require('../utils/pathAtendimentos')

class SecretariaService {

    async enviarDocumentoPorTipo(aluno, tipo) {
        try {
            if(tipo == tipoAtendimento.DECLARACAO){
                const conteudo = `Prezado, ${aluno.nome} \n Segue em anexo a declaração escolar conforme solicitado. \n Att, AgileBot`
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