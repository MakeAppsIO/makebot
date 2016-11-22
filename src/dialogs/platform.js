import gather from '../lib/gather';
import updateConversationData from '../lib/updateConversationData';

const choices = {
  app: ['Web', 'Mobile', 'Other'],
  bot: ['Facebook', 'Slack', 'Kik', 'Website', 'Other'],
};

export default type => [
  session => session.beginDialog(
    gather('What platforms are you interested in?', choices[type]),
  ),
  (session, platforms) => {
    updateConversationData(session, { platforms });
    session.endDialog();
  },
];
