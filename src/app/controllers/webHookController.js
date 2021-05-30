// const alunoService = require('../services/alunoService');
// const TelegramBot = require('node-telegram-bot-api');

// class WebHookController {

//     async receive(req, res) {
//         try {
//             console.log(req.body)
//             const intent = req.body?.queryResult.intent.displayName;
//             console.log("Mensagem recebida ->", msg.text)

//             if (intent == 'boasvindas') {
//                 let matricula = req.body.queryResult.parameters["matricula"];
//                 const resultado = await new alunoService().findAlunoByMatricula(matricula);
//                 if (resultado) {
//                     let textResponse = `Prezado ${resultado?.nome}, seus dados foram localizados, deseja prosseguir com o atendimento?`
//                     let context = 'matriculaEncontrada'
//                     bot.sendMessage(chatId, textResponse);
//                     let response = {
//                         "fulfillmentMessages": [
//                             {
//                                 "text": {
//                                     "text": [
//                                         textResponse
//                                     ]
//                                 }
//                             }
//                         ],
//                         "outputContexts": [
//                             {
//                                 "name": `projects/agile-bot-ekqw/agent/sessions/a83532e4-c296-f6f3-0dd8-105c12298ac4/contexts/${context}`,
//                                 "lifespanCount": 5,
//                                 "parameters": {
//                                     "param-name": `${context}`
//                                 }
//                             }
//                         ]
//                     }

//                     res.send(response);
//                     return;
//                 } else {
//                     let textResponse = `Sua matricula não foi encontrada em nosso sistema, insira novamente sua matrícula para prosseguirmos!`
//                     let context = "matriculaNaoEncontrada"

//                     let response = {
//                         "fulfillmentMessages": [
//                             {
//                                 "text": {
//                                     "text": [
//                                         textResponse
//                                     ]
//                                 }
//                             }
//                         ],
//                         "outputContexts": [
//                             {
//                                 "name": `projects/agile-bot-ekqw/agent/sessions/a83532e4-c296-f6f3-0dd8-105c12298ac4/contexts/${context}`,
//                                 "lifespanCount": 5,
//                                 "parameters": {
//                                     "param-name": `${context}`
//                                 }
//                             }
//                         ]
//                     }
//                     bot.sendMessage(chatId, textResponse);
//                     res.send(response);
//                     return;
//                 }
//             } else if (intent == 'matricula_nao_encontrada') {
//                 let matricula = req.body.queryResult.parameters["matricula"];
//                 const resultado = await new alunoService().findAlunoByMatricula(matricula);
//                 if (resultado) {
//                     let textResponse = `Pronto, finalmente achamos sua matricula ${resultado?.nome}, deseja prosseguir?`
//                     let context = "matriculaEncontrada"
//                     let response = {
//                         "fulfillmentMessages": [
//                             {
//                                 "text": {
//                                     "text": [
//                                         textResponse
//                                     ]
//                                 }
//                             }
//                         ],
//                         "outputContexts": [
//                             {
//                                 "name": `projects/agile-bot-ekqw/agent/sessions/a83532e4-c296-f6f3-0dd8-105c12298ac4/contexts/${context}`,
//                                 "lifespanCount": 5,
//                                 "parameters": {
//                                     "param-name": `${context}`
//                                 }
//                             }
//                         ]
//                     }
//                     bot.sendMessage(chatId, textResponse);
//                     res.send(response);
//                     return;
//                 } else {
//                     let textResponse = "Infelizmente não achamos seus dados, entre em contato com a Central de Atendimento da Universidade X"
//                     let context = "tchau"
//                     let response = {
//                         "fulfillmentMessages": [
//                             {
//                                 "text": {
//                                     "text": [
//                                         textResponse
//                                     ]
//                                 }
//                             }
//                         ],
//                         "outputContexts": [
//                             {
//                                 "name": `projects/agile-bot-ekqw/agent/sessions/a83532e4-c296-f6f3-0dd8-105c12298ac4/contexts/${context}`,
//                                 "lifespanCount": 5,
//                                 "parameters": {
//                                     "param-name": `${context}`
//                                 }
//                             }
//                         ]
//                     }
//                     bot.sendMessage(chatId, textResponse);
//                     res.send(response);
//                     return;
//                 }
//             }
//             return res.status(200).json({ message: req });
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }
// module.exports = new WebHookController();