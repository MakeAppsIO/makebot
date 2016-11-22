import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

export default [
  session => builder.Prompts.text(session, 'How many developers do you need?'),
  (session, { response: devs }) => {
    updateConversationData(session, { devs });
    session.endDialog();
  },
];
