var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  a: () => removeSession,
  b: () => addEvent,
  c: () => getAllEvents,
  d: () => getSession,
  g: () => getUser,
  i: () => initSession,
  r: () => register,
  u: () => updateScore
});
module.exports = __toCommonJS(stdin_exports);
var import_better_sqlite3 = __toESM(require("better-sqlite3"));
var import_uuid = require("uuid");
const db = new import_better_sqlite3.default("./ecogo.sqlite");
const usersSchema = `CREATE TABLE IF NOT EXISTS users(
	id INTEGER NOT NULL PRIMARY KEY, 
	username TEXT NOT NULL, 
	password TEXT NOT NULL,
	score INTEGER NOT NULL
)`;
db.exec(usersSchema);
const eventsSchema = `CREATE TABLE IF NOT EXISTS events(
	id INTEGER NOT NULL PRIMARY KEY, 
	title TEXT NOT NULL,
	lat FLOAT NOT NULL,
	long FLOAT NOT NULL,
	description TEXT NOT NULL,
	owner TEXT NOT NULL,
	date DATETIME,
	capacity INTEGER
)`;
db.exec(eventsSchema);
let sessions = [];
const getUser = async (username) => {
  const row = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  return Promise.resolve(row);
};
const register = async (username, password) => {
  let user = await getUser(username);
  if (!user) {
    db.prepare("INSERT INTO users (username, password, score) VALUES (?, ?, ?)").run(username, password, 0);
    return true;
  } else {
    return false;
  }
};
const updateScore = async (username, score) => {
  db.prepare("UPDATE users SET score=? WHERE username=?").run(score, username);
  return getUser(username);
};
const initSession = async (username) => {
  let user = await getUser(username);
  const session = {
    id: (0, import_uuid.v4)(),
    username: user.username
  };
  sessions.push(session);
  return Promise.resolve(session);
};
const getSession = async (id) => {
  const session = sessions.find((session2) => session2.id === id);
  if (!session)
    return Promise.resolve(null);
  const user = await getUser(session.username);
  const newSession = {
    id: session.id,
    username: session.username,
    score: user.score
  };
  return Promise.resolve(newSession);
};
const removeSession = async (id) => {
  const session = sessions.find((session2) => session2.id === id);
  if (!session)
    return Promise.reject(new Error("Session not found"));
  sessions = sessions.filter((session2) => session2.id !== id);
  return Promise.resolve(session);
};
const getAllEvents = async () => {
  const events = db.prepare("SELECT * FROM events").all();
  return Promise.resolve(events);
};
const addEvent = (title, lat, long, description, owner, date, capacity) => {
  console.log(title, lat, long, description, owner, date, capacity);
  db.prepare("INSERT INTO events (title, lat, long, description, owner, date, capacity) VALUES (?, ?, ?, ?, ?, ?, ?)").run(title, lat, long, description, owner, date, capacity);
};
