const builder = require('botbuilder');

module.exports = new builder.HeroCard()
  .title('MakeBot')
  .subtitle('The official bot of Make Apps and Make Bots.')
  .images([
    { url: 'https://s3-us-west-1.amazonaws.com/makeapps-makebots/appslogo-dark.svg' },
    { url: 'https://s3-us-west-1.amazonaws.com/makeapps-makebots/botslogo.svg' },
  ]);
