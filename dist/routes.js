'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require('./initialize');

const bot = _require.bot;

const contact = require('./dialogs/contact');
const description = require('./dialogs/description');
const devs = require('./dialogs/devs');
const existing = require('./dialogs/existing');
const greenfield = require('./dialogs/greenfield');
const history = require('./dialogs/history');
const location = require('./dialogs/location');
const newOrExisting = require('./dialogs/newOrExisting');
const platforms = require('./dialogs/platforms');
const stack = require('./dialogs/stack');
const startDate = require('./dialogs/startDate');
const summary = require('./dialogs/summary');
const team = require('./dialogs/team');
const users = require('./dialogs/users');

const sharedRoutes = {
  contact: '/contact',
  devs: '/devs',
  location: '/location',
  startDate: '/startDate',
  summary: '/summary',
  team: '/team'
};

const routesFor = type => ({
  description: `/${type}/description`,
  existing: `/${type}/existing`,
  greenfield: `/${type}/greenfield`,
  history: `/${type}/history`,
  newOrExisting: `/${type}/newOrExisting`,
  platforms: `/${type}/platforms`,
  stack: `/${type}/stack`,
  users: `/${type}/users`
});

const appRoutes = routesFor('app');
const botRoutes = routesFor('bot');

const routes = {
  app: _extends({}, sharedRoutes, appRoutes),
  bot: _extends({}, sharedRoutes, botRoutes)
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

module.exports = routes;
//# sourceMappingURL=routes.js.map
