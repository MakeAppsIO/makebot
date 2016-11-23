"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _initialize=require("./initialize"),_dialogVersion=require("./middleware/dialogVersion"),_dialogVersion2=_interopRequireDefault(_dialogVersion),_firstRun=require("./middleware/firstRun"),_firstRun2=_interopRequireDefault(_firstRun),_logAllEvents=require("./lib/logAllEvents"),_logAllEvents2=_interopRequireDefault(_logAllEvents),_showData=require("./middleware/showData"),_showData2=_interopRequireDefault(_showData),_showDialogStack=require("./middleware/showDialogStack"),_showDialogStack2=_interopRequireDefault(_showDialogStack),_showReceiveEvent=require("./middleware/showReceiveEvent"),_showReceiveEvent2=_interopRequireDefault(_showReceiveEvent),_showSession=require("./middleware/showSession"),_showSession2=_interopRequireDefault(_showSession),isDebugMode=process.env.DEBUG;isDebugMode&&_initialize.bot.use(_showReceiveEvent2.default),isDebugMode&&(_initialize.bot.use(_showData2.default),_initialize.bot.use(_showDialogStack2.default),_initialize.bot.use(_showSession2.default)),_initialize.bot.use(_dialogVersion2.default),_initialize.bot.use(_firstRun2.default),isDebugMode&&(0,_logAllEvents2.default)(_initialize.bot);var sendConvoStarter=function(e){var i=e.address;return _initialize.bot.send({address:i,type:"message",text:"Hi! Is anyone there?"})};_initialize.bot.on("conversationUpdate",sendConvoStarter);
//# sourceMappingURL=hooks.js.map
