"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _initialize=require("../initialize"),_get=require("lodash/fp/get"),_get2=_interopRequireDefault(_get),isNewConvo=function(e){return"conversationUpdate"===e.type&&(0,_get2.default)("membersAdded.length",e)};exports.default={receive:function(e,t){isNewConvo(e)?_initialize.bot.beginDialog(e.address,"/"):t()}};
//# sourceMappingURL=greeting.js.map