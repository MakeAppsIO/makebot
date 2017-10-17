'use strict';

const builder = require('botbuilder');

module.exports = builder.Middleware.dialogVersion({
  message: 'Something has changed and we need to start over!',
  resetCommand: /^reset/,
  version: 1.0
});
//# sourceMappingURL=dialogVersion.js.map
