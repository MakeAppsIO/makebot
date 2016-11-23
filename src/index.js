import { bot } from './initialize';
import builder from 'botbuilder';
import routes from './routes';
import sendGreeting from './lib/sendGreeting';
import showData from './middleware/showData';
import showDialogStack from './middleware/showDialogStack';
import showReceiveEvent from './middleware/showReceiveEvent';
import updateConversationData from './lib/updateConversationData';

bot.use(showData);
bot.use(showDialogStack);
bot.use(showReceiveEvent);

bot.on('conversationUpdate', sendGreeting);

bot.dialog('/', [
  session => builder.Prompts.choice(session, 'So nice to meet you! Are you working on an app or a bot?', ['app', 'bot']),
  (session, results) => {
    const isApp = results.response.index === 0;
    updateConversationData(session, { type: isApp ? 'app' : 'bot' });
    session.beginDialog(isApp ? routes.app.newOrExisting : routes.bot.newOrExisting);
  },
]);
