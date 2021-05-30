const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('../services/dialogFlowService');
const alunoService = require('../services/alunoService');
const { response } = require('express');

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
                const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text, 'boasvindas');
                let responseText = dfResponse.text;
                bot.sendMessage(chatId, responseText);

                console.log("Intent ->", dfResponse.intent)
                if (dfResponse.intent === 'boasvindas') {
                    if (dfResponse.fields.matricula?.stringValue) {
                        let matricula = dfResponse.fields.matricula.stringValue
                        const resultado = await new alunoService().findAlunoByMatricula(matricula);
                        if (resultado) {
                            let textResponse = `Prezado ${resultado?.nome}, seus dados foram localizados, deseja prosseguir com o atendimento?`
                            bot.sendMessage(chatId, textResponse);
                        } else {
                            let textResponse = "Nenhum dado foi encontrado para a matricula informada, deseja tentar novamente?"

                           const context =  await dialogflow.atualizarContexto('matriculanaoencontrada',chatId.toString())
                            console.log("getContext  udpate-> ", context)
                            bot.sendMessage(chatId, textResponse);
                        }
                    }
                }
                if (dfResponse.intent === 'matricula_nao_encontrada') {
                    if (dfResponse.fields.matricula?.stringValue) {
                        let matricula = dfResponse.fields.matricula.stringValue
                        const resultado = await new alunoService().findAlunoByMatricula(matricula);
                        if (resultado) {
                            await dialogflow.atualizarContexto('matriculaEncontrada',chatId.toString())
                            let textResponse = `agora sim ${resultado?.nome}, seus dados foram localizados, deseja prosseguir com o atendimento?`
                            bot.sendMessage(chatId, textResponse);
                        } else {
                            await dialogflow.atualizarContexto('matriculaNaoEncontrada',chatId.toString())
                            let textResponse = "zzz"
                            bot.sendMessage(chatId, textResponse);
                        }
                    }
                }
            });

        } catch (error) {
            console.log("Error BotController.Index", error)
        }
    }
}

module.exports = new BotController();