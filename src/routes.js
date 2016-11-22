import { bot } from './initialize';
import contact from './dialogs/contact';
import description from './dialogs/description';
import devs from './dialogs/devs';
import greenfield from './dialogs/greenfield';
import location from './dialogs/location';
import platform from './dialogs/platform';
import stack from './dialogs/stack';
import start from './dialogs/start';
import startDate from './dialogs/startDate';
import team from './dialogs/team';
import users from './dialogs/users';

const routesFor = type => ({
  contact: `${type}/contact`,
  description: `${type}/description`,
  devs: `${type}/devs`,
  existing: `${type}/existing`,
  greenfield: `${type}/greenfield`,
  location: `${type}/location`,
  platform: `${type}/platform`,
  stack: `${type}/stack`,
  startDate: `${type}/startDate`,
  start: `${type}/start`,
  team: `${type}/team`,
  users: `${type}/users`,
});

const routes = {
  app: routesFor('app'),
  bot: routesFor('bot'),
};

['app', 'bot'].forEach(type => {
  bot.dialog(routes[type].start, start(type));
  bot.dialog(routes[type].greenfield, greenfield(type));
  bot.dialog(routes[type].platform, platform(type));
  bot.dialog(routes[type].users, users(type));
  bot.dialog(routes[type].description, description(type));
  bot.dialog(routes[type].devs, devs);
  bot.dialog(routes[type].team, team);
  bot.dialog(routes[type].location, location);
  bot.dialog(routes[type].startDate, startDate);
  bot.dialog(routes[type].contact, contact);
  bot.dialog(routes[type].stack, stack);
});

export default routes;
