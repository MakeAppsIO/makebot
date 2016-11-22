import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  'Meh, maybe some friends, testers, and investors.',
  'Up to a million',
  'Millions or more',
];

export default type => [
  session =>
    builder.Prompts.choice(session,
      `How many users do you expect for this version of the ${type}?`,
      choices,
    ),
  (session, { response: { index } }) => {
    updateConversationData(session, { users: choices[index] });
    session.endDialog();
  },
];
