import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

export default [
  session => builder.Prompts.text(session, 'Where are you located?'),
  (session, { response: location }) => {
    updateConversationData(session, { location });
    session.endDialog();
  },
];
