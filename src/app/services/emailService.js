const { text } = require('body-parser');
const nodemailer = require('nodemailer')

class EmailService {

    async enviarEmail(params) {
        const user = process.env.USER;
        const pass = process.env.PASS;
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.PORT,
            auth: { user, pass }
        });

        transporter.sendMail({
            from: user,
            to: user,
            subject: "Olá, Seja Bem Vindo!",
            text: "Email Works"
        }).then(info =>{
            
        })
    }
}

module.exports = EmailService