const get = require('lodash/fp/get');
const resetSessionData = require('../lib/resetSessionData');

module.exports = {
  botbuilder(session, next) {
    const text = get('message.text', session);
    if (text.match(/^reset/)) {
      resetSessionData(session);
      session.save();
      console.log('=== reset session data ===\n');
    }
    next();
  },
};
