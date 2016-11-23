import { bot } from './initialize';
import dialogVersion from './middleware/dialogVersion';
import firstRun from './middleware/firstRun';
import logAllEvents from './lib/logAllEvents';
import showData from './middleware/showData';
import showDialogStack from './middleware/showDialogStack';
import showReceiveEvent from './middleware/showReceiveEvent';
import showSession from './middleware/showSession';

const isDebugMode = process.env.DEBUG;

// `receive` hooks
if (isDebugMode) {
  bot.use(showReceiveEvent);
}

// `botbuilder` hooks
if (isDebugMode) {
  bot.use(showData);
  bot.use(showDialogStack);
  bot.use(showSession);
}

bot.use(dialogVersion);
bot.use(firstRun);

// `on` handlers
if (isDebugMode) {
  logAllEvents(bot);
}

const sendConvoStarter = ({ address }) =>
  bot.send({ address, type: 'message', text: 'Hi! Is anyone there?' });

bot.on('conversationUpdate', sendConvoStarter);
