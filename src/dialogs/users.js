import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  'Just a few',
  'Up to a million',
  'Millions or more',
  'Not sure',
];

export default type => [
  session =>
    builder.Prompts.choice(session,
      `How many users do you expect for this version of the ${type}?`,
      choices,
    ),
  (session, { response: { index } }) => {
    const users = choices[index].toLowerCase();
    updateConversationData(session, { users });
    session.endDialog();
  },
];
