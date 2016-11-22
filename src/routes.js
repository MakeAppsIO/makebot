import { bot } from './initialize';
import contact from './dialogs/contact';
import description from './dialogs/description';
import devs from './dialogs/devs';
import existing from './dialogs/existing';
import greenfield from './dialogs/greenfield';
import history from './dialogs/history';
import location from './dialogs/location';
import newOrExisting from './dialogs/newOrExisting';
import platforms from './dialogs/platforms';
import stack from './dialogs/stack';
import startDate from './dialogs/startDate';
import summary from './dialogs/summary';
import team from './dialogs/team';
import users from './dialogs/users';

const sharedRoutes = {
  contact: '/contact',
  devs: '/devs',
  location: '/location',
  startDate: '/startDate',
  summary: '/summary',
  team: '/team',
};

const routesFor = type => ({
  description: `/${type}/description`,
  existing: `/${type}/existing`,
  greenfield: `/${type}/greenfield`,
  history: `/${type}/history`,
  newOrExisting: `/${type}/newOrExisting`,
  platforms: `/${type}/platforms`,
  stack: `/${type}/stack`,
  users: `/${type}/users`,
});

const appRoutes = routesFor('app');
const botRoutes = routesFor('bot');

const routes = {
  app: { ...sharedRoutes, ...appRoutes },
  bot: { ...sharedRoutes, ...botRoutes },
};

['app', 'bot'].forEach(type => {
  bot.dialog(routes[type].newOrExisting, newOrExisting(type));
  bot.dialog(routes[type].existing, existing(type));
  bot.dialog(routes[type].greenfield, greenfield(type));
  bot.dialog(routes[type].platforms, platforms(type));
  bot.dialog(routes[type].users, users(type));
  bot.dialog(routes[type].description, description(type));
  bot.dialog(routes[type].stack, stack(type));
  bot.dialog(routes[type].history, history(type));
});

bot.dialog(sharedRoutes.devs, devs);
bot.dialog(sharedRoutes.team, team);
bot.dialog(sharedRoutes.location, location);
bot.dialog(sharedRoutes.startDate, startDate);
bot.dialog(sharedRoutes.contact, contact);
bot.dialog(sharedRoutes.summary, summary);

export default routes;
