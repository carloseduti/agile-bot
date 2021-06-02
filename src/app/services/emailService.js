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

class EnviaEmailService {

    async enviarEmail(email, nome) {
        try {
            const mailSent = await transporter.sendMail({
                text: `Prezado, ${nome} \n Segue em anexo a declaração escolar conforme solicitado. \n Att, AgileBot`,
                subject: "Assunto",
                from: `AgileBot <${email}>`,
                to: [email],
            });
            return mailSent;
        } catch (error) {
            throw new Error("Erro ao enviar email", error)
        }

    }

}

module.exports = EnviaEmailService