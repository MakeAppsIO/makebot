import builder from 'botbuilder';

export default new builder.HeroCard()
  .title('MakeBot')
  .text('Hey there! I\'m MakeBot, the official bot of Make Apps and Make Bots.')
  .buttons([{ title: 'Hi MakeBot!', type: 'postBack', value: 'Hi MakeBot!' }])
  .images([{ url: 'http://placekitten.com/300/300' }]);
