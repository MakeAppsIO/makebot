import builder from 'botbuilder';
import pluck from 'lodash/fp/pluck';
import updateConversationData from '../lib/updateConversationData';

const choices = [
  { display: 'ASAP', value: 'as soon as possible' },
  { display: 'In the next two weeks', value: 'in the next two weeks' },
  { display: 'In two weeks to a month', value: 'two weeks to a month from now' },
  { display: 'In more than a month', value: 'in more than a month' },
  { display: 'Not sure', value: 'not sure' },
];

export default [
  session => builder.Prompts.choice(session,
    'When do you want to get started?',
    pluck('display', choices),
  ),
  (session, { response: { index } }) => {
    const startDate = choices[index].value;
    updateConversationData(session, { startDate });
    session.endDialog();
  },
];
