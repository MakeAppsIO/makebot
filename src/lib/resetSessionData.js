/* eslint-disable fp/no-mutation, no-param-reassign */
export default session => {
  session.userData = {};
  session.privateConversationData = {};
  session.conversationData = {};
  session.dialogData = {};
};
