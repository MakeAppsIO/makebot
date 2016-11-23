const dataTypes = [
  'conversationData',
  'dialogData',
  'privateConversationData',
  'userData',
];

export default {
  botbuilder(session, next) {
    console.log('\n@@@ showData middleware');
    console.log('*** Bot data:');
    const formattedData = type =>
      JSON.stringify(session[type], null, 2);
    dataTypes.forEach(type => console.log(
      `${type}: ${formattedData(type)}`,
    ));
    console.log('');
    next();
  },
};
