'use strict';

module.exports = {
  receive(event, next) {
    console.log('\n@@@ showReceiveEvent middleware');
    console.log('*** Incoming event:\n', event);
    next();
  }
};
//# sourceMappingURL=showReceiveEvent.js.map
