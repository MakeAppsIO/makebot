/* eslint-disable fp/no-mutating-assign */

export default (session, update) =>
  Object.assign(session.privateConversationData, update);
