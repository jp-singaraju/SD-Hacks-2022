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
  default: () => Dash
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d9a4a690 = require("../../chunks/index-d9a4a690.js");
const subscriber_queue = [];
function writable(value, start = import_index_d9a4a690.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_d9a4a690.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_d9a4a690.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_d9a4a690.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const getStores = () => {
  const stores = (0, import_index_d9a4a690.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const throw_error = (verb) => {
  throw new Error(`Can only ${verb} session store in browser`);
};
const session = {
  subscribe(fn) {
    const store = getStores().session;
    return store.subscribe(fn);
  },
  set: () => throw_error("set"),
  update: () => throw_error("update")
};
const contextKey = {};
class EventQueue {
  constructor() {
    this.queue = writable([]);
    this.unsubscribe = null;
    this.started = false;
  }
  send(command, params = []) {
    if (!command) {
      return;
    }
    this.queue.update((q) => [...q, [command, params]]);
  }
  start(map) {
    this.unsubscribe = this.queue.subscribe((queue) => {
      while (queue.length) {
        const [command, params] = queue.shift();
        map[command].apply(map, params);
      }
    });
    this.started = true;
  }
  stop() {
    if (!this.started) {
      return;
    }
    this.unsubscribe();
    this.queue = writable([]);
    this.started = false;
  }
}
const css$1 = {
  code: "div.svelte-1oajubz{width:100%;height:100%}",
  map: null
};
const Map = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let { map = null } = $$props;
  let { version = "v2.3.1" } = $$props;
  let { center = [0, 0] } = $$props;
  let { zoom = 9 } = $$props;
  let { zoomRate = 1 } = $$props;
  let { wheelZoomRate = 1 } = $$props;
  let { options = {} } = $$props;
  let { accessToken } = $$props;
  let { customStylesheetUrl = false } = $$props;
  let { style = "mapbox://styles/mapbox/streets-v11" } = $$props;
  (0, import_index_d9a4a690.b)();
  (0, import_index_d9a4a690.s)(contextKey, {
    getMap: () => map,
    getMapbox: () => mapbox
  });
  let container;
  let mapbox;
  Object.assign({
    accessToken,
    container,
    style,
    center,
    zoom,
    zoomRate,
    wheelZoomRate,
    version,
    customStylesheetUrl,
    map
  }, options);
  const queue = new EventQueue();
  (0, import_index_d9a4a690.o)(() => {
    queue.stop();
    map = void 0;
  });
  function fitBounds(bbox, data = {}) {
    queue.send("fitBounds", [bbox, data]);
  }
  function flyTo(destination, data = {}) {
    queue.send("flyTo", [destination, data]);
  }
  function resize() {
    queue.send("resize");
  }
  function setCenter(coords, data = {}) {
    queue.send("setCenter", [coords, data]);
  }
  function setZoom(value, data = {}) {
    queue.send("setZoom", [value, data]);
  }
  function addControl(control, position = "top-right") {
    queue.send("addControl", [control, position]);
  }
  function getMap() {
    return map;
  }
  function getMapbox() {
    return mapbox;
  }
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.zoomRate === void 0 && $$bindings.zoomRate && zoomRate !== void 0)
    $$bindings.zoomRate(zoomRate);
  if ($$props.wheelZoomRate === void 0 && $$bindings.wheelZoomRate && wheelZoomRate !== void 0)
    $$bindings.wheelZoomRate(wheelZoomRate);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.accessToken === void 0 && $$bindings.accessToken && accessToken !== void 0)
    $$bindings.accessToken(accessToken);
  if ($$props.customStylesheetUrl === void 0 && $$bindings.customStylesheetUrl && customStylesheetUrl !== void 0)
    $$bindings.customStylesheetUrl(customStylesheetUrl);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.fitBounds === void 0 && $$bindings.fitBounds && fitBounds !== void 0)
    $$bindings.fitBounds(fitBounds);
  if ($$props.flyTo === void 0 && $$bindings.flyTo && flyTo !== void 0)
    $$bindings.flyTo(flyTo);
  if ($$props.resize === void 0 && $$bindings.resize && resize !== void 0)
    $$bindings.resize(resize);
  if ($$props.setCenter === void 0 && $$bindings.setCenter && setCenter !== void 0)
    $$bindings.setCenter(setCenter);
  if ($$props.setZoom === void 0 && $$bindings.setZoom && setZoom !== void 0)
    $$bindings.setZoom(setZoom);
  if ($$props.addControl === void 0 && $$bindings.addControl && addControl !== void 0)
    $$bindings.addControl(addControl);
  if ($$props.getMap === void 0 && $$bindings.getMap && getMap !== void 0)
    $$bindings.getMap(getMap);
  if ($$props.getMapbox === void 0 && $$bindings.getMapbox && getMapbox !== void 0)
    $$bindings.getMapbox(getMapbox);
  $$result.css.add(css$1);
  zoom && setZoom(zoom);
  return `<div class="${"svelte-1oajubz"}">${map ? `${slots.default ? slots.default({}) : ``}` : ``}
</div>`;
});
function randomColour() {
  return Math.round(Math.random() * 255);
}
const Marker = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  const { getMap, getMapbox } = (0, import_index_d9a4a690.g)(contextKey);
  getMap();
  getMapbox();
  let { lat } = $$props;
  let { lng } = $$props;
  let { label = "Marker" } = $$props;
  let { popupClassName = "beyonk-mapbox-popup" } = $$props;
  let { markerOffset = [0, 0] } = $$props;
  let { popupOffset = 10 } = $$props;
  let { color = randomColour() } = $$props;
  let { popup = true } = $$props;
  let { popupOptions = {} } = $$props;
  let { markerOptions = {} } = $$props;
  let marker;
  let element;
  let elementPopup;
  function getMarker() {
    return marker;
  }
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.popupClassName === void 0 && $$bindings.popupClassName && popupClassName !== void 0)
    $$bindings.popupClassName(popupClassName);
  if ($$props.markerOffset === void 0 && $$bindings.markerOffset && markerOffset !== void 0)
    $$bindings.markerOffset(markerOffset);
  if ($$props.popupOffset === void 0 && $$bindings.popupOffset && popupOffset !== void 0)
    $$bindings.popupOffset(popupOffset);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.popup === void 0 && $$bindings.popup && popup !== void 0)
    $$bindings.popup(popup);
  if ($$props.popupOptions === void 0 && $$bindings.popupOptions && popupOptions !== void 0)
    $$bindings.popupOptions(popupOptions);
  if ($$props.markerOptions === void 0 && $$bindings.markerOptions && markerOptions !== void 0)
    $$bindings.markerOptions(markerOptions);
  if ($$props.getMarker === void 0 && $$bindings.getMarker && getMarker !== void 0)
    $$bindings.getMarker(getMarker);
  return `<div${(0, import_index_d9a4a690.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>

<div class="${"popup"}"${(0, import_index_d9a4a690.d)("this", elementPopup, 0)}>${slots.popup ? slots.popup({}) : ``}</div>`;
});
const css = {
  code: "div.svelte-frvpva{display:none}",
  map: null
};
const GeolocateControl = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  const { getMap, getMapbox } = (0, import_index_d9a4a690.g)(contextKey);
  const map = getMap();
  const mapbox = getMapbox();
  let { position = "top-left" } = $$props;
  let { options = {} } = $$props;
  let dispatcher;
  const geolocate = new mapbox.GeolocateControl(options);
  map.addControl(geolocate, position);
  function trigger() {
    geolocate.trigger();
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0)
    $$bindings.trigger(trigger);
  $$result.css.add(css);
  return `<div class="${"svelte-frvpva"}"${(0, import_index_d9a4a690.d)("this", dispatcher, 0)}></div>`;
});
const NavigationControl = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  const { getMap, getMapbox } = (0, import_index_d9a4a690.g)(contextKey);
  const map = getMap();
  const mapbox = getMapbox();
  let { position = "top-right" } = $$props;
  let { options = {} } = $$props;
  const nav = new mapbox.NavigationControl(options);
  map.addControl(nav, position);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return ``;
});
const ScaleControl = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  const { getMap, getMapbox } = (0, import_index_d9a4a690.g)(contextKey);
  const map = getMap();
  const mapbox = getMapbox();
  let { position = "bottom-right" } = $$props;
  let { options = {} } = $$props;
  const optionsWithDefaults = Object.assign({ maxWidth: 80, unit: "metric" }, options);
  const scale = new mapbox.ScaleControl(optionsWithDefaults);
  map.addControl(scale, position);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return ``;
});
const controls = {
  GeolocateControl,
  NavigationControl,
  ScaleControl
};
let mapboxToken = "pk.eyJ1IjoiZGNoYW5hbmEiLCJhIjoiY2wxczM5dWw1MTJoMjNrbG13azJ3cjVoNCJ9.AmtsrwvBqcgz58uWlGHB_A";
const Map_1 = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  const { GeolocateControl: GeolocateControl2, NavigationControl: NavigationControl2 } = controls;
  (0, import_index_d9a4a690.f)(session);
  let center = { lat: 37.0902, lng: -95.7129 };
  let zoom = 2;
  let mapComponent;
  let events;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="${"map"}"><div class="${"relative h-[340px] w-full"}"><div class="${"absolute w-full h-[340px]"}">${(0, import_index_d9a4a690.v)(Map, "Map").$$render($$result, {
      accessToken: mapboxToken,
      this: mapComponent,
      zoom,
      center
    }, {
      this: ($$value) => {
        mapComponent = $$value;
        $$settled = false;
      },
      zoom: ($$value) => {
        zoom = $$value;
        $$settled = false;
      },
      center: ($$value) => {
        center = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${(0, import_index_d9a4a690.v)(NavigationControl2, "NavigationControl").$$render($$result, {}, {}, {})}
			${(0, import_index_d9a4a690.h)(events, (event) => {
          return `${(0, import_index_d9a4a690.v)(Marker, "Marker").$$render($$result, {
            lat: event.lat,
            lng: event.long,
            label: event.title
          }, {}, {
            popup: () => {
              return `<div slot="${"popup"}"><h1 class="${"text text-lg font-bold"}">${(0, import_index_d9a4a690.e)(event.title)}  
						<button class="${"focus:shadow-outline bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none text-sm"}">Join</button></h1>
						<h1 class="${"text text-lg"}">${(0, import_index_d9a4a690.e)(event.description)}</h1>
					</div>`;
            }
          })}`;
        })}`;
      }
    })}</div>
		<div class="${"absolute mx-3 my-4"}"><a class="${"btn focus:shadow-outline bg-green-500 py-2 rounded-2xl px-4 font-bold text-white hover:bg-green-700 focus:outline-none"}" href="${"/newEvent"}">Add Event</a></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Dash = (0, import_index_d9a4a690.c)(($$result, $$props, $$bindings, slots) => {
  let user;
  session.subscribe((value) => {
    user = value.user;
    console.log("asdf");
  });
  return `${$$result.head += `<meta charset="${"UTF-8"}" data-svelte="svelte-187al8j"><meta http-equiv="${"X-UA-Compatible"}" content="${"ie-edge"}" data-svelte="svelte-187al8j"><meta name="${"viewport"}" content="${"width=device-width, height=device-height, initial-scale=0.6, minimum-scale=0.6"}" data-svelte="svelte-187al8j">${$$result.title = `<title>EcoGo!</title>`, ""}<link rel="${"stylesheet"}" href="${"dashboard_style.css"}" data-svelte="svelte-187al8j"><link href="${"https://fonts.googleapis.com/css?family=Gill\\ Sans"}" rel="${"stylesheet"}" data-svelte="svelte-187al8j">`, ""}

<div class="${"dashboard h-screen"}"><header><img class="${"logo_image"}" src="${"/logo.png"}" alt="${"Eco Logo"}" align="${"left"}">
		<p class="${"bg-[url('/background.jpg')]"}"></p>
		<div class="${"name"}"><br>Welcome ${(0, import_index_d9a4a690.e)(user.username)}!</div></header>
	<div class="${"row1-container"}"><div class="${"box box-down cyan"}">${(0, import_index_d9a4a690.v)(Map_1, "Map").$$render($$result, {}, {}, {})}</div>
		<div class="${"box red"}"><h2>Your Eco-Score</h2>
			<div class="${"container_points"}"><div class="${"card1"}"><div class="${"text_points"}">Today&#39;s Points</div>
					<div class="${"text_points"}">Out of 50</div>
					<div class="${"points_vals"}">${(0, import_index_d9a4a690.e)(user.score)}</div></div>
				<div class="${"card2"}"><div class="${"text_points"}">Week&#39;s Average</div>
					<div class="${"text_points"}">Out of 50</div>
					<div class="${"points_vals"}">${(0, import_index_d9a4a690.e)(user.score)}</div></div>
				<div class="${"card3"}"><div class="${"text_points"}">All-Time Average</div>
					<div class="${"text_points"}">Out of 50</div>
					<div class="${"points_vals"}">${(0, import_index_d9a4a690.e)(user.score)}</div></div></div></div>
		<div class="${"box box-down blue"}"><h2>Daily Tasks</h2>
			<h3><input type="${"checkbox"}" id="${"task1"}" name="${"task1"}" value="${"1"}">
				<label for="${"task"}">Pick up trash on the ground</label><br> <br>
				<input type="${"checkbox"}" id="${"task2"}" name="${"task2"}" value="${"2"}">
				<label for="${"task"}">Walk to school</label><br> <br>
				<input type="${"checkbox"}" id="${"task3"}" name="${"task3"}" value="${"3"}">
				<label for="${"task"}">Spend 30 minutes outdoors</label><br> <br>
				<input type="${"checkbox"}" id="${"task4"}" name="${"task4"}" value="${"4"}">
				<label for="${"task"}">Do not trash recyclable materials</label><br> <br>
				<input type="${"checkbox"}" id="${"task5"}" name="${"task5"}" value="${"5"}">
				<label for="${"task"}">Eat healthy</label><br></h3>
			<button class="${"focus:shadow-outline mt-2 rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"}" type="${"button"}">Submit Task(s)</button></div></div>
	<div class="${"row2-container"}"><div class="${"box orange"}"><h2>Leaderboard</h2>
			<table class="${"table"}"><thead><th>Rank</th>
					<th>Name</th>
					<th>Total Points</th></thead>
				<tbody><tr><td>1</td>
						<td>jpsingaraju</td>
						<td>500</td></tr>
					<tr><td>2</td>
						<td>sakkiina</td>
						<td>305</td></tr>
					<tr><td>3</td>
						<td>sakkina</td>
						<td>255</td></tr>
					<tr><td>4</td>
						<td>Person 4</td>
						<td>250</td></tr>
					<tr><td>5</td>
						<td>Person 5</td>
						<td>200</td></tr>
					<tr><td>...</td>
						<td>...</td>
						<td>...</td></tr>
					<tr><td>355</td>
						<td>${(0, import_index_d9a4a690.e)(user.username)}</td>
						<td>${(0, import_index_d9a4a690.e)(user.score)}</td></tr></tbody></table></div></div></div>`;
});
