'use strict';

const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

const choices = ['Less than a month', 'One to six months', 'Six months to two years', 'More than two years'];

module.exports = type => [session => builder.Prompts.choice(session, `How long has your ${type} been in development?`, choices), (session, { response: { index } }) => {
  const history = choices[index].toLowerCase();
  updateConversationData(session, { history });
  session.endDialog();
}];
//# sourceMappingURL=history.js.map
