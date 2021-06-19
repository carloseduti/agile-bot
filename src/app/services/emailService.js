const nodemailer = require('nodemailer');
const smpt = require('../../config/smtp')

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



class EmailService {
    async send(conteudo, assunto, aluno , path) {
        console.log('conteudo',conteudo)
        console.log('assunto',assunto)
        console.log('aluno',aluno)
        console.log('path', path)
        const mailSent = await transporter.sendMail({
            subject: assunto,
            from: `AgileBot <agiletelegram@gmail.com>`,
            to: [aluno.email],
            attachments: [{ 
                filename: `declaracao-${aluno.matricula}.pdf`, 
                path: `${path}-${aluno.matricula}.pdf`,
                contentType: 'application/pdf' 
              }],
            html: conteudo 
        });
    }
}

module.exports = EmailService