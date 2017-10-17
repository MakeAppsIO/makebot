import './hooks';

const { bot } = require('./initialize');
const builder = require('botbuilder');
const greeting = require('./lib/greeting');
const routes = require('./routes');
const updateConversationData = require('./lib/updateConversationData');
const updateUserData = require('./lib/updateUserData');

bot.dialog('/firstRun', [
  session => {
    session.send(greeting(session));
    builder.Prompts.text(session, 'Hey! I\'m MakeBot. What\'s your name?');
  },
  (session, { response: name }) => {
    updateUserData(session, { name });
    session.send(`So nice to meet you, ${name}!`);
    session.replaceDialog('/', true);
  },
]);

bot.dialog('/', [
  (session, fromFirstRun) => {
    if (!fromFirstRun) {
      session.send(`Great to see you again, ${session.userData.name}!`);
    }
    builder.Prompts.choice(session, 'Are you working on an app or a bot?', ['app', 'bot']);
  },
  (session, results) => {
    const isApp = results.response.index === 0;
    updateConversationData(session, { type: isApp ? 'app' : 'bot' });
    session.beginDialog(isApp ? routes.app.newOrExisting : routes.bot.newOrExisting);
  },
]);
