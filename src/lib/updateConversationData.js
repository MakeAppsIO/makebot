/* eslint-disable fp/no-mutating-assign */

module.exports = (session, update) =>
  Object.assign(session.privateConversationData, update);
