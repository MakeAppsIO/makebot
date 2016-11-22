import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

export default [
  session => builder.Prompts.choice(session,
    'Would we be working by ourselves or with a team?', [
      'Work with team',
      'Make Apps alone',
    ],
  ),
  (session, { response: { index } }) => {
    const team = index === 0 ? 'yes' : 'no';
    updateConversationData(session, { team });
    session.endDialog();
  },
];
