const gather = require('../lib/gather');
const updateConversationData = require('../lib/updateConversationData');

const choices = {
  app: ['Web', 'Mobile', 'Other', 'Not sure'],
  bot: ['Facebook', 'Slack', 'Kik', 'Website', 'Other', 'Not sure'],
};

module.exports = type => [
  session => session.beginDialog(
    gather('What platforms are you interested in?', choices[type]),
  ),
  (session, platforms) => {
    updateConversationData(session, { platforms });
    session.endDialog();
  },
];
