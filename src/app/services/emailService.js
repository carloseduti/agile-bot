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
        console.log("Entrou no send do email ")
        const mailSent = await transporter.sendMail({
            subject: assunto,
            from: `AgileBot <agiletelegram@gmail.com>`,
            to: [email],
            attachments: [{ 
                filename: `declaracao-${matricula}.pdf`, 
                path: `${path}-${matricula}.pdf`,
                contentType: 'application/pdf' 
              }],
            html: conteudo 
        
        });
        console.log("Entrou no send do email ******************** -> ", conteudo)
        console.log(mailSent)
    }

}

module.exports = EmailService