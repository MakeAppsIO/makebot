"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _get=require("lodash/fp/get"),_get2=_interopRequireDefault(_get),_resetSessionData=require("../lib/resetSessionData"),_resetSessionData2=_interopRequireDefault(_resetSessionData);exports.default={botbuilder:function(e,t){var s=(0,_get2.default)("message.text",e);s.match(/^reset/)&&((0,_resetSessionData2.default)(e),e.save(),console.log("=== reset session data ===\n")),t()}};
//# sourceMappingURL=resetData.js.map
