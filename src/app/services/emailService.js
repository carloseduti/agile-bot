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

    async send(conteudo, assunto, email, matricula , path) {
        const mailSent = await transporter.sendMail({
            text: conteudo,
            subject: assunto,
            from: `AgileBot <agiletelegram@gmail.com>`,
            to: [email],
            attachments: [{ 
                filename: `declaracao-${matricula}.pdf`, 
                path: `${path}-${matricula}.pdf`,
                contentType: 'application/pdf' 
              }]
        });
        console.log(mailSent)
    }

}

module.exports = EmailService