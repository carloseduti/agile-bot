const nodemailer = require('nodemailer');
const smpt = require('../../config/smtp')
const gerarEmailService = require('./gerarPdfService')
const tipoAtendimento = require('../utils/tipoAtendimento');

const transporter = nodemailer.createTransport({
    host: smpt.host,
    port: smpt.port,
    secure: false,
    auth: {
        user: smpt.user,
        pass: smpt.pass
    },
    tls: {
        rejectUnauthorized: false,
    }
})

function send(conteudo, assunto, email , anexo, nome) {
    const mailSent = transporter.sendMail({
        text: conteudo,
        subject: assunto,
        from: `AgileBot <agiletelegram@gmail.com>`,
        to: [email],
        attachments: [{ 
            filename: `declaracação-${nome}.pdf`, 
            path: anexo.filename 
          }]
    });
    console.log(mailSent)
}

class EnviaEmailService {

    async enviarEmail(aluno, tipo) {
        try {
            if(tipo == tipoAtendimento.DECLARACAO){
                const conteudo = `Prezado, ${aluno.nome} \n Segue em anexo a declaração escolar conforme solicitado. \n Att, AgileBot`
                const assunto = `Declaração - ${aluno.nome} - ${aluno.matricula}`
                const email = aluno.email;
                const anexo =  new gerarEmailService().gerarPdfByTipo(aluno, tipo);
                send(conteudo, assunto , email , anexo, aluno.nome)
            }
            
        } catch (error) {
            throw new Error("Erro ao enviar email", error)
        }

    }

}

module.exports = EnviaEmailService