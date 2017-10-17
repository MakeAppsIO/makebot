'use strict';

const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

module.exports = type => [session => builder.Prompts.text(session, `Describe the ${type} in one or two sentences.`), (session, { response: description }) => {
  updateConversationData(session, { description });
  session.endDialog();
}];
//# sourceMappingURL=description.js.map
