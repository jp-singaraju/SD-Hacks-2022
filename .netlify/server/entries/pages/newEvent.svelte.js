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
  default: () => NewEvent,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d9a4a690 = require("../../chunks/index-d9a4a690.js");
const css = {
  code: "div.svelte-mproac{padding:0}",
  map: null
};
const Geocoder = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let { accessToken } = $$props;
  let { options = {} } = $$props;
  let { version = "v4.5.1" } = $$props;
  let { types = [
    "country",
    "region",
    "postcode",
    "district",
    "place",
    "locality",
    "neighborhood",
    "address"
  ] } = $$props;
  let { placeholder = "Search" } = $$props;
  let { value = null } = $$props;
  let { customStylesheetUrl = false } = $$props;
  let { geocoder } = $$props;
  (0, import_index_d9a4a690.b)();
  const fieldId = "bsm-" + Math.random().toString(36).substring(6);
  Object.assign({
    version,
    accessToken,
    types: types.join(","),
    placeholder,
    customStylesheetUrl,
    value
  }, options);
  if ($$props.accessToken === void 0 && $$bindings.accessToken && accessToken !== void 0)
    $$bindings.accessToken(accessToken);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.types === void 0 && $$bindings.types && types !== void 0)
    $$bindings.types(types);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.customStylesheetUrl === void 0 && $$bindings.customStylesheetUrl && customStylesheetUrl !== void 0)
    $$bindings.customStylesheetUrl(customStylesheetUrl);
  if ($$props.geocoder === void 0 && $$bindings.geocoder && geocoder !== void 0)
    $$bindings.geocoder(geocoder);
  $$result.css.add(css);
  return `<div${(0, import_index_d9a4a690.d)("id", fieldId, 0)} class="${"svelte-mproac"}"></div>`;
});
async function load({ session }) {
  if (!(session == null ? void 0 : session.user)) {
    return { status: 302, redirect: "/login" };
  }
  return { props: { user: session.user } };
}
let mapboxToken = "pk.eyJ1IjoiZGNoYW5hbmEiLCJhIjoiY2wxczM5dWw1MTJoMjNrbG13azJ3cjVoNCJ9.AmtsrwvBqcgz58uWlGHB_A";
const NewEvent = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let title, description, capacity;
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"flex h-full h-[94vh] flex-grow flex-col justify-center overflow-x-hidden px-6 md:py-4 xl:px-64"}"><div class="${"flex flex-wrap justify-center"}"><form class="${"mb-4 rounded bg-gray-100 px-8 pt-6 pb-8 shadow-md"}"><h1 class="${"mb-4 text-3xl font-bold"}">Add New Event</h1>
			<div class="${"mb-4 border-b border-gray-700"}"><input class="${"mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:ring-0"}" type="${"text"}" required placeholder="${"Event Name"}"${(0, import_index_d9a4a690.d)("value", title, 0)}></div>
			<div class="${"mb-4 border-b border-gray-700"}"><input class="${"mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:ring-0"}" type="${"text"}" required placeholder="${"Description"}"${(0, import_index_d9a4a690.d)("value", description, 0)}></div>
			<div class="${"mb-4 border-b border-gray-700"}"><input class="${"mb-2 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:ring-0"}" type="${"number"}" required placeholder="${"Capacity"}"${(0, import_index_d9a4a690.d)("value", capacity, 0)}></div>
			<div class="${"mb-4 flex w-full justify-center"}">${(0, import_index_d9a4a690.v)(Geocoder, "Geocoder").$$render($$result, { accessToken: mapboxToken }, {}, {})}</div>
			<div class="${"inline-flex"}"><button class="${"focus:shadow-outline rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"}" type="${"submit"}">Add Event
				</button></div></form></div></div>`;
});
