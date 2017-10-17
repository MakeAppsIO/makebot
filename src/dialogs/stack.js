const builder = require('botbuilder');
const updateConversationData = require('../lib/updateConversationData');

module.exports = type => [
  session => builder.Prompts.confirm(session,
    `Do you know what languages and/or tech stack your ${type} uses?`,
  ),
  (session, { response: userKnowsStack }) => {
    if (userKnowsStack) {
      builder.Prompts.text(session, 'Describe the languages/stack for me.');
    } else {
      session.endDialog('No worries! We\'ll figure it out.');
    }
  },
  (session, { response: stack }) => {
    updateConversationData(session, { stack });
    session.endDialog();
  },
];
