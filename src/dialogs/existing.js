import routes from '../routes';

const dialogs = [
  'users',
  'description',
  'stack',
  'history',
  'devs',
  'team',
  'location',
  'startDate',
  'contact',
];

export default type => [
  session => {
    session.send(`Okay, so you've got an existing ${type} you want to work on.`);
    session.beginDialog(routes[type].platforms);
  },
  ...dialogs.map(dialog => session =>
    session.beginDialog(routes[type][dialog]),
  ),
  session => session.beginDialog(routes[type].summary),
];
