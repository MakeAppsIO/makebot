"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _initialize=require("../initialize"),_botbuilder=require("botbuilder"),_botbuilder2=_interopRequireDefault(_botbuilder),_get=require("lodash/fp/get"),_get2=_interopRequireDefault(_get),_heroCard=require("./heroCard"),_heroCard2=_interopRequireDefault(_heroCard),greeting=function(e){return(new _botbuilder2.default.Message).address(e).addAttachment(_heroCard2.default)},isNewConvo=function(e){return"conversationUpdate"===e.type&&(0,_get2.default)("membersAdded.length",e)};exports.default=function(e){isNewConvo(e)&&_initialize.bot.send(greeting(e.address))};
//# sourceMappingURL=sendGreeting.js.map