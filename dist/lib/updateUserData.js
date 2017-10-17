"use strict";

/* eslint-disable fp/no-mutating-assign */
module.exports = (session, update) => {
  Object.assign(session.userData, update);
};
//# sourceMappingURL=updateUserData.js.map
