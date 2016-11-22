"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.server=exports.connector=exports.bot=void 0;var _botbuilder=require("botbuilder"),_botbuilder2=_interopRequireDefault(_botbuilder),_restify=require("restify"),_restify2=_interopRequireDefault(_restify),server=_restify2.default.createServer();server.listen(process.env.port||process.env.PORT||3978,function(){return console.log("%s listening at %s",server.name,server.url)});var connector=new _botbuilder2.default.ChatConnector({appId:process.env.MICROSOFT_APP_ID,appPassword:process.env.MICROSOFT_APP_PASSWORD}),bot=new _botbuilder2.default.UniversalBot(connector);server.post("/api/messages",connector.listen()),server.get(".*",_restify2.default.serveStatic({directory:"./public"})),exports.bot=bot,exports.connector=connector,exports.server=server;
//# sourceMappingURL=initialize.js.map
