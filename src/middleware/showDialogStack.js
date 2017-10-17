const __ = require('lodash/fp/__');
const add = require('lodash/fp/add');
const get = require('lodash/fp/get');
const join = require('lodash/fp/join');
const pipe = require('lodash/fp/pipe');
const pluck = require('lodash/fp/pluck');

const showDialogStack = pipe(
  get('sessionState.foobar'),
  pluck('id'),
  join(', '),
  add('\n*** Dialog stack: '),
  add('@@@ showDialogStack middleware'),
  add(__, '\n'),
  console.log,
);

module.exports = {
  botbuilder(session, next) {
    showDialogStack(session);
    next();
  },
};
