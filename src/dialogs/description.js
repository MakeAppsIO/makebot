import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

export default type => [
  session => builder.Prompts.text(session, `Describe the ${type} in one or two sentences.`),
  (session, { response: description }) => {
    updateConversationData(session, { description });
    session.endDialog();
  },
];
