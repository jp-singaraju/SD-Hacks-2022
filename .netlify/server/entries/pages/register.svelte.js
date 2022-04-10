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
  default: () => Register,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d9a4a690 = require("../../chunks/index-d9a4a690.js");
var import_js_sha256 = require("js-sha256");
async function load({ session }) {
  if (!(session == null ? void 0 : session.user)) {
    return { status: 200 };
  }
  return { status: 302, redirect: "/dash" };
}
const Register = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  return `<div class="${"flex h-full h-[94vh] flex-grow flex-col justify-center overflow-x-hidden px-6 md:py-4 xl:px-64"}"><div class="${"flex flex-wrap justify-center"}"><form class="${"mb-4 rounded bg-gray-100 px-8 pt-6 pb-8 shadow-md"}"><div class="${"mb-4 border-b border-gray-700"}"><h1 class="${"mb-4 text-3xl font-bold"}">Sign Up</h1>
				<input class="${"mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:ring-0"}" type="${"text"}" required placeholder="${"Username"}"${(0, import_index_d9a4a690.d)("value", username, 0)}></div>
			<div class="${"mb-4 border-b border-gray-700"}"><input class="${"mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:ring-0"}" type="${"password"}" required placeholder="${"Password"}"${(0, import_index_d9a4a690.d)("value", password, 0)}></div>
			${``}
			<div class="${"inline-flex"}"><button class="${"focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"}" type="${"submit"}" href="${"/register"}">Register
				</button></div></form></div></div>`;
});
