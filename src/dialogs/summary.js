import builder from 'botbuilder';
import emailToMakeApps from '../lib/emailToMakeApps';
import equals from 'lodash/fp/equals';
import { oxford } from 'humanize-plus';
import pick from 'lodash/fp/pick';
import pluck from 'lodash/fp/pluck';

const fields = [
  { name: 'type', display: 'App or bot?' },
  { name: 'newOrExisting', display: 'New or existing?' },
  { name: 'platforms', display: 'Platforms' },
  { name: 'users', display: '# of users' },
  { name: 'description', display: 'Description' },
  { name: 'stack', display: 'Tech stack' },
  { name: 'history', display: 'History' },
  { name: 'devs', display: '# of devs' },
  { name: 'team', display: 'Work with team?' },
  { name: 'location', display: 'Location' },
  { name: 'startDate', display: 'Start date' },
  { name: 'contact', display: 'Contact' },
];

const filterFields = pick(pluck('name', fields));

const giveSummary = session => {
  session.send('Okay, let me see if I have this straight.');
  const data = filterFields(session.privateConversationData);

  session.send(data.newOrExisting === 'greenfield' ?
    `You want to build a new ${data.type}.` :
    `You need help with an existing ${data.type}`,
  );

  session.send(
    data.platforms.find(equals('Not sure')) ?
      'You\'re not sure what platforms you\'re interested in.' :
      `You're interested in ${oxford(data.platforms)} platforms.`,
  );

  session.send(
    data.users === 'Not sure' ?
      'You\'re not sure how many users you expect' :
      `You anticipate ${data.users} users.`,
  );

  session.send(`You described your ${data.type} as "${data.description}"`);

  if (data.stack) {
    session.send(`Your ${data.type} runs on ${data.stack}.`);
  }

  if (data.history) {
    session.send(`Your ${data.type} has been in development for ${data.history}.`);
  }

  session.send(`You say you need "${data.devs}" developers.`);

  session.send(
    data.team === 'not sure' ?
      'You\'re not sure whether you want us to work with a team or alone.' :
      `Make Apps will be working ${data.team}.`,
  );

  session.send(`You are located in ${data.location}`);

  session.send(
    data.startDate === 'not sure' ?
      'You\'re not sure when you want to get started.' :
      `You want to get started ${data.startDate}`,
  );

  session.send(`You told us to contact you by ${data.contact}`);

  builder.Prompts.confirm(session, 'Does this all look right?');
};

const handleConfirmation = (session, { response: looksCorrect }) => {
  if (looksCorrect) {
    const data = filterFields(session.privateConversationData);
    emailToMakeApps(data);
    session.endDialog('Great! We\'ll be in touch with you soon.');
  } else {
    session.endDialog('Ah, whoops. Soon you\'ll be able to correct your entries, but for now we have to start over.');
  }
};

export default [
  giveSummary,
  handleConfirmation,
];
