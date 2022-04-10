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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["background.jpg", "dashboard_style.css", "favicon.png", "home_style.css", "logo.png"]),
  mimeTypes: { ".jpg": "image/jpeg", ".css": "text/css", ".png": "image/png" },
  _: {
    entry: { "file": "start-7ab65244.js", "js": ["start-7ab65244.js", "chunks/index-3b2840e5.js", "chunks/index-b1d71b04.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "dash",
        pattern: /^\/dash\/?$/,
        names: [],
        types: [],
        path: "/dash",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "login",
        pattern: /^\/login\/?$/,
        names: [],
        types: [],
        path: "/login",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "newEvent",
        pattern: /^\/newEvent\/?$/,
        names: [],
        types: [],
        path: "/newEvent",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "register",
        pattern: /^\/register\/?$/,
        names: [],
        types: [],
        path: "/register",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/updateScore",
        pattern: /^\/api\/updateScore\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/updateScore.js")))
      },
      {
        type: "endpoint",
        id: "api/register",
        pattern: /^\/api\/register\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/register.js")))
      },
      {
        type: "endpoint",
        id: "api/logout",
        pattern: /^\/api\/logout\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/logout.js")))
      },
      {
        type: "endpoint",
        id: "api/login",
        pattern: /^\/api\/login\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/login.js")))
      },
      {
        type: "endpoint",
        id: "api/events",
        pattern: /^\/api\/events\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/events.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
