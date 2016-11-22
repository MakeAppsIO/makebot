import { bot } from './initialize';
import builder from 'botbuilder';
import routes from './routes';
import showData from './middleware/showData';
import showDialogStack from './middleware/showDialogStack';

bot.use(showData);
bot.use(showDialogStack);

bot.dialog('/', [
  session => builder.Prompts.choice(session, 'Yo! Do you want an app or a bot?', ['app', 'bot']),
  (session, results) => {
    const isApp = results.response.index === 0;
    session.beginDialog(isApp ? routes.app.start : routes.bot.start);
  },
]);
