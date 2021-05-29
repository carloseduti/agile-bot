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

                bot.sendMessage(chatId, responseText);

            });

        } catch (error) {
            console.log("Error BotController.Index", error)
        }
    }
}

module.exports = new BotController();