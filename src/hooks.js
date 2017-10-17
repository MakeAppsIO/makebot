const { bot } = require('./initialize');
const dialogVersion = require('./middleware/dialogVersion');
const firstRun = require('./middleware/firstRun');
const logAllEvents = require('./lib/logAllEvents');
const showData = require('./middleware/showData');
const showDialogStack = require('./middleware/showDialogStack');
const showReceiveEvent = require('./middleware/showReceiveEvent');
const showSession = require('./middleware/showSession');

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
