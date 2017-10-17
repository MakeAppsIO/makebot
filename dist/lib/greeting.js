'use strict';

const builder = require('botbuilder');
const heroCard = require('./heroCard');

module.exports = session => new builder.Message(session).addAttachment(heroCard);
//# sourceMappingURL=greeting.js.map
