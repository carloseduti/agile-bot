const alunoService = require('../services/alunoService');
const TelegramBot = require('node-telegram-bot-api');

class WebHookController {

    async webhook(req, res) {
        console.log(req.body)
        const intent = req.body?.queryResult.intent.displayName;
        const session = req.body?.session;
        if (intent == 'valida_matricula') {
            const matricula = req.body.queryResult.parameters["matricula"];
            const aluno = await new alunoService().findAlunoByMatricula(matricula);
            if (aluno) {
                let textResponse = `Prezado ${aluno?.nome}, seus dados foram localizados, deseja prosseguir com o atendimento?`
                let context = 'matricula_encontrada_context'
                let response = {
                    "fulfillmentText": textResponse,
                    "outputContexts": [
                        {
                            "name": `${session}/contexts/${context}`,
                            "lifespanCount": 0,
                        }
                    ]
                }
                res.send(response)
            } else {
                let textResponse = "Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n 1 - Tentar novamente \n 2 - Finalizar atendimento"
                let context = 'tentar_novamente_context'
                let response = {
                    "fulfillmentText": textResponse,
                    "outputContexts": [
                        {
                            "name": `${session}/contexts/${context}`,
                            "lifespanCount": 0,
                        }
                    ]
                }
                res.send(response);
            }
        } else if (intent == 'tentar_novamente') {
            const matricula = req.body.queryResult.parameters["matricula"];
            const aluno = await new alunoService().findAlunoByMatricula(matricula);
            if (aluno) {
                let textResponse = `Prezado ${aluno?.nome}, agora sim seus dados foram localizados, deseja prosseguir com o atendimento?`
                let context = 'matricula_encontrada_context'
                let response = {
                    "fulfillmentText": textResponse,
                    "outputContexts": [
                        {
                            "name": `${session}/contexts/${context}`,
                            "lifespanCount": 0,
                        }
                    ]
                }
                res.send(response)
            } else {
                let textResponse = "Infelizmente não encontramos sua matricula em nossa base de dados para continuar, escolha uma das opções: \n 1 - Tentar novamente \n 2 - Finalizar atendimento"
                let context = 'tentar_novamente_context'
                let response = {
                    "fulfillmentText": textResponse,
                    "outputContexts": [
                        {
                            "name": `${session}/contexts/${context}`,
                            "lifespanCount": 0,
                        }
                    ]
                }
                res.send(response);
            }
        }
    }
}

module.exports = new WebHookController();