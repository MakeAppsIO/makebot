'use strict';

const builder = require('botbuilder');
const pluck = require('lodash/fp/pluck');
const updateConversationData = require('../lib/updateConversationData');

const choices = [{ display: 'With a team', value: 'with a team' }, { display: 'Make Apps alone', value: 'alone' }, { display: 'Not sure', value: 'not sure' }];

module.exports = [session => builder.Prompts.choice(session, 'Would we be working by ourselves or with a team?', pluck('display', choices)), (session, { response: { index } }) => {
  const team = choices[index].value;
  updateConversationData(session, { team });
  session.endDialog();
}];
//# sourceMappingURL=team.js.map
