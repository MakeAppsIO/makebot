const builder = require('botbuilder');

module.exports = builder.Middleware.firstRun({
  dialogId: '/firstRun',
  version: 1.0,
});
