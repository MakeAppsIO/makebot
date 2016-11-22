import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

export default [
  session => builder.Prompts.text(session, 'How should we contact you?'),
  (session, { response: contact }) => {
    updateConversationData(session, { contact });
    session.endDialog();
  },
];
