const dataTypes = [
  'conversationData',
  'dialogData',
  'privateConversationData',
  'userData',
];

export default {
  botbuilder(session, next) {
    const formattedData = type =>
      JSON.stringify(session[type], null, 2);
    dataTypes.forEach(type => console.log(
      `${type}: ${formattedData(type)}`,
    ));
    next();
  },
};
