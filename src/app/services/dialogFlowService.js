const dialogflow = require('dialogflow');
const configs = require('../../config/agile-bot.json');

class DialogService {

    async sendMessage(chatId, message) {
        const sessionClient = new dialogflow.SessionsClient({
            projectId: configs.project_id,
            credentials: {
                private_key: configs.private_key,
                client_email: configs.client_email
            }
        });

        const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'pt-br'
                }
            }
        }
        const response = await sessionClient.detectIntent(request);

        console.log("resultado ->", response[0].queryResult.outputContexts)
        const result = response[0].queryResult;

        return {
            text: result.fulfillmentText,
            intent: result.intent.displayName,
            fields: result.parameters.fields,
        };

    };

    // async atualizarContexto(context) {
    //     const sessionClient = new dialogflow.SessionsClient({
    //         projectId: configs.project_id,
    //         credentials: {
    //             private_key: configs.private_key,
    //             client_email: configs.client_email
    //         }
    //     });

    //     const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
        
    //    await sessionClient.updateContext({ context: context })
    //         .then(responses => {
    //             const response = responses[0];
    //             console.log("update context", response)
    //             return response;
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }

}


module.exports = new DialogService();
