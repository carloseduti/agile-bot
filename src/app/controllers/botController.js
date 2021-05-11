const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('../services/dialogFlowService');
const alunoService = require('../services/alunoService');

class BotController {
    async index() {

        try {

            const token = process.env.TELEGRAM_TOKEN;

            const bot = new TelegramBot(token, { polling: true });

            bot.on('message', async (msg) => {

                // ID do chat do usuário.
                const chatId = msg.chat.id;

                console.log("Mensagem recebida ->", msg.text)

                // Resposta do dialogflow.
                const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

                // Texto a partir da resposta do dialogflow.
                let responseText = dfResponse.text;

                console.log("dfResponse ->", dfResponse)
                console.log('Intent ->', dfResponse.intent)

                bot.sendMessage(chatId, responseText);

                if (dfResponse.intent == 'intent_boasvindas' && dfResponse.fields.matricula.numberValue != '') {
                    const matricula = dfResponse.fields.matricula.numberValue;
                    const resultado = await new alunoService().findAlunoByMatricula(matricula);
                    if (resultado != null) {
                        const aluno = resultado.toObject();
                        bot.sendMessage(chatId, "Email enviado para: " + aluno.email);
                    } else {
                        bot.sendMessage(chatId, "Matricula não encontrada.");
                    }
                }
            });

        } catch (error) {
            console.log("Error BotController.Index", error)
        }
    }
}

module.exports = new BotController();