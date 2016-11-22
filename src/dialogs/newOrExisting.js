import builder from 'botbuilder';
import routes from '../routes';
import updateConversationData from '../lib/updateConversationData';

export default projectType => [
  session => {
    builder.Prompts.choice(session,
      `Is this a new ${projectType} or an existing project?`,
      ['new', 'existing'],
    );
  },
  (session, results) => {
    const isNew = results.response.index === 0;
    const newOrExisting = isNew ? 'greenfield' : 'existing';
    updateConversationData(session, { newOrExisting });
    session.beginDialog(routes[projectType][newOrExisting]);
  },
];
