import builder from 'botbuilder';
import heroCard from './heroCard';

export default session =>
  new builder.Message(session)
    .addAttachment(heroCard);
