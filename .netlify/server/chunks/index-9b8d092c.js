var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  getSession: () => getSession,
  handle: () => handle
});
module.exports = __toCommonJS(stdin_exports);
var import_cookie = require("cookie");
var import_database_ec8a5d40 = require("./database-ec8a5d40.js");
var import_better_sqlite3 = require("better-sqlite3");
var import_uuid = require("uuid");
async function handle({ event, resolve }) {
  const cookies = (0, import_cookie.parse)(event.request.headers.get("cookie") || "");
  if (cookies.session_id) {
    const session = await (0, import_database_ec8a5d40.d)(cookies.session_id);
    if (session) {
      event.locals.user = { username: session.username, score: session.score };
      return resolve(event);
    }
  }
  event.locals.user = null;
  return resolve(event);
}
function getSession(event) {
  var _a;
  return ((_a = event == null ? void 0 : event.locals) == null ? void 0 : _a.user) ? {
    user: {
      username: event.locals.user.username,
      score: event.locals.user.score
    }
  } : {};
}
