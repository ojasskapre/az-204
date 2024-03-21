const { app } = require('@azure/functions');

app.http('WatchInfo', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const model = request.query.get('model');
    if (!model) {
      return {
        status: 400,
        body: 'Please supply model in the query string',
      };
    }
    const watchInfo = {
      model: model,
      brand: 'Rolex',
      year: 2021,
      price: 10000,
    };
    return { body: JSON.stringify(watchInfo) };
  },
});
