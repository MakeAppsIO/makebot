import { bot } from './initialize';
import builder from 'botbuilder';
import routes from './routes';
import showData from './middleware/showData';
import showDialogStack from './middleware/showDialogStack';
import updateConversationData from './lib/updateConversationData';

bot.use(showData);
bot.use(showDialogStack);
bot.use({ receive(event, next) {
  console.log(event);
  next();
} });

bot.dialog('/', [
  session => builder.Prompts.choice(session, 'Yo! Do you want an app or a bot?', ['app', 'bot']),
  (session, results) => {
    const isApp = results.response.index === 0;
    updateConversationData(session, { type: isApp ? 'app' : 'bot' });
    session.beginDialog(isApp ? routes.app.newOrExisting : routes.bot.newOrExisting);
  },
]);
