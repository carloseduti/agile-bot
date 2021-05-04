const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('../services/dialogFlowService');

class BotController {
    async index() {
        try {
            const token = '1785982362:AAF5vRdDrojxKZZedQaLIh2jNlqNZuJijv8';

            const bot = new TelegramBot(token, { polling: true });

            bot.on('message', async (msg) => {

                // ID do chat do usuário.
                const chatId = msg.chat.id;

                console.log("Mensagem recebida ->", msg.text)

                // Resposta do dialogflow.
                const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

                // Texto a partir da resposta do dialogflow.
                let responseText = dfResponse.text;

                // Envio da mensagem para o usuário do Telegram.
                bot.sendMessage(chatId, responseText);
            });

        } catch (error) {
            console.log("Error BotController.Index", error)
        }
    }

    async store(){

    }
}

module.exports = new BotController();