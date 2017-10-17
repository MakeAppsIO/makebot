const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

module.exports = [
  session => builder.Prompts.text(session, 'Where are you located?'),
  (session, { response: location }) => {
    updateConversationData(session, { location });
    session.endDialog();
  },
];
