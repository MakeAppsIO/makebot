'use strict';

const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

module.exports = [session => builder.Prompts.text(session, 'How should we contact you?'), (session, { response: contact }) => {
  updateConversationData(session, { contact });
  session.endDialog();
}];
//# sourceMappingURL=contact.js.map
