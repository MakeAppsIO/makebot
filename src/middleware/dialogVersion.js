import builder from 'botbuilder';

export default version =>
  builder.Middleware.dialogVersion({ version, resetCommand: /^reset/i });
