class WebHookService {
  async createTextResponse(textResponse, context, lifespan, session) {
    const response = {
      fulfillmentText: textResponse,
      outputContexts: [
        {
          name: `${session}/contexts/${context}`,
          lifespanCount: lifespan,
        }
      ]
    };
    return response;
  }
}
module.exports = WebHookService;
