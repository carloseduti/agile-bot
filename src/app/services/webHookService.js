class WebHookService {
  async createTextResponse(textResponse, context,  session) {
    const response = {
      fulfillmentText: textResponse,
      outputContexts: [
        {
          name: `${session}/contexts/${context}`,
          lifespanCount: 2,
        }
      ]
    };
    return response;
  }
}
module.exports = WebHookService;
