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
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_database_ec8a5d40 = require("../../../chunks/database-ec8a5d40.js");
var import_better_sqlite3 = require("better-sqlite3");
var import_uuid = require("uuid");
async function post({ request }) {
  const event = await request.json();
  (0, import_database_ec8a5d40.b)(event.title, event.lat, event.long, event.description, event.owner, event.date, event.capacity);
  const events = (0, import_database_ec8a5d40.c)();
  return {
    status: 200,
    body: events
  };
}
async function get({ request }) {
  const events = await (0, import_database_ec8a5d40.c)();
  return {
    status: 200,
    body: events
  };
}
