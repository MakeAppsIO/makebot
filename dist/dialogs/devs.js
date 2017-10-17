'use strict';

const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

module.exports = [session => builder.Prompts.text(session, 'How many developers do you need?'), (session, { response: devs }) => {
  updateConversationData(session, { devs });
  session.endDialog();
}];
//# sourceMappingURL=devs.js.map
