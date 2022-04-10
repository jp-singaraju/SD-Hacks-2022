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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d9a4a690 = require("../../chunks/index-d9a4a690.js");
var Typewriter_svelte_svelte_type_style_lang = "";
const css = {
  code: "@-webkit-keyframes svelte-1kgd8kr-cursorFade{0%,100%{opacity:1}50%{opacity:0}}@keyframes svelte-1kgd8kr-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1kgd8kr *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1kgd8kr .finished-typing::after{content:none}.cursor.svelte-1kgd8kr .typing::after{content:'\u258C';display:inline-block;color:var(--cursor-color);-webkit-animation:svelte-1kgd8kr-cursorFade 1.25s infinite;animation:svelte-1kgd8kr-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let options;
  let { interval = 30 } = $$props;
  let { cascade = false } = $$props;
  let { loop = false } = $$props;
  let { loopRandom = false } = $$props;
  let { scramble = false } = $$props;
  let { scrambleSlowdown = scramble ? true : false } = $$props;
  let { cursor = true } = $$props;
  let { delay = 0 } = $$props;
  let { unwriteInterval = false } = $$props;
  const dispatch = (0, import_index_d9a4a690.b)();
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cascade === void 0 && $$bindings.cascade && cascade !== void 0)
    $$bindings.cascade(cascade);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.loopRandom === void 0 && $$bindings.loopRandom && loopRandom !== void 0)
    $$bindings.loopRandom(loopRandom);
  if ($$props.scramble === void 0 && $$bindings.scramble && scramble !== void 0)
    $$bindings.scramble(scramble);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  $$result.css.add(css);
  options = {
    interval,
    cascade,
    loop,
    loopRandom,
    scramble,
    scrambleSlowdown,
    cursor,
    delay,
    dispatch,
    unwriteInterval
  };
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript>

<div class="${[
    "typewriter-container svelte-1kgd8kr",
    (cursor ? "cursor" : "") + " " + (options.delay > 0 ? "delay" : "")
  ].join(" ").trim()}"${(0, import_index_d9a4a690.i)({
    "--cursor-color": typeof cursor === "string" ? cursor : "black"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Routes = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>EcoGo!</title>`, ""}<link rel="${"stylesheet"}" href="${"home_style.css"}" data-svelte="svelte-1djbvp8">`, ""}

<header><div class="${"container_solid box"}"><div id="${"navbar"}"><img class="${"logo_image fixed"}" src="${"logo.png"}" alt="${"Eco Logo"}" align="${"left"}">
			<div class="${"login_button"}"><button class="${"focus:shadow-outline fixed bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"}"><a href="${"/login"}">Login/Signup</a></button></div></div>
		<div class="${"title_wrapper"}"><h1>Welcome to EcoGo!</h1></div>
		<div class="${"title_wrapper2"}"><h1>\u2193</h1></div></div>
	<div class="${"container_image box"}">${(0, import_index_d9a4a690.v)(Typewriter, "Typewriter").$$render($$result, { loop: true, cursor: false }, {}, {
    default: () => {
      return `<h1 class="${"typewrite"}">Involve.</h1>
			<h1 class="${"typewrite"}">Participate.</h1>
			<h1 class="${"typewrite"}">Help.</h1>
			<h1 class="${"typewrite"}">Encourage.</h1>
			<h1 class="${"typewrite"}">Sustain.</h1>`;
    }
  })}</div></header>
<div class="${"bg-white"}"><div class="${"text"}"><h2>Our Motto</h2>
		<h5>&quot;You Are Equipped With The Necessary Technology To Save The World! The World Now Rests In Your
			Hands! EcoGo!&quot;
		</h5></div>
	<div class="${"text"}"><h2>About EcoGo</h2>
		<h5>EcoGo is the nature&#39;s best friend. Our product aims to reduce pollution, decrease carbon
			emission, and make the world a healthier and happier place.
			<br><br> EcoGo tracks an individual&#39;s Eco-Score to provide the most accurate information
			on one&#39;s contribtion to making the Earth more sustainable. <br><br> We make the process of
			helping the Earth an interactive, plus-plus game. The theory behind this idea is that through
			competition people will be incentivized to help the Earth. <br><br>
			We recognize that every human has potential to help sustain the Earth. If even one person joins,
			that is an accomplishment because one-by-one we can soon involve all 7 billion people living on
			this Earth.
		</h5></div>
	<div class="${"text"}"><h2>Contact Us</h2>
		<h5>This hybrid (website + mobile) product was founded by two passionate individuals. For any
			questions, concerns, or comments, please reach out to us. <br><br>
			Jathin Pranav Singaraju -- pran.singaraju@gmail.com <br><br>
			Dhruv Chanana -- d.chanana777@gmail.com
		</h5></div></div>`;
});
