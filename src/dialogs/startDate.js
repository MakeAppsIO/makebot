import builder from 'botbuilder';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  'ASAP',
  'In the next two weeks',
  'Between two weeks and a month from now',
  'More than a month from now',
];

export default [
  session => builder.Prompts.choice(session,
    'When do you want to get started?',
    choices,
  ),
  (session, { response: index }) => {
    updateConversationData(session, { startDate: choices[index] });
    session.endDialog();
  },
];
