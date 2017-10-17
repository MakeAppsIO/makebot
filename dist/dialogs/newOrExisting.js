'use strict';

const builder = require('botbuilder');
const routes = require('../routes');
const updateConversationData = require('../lib/updateConversationData');

module.exports = projectType => [session => {
  builder.Prompts.choice(session, `Is this a new ${projectType} or an existing project?`, ['new', 'existing']);
}, (session, results) => {
  const isNew = results.response.index === 0;
  const newOrExisting = isNew ? 'greenfield' : 'existing';
  updateConversationData(session, { newOrExisting });
  session.beginDialog(routes[projectType][newOrExisting]);
}];
//# sourceMappingURL=newOrExisting.js.map
