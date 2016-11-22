import builder from 'botbuilder';
import pluck from 'lodash/fp/pluck';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  { display: 'With a team', value: 'with a team' },
  { display: 'Make Apps alone', value: 'alone' },
  { display: 'Not sure', value: 'not sure' },
];

export default [
  session => builder.Prompts.choice(session,
    'Would we be working by ourselves or with a team?',
    pluck('display', choices),
  ),
  (session, { response: { index } }) => {
    const team = choices[index].value;
    updateConversationData(session, { team });
    session.endDialog();
  },
];
