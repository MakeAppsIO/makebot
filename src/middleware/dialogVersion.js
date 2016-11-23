import builder from 'botbuilder';

export default builder.Middleware.dialogVersion({
  message: 'Something has changed and we need to start over!',
  resetCommand: /^reset/,
  version: 1.0,
});
