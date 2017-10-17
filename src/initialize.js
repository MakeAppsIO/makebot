const builder = require('botbuilder');
const restify = require('restify');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () =>
  console.log('%s listening at %s', server.name, server.url),
);

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
});

const bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());
server.get('.*', restify.serveStatic({ directory: './public' }));

module.exports = { bot, connector, server };
