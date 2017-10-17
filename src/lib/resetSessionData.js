/* eslint-disable fp/no-mutation, no-param-reassign */
module.exports = session => {
  session.userData = {};
  session.privateConversationData = {};
  session.conversationData = {};
  session.dialogData = {};
};
