import get from 'lodash/fp/get';
import resetSessionData from '../lib/resetSessionData';

export default {
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
