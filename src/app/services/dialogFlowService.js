const dialogflow = require('dialogflow');
const configs = require('../../config/agile-bot.json');
const { struct } = require('pb-util');
const { config } = require('dotenv');

class DialogService {

    async sendMessage(chatId, message , context) {
        const sessionClient = new dialogflow.SessionsClient({
            projectId: configs.project_id,
            credentials: {
                private_key: configs.private_key,
                client_email: configs.client_email
            }
        });

        const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

        const requestNoContext = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'pt-br'
                }
            }
        }

        const requestWithContext = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'pt-br'
                }
            },
            outputContexts: [
                {
                  name: `${sessionPath}/contexts/${context}`,
                  lifespanCount: 5,
                  parameters: {
                    context: context
                  }
                }
              ]
        }
        const response = await sessionClient.detectIntent(context ? requestWithContext : requestNoContext);
        const result = response[0].queryResult;
        console.log(result)

        return {
            text: result.fulfillmentText,
            intent: result.intent.displayName,
            fields: result.parameters.fields,
        };

    };

    async atualizarContexto(context, chatId) {

        const sessionClient = new dialogflow.SessionsClient({
            projectId: configs.project_id,
            credentials: {
                private_key: configs.private_key,
                client_email: configs.client_email
            }
        });

        const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

        const contextsClient = new dialogflow.ContextsClient(
            {
                projectId: configs.project_id,
                credentials: {
                    private_key: configs.private_key,
                    client_email: configs.client_email
                }
            }
        );

        const request = {
            parent: sessionPath,
            context: {
                name: `${sessionPath}/contexts/${context}`,
                lifespanCount: 5,
                parameters: { context: context }
            }
        };

        const [contextReturn] = await contextsClient.createContext(request);

        return contextReturn;
    }

    async getContext(context, chatId) {

        const sessionClient = new dialogflow.SessionsClient({
            projectId: configs.project_id,
            credentials: {
                private_key: configs.private_key,
                client_email: configs.client_email
            }
        });

        const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

        const client = new dialogflow.v2.ContextsClient({
            projectId: configs.project_id,
            credentials: {
                private_key: configs.private_key,
                client_email: configs.client_email
            }
        });
        const formattedName = client.contextPath(configs.project_id, '832536276', context);
        client.getContext({ name: formattedName })
            .then(responses => {
                const response = responses[0];
                return response;
            })
            .catch(err => {
                console.error(err);
            });
    }





}


module.exports = new DialogService();
