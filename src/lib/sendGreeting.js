import { bot } from '../initialize';
import builder from 'botbuilder';
import get from 'lodash/fp/get';
import heroCard from './heroCard';

const greeting = address =>
  new builder.Message()
    .address(address)
    .addAttachment(heroCard);

const isNewConvo = event =>
  event.type === 'conversationUpdate' && get('membersAdded.length', event);

export default event => {
  if (isNewConvo(event)) {
    bot.send(greeting(event.address));
  }
};
