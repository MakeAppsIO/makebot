"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _botbuilder=require("botbuilder"),_botbuilder2=_interopRequireDefault(_botbuilder),_pluck=require("lodash/fp/pluck"),_pluck2=_interopRequireDefault(_pluck),_updateConversationData=require("../lib/updateConversationData"),_updateConversationData2=_interopRequireDefault(_updateConversationData),choices=[{display:"With a team",value:"with a team"},{display:"Make Apps alone",value:"alone"},{display:"Not sure",value:"not sure"}];exports.default=[function(e){return _botbuilder2.default.Prompts.choice(e,"Would we be working by ourselves or with a team?",(0,_pluck2.default)("display",choices))},function(e,t){var a=t.response.index,u=choices[a].value;(0,_updateConversationData2.default)(e,{team:u}),e.endDialog()}];
//# sourceMappingURL=team.js.map