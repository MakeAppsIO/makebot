import routes from '../routes';

const dialogs = [
  'users',
  'description',
  'devs',
  'team',
  'location',
  'startDate',
  'contact',
];

export default type => [
  session => {
    session.send(`Okay, so you want to make a new ${type}.`);
    session.beginDialog(routes[type].platforms);
  },
  ...dialogs.map(dialog => session =>
    session.beginDialog(routes[type][dialog]),
  ),
  session => session.beginDialog(routes[type].summary),
];
