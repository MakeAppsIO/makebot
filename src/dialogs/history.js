import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  'Less than a month',
  'One to six months',
  'Six months to two years',
  'More than two years',
];

export default type => [
  session => builder.Prompts.choice(session,
    `How long has your ${type} been in development?`,
    choices,
  ),
  (session, { response: { index } }) => {
    const history = choices[index].toLowerCase();
    updateConversationData(session, { history });
    session.endDialog();
  },
];
