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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_database_ec8a5d40 = require("../../../chunks/database-ec8a5d40.js");
var import_cookie = require("cookie");
var import_better_sqlite3 = require("better-sqlite3");
var import_uuid = require("uuid");
async function get({ request }) {
  const cookies = (0, import_cookie.parse)(request.headers.get("cookie") || "");
  if (cookies.session_id) {
    await (0, import_database_ec8a5d40.a)(cookies.session_id);
  }
  return {
    status: 200,
    headers: {
      "Set-Cookie": (0, import_cookie.serialize)("session_id", "", {
        path: "/",
        expires: new Date(0)
      })
    }
  };
}
