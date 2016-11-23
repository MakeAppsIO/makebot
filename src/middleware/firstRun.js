import builder from 'botbuilder';

export default builder.Middleware.firstRun({
  dialogId: '/firstRun',
  version: 1.0,
});
