const alunoService = require('../services/alunoService');

class WebHookController {

    async receive(req, res) {
        try {
            console.log(req.body)
            const intent = req.body?.queryResult.intent.displayName;
            if (intent === 'boasvindas') {
                let matricula = req.body.queryResult.parameters["matricula"];
                const resultado = await new alunoService().findAlunoByMatricula(matricula);
                if (resultado) {
                    console.log(resultado.nome)
                }
                let textResponse = "legal"
                const response = await this.createTextResponse(textResponse)

                res.send(response);
            }
            return res.status(200).json({ message: req });
        } catch (error) {
            console.log(error)
        }
    }

    async createTextResponse(textResponse) {
        let response = {
            "fulfillmentText": "This is a text response",
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            textResponse
                        ]
                    }
                }
            ],
        }

        return response
    }

    // createResponseWithContext(textResponse, context) {
    //     let response = {
    //         "fulfillmentMessages": [
    //             {
    //                 "text": {
    //                     "text": [
    //                         textResponse
    //                     ]
    //                 }
    //             }
    //         ],
    //         "outputContexts": [
    //             {
    //                 "name": "projects/project-id/agent/sessions/session-id/contexts/context-name",
    //                 "lifespanCount": 5,
    //                 "parameters": {
    //                     "param-name": "param-value"
    //                 }
    //             }
    //         ]
    //     }

    //     return response;
    // }

}
module.exports = new WebHookController();