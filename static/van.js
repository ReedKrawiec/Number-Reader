/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/main.ts":
/*!**************************!*\
  !*** ./src/game/main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.g = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let canvas_element = document.getElementById("target");
exports.g = new van_1.game(canvas_element.getContext("2d"), {
    side_length: 28
});
window.functions = {};
window.functions.reset = () => {
    let objects = exports.g.getRoom().objects.filter((o) => o.tags[0] == "paint");
    objects.forEach((o) => o.delete());
};
exports.g.loadRoomString("paint_room");


/***/ }),

/***/ "./src/game/objects/paint.ts":
/*!***********************************!*\
  !*** ./src/game/objects/paint.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paint = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
const sprite_1 = __webpack_require__(/*! ../../lib/sprite */ "./src/lib/sprite.ts");
class paint extends object_1.obj {
    constructor(state, params = paint.default_params) {
        super(state, params);
        this.sprite_url = "./sprites/paint.png";
        this.height = 10;
        this.width = 10;
        this.collision = false;
        this.render = true;
        this.state.colored = false;
        this.tags.push("paint");
    }
    statef(time_delta) {
    }
    renderf(time_delta) {
        let sprites = sprite_1.sprite_gen(this.sprite_sheet, this.width, this.height);
        let selected;
        if (this.state.colored) {
            selected = sprites[0][1];
        }
        else {
            selected = sprites[0][0];
        }
        return {
            x: this.state.position.x,
            y: this.state.position.y,
            sprite: selected
        };
    }
    register_animations() {
    }
    register_audio() {
    }
    register_controls() {
    }
}
exports.paint = paint;
paint.default_params = {};


/***/ }),

/***/ "./src/game/objects/paint_border.ts":
/*!******************************************!*\
  !*** ./src/game/objects/paint_border.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.paint_border = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
class paint_border extends object_1.obj {
    constructor(state, params = paint_border.default_params) {
        super(state, params);
        this.sprite_url = "./sprites/paint.png";
        this.height = 10;
        this.width = 10;
        this.collision = false;
        this.render = true;
    }
    statef(time_delta) {
    }
    renderf(time_delta) {
        return super.renderf(time_delta);
    }
    register_animations() {
    }
    register_audio() {
    }
    register_controls() {
    }
}
exports.paint_border = paint_border;
paint_border.default_params = {};


/***/ }),

/***/ "./src/game/objects/placeholder.ts":
/*!*****************************************!*\
  !*** ./src/game/objects/placeholder.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder = void 0;
const object_1 = __webpack_require__(/*! ../../lib/object */ "./src/lib/object.ts");
class placeholder extends object_1.obj {
    constructor(state, params = placeholder.default_params) {
        super(state, params);
        this.sprite_url = "./sprites/Error.png";
        this.height = 100;
        this.width = 100;
        this.tags = [];
        this.collision = true;
        this.render = true;
    }
    statef(time_delta) {
    }
    renderf(time_delta) {
        return super.renderf(time_delta);
    }
    register_animations() {
    }
    register_audio() {
    }
    register_controls() {
    }
}
exports.placeholder = placeholder;
placeholder.default_params = {};


/***/ }),

/***/ "./src/game/objects/prefabs.ts":
/*!*************************************!*\
  !*** ./src/game/objects/prefabs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prefabs = void 0;
const paint_1 = __webpack_require__(/*! ./paint */ "./src/game/objects/paint.ts");
const paint_border_1 = __webpack_require__(/*! ./paint_border */ "./src/game/objects/paint_border.ts");
const placeholder_1 = __webpack_require__(/*! ./placeholder */ "./src/game/objects/placeholder.ts");
exports.prefabs = {
    paint: paint_1.paint,
    paint_border: paint_border_1.paint_border,
    placeholder: placeholder_1.placeholder,
};


/***/ }),

/***/ "./src/game/rooms/paint_room.json":
/*!****************************************!*\
  !*** ./src/game/rooms/paint_room.json ***!
  \****************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":0,\"y\":140},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":28}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":140,\"y\":280},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":28,\"height\":1}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":140,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":28,\"height\":1}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":280,\"y\":140},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":28}},\"parameters\":{}}]}");

/***/ }),

/***/ "./src/game/rooms/paint_room.ts":
/*!**************************************!*\
  !*** ./src/game/rooms/paint_room.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paint_room = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
const main_1 = __webpack_require__(/*! ../main */ "./src/game/main.ts");
const config = __webpack_require__(/*! ./paint_room.json */ "./src/game/rooms/paint_room.json");
const paint_1 = __webpack_require__(/*! ../objects/paint */ "./src/game/objects/paint.ts");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ../../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../../lib/hud */ "./src/lib/hud.ts");
let cfig = config;
class paint_hud extends hud_1.HUD {
    setTextElements() {
        return [
            new hud_1.Text({
                position: {
                    x: van_1.viewport.width * .5,
                    y: van_1.viewport.height * 7 / 8
                },
                size: 30,
                font: "Alata",
                color: "white",
                align: "center",
                scaling: 1
            }, () => {
                let room = main_1.g.getRoom();
                return `Last Prediction: ${room.state.last_prediction}`;
            })
        ];
    }
}
function zero2D(rows, cols) {
    var array = [], row = [];
    while (cols--)
        row.push(0);
    while (rows--)
        array.push(row.slice());
    return array;
}
class paint_room extends room_1.room {
    constructor(game) {
        super(game, cfig);
        this.background_url = "./sprites/paint.png";
        this.render = false;
        this.wait_time = 1500;
        this.game.state.cameras.push(new render_1.Camera({
            x: game.state.globals.side_length / 2 * 10,
            y: game.state.globals.side_length / 2 * 10,
            dimensions: van_1.viewport,
            scaling: 1.5,
            debug: false
        }, {
            x: 0,
            y: 0,
            height: 1,
            width: 1
        }, new paint_hud()));
        this.state = {
            timer: 0,
            has_sent: true,
            last_prediction: ""
        };
    }
    connectedPixels(threshold, cord, arr, visited) {
        if (arr[cord[1]][cord[0]] == 0)
            return [];
        let pixels = [cord];
        visited[cord[1]][cord[0]] = 1;
        for (let a = -threshold; a < threshold; a++) {
            for (let b = -threshold; b < threshold; b++) {
                if (a != 0 || b != 0) {
                    pixels = [...pixels, ...this.connectedPixels(threshold, [cord[0] + a, cord[1] + b], arr, visited)];
                }
            }
        }
        return pixels;
    }
    sendTensor() {
        return __awaiter(this, void 0, void 0, function* () {
            let getY = (a) => this.game.state.globals.side_length - 1 - a;
            let tensor = zero2D(this.game.state.globals.side_length, this.game.state.globals.side_length);
            let visited = zero2D(this.game.state.globals.side_length, this.game.state.globals.side_length);
            let num_container = [];
            let current_num = undefined;
            let threshold = 3;
            let thresholder = (b, a) => {
                for (let y_thresh = -threshold; y_thresh < threshold; y_thresh++) {
                    for (let x_thresh = -threshold; x_thresh < threshold; x_thresh++) {
                        if (b + y_thresh >= 0 && b + y_thresh < side_length && a + x_thresh >= 0 && a + x_thresh < side_length) {
                            if (tensor[b + y_thresh][a + x_thresh] === 1 && visited[b + y_thresh][a + x_thresh] === 0) {
                                visited[b + y_thresh][a + x_thresh] = 1;
                                current_num.push([b + y_thresh, a + x_thresh]);
                                thresholder(b + y_thresh, a + x_thresh);
                            }
                        }
                    }
                }
            };
            this.objects.filter((o) => o.tags[0] == "paint").forEach((o) => {
                let pos = o.state.position;
                tensor[getY(pos.y / 10)][pos.x / 10] = 1;
            });
            let side_length = this.game.state.globals.side_length;
            for (let a = side_length - 1; a >= 0; a--) {
                for (let b = 0; b < side_length; b++) {
                    if (tensor[a][b] === 1 && visited[a][b] === 0) {
                        visited[a][b] = 1;
                        current_num = [];
                        thresholder(a, b);
                        let x_sum = 0, y_sum = 0;
                        for (let c of current_num) {
                            y_sum += c[0];
                            x_sum += c[1];
                        }
                        num_container.push({
                            cords: current_num,
                            average_x: x_sum / current_num.length,
                            average_y: y_sum / current_num.length
                        });
                    }
                }
            }
            num_container.sort((a, b) => {
                return (a.average_x - b.average_x);
            });
            let final_num = "";
            for (let num of num_container) {
                let arr_n = zero2D(side_length, side_length);
                let x_offset = (side_length / 2 - Math.round(num.average_x));
                let y_offset = (side_length / 2 - Math.round(num.average_y));
                num.cords = num.cords.map((a) => [a[0] + y_offset, a[1] + x_offset]);
                for (let c of num.cords) {
                    arr_n[c[0]][c[1]] = 1;
                }
                let to_send = num.cords.map((o) => `[${o[0]},${o[1]}]`).join(",");
                console.log(`average x:${num.average_x} | average y:${num.average_y}`);
                console.log(arr_n.map((x) => {
                    return x.map((y) => {
                        if (y == 0)
                            return "▯";
                        return "▮";
                    }).join("");
                }).join("\n"));
                let res = yield fetch("/evaluate", {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: `{"inputted":[${to_send}]}`
                });
                let a = yield res.json();
                final_num = final_num + a;
            }
            this.state.last_prediction = final_num;
        });
    }
    registerControls() {
        this.bindControl("mouse0down", controls_1.exec_type.repeat, () => {
            let mouse = controls_1.Poll_Mouse(this.game.state.cameras[0]);
            if (mouse && mouse.x >= 0 && mouse.x <= 270 && mouse.y >= 0 && mouse.y <= 270) {
                let grid_mouse = {
                    x: Math.floor(mouse.x / 10) * 10,
                    y: Math.floor(mouse.y / 10) * 10
                };
                let pixels = this.checkObjectsPointInclusive(grid_mouse, ["paint"]);
                if (!pixels[0]) {
                    this.addItem(new paint_1.paint({
                        position: grid_mouse,
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        rotation: 0,
                        scaling: {
                            height: 1,
                            width: 1
                        }
                    }));
                    this.state.timer = 0;
                    this.state.has_sent = false;
                }
            }
        }, 1);
    }
    registerParticles() {
    }
    statef(delta_time) {
        super.statef(delta_time);
        this.state.timer += delta_time;
        if (this.state.timer > this.wait_time && !this.state.has_sent) {
            this.sendTensor();
            let objects = this.objects.filter((o) => o.tags[0] == "paint");
            objects.forEach((o) => o.delete());
            this.state.has_sent = true;
        }
    }
}
exports.paint_room = paint_room;


/***/ }),

/***/ "./src/game/rooms/placeholder.json":
/*!*****************************************!*\
  !*** ./src/game/rooms/placeholder.json ***!
  \*****************************************/
/*! exports provided: objects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"objects\":[]}");

/***/ }),

/***/ "./src/game/rooms/placeholder.ts":
/*!***************************************!*\
  !*** ./src/game/rooms/placeholder.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder = void 0;
const room_1 = __webpack_require__(/*! ../../lib/room */ "./src/lib/room.ts");
const van_1 = __webpack_require__(/*! ../../van */ "./src/van.ts");
const config = __webpack_require__(/*! ./placeholder.json */ "./src/game/rooms/placeholder.json");
const render_1 = __webpack_require__(/*! ../../lib/render */ "./src/lib/render.ts");
let cfig = config;
class placeholder extends room_1.room {
    constructor(game) {
        super(game, cfig);
        this.background_url = "./sprites/Error.png";
        this.game.state.cameras.push(new render_1.Camera({
            x: 0,
            y: 0,
            dimensions: van_1.viewport,
            scaling: 1,
            debug: false
        }, {
            x: 0,
            y: 0,
            height: 1,
            width: 1
        }));
    }
    registerControls() {
    }
    registerParticles() {
    }
    statef(delta_time) {
        super.statef(delta_time);
    }
}
exports.placeholder = placeholder;


/***/ }),

/***/ "./src/game/rooms/rooms.ts":
/*!*********************************!*\
  !*** ./src/game/rooms/rooms.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rooms = void 0;
const paint_room_1 = __webpack_require__(/*! ./paint_room */ "./src/game/rooms/paint_room.ts");
const placeholder_1 = __webpack_require__(/*! ./placeholder */ "./src/game/rooms/placeholder.ts");
exports.rooms = {
    paint_room: paint_room_1.paint_room,
    placeholder: placeholder_1.placeholder,
};


/***/ }),

/***/ "./src/lib/audio.ts":
/*!**************************!*\
  !*** ./src/lib/audio.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audio = void 0;
const debug_1 = __webpack_require__(/*! ./debug */ "./src/lib/debug.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
class audio {
    constructor() {
        this.sounds = {};
    }
    add(name, url) {
        let p = url;
        if (van_1.DEBUG) {
            p = debug_1.path.join(debug_1.root_path, url);
        }
        this.sounds[name] = new Audio(p);
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            let keys = Object.keys(this.sounds);
            let promises = keys.map((key) => {
                return new Promise((resolve, reject) => {
                    this.sounds[key].addEventListener("canplaythrough", (e) => {
                        resolve();
                    });
                });
            });
            try {
                let x = yield Promise.all(promises);
                return (x);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    play(name, volume) {
        let a = this.sounds[name];
        a.pause();
        a.currentTime = 0;
        a.volume = volume;
        a.play();
    }
}
exports.audio = audio;


/***/ }),

/***/ "./src/lib/collision.ts":
/*!******************************!*\
  !*** ./src/lib/collision.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.velocityCollisionCheck = exports.check_collisions = exports.check_all_collisions = exports.check_all_objects = exports.getEncompassingBox = void 0;
const object_1 = __webpack_require__(/*! ../lib/object */ "./src/lib/object.ts");
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
function getEncompassingBox(objects) {
    let first_object = objects[0].getBoundingBox();
    let max_y = first_object.top_right.y;
    let max_x = first_object.top_right.x;
    let min_y = first_object.bottom_left.y;
    let min_x = first_object.bottom_left.x;
    for (let a = 1; a < objects.length; a++) {
        let object = objects[a].getBoundingBox();
        if (object.top_right.y > max_y)
            max_y = object.top_right.y;
        if (object.top_right.x > max_x)
            max_x = object.top_right.x;
        if (object.bottom_left.y < min_y)
            min_y = object.bottom_left.y;
        if (object.bottom_left.x < min_x)
            min_x = object.bottom_left.x;
    }
    return {
        x: min_x + (max_x - min_x) / 2,
        y: min_y + (max_y - min_y) / 2,
        height: max_y - min_y,
        width: max_x - min_x
    };
}
exports.getEncompassingBox = getEncompassingBox;
function check_all_objects(c, objs, exemption = []) {
    return objs.filter((a) => (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collidesWithBox(c)));
}
exports.check_all_objects = check_all_objects;
function check_all_collisions(c, objs, exemption = []) {
    let matched = [];
    for (let a of objs) {
        if (!exemption.some((b) => a.tags.indexOf(b) !== -1) && a.collision && a.collidesWithBox(c)) {
            matched.push(a);
        }
    }
    return matched;
}
exports.check_all_collisions = check_all_collisions;
//Checks up to the first collision
function check_collisions(c, objs, exemption) {
    for (let a of objs) {
        if (a.id !== exemption && a.collision && a.collidesWithBox(c)) {
            return a;
        }
    }
    return null;
}
exports.check_collisions = check_collisions;
function velocity_max(velocity, box, objs, exemption, dir) {
    let collision = check_collisions(box, objs, exemption);
    if (collision == null) {
        return velocity;
    }
    else {
        let collider = collision;
        let origin = object_1.getId(objs, exemption);
        let orig_st = origin.state;
        let collider_st = collider.state;
        let orig_col = origin.getFullCollisionBox();
        let collider_col = collider.getFullCollisionBox();
        if (dir == direction.left) {
            return (orig_col.x - orig_col.width / 2) - (collider_col.x + collider_col.width / 2);
        }
        else if (dir == direction.right) {
            return (collider_col.x - collider_col.width / 2) - (orig_col.x + orig_col.width / 2);
        }
        else if (dir == direction.down) {
            return (orig_col.y - orig_col.height / 2) - (collider_col.y + collider_col.height / 2);
        }
        else if (dir == direction.up) {
            return (collider_col.y - collider_col.height / 2) - (orig_col.y + orig_col.height / 2);
        }
    }
}
function velocityCollisionCheck(object, list) {
    list = [...list];
    let ob = object;
    let st = object.state;
    let x_vel = st.velocity.x;
    let y_vel = st.velocity.y;
    if (!ob.collision) {
        ob.state.position.x += ob.state.velocity.x;
        ob.state.position.y += ob.state.velocity.y;
        return;
    }
    let col_box = ob.getFullCollisionBox();
    if (x_vel > 0) {
        let box = {
            x: col_box.x + col_box.width / 2 + x_vel / 2,
            y: col_box.y,
            width: x_vel,
            height: col_box.height
        };
        let vel = velocity_max(st.velocity.x, box, list, ob.id, direction.right);
        if (vel > 0) {
            st.position.x += vel;
        }
        else {
            st.velocity.x = 0;
        }
    }
    else if (x_vel < 0) {
        let box = {
            x: x_vel / 2 + col_box.x - col_box.width / 2,
            y: col_box.y,
            width: -1 * x_vel,
            height: col_box.height
        };
        let vel = velocity_max(st.velocity.x, box, list, ob.id, direction.left);
        if (vel < 0) {
            st.position.x += vel;
        }
        else {
            st.velocity.x = 0;
        }
    }
    if (y_vel > 0) {
        let box = {
            x: col_box.x,
            y: col_box.y + col_box.height / 2 + y_vel / 2,
            width: col_box.width,
            height: y_vel
        };
        let vel = velocity_max(st.velocity.y, box, list, ob.id, direction.up);
        if (vel > 0) {
            st.position.y += vel;
        }
        else {
            st.velocity.y = 0;
        }
    }
    else if (y_vel < 0) {
        let box = {
            x: col_box.x,
            y: y_vel / 2 + col_box.y - col_box.height / 2,
            width: col_box.width,
            height: -1 * y_vel
        };
        let vel = velocity_max(st.velocity.y, box, list, ob.id, direction.down);
        if (vel < 0) {
            st.position.y += vel;
        }
        else {
            st.velocity.y = 0;
        }
    }
}
exports.velocityCollisionCheck = velocityCollisionCheck;


/***/ }),

/***/ "./src/lib/controls.ts":
/*!*****************************!*\
  !*** ./src/lib/controls.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bind = exports.exec_type = exports.Unbind = exports.ExecuteRepeatBinds = exports.Poll_Mouse = exports.debug_binds = exports.btype = exports.held_keys = exports.init_click_handler = void 0;
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/lib/debug.ts");
let target = document.getElementById("target");
function init_click_handler(game) {
    window.addEventListener("click", (e) => {
        let mouse = Poll_Mouse(game.state.cameras[0]);
        if (!mouse) {
            return;
        }
        let box = {
            x: mouse.x,
            y: mouse.y,
            height: 1,
            width: 1
        };
        let d;
        if (van_1.DEBUG) {
            if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
                d = [...exports.debug_binds];
            }
            else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
                d = [...all_binds];
            }
            else {
                d = [];
            }
        }
        else {
            d = [...all_binds];
        }
        for (let a = 0; a < d.length; a++) {
            let selected = d[a];
            if (selected.type === btype.mouse && selected.key === "mouse1" && selected.execute == exec_type.once) {
                if (selected.obj !== undefined) {
                    if (selected.obj.collidesWithBox(box)) {
                        selected.function();
                    }
                }
                else {
                    selected.function();
                }
            }
        }
    });
}
exports.init_click_handler = init_click_handler;
window.addEventListener("mousedown", (e) => {
    e.preventDefault();
    let d;
    if (van_1.DEBUG) {
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "down") && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                selected.repeat_timer.active = true;
            }
            selected.executed = true;
        }
        if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.once) {
            selected.executed = false;
        }
        else if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "up") || selected.key == "mouseup") && selected.executed && selected.execute === exec_type.repeat) {
            let g = [...repeat_binds];
            for (let a = 0; a < g.length; a++) {
                if (g[a].bind.id === selected.id) {
                    selected.executed = false;
                    g[a].active = false;
                    break;
                }
            }
        }
    }
});
window.addEventListener("mouseup", (e) => {
    e.preventDefault();
    let d;
    if (van_1.DEBUG) {
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === ("mouse" + e.button + "up") && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                selected.repeat_timer.active = true;
            }
            selected.executed = true;
        }
        if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.once) {
            selected.executed = false;
        }
        else if (selected.type === btype.mouse && (selected.key === ("mouse" + e.button + "down") || selected.key == "mousedown") && selected.executed && selected.execute === exec_type.repeat) {
            let g = [...repeat_binds];
            for (let a = 0; a < g.length; a++) {
                if (g[a].bind.id === selected.id) {
                    selected.executed = false;
                    g[a].active = false;
                    break;
                }
            }
        }
    }
});
exports.held_keys = {};
window.addEventListener("wheel", (e) => {
    let code;
    if (e.deltaY < 0) {
        code = "scrollup";
    }
    else if (e.deltaY > 0) {
        code = "scrolldown";
    }
    let d;
    if (van_1.DEBUG) {
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.mouse && selected.key === code) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
        }
    }
});
window.addEventListener("keydown", (e) => {
    exports.held_keys[e.code] = true;
    let d;
    if (van_1.DEBUG) {
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.keyboard && selected.key === e.code && !selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.function();
            }
            else if (selected.execute === exec_type.repeat) {
                for (let c of repeat_binds) {
                    if (c.bind.id == selected.id) {
                        c.active = true;
                        break;
                    }
                }
            }
            selected.executed = true;
        }
    }
});
window.addEventListener("keyup", (e) => {
    exports.held_keys[e.code] = false;
    let d;
    if (van_1.DEBUG) {
        if (debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "debug_target") {
            d = [...exports.debug_binds];
        }
        else if (!van_1.PAUSED && debug_1.debug_state.last_clicked && debug_1.debug_state.last_clicked.id == "target") {
            d = [...all_binds];
        }
        else {
            d = [];
        }
    }
    else {
        d = [...all_binds];
    }
    for (let a = 0; a < d.length; a++) {
        let selected = d[a];
        if (selected.type === btype.keyboard && selected.key === e.code && selected.executed) {
            if (selected.execute === exec_type.once) {
                selected.executed = false;
            }
            else if (selected.execute === exec_type.repeat) {
                let g = [...repeat_binds];
                for (let a = 0; a < g.length; a++) {
                    if (g[a].bind.id === selected.id) {
                        selected.executed = false;
                        g[a].active = false;
                        break;
                    }
                }
            }
        }
    }
});
let tracker = document.getElementById("target");
window.addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
    //console.log(e.target)
    last_x = x;
    last_y = y;
    x = e.clientX; //x position within the element.
    y = e.clientY; //y position within the element.
});
var btype;
(function (btype) {
    btype[btype["mouse"] = 0] = "mouse";
    btype[btype["keyboard"] = 1] = "keyboard";
})(btype = exports.btype || (exports.btype = {}));
let x = 0;
let y = 0;
let last_x = 0;
let last_y = 0;
let binds = {};
exports.debug_binds = [];
let mouseBinds = {};
let bind_count = 0;
let all_binds = [];
let repeat_binds = [];
function Poll_Mouse(camera, canvas = main_1.g.state.canvas) {
    let height = van_1.GetViewportDimensions().height;
    let wratio = parseFloat(window.getComputedStyle(canvas).width) / van_1.GetViewportDimensions().width;
    let vratio = parseFloat(window.getComputedStyle(canvas).height) / van_1.GetViewportDimensions().height;
    let bounds = canvas.getBoundingClientRect();
    if (x > bounds.left && x < bounds.right && y < bounds.bottom && y > bounds.top) {
        return ({
            x: ((x - bounds.left - camera.state.viewport.x) / wratio / camera.state.scaling + camera.state.position.x - camera.state.dimensions.width / camera.state.scaling / 2),
            y: ((height - (y - bounds.top) / vratio) / camera.state.scaling + camera.state.position.y - camera.state.dimensions.height / camera.state.scaling / 2 - camera.state.viewport.y)
        });
    }
    return undefined;
}
exports.Poll_Mouse = Poll_Mouse;
function ExecuteRepeatBinds(b) {
    for (let a of repeat_binds) {
        if (a.bind.execute === exec_type.repeat && a.timer == 0 && a.active) {
            a.bind.function();
        }
        if (a.active || (!a.active && a.timer != 0))
            a.timer += b;
        if (a.timer > a.interval) {
            a.timer = 0;
        }
    }
}
exports.ExecuteRepeatBinds = ExecuteRepeatBinds;
function Unbind(bind_id) {
    for (let a = 0; a < all_binds.length; a++) {
        if (all_binds[a].id == bind_id) {
            all_binds.splice(a, 1);
            break;
        }
    }
    for (let a = 0; a < repeat_binds.length; a++) {
        if (repeat_binds[a].bind.id == bind_id) {
            repeat_binds.splice(a, 1);
            break;
        }
    }
}
exports.Unbind = Unbind;
var exec_type;
(function (exec_type) {
    exec_type[exec_type["once"] = 0] = "once";
    exec_type[exec_type["repeat"] = 1] = "repeat";
})(exec_type = exports.exec_type || (exports.exec_type = {}));
let id = 0;
function Bind(keyname, func, type, interval, object) {
    if (keyname.slice(0, 5) === "mouse" || keyname.slice(0, 6) === "scroll") {
        let b = {
            key: keyname,
            type: btype.mouse,
            id,
            function: func,
            obj: object,
            execute: type,
            executed: false,
            interval
        };
        if (type == exec_type.repeat) {
            b.repeat_timer = {
                bind: b,
                timer: 0,
                interval,
                active: false
            };
            repeat_binds.push(b.repeat_timer);
        }
        all_binds.push(b);
    }
    else {
        let b = {
            key: keyname,
            type: btype.keyboard,
            id,
            function: func,
            execute: type,
            executed: false,
            interval
        };
        if (type == exec_type.repeat) {
            b.repeat_timer = {
                bind: b,
                timer: 0,
                interval,
                active: false
            };
            repeat_binds.push(b.repeat_timer);
        }
        all_binds.push(b);
    }
    id++;
    return id - 1;
}
exports.Bind = Bind;


/***/ }),

/***/ "./src/lib/debug.ts":
/*!**************************!*\
  !*** ./src/lib/debug.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug_setup = exports.debug_state = exports.debug_update_prefabs = exports.debug_update_obj_list = exports.debug_update_properties_element = exports.debug_update_room_list = exports.debug_statef = exports.Debug_hud = exports.root_path = exports.project_path = exports.path = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let fs;
let ipcRenderer;
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
exports.project_path = "";
exports.root_path = "";
if (van_1.DEBUG) {
    exports.path = window.require("path");
    fs = window.require("fs");
    ipcRenderer = window.require("electron").ipcRenderer;
    exports.project_path = ipcRenderer.sendSync('path-request', 'ping')[0];
    exports.root_path = exports.path.join(exports.project_path, "..");
}
const main_1 = __webpack_require__(/*! ../game/main */ "./src/game/main.ts");
const rooms_1 = __webpack_require__(/*! ../game/rooms/rooms */ "./src/game/rooms/rooms.ts");
const controls_1 = __webpack_require__(/*! ../lib/controls */ "./src/lib/controls.ts");
const hud_1 = __webpack_require__(/*! ../lib/hud */ "./src/lib/hud.ts");
const render_1 = __webpack_require__(/*! ../lib/render */ "./src/lib/render.ts");
class Debug_hud extends hud_1.HUD {
    setTextElements() {
        return [
            new hud_1.Text({
                position: {
                    x: 10,
                    y: van_1.viewport.height - 24
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => exports.debug_state.render_delta_time > 0 ? Math.round(1000 / exports.debug_state.render_delta_time) + "" : ""),
            new hud_1.Text({
                position: {
                    x: 10,
                    y: 10
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => `X:${exports.debug_state.camera.state.position.x.toFixed(0)}`),
            new hud_1.Text({
                position: {
                    x: 10,
                    y: 32
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "left",
                scaling: 1
            }, () => `Y:${exports.debug_state.camera.state.position.y.toFixed(0)}`),
            new hud_1.Text({
                position: {
                    x: van_1.viewport.width - 10,
                    y: 32
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "right",
                scaling: 1
            }, () => {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (mouse) {
                    return `${mouse.x.toFixed(0)}:X`;
                }
                return `:X`;
            }),
            new hud_1.Text({
                position: {
                    x: van_1.viewport.width - 10,
                    y: 10
                },
                size: 22,
                font: "Alata",
                color: "white",
                align: "right",
                scaling: 1
            }, () => {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (mouse) {
                    return `${mouse.y.toFixed(0)}:Y`;
                }
                return `:Y`;
            }),
        ];
    }
}
exports.Debug_hud = Debug_hud;
function debug_statef(t) {
    let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
    if (exports.debug_state.camera.hud) {
        exports.debug_state.camera.hud.statef(t);
    }
    if (!van_1.PAUSED) {
        debug_update_properties_element();
    }
    if (mouse) {
        if (exports.debug_state.selected_element) {
            if (van_1.PAUSED && controls_1.held_keys["ControlLeft"] && exports.debug_state.current_action.property == "scaling") {
                let dist = {
                    x: Math.abs(mouse.x - exports.debug_state.selected_element.state.position.x),
                    y: Math.abs(mouse.y - exports.debug_state.selected_element.state.position.y)
                };
                exports.debug_state.selected_element.state.scaling.width = (2 * dist.x) / exports.debug_state.selected_element.width;
                exports.debug_state.selected_element.state.scaling.height = (2 * dist.y) / exports.debug_state.selected_element.height;
            }
            else {
                let st = exports.debug_state.selected_element.state;
                st.position.x = mouse.x - exports.debug_state.selected_element_offset.x,
                    st.position.y = mouse.y - exports.debug_state.selected_element_offset.y;
            }
        }
        if (van_1.PAUSED && exports.debug_state.rotation_element) {
            exports.debug_state.rotation_element.state.rotation = exports.debug_state.rotation_element.angleTowardsPoint(mouse);
        }
        if (exports.debug_state.middle_position) {
            let diff_y = mouse.y - exports.debug_state.middle_position.y;
            let diff_x = mouse.x - exports.debug_state.middle_position.x;
            exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x + -1 * diff_x;
            exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y + -1 * diff_y;
        }
    }
}
exports.debug_statef = debug_statef;
function debug_update_room_list() {
    let list = document.getElementById("room_list");
    list.textContent = '';
    for (let room_name of Object.keys(rooms_1.rooms)) {
        let para = document.createElement("p");
        para.appendChild(document.createTextNode(room_name));
        para.classList.add("room_list_item");
        para.addEventListener("click", (e) => {
            main_1.g.loadRoomString(room_name);
        });
        list.appendChild(para);
    }
}
exports.debug_update_room_list = debug_update_room_list;
let properties_elements = undefined;
if (van_1.DEBUG) {
    properties_elements = {
        pos_x: document.getElementById("pos_x"),
        pos_y: document.getElementById("pos_y"),
        vel_x: document.getElementById("vel_x"),
        vel_y: document.getElementById("vel_y"),
        rot: document.getElementById("rot"),
        sca_x: document.getElementById("sca_x"),
        sca_y: document.getElementById("sca_y"),
        render: document.getElementById("render"),
        collision: document.getElementById("collision")
    };
    let inputs = document.getElementsByTagName("input");
    for (let a = 0; a < inputs.length; a++) {
        inputs[a].addEventListener("click", (e) => {
            inputs[a].focus();
        });
    }
    let focused;
    let debug_target = document.getElementById("debug_target");
    debug_target.addEventListener("click", (e) => {
        for (let a = 0; a < inputs.length; a++) {
            inputs[a].blur();
        }
    });
    let target = document.getElementById("target");
    target.addEventListener("click", (e) => {
        for (let a = 0; a < inputs.length; a++) {
            inputs[a].blur();
        }
    });
    properties_elements.pos_x.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_x.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: new_val, y: ele.state.position.y }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.x = new_val;
    });
    properties_elements.pos_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.pos_y.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "position",
            element: ele,
            new: JSON.stringify({ x: ele.state.position.x, y: new_val }),
            old: JSON.stringify(ele.state.position)
        });
        ele.state.position.y = new_val;
    });
    properties_elements.vel_x.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.state.velocity.x = parseFloat(properties_elements.vel_x.value) || 0;
    });
    properties_elements.vel_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.state.velocity.y = parseFloat(properties_elements.vel_y.value) || 0;
    });
    properties_elements.rot.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.rot.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "rotation",
            element: ele,
            new: JSON.stringify(new_val),
            old: JSON.stringify(ele.state.rotation)
        });
        ele.state.rotation = new_val;
    });
    properties_elements.sca_x.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_x.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: new_val, height: ele.state.scaling.height }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.width = new_val;
    });
    properties_elements.sca_y.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        let new_val = parseFloat(properties_elements.sca_y.value) || 0;
        exports.debug_state.actions_stack.push({
            property: "scaling",
            element: ele,
            new: JSON.stringify({ width: ele.state.scaling.width, height: new_val }),
            old: JSON.stringify(ele.state.scaling)
        });
        ele.state.scaling.height = new_val;
    });
    properties_elements.render.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.render = properties_elements.render.checked;
    });
    properties_elements.collision.addEventListener("input", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.collision = properties_elements.collision.checked;
    });
    document.getElementById("delete_element").addEventListener("click", (e) => {
        let ele = exports.debug_state.selected_properties_element;
        ele.delete();
    });
}
function debug_update_properties_element() {
    if (exports.debug_state.selected_properties_element) {
        let ele = exports.debug_state.selected_properties_element;
        document.getElementById("obj_name").innerHTML = ele.constructor.name;
        properties_elements.pos_x.value = "" + ele.state.position.x.toFixed(2);
        properties_elements.pos_y.value = "" + ele.state.position.y.toFixed(2);
        properties_elements.vel_x.value = "" + ele.state.velocity.x.toFixed(2);
        properties_elements.vel_y.value = "" + ele.state.velocity.y.toFixed(2);
        properties_elements.rot.value = "" + ele.state.rotation.toFixed(2);
        properties_elements.sca_x.value = "" + ele.state.scaling.width.toFixed(2);
        properties_elements.sca_y.value = "" + ele.state.scaling.height.toFixed(2);
        properties_elements.render.checked = ele.render;
        properties_elements.collision.checked = ele.collision;
        let list = document.getElementById("params_list");
        list.textContent = '';
        for (let k of Object.keys(ele.params)) {
            let p = document.createElement("p");
            let span = document.createElement("span");
            span.appendChild(document.createTextNode(k));
            let input = document.createElement("input");
            if (typeof ele.params[k] === "boolean") {
                input.setAttribute("type", "checkbox");
            }
            else if (typeof ele.params[k] === "number") {
                input.setAttribute("type", "number");
            }
            else if (typeof ele.params[k] === "string") {
                input.setAttribute("type", "text");
            }
            input.setAttribute("id", k);
            input.setAttribute("value", ele.params[k] + "");
            input.addEventListener("click", (e) => {
                input.focus();
            });
            input.addEventListener("input", (e) => {
                let ele = exports.debug_state.selected_properties_element;
                let val = input.value;
                if (!isNaN(val)) {
                    ele.params[k] = parseFloat(val);
                }
                else if (val == "true") {
                    ele.params[k] = true;
                }
                else if (val == "false") {
                    ele.params[k] = false;
                }
                else {
                    ele.params[k] = val;
                }
            });
            p.appendChild(span);
            p.append(input);
            list.append(p);
        }
    }
}
exports.debug_update_properties_element = debug_update_properties_element;
function debug_update_obj_list() {
    let list = document.getElementById("objects_list");
    list.textContent = '';
    if (main_1.g.getRoom()) {
        for (let obj of main_1.g.getRoom().objects.slice().reverse()) {
            let para = document.createElement("p");
            para.appendChild(document.createTextNode(obj.constructor.name));
            para.classList.add("object_list_item");
            para.addEventListener("click", (e) => {
                if (exports.debug_state.selected_properties_element == obj) {
                    exports.debug_state.camera.state.position = Object.assign({}, obj.state.position);
                }
                else {
                    exports.debug_state.selected_properties_element = obj;
                    debug_update_properties_element();
                }
            });
            list.appendChild(para);
        }
    }
}
exports.debug_update_obj_list = debug_update_obj_list;
function debug_update_prefabs() {
    return __awaiter(this, void 0, void 0, function* () {
        let pres = Object.keys(prefabs_1.prefabs).map((o) => __awaiter(this, void 0, void 0, function* () {
            let a = (new prefabs_1.prefabs[o]({
                position: { x: 0, y: 0 },
                velocity: { x: 0, y: 0 },
                rotation: 0,
                scaling: { width: 1, height: 1 }
            }));
            yield a.load();
            a.render = true;
            let objs = a.combinedObjects();
            for (let obj of objs) {
                obj.UnbindAll();
            }
            let filtered = objs.filter((a) => a.render);
            return {
                prefab: prefabs_1.prefabs[o],
                name: a.constructor.name,
                rendered: filtered.map((o) => {
                    return {
                        name: o.constructor.name,
                        render: o.renderf(0)
                    };
                })
            };
        }));
        let a = yield Promise.all(pres);
        let target = document.getElementById("prefab_target");
        target.textContent = '';
        for (let prefab of a) {
            let div = document.createElement("div");
            let para = document.createElement("p");
            para.appendChild(document.createTextNode(prefab.name));
            div.appendChild(para);
            if (Array.isArray(prefab.rendered[0].render)) {
            }
            else {
                div.append(prefab.rendered[0].render.sprite.sprite_sheet);
            }
            div.classList.add("prefab_box");
            div.addEventListener("mousedown", () => __awaiter(this, void 0, void 0, function* () {
                let val = {
                    position: { x: exports.debug_state.camera.state.position.x, y: exports.debug_state.camera.state.position.y },
                    velocity: { x: 0, y: 0 },
                    rotation: 0,
                    scaling: { width: 1, height: 1 }
                };
                let obj = (new prefab.prefab(val));
                yield main_1.g.state.current_room.addItems(obj.combinedObjects());
            }));
            target.append(div);
        }
    });
}
exports.debug_update_prefabs = debug_update_prefabs;
exports.debug_setup = () => {
    exports.debug_state = {
        target: document.getElementById("debug_target"),
        camera: new render_1.Camera({
            x: 0,
            y: 0,
            dimensions: {
                height: van_1.viewport.height,
                width: van_1.viewport.width
            },
            scaling: 1,
            debug: true
        }, {
            x: 1,
            y: 0,
            width: 1,
            height: 1
        }),
        last_clicked: undefined,
        selected_element: undefined,
        selected_element_offset: undefined,
        rotation_element: undefined,
        middle_position: undefined,
        click_position: undefined,
        selected_properties_element: undefined,
        selected_element_initial_scaling: { width: 1, height: 1 },
        actions_stack: [],
        render_delta_time: 0,
        current_action: undefined
    };
    exports.debug_state.camera.hud = new Debug_hud();
    controls_1.debug_binds.push({
        key: "mouse0down",
        type: controls_1.btype.mouse,
        id: 0,
        function: () => {
            if (exports.debug_state.selected_element) {
                exports.debug_state.selected_element = null;
            }
            else {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (!mouse) {
                    return;
                }
                exports.debug_state.click_position = mouse;
                let alL_clicked = main_1.g.getRoom().checkObjectsPoint(mouse);
                let clicked;
                let filtered = alL_clicked.filter((ele) => ele == exports.debug_state.selected_properties_element);
                if (filtered.length > 0) {
                    clicked = filtered[0];
                }
                else {
                    clicked = alL_clicked[0];
                }
                if (clicked) {
                    if (controls_1.held_keys["ControlLeft"]) {
                        exports.debug_state.current_action = {
                            element: clicked,
                            property: "scaling",
                            old: JSON.stringify(clicked.state.scaling),
                            new: undefined
                        };
                    }
                    else {
                        exports.debug_state.current_action = {
                            element: clicked,
                            property: "position",
                            old: JSON.stringify(clicked.state.position),
                            new: undefined
                        };
                    }
                    exports.debug_state.selected_properties_element = clicked;
                    debug_update_properties_element();
                    exports.debug_state.selected_element = clicked;
                    exports.debug_state.selected_element_initial_scaling = clicked.state.scaling;
                    exports.debug_state.selected_element_offset = {
                        x: mouse.x - clicked.state.position.x,
                        y: mouse.y - clicked.state.position.y
                    };
                }
            }
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse1up",
        type: controls_1.btype.mouse,
        id: 5,
        function: () => {
            exports.debug_state.middle_position = undefined;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse1down",
        type: controls_1.btype.mouse,
        id: 6,
        function: () => {
            let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
            if (!mouse) {
                return;
            }
            exports.debug_state.middle_position = mouse;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse0up",
        type: controls_1.btype.mouse,
        id: 1,
        function: () => {
            if (exports.debug_state.selected_element) {
                if (exports.debug_state.current_action.property == "scaling") {
                    exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.selected_element.state.scaling);
                }
                else if (exports.debug_state.current_action.property == "position") {
                    exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.selected_element.state.position);
                }
                exports.debug_state.actions_stack.push(exports.debug_state.current_action);
            }
            exports.debug_state.selected_element = undefined;
            debug_update_properties_element();
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse2down",
        type: controls_1.btype.mouse,
        id: 3,
        function: () => {
            if (exports.debug_state.rotation_element) {
                exports.debug_state.rotation_element = null;
            }
            else {
                let mouse = controls_1.Poll_Mouse(exports.debug_state.camera, exports.debug_state.target);
                if (!mouse) {
                    return;
                }
                let clicked = main_1.g.getRoom().checkObjectsPoint(mouse)[0];
                if (clicked) {
                    exports.debug_state.rotation_element = clicked;
                    exports.debug_state.current_action = {
                        element: exports.debug_state.rotation_element,
                        property: "rotation",
                        old: JSON.stringify(exports.debug_state.rotation_element.state.rotation),
                        new: undefined
                    };
                }
            }
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    controls_1.debug_binds.push({
        key: "mouse2up",
        type: controls_1.btype.mouse,
        id: 4,
        function: () => {
            exports.debug_state.current_action.new = JSON.stringify(exports.debug_state.rotation_element.state.rotation);
            exports.debug_state.actions_stack.push(exports.debug_state.current_action);
            exports.debug_state.rotation_element = undefined;
        },
        execute: controls_1.exec_type.once,
        camera: exports.debug_state.camera
    });
    let left_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x - ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let right_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.x = exports.debug_state.camera.state.position.x + ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let down_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (!controls_1.held_keys["ControlLeft"] && exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y - ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let up_func = () => {
        let shift_held = controls_1.held_keys["ShiftLeft"] ? 1 : 0;
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.position.y = exports.debug_state.camera.state.position.y + ((5 + shift_held * 5) * (1 / exports.debug_state.camera.state.scaling));
    };
    let scroll_up = () => {
        if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling < 0.05)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.01;
        else if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.05;
    };
    let save_func = () => {
        let ctrl_held = controls_1.held_keys["ControlLeft"];
        if (ctrl_held && van_1.PAUSED) {
            let name = main_1.g.getRoom().constructor.name;
            let a = exports.path.join(`${exports.project_path}`, `../rooms/${name}.json`);
            try {
                fs.writeFileSync(a, JSON.stringify(main_1.g.getRoom().exportStateConfig()));
            }
            catch (e) {
                console.log("ERROR WRITING ROOM INFO FILE.");
            }
            alert("Saved");
        }
        else if (ctrl_held && !van_1.PAUSED) {
            alert("pause to enable saving.");
        }
    };
    let scroll_down = () => {
        if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling > 0.05)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling - 0.05;
        else if (exports.debug_state.last_clicked.id == "debug_target" && exports.debug_state.camera.state.scaling > 0.01)
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling - 0.01;
    };
    let undo_func = () => {
        if (controls_1.held_keys["ControlLeft"]) {
            let curr = exports.debug_state.actions_stack.pop();
            if (curr) {
                if (curr.property == "position") {
                    curr.element.state.position = JSON.parse(curr.old);
                }
                else if (curr.property === "rotation") {
                    curr.element.state.rotation = JSON.parse(curr.old);
                }
                else if (curr.property === "scaling") {
                    curr.element.state.scaling = JSON.parse(curr.old);
                }
            }
        }
    };
    controls_1.debug_binds.push({
        key: "KeyA",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyA", left_func, controls_1.exec_type.repeat, 1),
        function: left_func,
        execute: controls_1.exec_type.repeat
    });
    controls_1.debug_binds.push({
        key: "KeyD",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyD", right_func, controls_1.exec_type.repeat, 1),
        function: right_func,
        execute: controls_1.exec_type.repeat
    });
    controls_1.debug_binds.push({
        key: "KeyW",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyW", up_func, controls_1.exec_type.repeat, 1),
        function: up_func,
        execute: controls_1.exec_type.repeat
    });
    controls_1.debug_binds.push({
        key: "KeyS",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyS", down_func, controls_1.exec_type.repeat, 1),
        function: down_func,
        execute: controls_1.exec_type.repeat
    });
    controls_1.debug_binds.push({
        key: "scrollup",
        type: controls_1.btype.mouse,
        id: controls_1.Bind("scrollup", scroll_up, controls_1.exec_type.once, 1),
        function: scroll_up,
        execute: controls_1.exec_type.once
    });
    controls_1.debug_binds.push({
        key: "scrolldown",
        type: controls_1.btype.mouse,
        id: controls_1.Bind("scrolldown", scroll_down, controls_1.exec_type.once, 1),
        function: scroll_down,
        execute: controls_1.exec_type.once
    });
    controls_1.debug_binds.push({
        key: "KeyS",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyS", save_func, controls_1.exec_type.once, 1),
        function: save_func,
        execute: controls_1.exec_type.once
    });
    controls_1.debug_binds.push({
        key: "KeyZ",
        type: controls_1.btype.keyboard,
        id: controls_1.Bind("KeyZ", undo_func, controls_1.exec_type.once, 1),
        function: undo_func,
        execute: controls_1.exec_type.once
    });
    window.addEventListener("click", (e) => {
        if (e.target instanceof HTMLElement) {
            exports.debug_state.last_clicked = e.target;
        }
    });
    let pause_button = document.getElementById("pause_button");
    pause_button.addEventListener("click", (e) => {
        van_1.setPaused(!van_1.PAUSED);
        if (van_1.PAUSED) {
            pause_button.innerHTML = "UNPAUSE";
        }
        else {
            pause_button.innerHTML = "PAUSE";
        }
    });
    let obj_button = document.getElementById("new_object_button");
    let room_button = document.getElementById("new_room_button");
    room_button.addEventListener("click", (e) => {
        let file_path = ipcRenderer.sendSync('object-path-request', "rooms");
        if (file_path) {
            let full_name = exports.path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".ts");
            fs.writeFileSync(path_to_write, `
    
    import {room} from "../../lib/room";
    import {game} from "../../van";
    import {state_config} from "../../lib/room";
    import * as config from "./${new_name}.json";
    let cfig = config as unknown as state_config;
    interface ${new_name}_state{
    
    }
    
    
    export class ${new_name} extends room<${new_name}_state>{
      background_url="./sprites/Error.png";
      constructor(game:game<unknown>){
        super(game,cfig);
      }
      registerControls(){
    
      }
      registerParticles(){
    
      }
      statef(delta_time:number){
        super.statef(delta_time);
      }
    
    }
    
    `);
            path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".json");
            fs.writeFileSync(path_to_write, `
    {
      "objects":[]
    }
    `);
        }
    });
    obj_button.addEventListener("click", (e) => {
        let file_path = ipcRenderer.sendSync('object-path-request', "objects");
        if (file_path) {
            let full_name = exports.path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = exports.path.join(`${file_path}`, "..", new_name + ".ts");
            fs.writeFileSync(path_to_write, `
import {obj} from "../../lib/object";
import { obj_state, position } from "../../lib/state";

interface ${new_name}_state extends obj_state{
    
}
    
interface ${new_name}_parameters{
    
}
    
export class ${new_name} extends obj{
  sprite_url = "./sprites/Error.png";
  height = 100;
  width = 100;
  tags:Array<string> = [];
  collision = true;
  render = true;
  params:${new_name}_parameters;
  static default_params:${new_name}_parameters = {}
  constructor(state:obj_state,params:${new_name}_parameters = ${new_name}.default_params){
    super(state,params);
  }
  statef(time_delta:number){
    
  }
  renderf(time_delta:number){
   return super.renderf(time_delta); 
  }
  register_animations(){
    
  }
  register_audio(){
    
  }
  register_controls(){
        
  }
}
    `);
        }
    });
};


/***/ }),

/***/ "./src/lib/hud.ts":
/*!************************!*\
  !*** ./src/lib/hud.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.HUD = void 0;
class HUD {
    constructor() {
        this.graphic_elements = [];
        this.text_elements = [];
        this.text_elements.push(...this.setTextElements());
        this.graphic_elements.push(...this.setGraphicElements());
    }
    statef(a) {
        for (let x of this.graphic_elements) {
            x.statef(a);
        }
        for (let x of this.text_elements) {
            x.statef(a);
        }
    }
    setTextElements() {
        return [];
    }
    setGraphicElements() {
        return [];
    }
}
exports.HUD = HUD;
class Text {
    constructor(node, getFunc) {
        if (!node.align) {
            node.align = "center";
        }
        this.state = node;
        if (!this.state.text) {
            this.state.text = "";
        }
        this.getFunc = getFunc;
    }
    statef(a) {
        this.state.text = this.getFunc();
    }
    renderf(a) {
        let { size, color, font, text, max_width, align } = this.state;
        return {
            size,
            color,
            font,
            text,
            max_width,
            align
        };
    }
}
exports.Text = Text;


/***/ }),

/***/ "./src/lib/math.ts":
/*!*************************!*\
  !*** ./src/lib/math.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandInt = exports.Distance = void 0;
function Distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
exports.Distance = Distance;
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandInt = getRandInt;


/***/ }),

/***/ "./src/lib/object.ts":
/*!***************************!*\
  !*** ./src/lib/object.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravity_obj = exports.static_obj = exports.composite_obj = exports.obj = exports.rotation_length = exports.getId = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
const debug_1 = __webpack_require__(/*! ../lib/debug */ "./src/lib/debug.ts");
function getId(a, id) {
    for (let b = 0; b < a.length; b++) {
        if (a[b].id == id) {
            return a[b];
        }
    }
    return undefined;
}
exports.getId = getId;
//Finds the side lengths of a triangle if given the  angle (in degrees)
//along with the length of the hypotenuse
function rotation_length(length, degree) {
    let a_len = length * Math.sin(degree * Math.PI / 180);
    let b_len = length * Math.cos(degree * Math.PI / 180);
    return {
        x: a_len,
        y: b_len
    };
}
exports.rotation_length = rotation_length;
//This counter tracks the global number of objects created so far
//an object's id (if not overwritten) will be a unique integer, which
//uses this counter.
let counter = 0;
class animations {
    constructor() {
        this.animations = {};
        //Tracks the time passed since the current animation
        //has started playing
        this.animation_tracker = 0;
        this.animating = false;
    }
    //defines an animation that can be played using the play method
    //the keyframes are an array of tuples in the 
    //format of [(time for this sprite to show), sprite]
    add(name, keyframes, length) {
        this.animations[name] = [keyframes, length];
    }
    play(name, callback) {
        this.current = name;
        this.callback = callback;
        this.animation_tracker = 0;
    }
    renderf(t) {
        let curr_animation = this.animations[this.current][0];
        let length = this.animations[this.current][1];
        let index = 0;
        for (; index < curr_animation.length - 1; index++) {
            let keyframe_time = curr_animation[index][0];
            let next_keyframe_time = curr_animation[index + 1][0];
            if (this.animation_tracker >= keyframe_time && this.animation_tracker < next_keyframe_time) {
                this.animation_tracker = this.animation_tracker + t;
                this.animating = true;
                //Returns the raw sprite that's correct to show at this time
                return curr_animation[index][1];
            }
        }
        if (this.animation_tracker >= length) {
            this.animation_tracker = 0;
            this.animating = false;
            if (this.callback) {
                this.callback();
            }
        }
        else {
            this.animation_tracker += t;
        }
        //Returns the last appropriate frame until the animation is over.
        return curr_animation[index][1];
    }
}
class obj {
    constructor(state, params = obj.default_params) {
        //Url to the object's individual sprite, or all of its sprites
        //bundled into a spritesheet
        this.sprite_url = "";
        this.render_type = render_1.render_type.sprite;
        this.collision = false;
        this.tags = [];
        //tags are used to exclude or include objects when checking for collisions,
        //and for object identification / classification in scripts
        this.render = true;
        this.animations = new animations();
        this.audio = new audio_1.audio();
        //Last render time, used to calculate delta_time
        this.last_render = 0;
        //Params are options for the object, that do not rely on state
        // For example, the side of a piece in chess.
        this.params = {};
        this.layer = 1;
        this.save_to_file = true;
        this.tick_state = true;
        this.scale_type = render_1.scale_type.grow;
        this.opacity = 1;
        this.id = "" + counter;
        this.binds = [];
        counter++;
        this.params = params;
        this.registerControls();
        this.registerAudio();
        //Creates a copy of the passed in initial state to avoid 
        //Updating the saved state of the room
        this.state = JSON.parse(JSON.stringify(state));
        this.params = params;
    }
    getState() {
        return this.state;
    }
    //Animations should be registered using this.animations.add in this method
    registerAnimations() {
    }
    //Sounds should be registered using this.audio.add in this method.
    registerAudio() {
    }
    defaultParams() {
        return van_1.deep(this.defaultParams);
    }
    load() {
        let _this = this;
        return new Promise((resolve, reject) => {
            let a = new Image();
            let p = this.sprite_url;
            if (van_1.DEBUG) {
                p = debug_1.path.join(debug_1.root_path, this.sprite_url);
            }
            a.src = p;
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.sprite_sheet = a;
                _this.registerAnimations();
                yield this.audio.load();
                resolve();
            }));
        });
    }
    //Within normal objects, this just returns an array that contains the object.
    //This method is overwritten by composite objects, which returns every object
    //that the composite object contains. This simplifies the backend work, as each
    //object returns an array of atleast one object.
    combinedObjects() {
        return [this];
    }
    getBoundingBox() {
        let coll_box = this.getFullCollisionBox();
        return {
            top_right: {
                x: coll_box.x + coll_box.width / 2,
                y: coll_box.y + coll_box.height / 2
            },
            bottom_left: {
                x: coll_box.x - coll_box.width / 2,
                y: coll_box.y - coll_box.height / 2
            }
        };
    }
    //Distance from one object to another.
    distance(target) {
        return math_1.Distance(this.state.position, target.state.position);
    }
    applyForce(vel) {
        this.state.velocity.x += vel.x;
        this.state.velocity.y += vel.y;
    }
    angleTowards(a) {
        return this.angleTowardsPoint(a.state.position);
    }
    angleTowardsPoint(target) {
        return 90 - Math.atan2((target.y - this.state.position.y), (target.x - this.state.position.x)) * 180 / Math.PI;
    }
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval, this));
    }
    //This method is where controls and keybinds should
    //be defined using bindControl
    registerControls() {
    }
    statef(time) {
    }
    delete() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
        this.game.getRoom().deleteItem(this.id);
    }
    UnbindAll() {
        for (let a of this.binds) {
            controls_1.Unbind(a);
        }
    }
    //Returns the collision box of the object
    //Does not have to correspond to the object's sprite's size 
    //A composite object instead returns the bounding box that 
    //contains every one of its contained objects
    getFullCollisionBox() {
        //If a developer defined hitbox exists, use that, otherwise
        //generate it using the sprite width / height
        if (this.hitbox) {
            return {
                x: this.state.position.x,
                y: this.state.position.y,
                width: this.hitbox.width * this.state.scaling.width,
                height: this.hitbox.height * this.state.scaling.height
            };
        }
        else {
            return {
                x: this.state.position.x,
                y: this.state.position.y,
                width: this.width * this.state.scaling.width,
                height: this.height * this.state.scaling.height
            };
        }
    }
    //This is another methods, similar to getCombined
    //Just returns an array containing the object's collision box
    //Overwritten in composite objects to return every object's collision box
    //within the composite obect.
    getAllCollisionBoxes() {
        return [this.getFullCollisionBox()];
    }
    //Checks to see if an object actually collides with the provided box.
    //A box represents an area within the game space
    //Checking for collisions is trivial currently, as all hitboxes are axis aligned
    //But implementing a more complicated physics engine would make this method's impl.
    //significatly more complex.
    collidesWithBox(other_object) {
        let collides_horrizontally = false, collides_vertically = false;
        let hbox = this.hitbox;
        if (!this.hitbox) {
            hbox = {
                x_offset: 0,
                y_offset: 0,
                width: this.width,
                height: this.height
            };
        }
        let object_bounds = {
            left: (this.state.position.x + hbox.x_offset - hbox.width * this.state.scaling.width / 2),
            right: (this.state.position.x + hbox.x_offset + hbox.width * this.state.scaling.width / 2),
            top: (this.state.position.y + hbox.y_offset + hbox.height * this.state.scaling.height / 2),
            bottom: (this.state.position.y + hbox.y_offset - hbox.height * this.state.scaling.height / 2)
        };
        let other_object_bounds = {
            left: (other_object.x - other_object.width / 2),
            right: (other_object.x + other_object.width / 2),
            top: (other_object.y + other_object.height / 2),
            bottom: (other_object.y - other_object.height / 2)
        };
        //We can compare the sides of the boxes to see if they overlap
        //We check once for hoizontal overlap, then vertical.
        if ((object_bounds.left >= other_object_bounds.left && object_bounds.left < other_object_bounds.right) || (other_object_bounds.left > object_bounds.left && other_object_bounds.left < object_bounds.right)) {
            collides_horrizontally = true;
        }
        else {
            return false;
        }
        if ((object_bounds.bottom >= other_object_bounds.bottom && object_bounds.bottom < other_object_bounds.top) || (other_object_bounds.bottom > object_bounds.bottom && other_object_bounds.bottom < object_bounds.top)) {
            collides_vertically = true;
        }
        else {
            return false;
        }
        return collides_horrizontally && collides_vertically;
    }
    //The particle must be registered in the room's registerParticles method 
    //The name parameter should correspond to the key of a particle
    emitParticle(name, offset, lifetime, range) {
        let room = this.game.getRoom();
        let st = this.state;
        let final_position = {
            x: st.position.x + offset.x,
            y: st.position.y + offset.y
        };
        room.emitParticle(name, final_position, lifetime, range);
    }
    //Internal method that keeps calculates the delta_time
    //Also converts individual sprites into arrays of one sprite.
    renderTrack(time) {
        let rendered = this.renderf(time - this.last_render);
        let final;
        this.last_render = time;
        if (Array.isArray(rendered))
            final = rendered;
        else {
            final = [rendered];
        }
        return final;
    }
    //Most objects should not be overwritting the renderf method
    //Returns the appropriate sprite for the object
    renderf(time) {
        //If the object doesn't have registered animations, or isn't playing one
        //We have to create the sprite here.
        if (Object.keys(this.animations.animations).length == 0 || !this.animations.current) {
            if (!this.sprite_sheet || !this.height || !this.width) {
                return {
                    sprite: undefined,
                    x: this.state.position.x,
                    y: this.state.position.y
                };
            }
            let sprite_height = this.height;
            let sprite_width = this.width;
            //Technically we don't need to define an object height and width
            //If the sprite_url points to a single static sprite, as we can just pull
            //the dimensions from the image
            if (this.height == undefined) {
                sprite_height = this.sprite_sheet.height;
            }
            if (this.width == undefined) {
                sprite_width = this.sprite_sheet.width;
            }
            return {
                sprite: {
                    sprite_sheet: this.sprite_sheet,
                    left: 0,
                    top: 0,
                    sprite_width: sprite_width,
                    sprite_height: sprite_height,
                    opacity: this.opacity
                },
                x: this.state.position.x,
                y: this.state.position.y
            };
        }
        return {
            sprite: this.animations.renderf(time),
            x: this.state.position.x,
            y: this.state.position.y
        };
    }
}
exports.obj = obj;
obj.default_params = {};
class composite_obj extends obj {
    constructor(pos) {
        super(pos);
        this.objects = [];
        this.render = false;
        this.registered = false;
        this.collision = false;
        this.statics = [];
    }
    load() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([...this.objects.map((a) => a.load()), ...this.statics.map(a => a.obj.load())]);
            resolve();
        }));
    }
    combinedObjects() {
        let combined = [...this.objects, ...this.statics.map(a => a.obj)];
        combined.forEach(a => a.parent = this);
        return [...combined, this];
    }
    getItemsByTag(tag) {
        return this.combinedObjects().filter((a) => a.tags.indexOf(tag) > -1);
    }
    addItem(a, list = this.objects) {
        list.push(a);
        a.parent = this;
        this.game.getRoom().addItem(a);
    }
    getAllCollisionBoxes() {
        let arr = [];
        for (let obj of [...this.statics.map(a => a.obj), ...this.objects]) {
            let created_box = obj.getAllCollisionBoxes();
            if (Array.isArray(created_box)) {
                arr.push(...created_box);
            }
            else {
                arr.push(created_box);
            }
        }
        return arr;
    }
    delete() {
        for (let a of this.objects) {
            a.delete();
        }
        for (let a of this.statics) {
            a.obj.delete();
        }
        super.delete();
    }
    collidesWithBox(a) {
        for (let obj of this.objects) {
            if (obj.collidesWithBox(a))
                return true;
        }
        for (let o of this.statics) {
            if (o.obj.collidesWithBox(a))
                return true;
        }
        return false;
    }
}
exports.composite_obj = composite_obj;
class static_obj {
    constructor() {
        this.sprite_url = "";
    }
}
exports.static_obj = static_obj;
class gravity_obj extends obj {
    constructor() {
        super(...arguments);
        this.gravity = true;
    }
}
exports.gravity_obj = gravity_obj;


/***/ }),

/***/ "./src/lib/render.ts":
/*!***************************!*\
  !*** ./src/lib/render.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rect_renderer = exports.stroked_rect_renderer = exports.sprite_renderer = exports.text_renderer = exports.hud_text_renderer = exports.scale_type = exports.render_type = exports.Camera = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
class Camera {
    constructor(props, v, hud = undefined) {
        this.state = {
            scaling: props.scaling,
            position: {
                x: props.x,
                y: props.y
            },
            dimensions: props.dimensions,
            viewport: {
                x: v.x,
                y: v.y,
                width: v.width * props.dimensions.width,
                height: v.height * props.dimensions.height
            },
            debug: props.debug,
            hud
        };
        this.hud = hud;
    }
    set x(x) {
        this.state.position.x = x;
    }
    set y(y) {
        this.state.position.y = y;
    }
    get x() {
        return this.state.position.x;
    }
    get y() {
        return this.state.position.y;
    }
}
exports.Camera = Camera;
var render_type;
(function (render_type) {
    render_type[render_type["text"] = 0] = "text";
    render_type[render_type["sprite"] = 1] = "sprite";
    render_type[render_type["rect"] = 2] = "rect";
    render_type[render_type["stroke_rect"] = 3] = "stroke_rect";
})(render_type = exports.render_type || (exports.render_type = {}));
var scale_type;
(function (scale_type) {
    scale_type[scale_type["grow"] = 0] = "grow";
    scale_type[scale_type["repeat"] = 1] = "repeat";
})(scale_type = exports.scale_type || (exports.scale_type = {}));
exports.hud_text_renderer = (r, s) => {
    let vheight = van_1.GetViewportDimensions().height;
    r.context.font = `${s.font.size}px ${s.font.font}`;
    r.context.fillStyle = s.font.color;
    r.context.textAlign = s.font.align;
    if (s.font.max_width) {
        r.context.fillText(s.font.text, s.x, vheight - s.y, s.font.max_width);
    }
    else {
        r.context.fillText(s.font.text, s.x, vheight - s.y);
    }
};
exports.text_renderer = (r, s) => {
    let camera = r.camera;
    let vheight = r.camera.state.dimensions.height;
    let width = r.context.measureText(s.font.text).width * r.camera.state.scaling;
    let height = s.font.size * 1.2 * r.camera.state.scaling;
    let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1 / r.camera.state.scaling) / 2) * r.camera.state.scaling);
    let final_y = ((vheight - s.y * camera.state.scaling - camera.state.dimensions.height / 2 + camera.state.position.y * camera.state.scaling));
    r.context.font = `${s.font.size * r.camera.state.scaling}px ${s.font.font}`;
    r.context.fillStyle = s.font.color;
    r.context.textAlign = s.font.align;
    r.context.save();
    r.context.translate(final_x, final_y);
    if (s.font.max_width) {
        r.context.fillText(s.font.text, 0, 0, s.font.max_width);
    }
    else {
        r.context.fillText(s.font.text, 0, 0);
    }
    r.context.restore();
};
exports.sprite_renderer = (r, s) => {
    let camera = r.camera;
    let vheight = r.camera.state.dimensions.height / r.camera.state.scaling;
    let final_x = ((s.x - camera.state.position.x + camera.state.dimensions.width * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_width * s.scale.width / 2) * r.camera.state.scaling);
    let final_y = ((vheight - s.y - camera.state.dimensions.height * (1 / r.camera.state.scaling) / 2 - s.sprite.sprite_height * s.scale.height / 2 + camera.state.position.y) * r.camera.state.scaling);
    let height = s.sprite.sprite_height * r.camera.state.scaling * s.scale.height;
    let width = s.sprite.sprite_width * r.camera.state.scaling * s.scale.width;
    r.context.save();
    r.context.globalAlpha = s.sprite.opacity;
    r.context.translate(final_x + (width) / 2, final_y + height / 2);
    let radians = s.rotation * (Math.PI / 180);
    r.context.rotate(radians);
    if (s.scale_type == scale_type.grow) {
        r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, s.sprite.sprite_width, s.sprite.sprite_height, -(width) / 2, -height / 2, width, height);
    }
    else if (s.scale_type == scale_type.repeat) {
        let one_width = s.sprite.sprite_width * r.camera.state.scaling;
        let one_height = s.sprite.sprite_height * r.camera.state.scaling;
        let total_hor_sprites = width / one_width;
        let total_ver_sprites = height / one_height;
        for (let a = 0; a < total_hor_sprites; a += 1) {
            for (let b = 0; b < total_ver_sprites; b += 1) {
                let new_width = one_width;
                let new_height = one_height;
                if ((a + 1) * one_width - width > 0) {
                    new_width = width % one_width;
                }
                if ((b + 1) * one_height - height > 0) {
                    new_height = height % one_height;
                }
                r.context.drawImage(s.sprite.sprite_sheet, s.sprite.left, s.sprite.top, new_width / (r.camera.state.scaling), new_height / (r.camera.state.scaling), -width / 2 + a * one_width, -height / 2 + b * one_height, new_width, new_height);
            }
        }
    }
    r.context.restore();
};
exports.stroked_rect_renderer = (context, rect, x, y, color, lineWidth, camera) => {
    let vheight = camera.state.dimensions.height / camera.state.scaling;
    let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1 / camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
    let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1 / camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
    let height = rect.height * camera.state.scaling;
    let width = rect.width * camera.state.scaling;
    context.strokeStyle = color;
    context.lineWidth = lineWidth * camera.state.scaling;
    context.strokeRect(final_x, final_y, width, height);
};
exports.rect_renderer = (context, rect, x, y, color, lineWidth, camera) => {
    let vheight = camera.state.dimensions.height / camera.state.scaling;
    let final_x = ((x - camera.state.position.x + camera.state.dimensions.width * (1 / camera.state.scaling) / 2 - rect.width / 2) * camera.state.scaling);
    let final_y = ((vheight - y - rect.height / 2 - camera.state.dimensions.height * (1 / camera.state.scaling) / 2 + camera.state.position.y) * camera.state.scaling);
    let height = rect.height * camera.state.scaling;
    let width = rect.width * camera.state.scaling;
    context.strokeStyle = color;
    context.fillRect(final_x, final_y, width, height);
};


/***/ }),

/***/ "./src/lib/room.ts":
/*!*************************!*\
  !*** ./src/lib/room.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = exports.applyGravity = void 0;
const sprite_1 = __webpack_require__(/*! ./sprite */ "./src/lib/sprite.ts");
const collision_1 = __webpack_require__(/*! ./collision */ "./src/lib/collision.ts");
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
const controls_1 = __webpack_require__(/*! ./controls */ "./src/lib/controls.ts");
const audio_1 = __webpack_require__(/*! ./audio */ "./src/lib/audio.ts");
const debug_1 = __webpack_require__(/*! ../lib/debug */ "./src/lib/debug.ts");
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
function applyGravity(ob, grav_const, grav_max) {
    if (ob.gravity && ob.state.velocity.y > grav_max) {
        ob.state.velocity.y += grav_const;
    }
}
exports.applyGravity = applyGravity;
class room {
    constructor(game, config) {
        this.objects = [];
        //This object contains particle definitions
        this.particles = {};
        //This array is what actually contains the particles
        //that exists within the room.
        this.particles_arr = [];
        this.binds = [];
        this.audio = new audio_1.audio();
        //These text nodes exists in the actual room space, rather than
        //on the hud layer.
        this.render = true;
        this.text_nodes = [];
        this.game = game;
        for (let c of config.objects) {
            //This handles loading objects from the saved json file associated with each room.
            this.addItemStateConfig(c);
        }
    }
    exportStateConfig() {
        let config = { objects: [] };
        for (let o of this.objects.filter((obj) => obj.save_to_file)) {
            //If an object has a parent object, it's a descendent of a composite object
            //The parent will spawn this object when it's instantiated, so we do
            //not have to save this instance.
            if (!o.parent) {
                config.objects.push({
                    type: o.constructor.name,
                    state: o.state,
                    parameters: o.params
                });
            }
        }
        return config;
    }
    //This handles the loading of all room sprites, and
    //any objects it contains.
    load() {
        let _this = this;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let a = new Image();
            let to_await = this.objects.map((a) => a.load());
            yield Promise.all(to_await);
            let p = this.background_url;
            if (van_1.DEBUG) {
                p = debug_1.path.join(debug_1.root_path, this.background_url);
            }
            a.src = p;
            a.onerror = (() => {
                throw new Error("Loading Error:" + this.background_url);
            });
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.background = a;
                yield this.audio.load();
                resolve();
            }));
        }));
    }
    //This is used while loading objects from file, it's used to dynamically load
    //objects from the room's json. If adding items within code, it's better to create
    //new instances of objects through addItem
    addItemStateConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (prefabs_1.prefabs[config.type]) {
                let new_obj = (new prefabs_1.prefabs[config.type](Object.assign({}, config.state), config.parameters));
                this.addItems(new_obj.combinedObjects());
            }
            else {
                console.log("UNKNOWN TYPE ATTEMPTED TO LOAD: " + config.type);
            }
        });
    }
    //Adds the passed item to the room.
    addItem(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            this.addItems([o], list);
        });
    }
    //Adds every item in the passed array to the room.
    addItems(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let ob of o) {
                ob.game = this.game;
            }
            yield Promise.all(o.map((a) => a.load()));
            list.push(...o);
            if (van_1.DEBUG && list === this.objects) {
                debug_1.debug_update_obj_list();
            }
        });
    }
    //Deletes the item and removes it from the room's object list
    deleteItem(id, list = this.objects) {
        for (let a = 0; a < list.length; a++) {
            if (list[a].id === id) {
                list.splice(a, 1);
                a--;
            }
        }
        if (van_1.DEBUG && list === this.objects) {
            debug_1.debug_update_obj_list();
        }
    }
    //Any particles that are needed in the room should be added to the particle array here.
    registerParticles() {
    }
    //Adds a bind that is executed when the passed key is activated
    //key examples: mouse0down KeyAdown KeyLup
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval));
    }
    //Checks for objects that have collision at the passed point
    checkCollisionsPoint(pos, exempt, list = this.objects) {
        return this.checkCollisions({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    //Checks for any objects at the passed point
    checkObjectsPoint(pos, exempt, list = this.objects) {
        return this.checkObjects({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    //Checks for collisions at the point that contain every tag within the second argument
    checkCollisionsPointInclusive(pos, tags, list = this.objects) {
        return this.checkCollisionsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    //Checks for any objects that contain every tag within the second argument
    checkObjectsPointInclusive(pos, tags, list = this.objects) {
        return this.checkObjectsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    //Checks for collisions in the box that contain the tags in the second argument
    checkCollisionsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter(obj => obj.collision && obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    //Checks for any objects in the box that contain all tags in the second argument
    checkObjectsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter((obj) => obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    //checks for objects with collision in the box that do not contain the tags in the second argument
    checkCollisions(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_collisions(box, list, exempt);
    }
    //checks for  any objects in the box that do not contain the tags in the second argument
    checkObjects(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_objects(box, list, exempt);
    }
    //This method should be used to call bindControl and create any needed keyBindings
    registerControls() {
    }
    cleanup() {
    }
    //The room's state updating function.
    statef(time) {
        for (let particle of this.particles_arr) {
            particle.statef(time);
        }
        for (let text_node of this.text_nodes) {
            text_node.statef(time);
        }
        let ticking_objects = this.objects.filter((o) => o.tick_state);
        for (let a = 0; a < ticking_objects.length; a++) {
            //This function checks the velocity of every object, and moves it into it's next location
            //provided that it can fit there.
            collision_1.velocityCollisionCheck(ticking_objects[a], this.objects);
            ticking_objects[a].statef(time);
        }
        if (this.game.state.cameras) {
            for (let cameras of this.game.state.cameras) {
                if (cameras.hud) {
                    cameras.hud.statef(time);
                }
            }
        }
    }
    emitParticle(name, pos, lifetime, pos_range) {
        let state = {
            position: pos,
            velocity: { x: 0, y: 0 },
            rotation: 0,
            scaling: { width: 1, height: 1 }
        };
        this.addItem(new sprite_1.Particle(this.particles[name], state, lifetime, pos_range), this.particles_arr);
    }
    getObj(id) {
        for (let a = 0; a < this.objects.length; a++) {
            if (this.objects[a].id == id) {
                return this.objects[a];
            }
        }
        return null;
    }
    //Gets any objects that have the passed tag
    getObjByTag(tag) {
        return this.objects.filter((a) => a.tags.indexOf(tag) > -1);
    }
    //renders the room's sprite
    renderf(time) {
        return {
            sprite_sheet: this.background,
            left: 0,
            top: 0,
            sprite_height: this.background.height,
            sprite_width: this.background.width,
            opacity: 1
        };
    }
}
exports.room = room;


/***/ }),

/***/ "./src/lib/sprite.ts":
/*!***************************!*\
  !*** ./src/lib/sprite.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sprite_gen = exports.Particle = void 0;
const object_1 = __webpack_require__(/*! ./object */ "./src/lib/object.ts");
const math_1 = __webpack_require__(/*! ./math */ "./src/lib/math.ts");
class Particle extends object_1.obj {
    constructor(part, state, lifetime, random_range) {
        super(state);
        this.collision = false;
        this.state.lifetime = 0;
        this.sprite_url = part.sprite;
        this.height = part.height;
        this.width = part.width;
        this.max_lifetime = lifetime;
        this.random_range = random_range;
        this.state.position.x += math_1.getRandInt(-random_range / 2, random_range / 2);
        this.state.position.y += math_1.getRandInt(-random_range / 2, random_range / 2);
    }
    delete() {
        let room = this.game.getRoom();
        room.deleteItem(this.id, room.particles_arr);
    }
    statef(time) {
        this.state.lifetime += time;
        if (this.state.lifetime > this.max_lifetime) {
            this.delete();
        }
    }
    renderf(time) {
        if (!this.selected_sprite) {
            let sprites = sprite_gen(this.sprite_sheet, this.width, this.height);
            let random_row = math_1.getRandInt(0, sprites.length);
            let random_col = math_1.getRandInt(0, sprites[random_row].length);
            this.selected_sprite = sprites[random_row][random_col];
        }
        this.selected_sprite.opacity = 1 - this.state.lifetime / this.max_lifetime;
        return {
            x: this.state.position.x,
            y: this.state.position.y,
            sprite: this.selected_sprite
        };
    }
}
exports.Particle = Particle;
function sprite_gen(sprite_sheet, sprite_width, sprite_height) {
    let width = sprite_sheet.width;
    let height = sprite_sheet.height;
    let sprites = [];
    for (let b = 0; b < height; b += sprite_height) {
        sprites.push([]);
        for (let a = 0; a < width; a += sprite_width) {
            sprites[b].push({
                sprite_sheet,
                left: a,
                top: b * sprite_height,
                sprite_height,
                sprite_width,
                opacity: 1
            });
        }
    }
    return sprites;
}
exports.sprite_gen = sprite_gen;


/***/ }),

/***/ "./src/van.ts":
/*!********************!*\
  !*** ./src/van.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.objects = exports.rooms = exports.deep = exports.render_collision_box = exports.setPaused = exports.setDebug = exports.viewport = exports.GetViewportDimensions = exports.GetScreenDimensions = exports.PAUSED = exports.DEBUG = void 0;
exports.DEBUG = 'production' === 'dev';
exports.PAUSED = 'production' === 'dev';
const render_1 = __webpack_require__(/*! ./lib/render */ "./src/lib/render.ts");
const controls_1 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const controls_2 = __webpack_require__(/*! ./lib/controls */ "./src/lib/controls.ts");
const debug_1 = __webpack_require__(/*! ./lib/debug */ "./src/lib/debug.ts");
const rooms_1 = __webpack_require__(/*! ./game/rooms/rooms */ "./src/game/rooms/rooms.ts");
let canvas_element = document.getElementById("target");
let context = canvas_element.getContext("2d");
let screen_width = window.innerWidth;
let screen_height = window.innerHeight;
//How often the game logic loop should run, in milliseconds
let logic_loop_interval = 1000 / 60;
let last_time = new Date();
let last_render_time = 0;
function GetScreenDimensions() {
    return ({
        width: screen_width,
        height: screen_height
    });
}
exports.GetScreenDimensions = GetScreenDimensions;
function GetViewportDimensions() {
    return ({
        height: canvas_element.height,
        width: canvas_element.width
    });
}
exports.GetViewportDimensions = GetViewportDimensions;
exports.viewport = {
    height: GetViewportDimensions().height,
    width: GetViewportDimensions().width
};
window.onresize = () => {
    exports.viewport.height = GetViewportDimensions().height;
    exports.viewport.width = GetViewportDimensions().width;
};
function setDebug(x) {
    exports.DEBUG = x;
}
exports.setDebug = setDebug;
function setPaused(x) {
    exports.PAUSED = x;
}
exports.setPaused = setPaused;
exports.render_collision_box = (a) => {
    boxes.push(a);
};
let boxes = [];
exports.deep = (a) => {
    return JSON.parse(JSON.stringify(a));
};
exports.rooms = [];
class game {
    constructor(ctx, init_state) {
        this.prototypes = [];
        this.rooms = [];
        this.isRendering = false;
        this.state = {
            canvas: canvas_element,
            logic: undefined,
            context: ctx,
            cameras: [],
            current_room: undefined,
            globals: init_state
        };
        this.offscreen_canvas = document.createElement("canvas");
        this.offscreen_context = this.offscreen_canvas.getContext("2d");
        //DEBUG determines whether the game is running within the editor
        if (exports.DEBUG) {
            //Sets up some global debug state and the editor keybindings
            debug_1.debug_setup();
            //Initializes a separate logic loop solely for the editor
            //This separation allows for the editor to interact with the environment while
            //the actual room's state loop is paused.
            setInterval(() => {
                if (this.getRoom()) {
                    //This functions handles the editor interactions with the game environment
                    debug_1.debug_statef(16.66);
                }
            }, 16.66);
        }
        //Creates a onclick function on the window that handles element onclick functions
        controls_2.init_click_handler(this);
    }
    render(t) {
        //t is current render time
        let delta_time = t - last_render_time;
        last_render_time = t;
        let all_cameras = this.state.cameras;
        let editor_camera_index = -1;
        if (exports.DEBUG) {
            debug_1.debug_state.render_delta_time = delta_time;
            all_cameras = [...all_cameras, debug_1.debug_state.camera];
            editor_camera_index = all_cameras.length - 1;
            //The editor camera is always the last camera inside the cameras array
            //the editor camera is rendered to a different canvas than the main game canvas
            //so we use the camera's index to check what canvas to render to
        }
        for (let a = 0; a < all_cameras.length; a++) {
            let camera = all_cameras[a];
            //We render the cameras contents to an offscreen canvas, then copy its contents
            //to the main canvas.
            //This allows us to avoid any math needed to determine sprites that are partially offscreen
            //as any offscreen sections of the sprites will not be copied over, rather than explicitly 
            //calculating the cutoffs
            this.offscreen_canvas.height = camera.state.dimensions.height;
            this.offscreen_canvas.width = camera.state.dimensions.width;
            this.offscreen_context.clearRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            this.offscreen_context.fillStyle = "black";
            this.offscreen_context.fillRect(0, 0, camera.state.dimensions.width, camera.state.dimensions.height);
            //This collision box represents the camera's field of view in the game space
            //We use the room's checkObjects function to find any object that exists within this area
            //These objects are the objects that need to be rendered for this camera
            let camera_box = {
                x: camera.state.position.x,
                y: camera.state.position.y,
                width: camera.state.dimensions.width * (1 / camera.state.scaling),
                height: camera.state.dimensions.height * (1 / camera.state.scaling)
            };
            //List of all particles within the camera's fov
            let particle_collides = this.state.current_room.checkObjects(camera_box, [], this.state.current_room.particles_arr);
            //List of all objects within the camera's fov
            let camera_colliders = [...this.state.current_room.checkObjects(camera_box), ...particle_collides];
            let render_args = {
                context: this.offscreen_context,
                camera: camera,
            };
            //Renders the room's background.
            if (this.state.current_room.render) {
                render_1.sprite_renderer(render_args, {
                    sprite: this.state.current_room.renderf(delta_time),
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: {
                        width: 1,
                        height: 1
                    },
                    scale_type: render_1.scale_type.grow
                });
            }
            //Array of hitboxes for each item in the room
            let hitboxes = [];
            for (let a of camera_colliders.filter((b) => b.render).sort((a, b) => (a.layer - b.layer))) {
                let rendered = a.renderTrack(t);
                //Objects can return either a sprite, or an array of sprites to simplify the API
                //For the user, and for use in composite objects(object that bundles other objects together)
                //Internally, we convert any single sprite into an array of one sprite.
                for (let positioned_sprite of rendered)
                    render_1.sprite_renderer(render_args, {
                        sprite: positioned_sprite.sprite,
                        x: positioned_sprite.x,
                        y: positioned_sprite.y,
                        rotation: a.state.rotation,
                        scale: a.state.scaling,
                        scale_type: a.scale_type
                    });
                //Hitboxes are rendered late in the render loop, to ensure objects don't overlap them
                //As we render objects, we add their hitboxes to this list
                if (exports.DEBUG && a.collision) {
                    hitboxes.push(...a.getAllCollisionBoxes());
                }
            }
            //This is a special class of object that exists in the game world
            for (let node of this.state.current_room.text_nodes) {
                render_1.text_renderer(render_args, {
                    x: node.state.position.x,
                    y: node.state.position.y,
                    font: node.renderf(t)
                });
            }
            if (camera.hud) {
                let graphics = camera.hud.graphic_elements;
                let text_elements = camera.hud.text_elements;
                //Renders static graphics that are a part of the hud
                for (let graphic of graphics) {
                    let rendered = graphic.renderTrack(t);
                    if (graphic.render) {
                        for (let positioned_sprite of rendered) {
                            render_1.sprite_renderer(render_args, {
                                sprite: positioned_sprite.sprite,
                                x: positioned_sprite.x,
                                y: positioned_sprite.y,
                                rotation: graphic.state.rotation,
                                scale: graphic.state.scaling,
                                scale_type: graphic.scale_type
                            });
                        }
                    }
                }
                for (let text of text_elements) {
                    render_1.hud_text_renderer(render_args, {
                        x: text.state.position.x,
                        y: text.state.position.y,
                        font: text.renderf(t)
                    });
                }
            }
            //If a camera is marked as a debug camera, we render the
            //  hitboxes, and potentially update the editor
            if (camera.state.debug) {
                let box;
                let boxes_copy = [...boxes];
                while (boxes_copy.length > 0) {
                    let box = boxes_copy.pop();
                    let rect = {
                        width: box.width,
                        height: box.height
                    };
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#FF0000", 1, camera);
                }
                while (hitboxes.length > 0) {
                    let box = hitboxes.pop();
                    let rect = {
                        width: box.width,
                        height: box.height
                    };
                    render_1.stroked_rect_renderer(this.offscreen_context, rect, box.x, box.y, "#008000", 1, camera);
                }
                //Draws a special box around the currently selected element
                //inside the editor UI
                if (exports.DEBUG && debug_1.debug_state.selected_properties_element) {
                    let coll = debug_1.debug_state.selected_properties_element.getFullCollisionBox();
                    render_1.rect_renderer(this.offscreen_context, { width: 25, height: 25 }, coll.x, coll.y, "skyblue", 10, camera);
                    render_1.stroked_rect_renderer(this.offscreen_context, coll, coll.x, coll.y, "blue", 1, camera);
                }
            }
            //Separate canvas for the editor camera
            if (a !== editor_camera_index) {
                this.state.context.drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
            else {
                debug_1.debug_state.target.getContext("2d").drawImage(this.offscreen_canvas, camera.state.viewport.x, camera.state.viewport.y);
            }
        }
        if (exports.DEBUG)
            boxes = [];
        requestAnimationFrame((a) => { this.render(a); });
    }
    start_logic(a) {
        //this is the room's state loop
        return window.setInterval(() => {
            let new_time = new Date();
            if (!exports.PAUSED) {
                let time_since = new_time.getTime() - last_time.getTime();
                if (this.state.current_room) {
                    this.state.current_room.statef(time_since);
                    if (this.state.current_room.hud) {
                        this.state.current_room.hud.statef(time_since);
                    }
                }
            }
            last_time = new_time;
            //This functions handles binds that occur on an interval
            controls_1.ExecuteRepeatBinds(a);
        }, a);
    }
    getRoom() {
        return this.state.current_room;
    }
    loadRoomString(x) {
        return __awaiter(this, void 0, void 0, function* () {
            //room list is a object that contains each room's class,
            //with the room's name as the key for class
            //This object is populated at compile time
            for (let a of Object.keys(rooms_1.rooms)) {
                if (a == x) {
                    //this isn't particularly type-safe.
                    let new_room = new rooms_1.rooms[a](this);
                    yield this.loadRoom(new_room);
                }
            }
        });
    }
    loadRoom(x) {
        return __awaiter(this, void 0, void 0, function* () {
            //Clears the room's logic loop if one
            //Was already running
            if (this.state.logic) {
                window.clearInterval(this.state.logic);
            }
            //This reference is used during initialization
            x.game = this;
            //Deletes each object in the room (which also unbinds their binds),
            //and unbinds the room's bindings.
            if (this.state.current_room !== undefined) {
                while (this.state.current_room.objects.length > 0) {
                    this.state.current_room.objects[0].delete();
                }
                for (let id of this.state.current_room.binds) {
                    controls_1.Unbind(id);
                }
            }
            let new_room = yield x.load();
            x.registerControls();
            x.registerParticles();
            this.state.logic = this.start_logic(logic_loop_interval);
            this.state.current_room = x;
            if (exports.DEBUG) {
                debug_1.debug_update_room_list();
                debug_1.debug_update_prefabs();
                debug_1.debug_update_obj_list();
            }
            if (!this.isRendering) {
                //This starts the render loop for the room
                this.render(0);
                this.isRendering = true;
            }
        });
    }
}
exports.game = game;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3BhaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGFpbnRfYm9yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3BhaW50X3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcm9vbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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TyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7QUFDSCxDQUFDO0FBRVkscUJBQWEsR0FBRyxDQUFDLENBQWUsRUFBQyxDQUFhLEVBQUUsRUFBRTtJQUM3RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxSSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO0lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pEO1NBQ0k7UUFDSCxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFWSx1QkFBZSxHQUFHLENBQUMsQ0FBZ0IsRUFBRSxDQUFjLEVBQUUsRUFBRTtJQUNsRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3hFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RMLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuTSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDOUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdB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Q0FBQztnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtRQUNILENBQUM7S0FBQTtDQUNGO0FBblJELG9CQW1SQyIsImZpbGUiOiJ2YW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9nYW1lL21haW4udHNcIik7XG4iLCJpbXBvcnQge1ZlY3RvcixvYmpfc3RhdGUscm9vbV9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dhbWUsR2V0Vmlld3BvcnREaW1lbnNpb25zLHZpZXdwb3J0fSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHsgZnVuY3Rpb25zOiBhbnk7IH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYWludGVyX3N0YXRle1xyXG4gIHNpZGVfbGVuZ3RoOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgbGV0IGcgPSBuZXcgZ2FtZTxwYWludGVyX3N0YXRlPihjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIikse1xyXG4gIHNpZGVfbGVuZ3RoOjI4XHJcbn0pO1xyXG5cclxud2luZG93LmZ1bmN0aW9ucyA9IHt9O1xyXG5cclxud2luZG93LmZ1bmN0aW9ucy5yZXNldCA9ICgpID0+IHtcclxuICBsZXQgb2JqZWN0cyA9IGcuZ2V0Um9vbSgpLm9iamVjdHMuZmlsdGVyKChvKT0+by50YWdzWzBdPT1cInBhaW50XCIpO1xyXG4gIG9iamVjdHMuZm9yRWFjaCgobyk9Pm8uZGVsZXRlKCkpO1xyXG59XHJcblxyXG5nLmxvYWRSb29tU3RyaW5nKFwicGFpbnRfcm9vbVwiKTtcclxuXHJcbiIsIlxuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG5pbXBvcnQgeyBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4uLy4uL2xpYi9zcHJpdGVcIjtcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuXG5pbnRlcmZhY2UgcGFpbnRfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gIGNvbG9yZWQ6Ym9vbGVhblxufVxuICAgIFxuaW50ZXJmYWNlIHBhaW50X3BhcmFtZXRlcnN7XG4gICAgXG59XG4gICAgXG5leHBvcnQgY2xhc3MgcGFpbnQgZXh0ZW5kcyBvYmp7XG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9wYWludC5wbmdcIjtcbiAgaGVpZ2h0ID0gMTA7XG4gIHdpZHRoID0gMTA7XG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xuICBzdGF0ZTpwYWludF9zdGF0ZTtcbiAgcmVuZGVyID0gdHJ1ZTtcbiAgdGlja19zdGF0ZTpmYWxzZTtcbiAgcGFyYW1zOnBhaW50X3BhcmFtZXRlcnM7XG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpwYWludF9wYXJhbWV0ZXJzID0ge31cbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwYWludF9wYXJhbWV0ZXJzID0gcGFpbnQuZGVmYXVsdF9wYXJhbXMpe1xuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XG4gICAgdGhpcy5zdGF0ZS5jb2xvcmVkID0gZmFsc2U7XG4gICAgdGhpcy50YWdzLnB1c2goXCJwYWludFwiKTtcbiAgfVxuICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIFxuICB9XG4gIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgc2VsZWN0ZWQ7XG4gICAgaWYodGhpcy5zdGF0ZS5jb2xvcmVkKXtcbiAgICAgIHNlbGVjdGVkID0gc3ByaXRlc1swXVsxXTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNlbGVjdGVkID0gc3ByaXRlc1swXVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxuICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXG4gICAgICBzcHJpdGU6c2VsZWN0ZWRcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcbiAgICAgICAgXG4gIH1cbn1cbiAgICAiLCJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuaW1wb3J0IHsgb2JqX3N0YXRlLCBWZWN0b3IgfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5cbmludGVyZmFjZSBwYWludF9ib3JkZXJfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG59XG4gICAgXG5pbnRlcmZhY2UgcGFpbnRfYm9yZGVyX3BhcmFtZXRlcnN7XG4gICAgXG59XG4gICAgXG5leHBvcnQgY2xhc3MgcGFpbnRfYm9yZGVyIGV4dGVuZHMgb2Jqe1xuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcGFpbnQucG5nXCI7XG4gIGhlaWdodCA9IDEwO1xuICB3aWR0aCA9IDEwO1xuICBjb2xsaXNpb24gPSBmYWxzZTtcbiAgcmVuZGVyID0gdHJ1ZTtcbiAgcGFyYW1zOnBhaW50X2JvcmRlcl9wYXJhbWV0ZXJzO1xuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6cGFpbnRfYm9yZGVyX3BhcmFtZXRlcnMgPSB7fVxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBhaW50X2JvcmRlcl9wYXJhbWV0ZXJzID0gcGFpbnRfYm9yZGVyLmRlZmF1bHRfcGFyYW1zKXtcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xuICB9XG4gIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgXG4gIH1cbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxuICB9XG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9hdWRpbygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XG4gICAgICAgIFxuICB9XG59XG4gICAgIiwiXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5cbmludGVyZmFjZSBwbGFjZWhvbGRlcl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcbiAgICBcbn1cbiAgICBcbmludGVyZmFjZSBwbGFjZWhvbGRlcl9wYXJhbWV0ZXJze1xuICAgIFxufVxuICAgIFxuZXhwb3J0IGNsYXNzIHBsYWNlaG9sZGVyIGV4dGVuZHMgb2Jqe1xuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XG4gIGhlaWdodCA9IDEwMDtcbiAgd2lkdGggPSAxMDA7XG4gIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xuICBjb2xsaXNpb24gPSB0cnVlO1xuICByZW5kZXIgPSB0cnVlO1xuICBwYXJhbXM6cGxhY2Vob2xkZXJfcGFyYW1ldGVycztcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnBsYWNlaG9sZGVyX3BhcmFtZXRlcnMgPSB7fVxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBsYWNlaG9sZGVyX3BhcmFtZXRlcnMgPSBwbGFjZWhvbGRlci5kZWZhdWx0X3BhcmFtcyl7XG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgfVxuICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIFxuICB9XG4gIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxuICB9XG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9hdWRpbygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XG4gICAgICAgIFxuICB9XG59XG4gICAgIiwiXG5pbnRlcmZhY2UgcHJlZmFicyB7XG4gIFtpbmRleDpzdHJpbmddOmFueVxufVxuaW1wb3J0IHtwYWludH0gZnJvbSBcIi4vcGFpbnRcIjtcbmltcG9ydCB7cGFpbnRfYm9yZGVyfSBmcm9tIFwiLi9wYWludF9ib3JkZXJcIjtcbmltcG9ydCB7cGxhY2Vob2xkZXJ9IGZyb20gXCIuL3BsYWNlaG9sZGVyXCI7XG5leHBvcnQgbGV0IHByZWZhYnM6cHJlZmFicyA9IHtcblx0cGFpbnQ6cGFpbnQsXG5cdHBhaW50X2JvcmRlcjpwYWludF9ib3JkZXIsXG5cdHBsYWNlaG9sZGVyOnBsYWNlaG9sZGVyLFxufSIsImltcG9ydCB7IHJvb20gfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcbmltcG9ydCB7IGdhbWUsIHZpZXdwb3J0IH0gZnJvbSBcIi4uLy4uL3ZhblwiO1xuaW1wb3J0IHsgc3RhdGVfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XG5pbXBvcnQgeyBwYWludGVyX3N0YXRlLGcgfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL3BhaW50X3Jvb20uanNvblwiO1xuaW1wb3J0IHsgcGFpbnQgfSBmcm9tIFwiLi4vb2JqZWN0cy9wYWludFwiO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IGV4ZWNfdHlwZSwgUG9sbF9Nb3VzZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcbmltcG9ydCB7IFRleHQsSFVEIH0gZnJvbSBcIi4uLy4uL2xpYi9odWRcIjtcbmxldCBjZmlnID0gY29uZmlnIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnO1xuXG5cbmNsYXNzIHBhaW50X2h1ZCBleHRlbmRzIEhVRHtcbiAgc2V0VGV4dEVsZW1lbnRzKCk6VGV4dFtde1xuICAgIHJldHVybiBbXG4gICAgICBuZXcgVGV4dCh7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgeDogdmlld3BvcnQud2lkdGggKiAuNSxcbiAgICAgICAgICB5OiB2aWV3cG9ydC5oZWlnaHQgKiA3LzhcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogMzAsXG4gICAgICAgIGZvbnQ6IFwiQWxhdGFcIixcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYWxpZ246XCJjZW50ZXJcIixcbiAgICAgICAgc2NhbGluZzoxXG4gICAgICB9LFxuICAgICAgKCk9PntcbiAgICAgICAgbGV0IHJvb20gPSBnLmdldFJvb20oKSBhcyBwYWludF9yb29tO1xuICAgICAgICByZXR1cm4gYExhc3QgUHJlZGljdGlvbjogJHtyb29tLnN0YXRlLmxhc3RfcHJlZGljdGlvbn1gO1xuICAgICAgfSlcbiAgICBdO1xuICB9XG59XG5cbmludGVyZmFjZSBwYWludF9yb29tX3N0YXRlIHtcbiAgdGltZXI6bnVtYmVyLFxuICBoYXNfc2VudDpib29sZWFuLFxuICBsYXN0X3ByZWRpY3Rpb246c3RyaW5nXG59XG5cbmZ1bmN0aW9uIHplcm8yRChyb3dzOm51bWJlciwgY29sczpudW1iZXIpIHtcbiAgdmFyIGFycmF5ID0gW10sIHJvdyA9IFtdO1xuICB3aGlsZSAoY29scy0tKSByb3cucHVzaCgwKTtcbiAgd2hpbGUgKHJvd3MtLSkgYXJyYXkucHVzaChyb3cuc2xpY2UoKSk7XG4gIHJldHVybiBhcnJheTtcbn1cblxuaW50ZXJmYWNlIG51bXtcbiAgY29yZHM6bnVtYmVyW11bXVxuICBhdmVyYWdlX3g6bnVtYmVyLFxuICBhdmVyYWdlX3k6bnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBwYWludF9yb29tIGV4dGVuZHMgcm9vbTxwYWludF9yb29tX3N0YXRlPntcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9wYWludC5wbmdcIjtcbiAgZ2FtZTogZ2FtZTxwYWludGVyX3N0YXRlPjtcbiAgcmVuZGVyID0gZmFsc2U7XG4gIHN0YXRlOnBhaW50X3Jvb21fc3RhdGU7XG4gIHdhaXRfdGltZTpudW1iZXIgPSAxNTAwO1xuICBjb25zdHJ1Y3RvcihnYW1lOiBnYW1lPHBhaW50ZXJfc3RhdGU+KSB7XG4gICAgc3VwZXIoZ2FtZSwgY2ZpZyk7XG4gICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMucHVzaChuZXcgQ2FtZXJhKHtcbiAgICAgIHg6Z2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLzIgKiAxMCxcbiAgICAgIHk6Z2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLzIgKiAxMCxcbiAgICAgIGRpbWVuc2lvbnM6dmlld3BvcnQsXG4gICAgICBzY2FsaW5nOjEuNSxcbiAgICAgIGRlYnVnOmZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICB4OjAsXG4gICAgICB5OjAsXG4gICAgICBoZWlnaHQ6MSxcbiAgICAgIHdpZHRoOjFcbiAgICB9LFxuICAgIG5ldyBwYWludF9odWQoKVxuICAgICkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lcjowLFxuICAgICAgaGFzX3NlbnQ6dHJ1ZSxcbiAgICAgIGxhc3RfcHJlZGljdGlvbjpcIlwiXG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZFBpeGVscyh0aHJlc2hvbGQ6bnVtYmVyLGNvcmQ6W251bWJlcixudW1iZXJdLGFycjpudW1iZXJbXVtdLHZpc2l0ZWQ6bnVtYmVyW11bXSk6bnVtYmVyW11bXXtcbiAgICBpZihhcnJbY29yZFsxXV1bY29yZFswXV0gPT0gMCkgcmV0dXJuIFtdO1xuICAgIGxldCBwaXhlbHM6bnVtYmVyW11bXSA9IFtjb3JkXTtcbiAgICB2aXNpdGVkW2NvcmRbMV1dW2NvcmRbMF1dID0gMTtcbiAgICBmb3IobGV0IGEgPSAtdGhyZXNob2xkO2EgPCB0aHJlc2hvbGQ7YSsrKXtcbiAgICAgIGZvcihsZXQgYiA9IC10aHJlc2hvbGQ7IGIgPCB0aHJlc2hvbGQ7YisrKXtcbiAgICAgICAgaWYoYSAhPSAwIHx8IGIgIT0gMCl7XG4gICAgICAgICAgcGl4ZWxzID0gWy4uLnBpeGVscywuLi50aGlzLmNvbm5lY3RlZFBpeGVscyh0aHJlc2hvbGQsW2NvcmRbMF0gKyBhLCBjb3JkWzFdICsgYl0sYXJyLHZpc2l0ZWQpXSAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBpeGVscztcbiAgfVxuICBhc3luYyBzZW5kVGVuc29yKCl7XG4gICAgbGV0IGdldFkgPSAoYTpudW1iZXIpID0+IHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoIC0gMSAtIGE7XG4gICAgbGV0IHRlbnNvcjpudW1iZXJbXVtdID0gemVybzJEKHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoKTtcbiAgICBsZXQgdmlzaXRlZDpudW1iZXJbXVtdID0gemVybzJEKHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoKTtcbiAgICBsZXQgbnVtX2NvbnRhaW5lcjpudW1bXSA9IFtdO1xuICAgIGxldCBjdXJyZW50X251bTpudW1iZXJbXVtdID0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHRocmVzaG9sZCA9IDM7XG5cbiAgICBcbiAgICBsZXQgdGhyZXNob2xkZXIgPSAoYjpudW1iZXIsYTpudW1iZXIpPT4ge1xuICAgICAgZm9yKGxldCB5X3RocmVzaCA9IC0gdGhyZXNob2xkOyB5X3RocmVzaCA8IHRocmVzaG9sZDsgeV90aHJlc2grKyl7XG4gICAgICAgIGZvcihsZXQgeF90aHJlc2ggPSAtdGhyZXNob2xkOyB4X3RocmVzaCA8IHRocmVzaG9sZDsgeF90aHJlc2grKyl7XG5cbiAgICAgICAgICAgIGlmKGIgKyB5X3RocmVzaCA+PSAwICYmIGIgKyB5X3RocmVzaCA8IHNpZGVfbGVuZ3RoICYmIGEgKyB4X3RocmVzaCA+PSAwICYmIGEgKyB4X3RocmVzaCA8IHNpZGVfbGVuZ3RoKXtcbiAgICAgICAgICAgICAgaWYodGVuc29yW2IreV90aHJlc2hdW2EreF90aHJlc2hdID09PSAxICYmIHZpc2l0ZWRbYit5X3RocmVzaF1bYSt4X3RocmVzaF0gPT09IDApe1xuICAgICAgICAgICAgICAgIHZpc2l0ZWRbYit5X3RocmVzaF1bYSt4X3RocmVzaF0gPSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfbnVtLnB1c2goW2IreV90aHJlc2gsYSt4X3RocmVzaF0pO1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZGVyKGIreV90aHJlc2gsYSt4X3RocmVzaClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub2JqZWN0cy5maWx0ZXIoKG8pPT5vLnRhZ3NbMF0gPT0gXCJwYWludFwiKS5mb3JFYWNoKChvKT0+e1xuICAgICAgbGV0IHBvcyA9IG8uc3RhdGUucG9zaXRpb247XG4gICAgICB0ZW5zb3JbZ2V0WShwb3MueS8xMCldW3Bvcy54LzEwXSA9IDE7XG4gICAgfSlcbiAgICBsZXQgc2lkZV9sZW5ndGggPSB0aGlzLmdhbWUuc3RhdGUuZ2xvYmFscy5zaWRlX2xlbmd0aDtcbiAgICBmb3IobGV0IGEgPSBzaWRlX2xlbmd0aCAtIDE7YSA+PSAwOyBhLS0pe1xuICAgICAgZm9yKGxldCBiID0gMDtiIDwgc2lkZV9sZW5ndGg7YisrKXtcbiAgICAgICAgaWYodGVuc29yW2FdW2JdID09PSAxICYmIHZpc2l0ZWRbYV1bYl0gPT09IDApe1xuICAgICAgICAgIHZpc2l0ZWRbYV1bYl0gPSAxO1xuICAgICAgICAgIGN1cnJlbnRfbnVtID0gW107XG4gICAgICAgICAgdGhyZXNob2xkZXIoYSxiKTtcbiAgICAgICAgICBsZXQgeF9zdW0gPSAwLHlfc3VtID0gMDtcbiAgICAgICAgICBmb3IobGV0IGMgb2YgY3VycmVudF9udW0pe1xuICAgICAgICAgICAgeV9zdW0gKz0gY1swXTtcbiAgICAgICAgICAgIHhfc3VtICs9IGNbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bV9jb250YWluZXIucHVzaCh7XG4gICAgICAgICAgICBjb3JkczpjdXJyZW50X251bSxcbiAgICAgICAgICAgIGF2ZXJhZ2VfeDp4X3N1bS9jdXJyZW50X251bS5sZW5ndGgsXG4gICAgICAgICAgICBhdmVyYWdlX3k6eV9zdW0vY3VycmVudF9udW0ubGVuZ3RoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbnVtX2NvbnRhaW5lci5zb3J0KChhLGIpPT57XG4gICAgICByZXR1cm4gKGEuYXZlcmFnZV94IC0gYi5hdmVyYWdlX3gpXG4gICAgfSk7XG4gICAgbGV0IGZpbmFsX251bSA9IFwiXCI7XG4gICAgZm9yKGxldCBudW0gb2YgbnVtX2NvbnRhaW5lcil7XG4gICAgICBsZXQgYXJyX24gPSB6ZXJvMkQoc2lkZV9sZW5ndGgsc2lkZV9sZW5ndGgpO1xuICAgICAgbGV0IHhfb2Zmc2V0ID0gKHNpZGVfbGVuZ3RoLzIgLSBNYXRoLnJvdW5kKG51bS5hdmVyYWdlX3gpKTtcbiAgICAgIGxldCB5X29mZnNldCA9IChzaWRlX2xlbmd0aC8yIC0gTWF0aC5yb3VuZChudW0uYXZlcmFnZV95KSk7XG4gICAgICBudW0uY29yZHMgPSBudW0uY29yZHMubWFwKChhKT0+W2FbMF0gKyB5X29mZnNldCxhWzFdICsgeF9vZmZzZXRdKTtcbiAgICAgIGZvcihsZXQgYyBvZiBudW0uY29yZHMpe1xuICAgICAgICBhcnJfbltjWzBdXVtjWzFdXSA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgdG9fc2VuZCA9IG51bS5jb3Jkcy5tYXAoKG8pPT5gWyR7b1swXX0sJHtvWzFdfV1gKS5qb2luKFwiLFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGBhdmVyYWdlIHg6JHtudW0uYXZlcmFnZV94fSB8IGF2ZXJhZ2UgeToke251bS5hdmVyYWdlX3l9YCk7XG4gICAgICBjb25zb2xlLmxvZyhhcnJfbi5tYXAoKHg6bnVtYmVyW10pPT57XG4gICAgICAgIHJldHVybiB4Lm1hcCgoeTpudW1iZXIpPT57XG4gICAgICAgICAgaWYoeSA9PSAwKSByZXR1cm4gXCLilq9cIjtcbiAgICAgICAgICByZXR1cm4gXCLilq5cIlxuICAgICAgICB9KS5qb2luKFwiXCIpXG4gICAgICB9KS5qb2luKFwiXFxuXCIpKTtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChcIi9ldmFsdWF0ZVwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgIGJvZHk6IGB7XCJpbnB1dHRlZFwiOlske3RvX3NlbmR9XX1gXG4gICAgICB9KVxuICAgICAgbGV0IGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgXG4gICAgICBmaW5hbF9udW0gPSBmaW5hbF9udW0gKyBhO1xuICAgICAgXG4gICAgfVxuICAgIHRoaXMuc3RhdGUubGFzdF9wcmVkaWN0aW9uID0gZmluYWxfbnVtO1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwoKSA9PiB7XG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcbiAgICAgIGlmKG1vdXNlICYmIG1vdXNlLnggPj0gMCAmJiBtb3VzZS54IDw9IDI3MCAmJiBtb3VzZS55ID49IDAgJiYgbW91c2UueSA8PSAyNzApe1xuICAgICAgICBsZXQgZ3JpZF9tb3VzZSA9IHtcbiAgICAgICAgICB4Ok1hdGguZmxvb3IobW91c2UueC8xMCkgKiAxMCxcbiAgICAgICAgICB5Ok1hdGguZmxvb3IobW91c2UueS8xMCkgKiAxMFxuICAgICAgICB9XG4gICAgICAgIGxldCBwaXhlbHMgPSB0aGlzLmNoZWNrT2JqZWN0c1BvaW50SW5jbHVzaXZlKGdyaWRfbW91c2UsW1wicGFpbnRcIl0pIGFzIHBhaW50W107XG4gICAgICAgIGlmKCFwaXhlbHNbMF0pe1xuICAgICAgICAgIHRoaXMuYWRkSXRlbShuZXcgcGFpbnQoe1xuICAgICAgICAgICAgcG9zaXRpb246Z3JpZF9tb3VzZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OntcbiAgICAgICAgICAgICAgeDowLFxuICAgICAgICAgICAgICB5OjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3RhdGlvbjowLFxuICAgICAgICAgICAgc2NhbGluZzp7XG4gICAgICAgICAgICAgIGhlaWdodDoxLFxuICAgICAgICAgICAgICB3aWR0aDoxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHRoaXMuc3RhdGUudGltZXIgPSAwO1xuICAgICAgICAgIHRoaXMuc3RhdGUuaGFzX3NlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfSwxKVxuICB9XG4gIHJlZ2lzdGVyUGFydGljbGVzKCkge1xuXG4gIH1cbiAgc3RhdGVmKGRlbHRhX3RpbWU6IG51bWJlcikge1xuICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcbiAgICB0aGlzLnN0YXRlLnRpbWVyICs9IGRlbHRhX3RpbWU7XG4gICAgaWYodGhpcy5zdGF0ZS50aW1lciA+IHRoaXMud2FpdF90aW1lICYmICF0aGlzLnN0YXRlLmhhc19zZW50KXtcbiAgICAgIHRoaXMuc2VuZFRlbnNvcigpO1xuICAgICAgbGV0IG9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChvKT0+by50YWdzWzBdPT1cInBhaW50XCIpO1xuICAgICAgb2JqZWN0cy5mb3JFYWNoKChvKT0+by5kZWxldGUoKSk7XG4gICAgICB0aGlzLnN0YXRlLmhhc19zZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuICAgIGltcG9ydCB7Z2FtZSwgdmlld3BvcnR9IGZyb20gXCIuLi8uLi92YW5cIjtcbiAgICBpbXBvcnQge3N0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XG4gICAgaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL3BsYWNlaG9sZGVyLmpzb25cIjtcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XG4gICAgaW50ZXJmYWNlIHBsYWNlaG9sZGVyX3N0YXRle1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBleHBvcnQgY2xhc3MgcGxhY2Vob2xkZXIgZXh0ZW5kcyByb29tPHBsYWNlaG9sZGVyX3N0YXRlPntcbiAgICAgIGJhY2tncm91bmRfdXJsPVwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMucHVzaChuZXcgQ2FtZXJhKHtcbiAgICAgICAgICB4OjAsXG4gICAgICAgICAgeTowLFxuICAgICAgICAgIGRpbWVuc2lvbnM6dmlld3BvcnQsXG4gICAgICAgICAgc2NhbGluZzoxLFxuICAgICAgICAgIGRlYnVnOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OjAsXG4gICAgICAgICAgeTowLFxuICAgICAgICAgIGhlaWdodDoxLFxuICAgICAgICAgIHdpZHRoOjFcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xuICAgIFxuICAgICAgfVxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcbiAgICAgICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xuICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICAiLCJcbmludGVyZmFjZSByb29tX2RpciB7XG4gIFtpbmRleDpzdHJpbmddOmFueVxufVxuaW1wb3J0IHtwYWludF9yb29tfSBmcm9tIFwiLi9wYWludF9yb29tXCI7XG5pbXBvcnQge3BsYWNlaG9sZGVyfSBmcm9tIFwiLi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGxldCByb29tczpyb29tX2RpciA9IHtcblx0cGFpbnRfcm9vbTpwYWludF9yb29tLFxuXHRwbGFjZWhvbGRlcjpwbGFjZWhvbGRlcixcbn0iLCJpbXBvcnQgeyByb290X3BhdGgsIHBhdGggfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5pbXBvcnQgeyBERUJVRyB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmludGVyZmFjZSBzb3VuZF9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IEhUTUxBdWRpb0VsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGF1ZGlvIHtcclxuICBzb3VuZHM6IHNvdW5kX3N0b3JhZ2UgPSB7fTtcclxuICBhZGQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgbGV0IHAgPSB1cmw7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgcCA9IHBhdGguam9pbihyb290X3BhdGgsIHVybCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvdW5kc1tuYW1lXSA9IG5ldyBBdWRpbyhwKTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZCgpIHtcclxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zb3VuZHMpO1xyXG4gICAgbGV0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmRzW2tleV0uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuICh4KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpIHtcclxuICAgIGxldCBhID0gdGhpcy5zb3VuZHNbbmFtZV07XHJcbiAgICBhLnBhdXNlKClcclxuICAgIGEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYS52b2x1bWUgPSB2b2x1bWU7XHJcbiAgICBhLnBsYXkoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQge29iaixnZXRJZH0gZnJvbSBcIi4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHtvYmpfc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtkZWVwfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbGxpc2lvbl9ib3h7XHJcbiAgeDpudW1iZXI7XHJcbiAgeTpudW1iZXI7XHJcbiAgd2lkdGg6bnVtYmVyO1xyXG4gIGhlaWdodDpudW1iZXI7XHJcbn1cclxuXHJcbmVudW0gZGlyZWN0aW9ue1xyXG4gIGxlZnQsXHJcbiAgcmlnaHQsXHJcbiAgdXAsXHJcbiAgZG93blxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5jb21wYXNzaW5nQm94KG9iamVjdHM6b2JqW10pOmNvbGxpc2lvbl9ib3h7XHJcbiAgbGV0IGZpcnN0X29iamVjdCA9IG9iamVjdHNbMF0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICBsZXQgbWF4X3kgPSBmaXJzdF9vYmplY3QudG9wX3JpZ2h0Lnk7XHJcbiAgbGV0IG1heF94ID0gZmlyc3Rfb2JqZWN0LnRvcF9yaWdodC54O1xyXG4gIGxldCBtaW5feSA9IGZpcnN0X29iamVjdC5ib3R0b21fbGVmdC55O1xyXG4gIGxldCBtaW5feCA9IGZpcnN0X29iamVjdC5ib3R0b21fbGVmdC54O1xyXG4gIGZvcihsZXQgYSA9IDE7IGEgPCBvYmplY3RzLmxlbmd0aDthKyspe1xyXG4gICAgbGV0IG9iamVjdCA9IG9iamVjdHNbYV0uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGlmKG9iamVjdC50b3BfcmlnaHQueSA+IG1heF95KVxyXG4gICAgICBtYXhfeSA9IG9iamVjdC50b3BfcmlnaHQueTtcclxuICAgIGlmKG9iamVjdC50b3BfcmlnaHQueCA+IG1heF94KVxyXG4gICAgICBtYXhfeCA9IG9iamVjdC50b3BfcmlnaHQueDtcclxuICAgIGlmKG9iamVjdC5ib3R0b21fbGVmdC55IDwgbWluX3kpXHJcbiAgICAgIG1pbl95ID0gb2JqZWN0LmJvdHRvbV9sZWZ0Lnk7XHJcbiAgICBpZihvYmplY3QuYm90dG9tX2xlZnQueCA8IG1pbl94KVxyXG4gICAgICBtaW5feCA9IG9iamVjdC5ib3R0b21fbGVmdC54O1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgeDptaW5feCArIChtYXhfeCAtIG1pbl94KS8yLFxyXG4gICAgeTptaW5feSArIChtYXhfeSAtIG1pbl95KS8yLFxyXG4gICAgaGVpZ2h0Om1heF95IC0gbWluX3ksXHJcbiAgICB3aWR0aDptYXhfeCAtIG1pbl94XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX29iamVjdHMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpvYmpbXXtcclxuICByZXR1cm4gb2Jqcy5maWx0ZXIoKGEpPT4oIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCxvYmpzOm9ialtdLGV4ZW1wdGlvbjpzdHJpbmdbXSA9IFtdKTpBcnJheTxvYmo+e1xyXG4gIGxldCBtYXRjaGVkID0gW107XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoIWV4ZW1wdGlvbi5zb21lKChiKT0+YS50YWdzLmluZGV4T2YoYikgIT09IC0xKSAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICBtYXRjaGVkLnB1c2goYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtYXRjaGVkXHJcbn1cclxuLy9DaGVja3MgdXAgdG8gdGhlIGZpcnN0IGNvbGxpc2lvblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LCBvYmpzOiBvYmpbXSwgZXhlbXB0aW9uOnN0cmluZykge1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKGEuaWQgIT09IGV4ZW1wdGlvbiAmJiBhLmNvbGxpc2lvbiAmJiBhLmNvbGxpZGVzV2l0aEJveChjKSkge1xyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlbG9jaXR5X21heCh2ZWxvY2l0eTpudW1iZXIsYm94OmNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSwgZXhlbXB0aW9uOnN0cmluZyxkaXI6ZGlyZWN0aW9uKXtcclxuICBsZXQgY29sbGlzaW9uID0gY2hlY2tfY29sbGlzaW9ucyhib3gsIG9ianMsIGV4ZW1wdGlvbik7XHJcbiAgaWYoY29sbGlzaW9uID09IG51bGwpe1xyXG4gICAgcmV0dXJuIHZlbG9jaXR5O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGNvbGxpZGVyID0gY29sbGlzaW9uO1xyXG4gICAgbGV0IG9yaWdpbiA9IGdldElkKG9ianMsZXhlbXB0aW9uKTtcclxuICAgIGxldCBvcmlnX3N0ID0gb3JpZ2luLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBjb2xsaWRlcl9zdCA9IGNvbGxpZGVyLnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBvcmlnX2NvbCA9IG9yaWdpbi5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBsZXQgY29sbGlkZXJfY29sID0gY29sbGlkZXIuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgaWYoZGlyID09IGRpcmVjdGlvbi5sZWZ0KXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC54IC0gb3JpZ19jb2wud2lkdGgvMikgLSAoY29sbGlkZXJfY29sLnggKyBjb2xsaWRlcl9jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24ucmlnaHQpe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC54IC0gY29sbGlkZXJfY29sLndpZHRoLzIpIC0gKG9yaWdfY29sLnggKyBvcmlnX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5kb3duKXtcclxuICAgICAgcmV0dXJuIChvcmlnX2NvbC55IC0gb3JpZ19jb2wuaGVpZ2h0LzIpIC0gKGNvbGxpZGVyX2NvbC55ICsgY29sbGlkZXJfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi51cCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnkgLSBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpIC0gKG9yaWdfY29sLnkgKyBvcmlnX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVsb2NpdHlDb2xsaXNpb25DaGVjayhvYmplY3Q6b2JqLGxpc3Q6b2JqW10pIHtcclxuICBsaXN0ID0gWy4uLmxpc3RdO1xyXG4gIGxldCBvYiA9IG9iamVjdDtcclxuICBsZXQgc3QgPSBvYmplY3Quc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gIGxldCB4X3ZlbCA9IHN0LnZlbG9jaXR5Lng7XHJcbiAgbGV0IHlfdmVsID0gc3QudmVsb2NpdHkueTtcclxuICBpZighb2IuY29sbGlzaW9uKXtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi54ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS54O1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnkgKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lnk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCBjb2xfYm94ID0gb2IuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gIGlmICh4X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCArIGNvbF9ib3gud2lkdGgvMiArIHhfdmVsLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5yaWdodCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh4X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IHhfdmVsLzIgKyBjb2xfYm94LnggLSBjb2xfYm94LndpZHRoLzIsXHJcbiAgICAgIHk6IGNvbF9ib3gueSxcclxuICAgICAgd2lkdGg6IC0xICogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ubGVmdCk7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueCArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS54ID0gMDsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh5X3ZlbCA+IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogY29sX2JveC55ICsgY29sX2JveC5oZWlnaHQvMiArIHlfdmVsLzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnVwKTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIGlmICh5X3ZlbCA8IDApIHtcclxuICAgIGxldCBib3ggPSB7XHJcbiAgICAgIHg6IGNvbF9ib3gueCxcclxuICAgICAgeTogeV92ZWwvMiArIGNvbF9ib3gueSAtIGNvbF9ib3guaGVpZ2h0LzIsXHJcbiAgICAgIHdpZHRoOiBjb2xfYm94LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IC0xICogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24uZG93bik7XHJcbiAgICBpZih2ZWwgPCAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4uL2dhbWUvbWFpblwiO1xyXG5pbXBvcnQge2dhbWUsUEFVU0VELERFQlVHLCBHZXRTY3JlZW5EaW1lbnNpb25zLEdldFZpZXdwb3J0RGltZW5zaW9uc30gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7VmVjdG9yfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlYnVnX3N0YXRlfSBmcm9tIFwiLi9kZWJ1Z1wiO1xyXG5cclxuaW50ZXJmYWNlIG1vdXNlUG9ze1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGxhc3Q6e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGNvbnRyb2xfZnVuY3tcclxuICAoKTp2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBtb3VzZUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8W2NvbnRyb2xfZnVuYyxvYmpdPlxyXG59XHJcblxyXG5pbnRlcmZhY2Uga2V5QmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxjb250cm9sX2Z1bmM+XHJcbn1cclxubGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9jbGlja19oYW5kbGVyKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xyXG4gICAgXHJcbiAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XHJcbiAgICBpZighbW91c2Upe1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBib3g6Y29sbGlzaW9uX2JveCA9IHtcclxuICAgICAgeDptb3VzZS54LFxyXG4gICAgICB5Om1vdXNlLnksXHJcbiAgICAgIGhlaWdodDoxLFxyXG4gICAgICB3aWR0aDoxXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gICAgZm9yKGxldCBhID0gMDthIDwgZC5sZW5ndGg7YSsrKXtcclxuICAgICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgICAgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBcIm1vdXNlMVwiICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIGlmKHNlbGVjdGVkLm9iaiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIGlmKHNlbGVjdGVkLm9iai5jb2xsaWRlc1dpdGhCb3goYm94KSl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9KVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiAgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxufSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2UpIHtcclxuICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZWRvd25cIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5pbnRlcmZhY2UgaGVsZF9rZXlze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGxldCBoZWxkX2tleXM6aGVsZF9rZXlzID0ge307XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsKGUpPT57XHJcbiAgbGV0IGNvZGU6c3RyaW5nO1xyXG5cclxuICBpZihlLmRlbHRhWSA8IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsdXBcIjtcclxuICB9XHJcbiAgZWxzZSBpZihlLmRlbHRhWSA+IDApe1xyXG4gICAgY29kZSA9IFwic2Nyb2xsZG93blwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIFxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IGNvZGUpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBoZWxkX2tleXNbZS5jb2RlXSA9IHRydWU7XHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgZm9yKGxldCBjIG9mIHJlcGVhdF9iaW5kcyl7XHJcbiAgICAgICAgICBpZihjLmJpbmQuaWQgPT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICAgICBjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLmtleWJvYXJkICYmIHNlbGVjdGVkLmtleSA9PT0gZS5jb2RlICYmIHNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlICl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxubGV0IHRyYWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICB2YXIgcmVjdCA9IChlLnRhcmdldCBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgO1xyXG4gIC8vY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgbGFzdF94ID0geDtcclxuICBsYXN0X3kgPSB5O1xyXG4gIHggPSBlLmNsaWVudFg7IC8veCBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcbiAgeSA9IGUuY2xpZW50WTsgIC8veSBwb3NpdGlvbiB3aXRoaW4gdGhlIGVsZW1lbnQuXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGVudW0gYnR5cGV7XHJcbiAgbW91c2UsXHJcbiAga2V5Ym9hcmRcclxufVxyXG5cclxuaW50ZXJmYWNlIGJpbmR7XHJcbiAga2V5OnN0cmluZyxcclxuICB0eXBlOmJ0eXBlLFxyXG4gIGlkOm51bWJlcixcclxuICBmdW5jdGlvbjpjb250cm9sX2Z1bmMsXHJcbiAgZXhlY3V0ZTpleGVjX3R5cGUsXHJcbiAgcmVwZWF0X3RpbWVyPzpyZXBlYXRfYmluZCxcclxuICBvYmo/Om9iaixcclxuICBleGVjdXRlZD86Ym9vbGVhbixcclxuICBpbnRlcnZhbD86bnVtYmVyLFxyXG4gIGNhbWVyYT86Q2FtZXJhXHJcbn1cclxuXHJcbmludGVyZmFjZSByZXBlYXRfYmluZHtcclxuICBiaW5kOmJpbmQsXHJcbiAgdGltZXI6bnVtYmVyLFxyXG4gIGludGVydmFsOm51bWJlcixcclxuICBhY3RpdmU6Ym9vbGVhblxyXG59XHJcblxyXG5sZXQgeCA9IDA7XHJcbmxldCB5ID0gMDtcclxubGV0IGxhc3RfeCA9IDA7XHJcbmxldCBsYXN0X3kgPSAwO1xyXG5sZXQgYmluZHM6a2V5QmluZHMgPSB7fTtcclxuZXhwb3J0IGxldCBkZWJ1Z19iaW5kczpiaW5kW10gPSBbXTtcclxubGV0IG1vdXNlQmluZHM6bW91c2VCaW5kcyA9IHt9O1xyXG5sZXQgYmluZF9jb3VudCA9IDA7XHJcblxyXG5sZXQgYWxsX2JpbmRzOkFycmF5PGJpbmQ+ID0gW11cclxuXHJcbmxldCByZXBlYXRfYmluZHM6QXJyYXk8cmVwZWF0X2JpbmQ+ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9sbF9Nb3VzZShjYW1lcmE6Q2FtZXJhLGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCA9IGcuc3RhdGUuY2FudmFzKTpWZWN0b3J7XHJcbiAgbGV0IGhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgd3JhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoKS9HZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aDtcclxuICBsZXQgdnJhdGlvID0gcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIGxldCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgaWYoeCA+IGJvdW5kcy5sZWZ0ICYmIHggPCBib3VuZHMucmlnaHQgJiYgeSA8IGJvdW5kcy5ib3R0b20gJiYgeSA+IGJvdW5kcy50b3Ape1xyXG4gICAgXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgeDogKCh4IC0gYm91bmRzLmxlZnQgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueCkvd3JhdGlvL2NhbWVyYS5zdGF0ZS5zY2FsaW5nICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yKSAsXHJcbiAgICAgIHk6ICgoaGVpZ2h0IC0gKHktYm91bmRzLnRvcCkvdnJhdGlvKS9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0L2NhbWVyYS5zdGF0ZS5zY2FsaW5nLzIgLSBjYW1lcmEuc3RhdGUudmlld3BvcnQueSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeGVjdXRlUmVwZWF0QmluZHMoYjpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgaWYoYS5iaW5kLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQgJiYgYS50aW1lciA9PSAwICYmIGEuYWN0aXZlKXtcclxuICAgICAgYS5iaW5kLmZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZihhLmFjdGl2ZSB8fCAoIWEuYWN0aXZlICYmIGEudGltZXIgIT0gMCkpXHJcbiAgICAgIGEudGltZXIgKz0gYjtcclxuICAgIGlmKGEudGltZXIgPiBhLmludGVydmFsKXtcclxuICAgICAgYS50aW1lciA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVuYmluZChiaW5kX2lkOm51bWJlcil7XHJcbiAgZm9yKGxldCBhID0gMDthIDwgYWxsX2JpbmRzLmxlbmd0aDsgYSsrKXtcclxuICAgIGlmKGFsbF9iaW5kc1thXS5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgYWxsX2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgZm9yKGxldCBhID0gMDthIDwgcmVwZWF0X2JpbmRzLmxlbmd0aDsgYSsrKXtcclxuICAgIGlmKHJlcGVhdF9iaW5kc1thXS5iaW5kLmlkID09IGJpbmRfaWQpe1xyXG4gICAgICByZXBlYXRfYmluZHMuc3BsaWNlKGEsMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gZXhlY190eXBle1xyXG4gIG9uY2UsXHJcbiAgcmVwZWF0XHJcbn1cclxuXHJcbmxldCBpZCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBCaW5kKGtleW5hbWU6c3RyaW5nLGZ1bmM6Y29udHJvbF9mdW5jLHR5cGU6ZXhlY190eXBlLGludGVydmFsOm51bWJlcixvYmplY3Q/Om9iaik6bnVtYmVye1xyXG4gIGlmKGtleW5hbWUuc2xpY2UoMCw1KSA9PT0gXCJtb3VzZVwiIHx8IGtleW5hbWUuc2xpY2UoMCw2KSA9PT0gXCJzY3JvbGxcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7IERFQlVHLCBQQVVTRUQsIHNldFBhdXNlZCwgdmlld3BvcnQgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmV4cG9ydCBsZXQgcGF0aDphbnk7IFxyXG5sZXQgZnM6YW55O1xyXG5sZXQgaXBjUmVuZGVyZXI6YW55O1xyXG5pbXBvcnQgeyBwcmVmYWJzIH0gZnJvbSBcIi4uL2dhbWUvb2JqZWN0cy9wcmVmYWJzXCI7XHJcbmV4cG9ydCBsZXQgcHJvamVjdF9wYXRoID0gXCJcIjtcclxuZXhwb3J0IGxldCByb290X3BhdGggPSBcIlwiO1xyXG5pZihERUJVRyl7XHJcbiBwYXRoID0gIHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxuIGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuIGlwY1JlbmRlcmVyICA9IHdpbmRvdy5yZXF1aXJlKFwiZWxlY3Ryb25cIikuaXBjUmVuZGVyZXI7XHJcbiBwcm9qZWN0X3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygncGF0aC1yZXF1ZXN0JywgJ3BpbmcnKVswXVxyXG4gcm9vdF9wYXRoID0gcGF0aC5qb2luKHByb2plY3RfcGF0aCxcIi4uXCIpXHJcbn1cclxuaW1wb3J0IHsgb2JqLCBwYXJhbXMgfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBnIH0gZnJvbSBcIi4uL2dhbWUvbWFpblwiO1xyXG5pbXBvcnQgeyByb29tcyBhcyByb29tX2xpc3QgfSBmcm9tIFwiLi4vZ2FtZS9yb29tcy9yb29tc1wiO1xyXG5pbXBvcnQgeyBCaW5kLCBidHlwZSwgUG9sbF9Nb3VzZSwgZXhlY190eXBlLCBoZWxkX2tleXMsIGRlYnVnX2JpbmRzIH0gZnJvbSBcIi4uL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBIVUQsIFRleHQgfSBmcm9tIFwiLi4vbGliL2h1ZFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vbGliL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IsIGRpbWVuc2lvbnN9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z19odWQgZXh0ZW5kcyBIVUQge1xyXG4gIHNldFRleHRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIG5ldyBUZXh0KHtcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgeDogMTAsXHJcbiAgICAgICAgICB5OiB2aWV3cG9ydC5oZWlnaHQgLSAyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZTogMjIsXHJcbiAgICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIHNjYWxpbmc6IDFcclxuICAgICAgfSwgKCkgPT4gZGVidWdfc3RhdGUucmVuZGVyX2RlbHRhX3RpbWUgPiAwID8gTWF0aC5yb3VuZCgxMDAwL2RlYnVnX3N0YXRlLnJlbmRlcl9kZWx0YV90aW1lKSArIFwiXCIgOiBcIlwiKSxcclxuICAgICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFg6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDEwLFxyXG4gICAgICAgIHk6IDMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4gYFk6JHtkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDApfWApLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHZpZXdwb3J0LndpZHRoIC0gMTAsXHJcbiAgICAgICAgeTogMzJcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSxkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICBpZihtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuIGAke21vdXNlLngudG9GaXhlZCgwKX06WGBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDpYYFxyXG4gICAgfSksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogdmlld3BvcnQud2lkdGggLSAxMCxcclxuICAgICAgICB5OiAxMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAyMixcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgIGlmKG1vdXNlKXtcclxuICAgICAgICByZXR1cm4gYCR7bW91c2UueS50b0ZpeGVkKDApfTpZYFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgOllgXHJcbiAgICB9KSxcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfc3RhdGVmKHQ6IG51bWJlcikge1xyXG4gIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gIGlmIChkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkKSB7XHJcbiAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuaHVkLnN0YXRlZih0KTtcclxuICB9XHJcbiAgaWYgKCFQQVVTRUQpIHtcclxuICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKTtcclxuICB9XHJcbiAgaWYobW91c2Upe1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgaWYgKFBBVVNFRCAmJiBoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgIGxldCBkaXN0ID0ge1xyXG4gICAgICAgICAgeDogTWF0aC5hYnMobW91c2UueCAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24ueCksXHJcbiAgICAgICAgICB5OiBNYXRoLmFicyhtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5wb3NpdGlvbi55KVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcud2lkdGggPSAoMiAqIGRpc3QueCkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LndpZHRoO1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSAoMiAqIGRpc3QueSkgLyBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgc3QgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlIGFzIHVua25vd24gYXMgb2JqX3N0YXRlO1xyXG4gICAgICAgIHN0LnBvc2l0aW9uLnggPSBtb3VzZS54IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueCxcclxuICAgICAgICAgIHN0LnBvc2l0aW9uLnkgPSBtb3VzZS55IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoUEFVU0VEICYmIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiA9IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuYW5nbGVUb3dhcmRzUG9pbnQobW91c2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbikge1xyXG4gICAgICBsZXQgZGlmZl95ID0gbW91c2UueSAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi55O1xyXG4gICAgICBsZXQgZGlmZl94ID0gbW91c2UueCAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi54O1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgLTEgKiBkaWZmX3g7XHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKyAtMSAqIGRpZmZfeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHJvb21fbmFtZSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKSB7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyb29tX25hbWUpKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcInJvb21fbGlzdF9pdGVtXCIpO1xyXG4gICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZy5sb2FkUm9vbVN0cmluZyhyb29tX25hbWUpO1xyXG4gICAgfSlcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcHJvcGVydGllc19lbGVtZW50IHtcclxuICBwb3NfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBwb3NfeTogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeDogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByb3Q6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcmVuZGVyOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNvbGxpc2lvbjogSFRNTElucHV0RWxlbWVudFxyXG59XHJcbmxldCBwcm9wZXJ0aWVzX2VsZW1lbnRzOiBwcm9wZXJ0aWVzX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbmlmIChERUJVRykge1xyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMgPSB7XHJcbiAgICBwb3NfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3hcIikpLFxyXG4gICAgcG9zX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc195XCIpKSxcclxuICAgIHZlbF94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeFwiKSksXHJcbiAgICB2ZWxfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3lcIikpLFxyXG4gICAgcm90OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RcIikpLFxyXG4gICAgc2NhX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV94XCIpKSxcclxuICAgIHNjYV95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeVwiKSksXHJcbiAgICByZW5kZXI6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlclwiKSksXHJcbiAgICBjb2xsaXNpb246ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGxpc2lvblwiKSlcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBpbnB1dHNbYV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aW5wdXRzW2FdKS5mb2N1cygpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgbGV0IGZvY3VzZWQ7XHJcbiAgbGV0IGRlYnVnX3RhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgZGVidWdfdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB4OiBuZXdfdmFsLCB5OiBlbGUuc3RhdGUucG9zaXRpb24ueSB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHg6IGVsZS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBuZXdfdmFsIH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueSA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueSA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucm90LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeShuZXdfdmFsKSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucm90YXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnJvdGF0aW9uID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHdpZHRoOiBuZXdfdmFsLCBoZWlnaHQ6IGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy53aWR0aCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB3aWR0aDogZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgsIGhlaWdodDogbmV3X3ZhbCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnJlbmRlciA9IHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuY29sbGlzaW9uID0gcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZDtcclxuICB9KVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlX2VsZW1lbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmRlbGV0ZSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCkge1xyXG4gIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9ial9uYW1lXCIpLmlubmVySFRNTCA9IGVsZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnJvdGF0aW9uLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZCA9IGVsZS5yZW5kZXI7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5jaGVja2VkID0gZWxlLmNvbGxpc2lvbjtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJhbXNfbGlzdFwiKTtcclxuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZWxlLnBhcmFtcykpIHtcclxuXHJcbiAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaykpO1xyXG4gICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaylcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gKyBcIlwiKTtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgfSlcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbCBhcyB1bmtub3duIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgIHAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgbGlzdC5hcHBlbmQocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0c19saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBpZiAoZy5nZXRSb29tKCkpIHtcclxuICAgIGZvciAobGV0IG9iaiBvZiBnLmdldFJvb20oKS5vYmplY3RzLnNsaWNlKCkucmV2ZXJzZSgpKSB7XHJcbiAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0X2xpc3RfaXRlbVwiKTtcclxuICAgICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID09IDxvYmo+b2JqKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCAoPG9iaj5vYmopLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9IDxvYmo+b2JqO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCkge1xyXG4gIGxldCBwcmVzID0gT2JqZWN0LmtleXMocHJlZmFicykubWFwKGFzeW5jIChvOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhID0gPG9iaj4obmV3IHByZWZhYnNbb10oe1xyXG4gICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIHNjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICB9KSk7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIGEucmVuZGVyID0gdHJ1ZTtcclxuICAgIGxldCBvYmpzID0gYS5jb21iaW5lZE9iamVjdHMoKTtcclxuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKSB7XHJcbiAgICAgIG9iai5VbmJpbmRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlsdGVyZWQgPSBvYmpzLmZpbHRlcigoYSkgPT4gYS5yZW5kZXIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJlZmFiOiBwcmVmYWJzW29dLFxyXG4gICAgICBuYW1lOiBhLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgIHJlbmRlcmVkOiBmaWx0ZXJlZC5tYXAoKG8pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogby5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgcmVuZGVyOiBvLnJlbmRlcmYoMClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICB9KVxyXG4gIGxldCBhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJlcyk7XHJcblxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWZhYl90YXJnZXRcIik7XHJcbiAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcHJlZmFiIG9mIGEpIHtcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByZWZhYi5uYW1lKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVmYWIucmVuZGVyZWRbMF0ucmVuZGVyKSkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRpdi5hcHBlbmQocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlci5zcHJpdGUuc3ByaXRlX3NoZWV0KTtcclxuICAgIH1cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJlZmFiX2JveFwiKTtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICBwb3NpdGlvbjogeyB4OiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCwgeTogZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgfSxcclxuICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgICAgfTtcclxuICAgICAgbGV0IG9iaiA9IDxvYmo+KG5ldyBwcmVmYWIucHJlZmFiKHZhbCkpO1xyXG4gICAgICBhd2FpdCBnLnN0YXRlLmN1cnJlbnRfcm9vbS5hZGRJdGVtcyhvYmouY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0YXJnZXQuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgZGVidWdfYWN0aW9uIHtcclxuICBwcm9wZXJ0eTogc3RyaW5nLFxyXG4gIG9sZDogc3RyaW5nLFxyXG4gIG5ldzogc3RyaW5nLFxyXG4gIGVsZW1lbnQ6IG9ialxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGRlYnVnX3ZhcnMge1xyXG4gIHRhcmdldDogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOiBDYW1lcmEsXHJcbiAgbGFzdF9jbGlja2VkOiBIVE1MRWxlbWVudCxcclxuICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzogZGltZW5zaW9ucyxcclxuICBzZWxlY3RlZF9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQ6IFZlY3RvcixcclxuICByb3RhdGlvbl9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiBvYmosXHJcbiAgbWlkZGxlX3Bvc2l0aW9uOiBWZWN0b3IsXHJcbiAgY2xpY2tfcG9zaXRpb246IFZlY3RvcixcclxuICBhY3Rpb25zX3N0YWNrOiBkZWJ1Z19hY3Rpb25bXSxcclxuICBjdXJyZW50X2FjdGlvbjogZGVidWdfYWN0aW9uLFxyXG4gIHJlbmRlcl9kZWx0YV90aW1lOm51bWJlclxyXG59XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3N0YXRlOiBkZWJ1Z192YXJzO1xyXG5cclxuZXhwb3J0IGxldCBkZWJ1Z19zZXR1cCA9ICgpID0+IHtcclxuICBkZWJ1Z19zdGF0ZSA9IHtcclxuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Z190YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBjYW1lcmE6IG5ldyBDYW1lcmEoe1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICBkaW1lbnNpb25zOiB7XHJcbiAgICAgICAgaGVpZ2h0OiB2aWV3cG9ydC5oZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IHZpZXdwb3J0LndpZHRoXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxpbmc6IDEsXHJcbiAgICAgIGRlYnVnOiB0cnVlXHJcbiAgICB9XHJcbiAgICAgICwge1xyXG4gICAgICAgIHg6IDEsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgfSksXHJcbiAgICBsYXN0X2NsaWNrZWQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OiB1bmRlZmluZWQsXHJcbiAgICByb3RhdGlvbl9lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBtaWRkbGVfcG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgIGNsaWNrX3Bvc2l0aW9uOiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSxcclxuICAgIGFjdGlvbnNfc3RhY2s6IFtdLFxyXG4gICAgcmVuZGVyX2RlbHRhX3RpbWU6MCxcclxuICAgIGN1cnJlbnRfYWN0aW9uOiB1bmRlZmluZWRcclxuICB9XHJcbiAgZGVidWdfc3RhdGUuY2FtZXJhLmh1ZCA9IG5ldyBEZWJ1Z19odWQoKTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTBkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAwLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnX3N0YXRlLmNsaWNrX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICAgICAgbGV0IGFsTF9jbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzUG9pbnQobW91c2UpO1xyXG4gICAgICAgIGxldCBjbGlja2VkO1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsTF9jbGlja2VkLmZpbHRlcigoZWxlKSA9PiBlbGUgPT0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KVxyXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gZmlsdGVyZWRbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjbGlja2VkID0gYWxMX2NsaWNrZWRbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2tlZCxcclxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShjbGlja2VkLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgICBlbGVtZW50OiBjbGlja2VkLFxyXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShjbGlja2VkLnN0YXRlLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICBuZXc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfaW5pdGlhbF9zY2FsaW5nID0gY2xpY2tlZC5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLnggLSBjbGlja2VkLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnkgLSBjbGlja2VkLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UxdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDUsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMWRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDYsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24gPSBtb3VzZTtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UwdXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInNjYWxpbmdcIikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5wcm9wZXJ0eSA9PSBcInBvc2l0aW9uXCIpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KCg8b2JqX3N0YXRlPmRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUpLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMmRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDMsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBpZiAoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCkge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLCBkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsaWNrZWQgPSBnLmdldFJvb20oKS5jaGVja09iamVjdHNQb2ludChtb3VzZSlbMF1cclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbiA9IHtcclxuICAgICAgICAgICAgZWxlbWVudDogZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCxcclxuICAgICAgICAgICAgcHJvcGVydHk6IFwicm90YXRpb25cIixcclxuICAgICAgICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKSxcclxuICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UydXBcIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IDQsXHJcbiAgICBmdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeShkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24pO1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuXHJcbiAgbGV0IGxlZnRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggLSAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgcmlnaHRfZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyAoKDUgKyBzaGlmdF9oZWxkICogNSkgKiAoMSAvIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgfTtcclxuICBsZXQgZG93bl9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuXHJcbiAgICBpZiAoIWhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHVwX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHNjcm9sbF91cCA9ICgpID0+IHtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIiAmJiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA8IDAuMDUpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyAwLjAxO1xyXG4gICAgZWxzZSBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyArIDAuMDU7XHJcbiAgfVxyXG4gIGxldCBzYXZlX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY3RybF9oZWxkID0gaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl07XHJcbiAgICBpZiAoY3RybF9oZWxkICYmIFBBVVNFRCkge1xyXG4gICAgICBsZXQgbmFtZSA9IGcuZ2V0Um9vbSgpLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgIGxldCBhID0gcGF0aC5qb2luKGAke3Byb2plY3RfcGF0aH1gLCBgLi4vcm9vbXMvJHtuYW1lfS5qc29uYCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhLCBKU09OLnN0cmluZ2lmeShnLmdldFJvb20oKS5leHBvcnRTdGF0ZUNvbmZpZygpKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SIFdSSVRJTkcgUk9PTSBJTkZPIEZJTEUuXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGFsZXJ0KFwiU2F2ZWRcIik7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3RybF9oZWxkICYmICFQQVVTRUQpIHtcclxuICAgICAgYWxlcnQoXCJwYXVzZSB0byBlbmFibGUgc2F2aW5nLlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgc2Nyb2xsX2Rvd24gPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPiAwLjA1KVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gMC4wNTtcclxuICAgIGVsc2UgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wMSlcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDE7XHJcbiAgfVxyXG4gIGxldCB1bmRvX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgbGV0IGN1cnI6IGRlYnVnX2FjdGlvbiA9IGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChjdXJyKSB7XHJcbiAgICAgICAgaWYgKGN1cnIucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucG9zaXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJyb3RhdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucm90YXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5zY2FsaW5nID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleUFcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlBXCIsIGxlZnRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogbGVmdF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5RFwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleURcIiwgcmlnaHRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogcmlnaHRfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVdcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlXXCIsIHVwX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVwX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlTXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5U1wiLCBkb3duX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IGRvd25fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiBCaW5kKFwic2Nyb2xsdXBcIiwgc2Nyb2xsX3VwLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX3VwLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbGRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IEJpbmQoXCJzY3JvbGxkb3duXCIsIHNjcm9sbF9kb3duLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX2Rvd24sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5U1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVNcIiwgc2F2ZV9mdW5jLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2F2ZV9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVpcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlaXCIsIHVuZG9fZnVuYywgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVuZG9fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCBwYXVzZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKVxyXG4gIHBhdXNlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldFBhdXNlZCghUEFVU0VEKTtcclxuICAgIGlmIChQQVVTRUQpIHtcclxuICAgICAgcGF1c2VfYnV0dG9uLmlubmVySFRNTCA9IFwiVU5QQVVTRVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdXNlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbGV0IG9ial9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19vYmplY3RfYnV0dG9uXCIpO1xyXG4gIGxldCByb29tX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Jvb21fYnV0dG9uXCIpO1xyXG4gIHJvb21fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJyb29tc1wiKTtcclxuICAgIGlmIChmaWxlX3BhdGgpIHtcclxuICAgICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgICBsZXQgbmV3X25hbWUgPSBmdWxsX25hbWUuc3Vic3RyKDAsIGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi50c1wiKTtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCBgXHJcbiAgICBcclxuICAgIGltcG9ydCB7cm9vbX0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQge2dhbWV9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuICAgIGltcG9ydCB7c3RhdGVfY29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuICAgIGltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi8ke25ld19uYW1lfS5qc29uXCI7XHJcbiAgICBsZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuICAgIGludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZXtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIHJvb208JHtuZXdfbmFtZX1fc3RhdGU+e1xyXG4gICAgICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcclxuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcclxuICAgICAgICBzdXBlcihnYW1lLGNmaWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZWYoZGVsdGFfdGltZTpudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcblxyXG4gICAgICBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIuanNvblwiKTtcclxuXHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAge1xyXG4gICAgICBcIm9iamVjdHNcIjpbXVxyXG4gICAgfVxyXG4gICAgYClcclxuICAgIH1cclxuICB9KVxyXG4gIG9ial9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZmlsZV9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ29iamVjdC1wYXRoLXJlcXVlc3QnLCBcIm9iamVjdHNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICAgIFxyXG59XHJcbiAgICBcclxuaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxufVxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBwYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycztcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycyA9IHt9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczoke25ld19uYW1lfV9wYXJhbWV0ZXJzID0gJHtuZXdfbmFtZX0uZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIFxyXG4gIH1cclxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxyXG4gIH1cclxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XHJcbiAgICBcclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKXtcclxuICAgIFxyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpe1xyXG4gICAgICAgIFxyXG4gIH1cclxufVxyXG4gICAgYClcclxuICAgIH1cclxuICB9KVxyXG5cclxufSIsImltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuXHJcbmludGVyZmFjZSBIdWRUZXh0R2V0RnVuY3tcclxuICAoKTpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0U2V0dGluZ3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBmb250OkZvbnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb250e1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHNpemU6bnVtYmVyLFxyXG4gIGZvbnQ6c3RyaW5nLFxyXG4gIGNvbG9yOnN0cmluZyxcclxuICB0ZXh0OnN0cmluZyxcclxuICBhbGlnbjpDYW52YXNUZXh0QWxpZ25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0X05vZGV7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgcG9zaXRpb246e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxuICBzaXplOm51bWJlcjtcclxuICBzY2FsaW5nOm51bWJlcjtcclxuICBmb250OnN0cmluZztcclxuICBjb2xvcjpzdHJpbmc7XHJcbiAgdGV4dD86c3RyaW5nO1xyXG4gIGFsaWduPzpDYW52YXNUZXh0QWxpZ247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhVRHtcclxuICBncmFwaGljX2VsZW1lbnRzOm9ialtdID0gW107XHJcbiAgdGV4dF9lbGVtZW50czpBcnJheTxUZXh0PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaCguLi50aGlzLnNldFRleHRFbGVtZW50cygpKTtcclxuICAgIHRoaXMuZ3JhcGhpY19lbGVtZW50cy5wdXNoKC4uLnRoaXMuc2V0R3JhcGhpY0VsZW1lbnRzKCkpOyBcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLmdyYXBoaWNfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnRleHRfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0VGV4dEVsZW1lbnRzKCk6VGV4dFtde1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBzZXRHcmFwaGljRWxlbWVudHMoKTpvYmpbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0e1xyXG4gIGdldEZ1bmM6SHVkVGV4dEdldEZ1bmM7XHJcbiAgc3RhdGU6VGV4dF9Ob2RlO1xyXG4gIGNvbnN0cnVjdG9yKG5vZGU6VGV4dF9Ob2RlLGdldEZ1bmM6SHVkVGV4dEdldEZ1bmMpe1xyXG4gICAgaWYoIW5vZGUuYWxpZ24pe1xyXG4gICAgICBub2RlLmFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBub2RlO1xyXG4gICAgaWYoIXRoaXMuc3RhdGUudGV4dCl7XHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEZ1bmMgPSBnZXRGdW5jO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICB0aGlzLnN0YXRlLnRleHQgPSB0aGlzLmdldEZ1bmMoKTtcclxuICB9XHJcbiAgcmVuZGVyZihhOm51bWJlcik6Rm9udHtcclxuICAgIGxldCB7c2l6ZSxjb2xvcixmb250LHRleHQsbWF4X3dpZHRoLGFsaWdufSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaXplLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgZm9udCxcclxuICAgICAgdGV4dCxcclxuICAgICAgbWF4X3dpZHRoLFxyXG4gICAgICBhbGlnblxyXG4gICAgfTtcclxuICB9XHJcbn0iLCJpbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaXN0YW5jZShhOlZlY3RvcixiOlZlY3Rvcil7XHJcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtaW46bnVtYmVyLCBtYXg6bnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbn0iLCJpbXBvcnQgeyBzdGF0ZV9mdW5jLCBvYmpfc3RhdGUsIFZlY3RvciwgZGltZW5zaW9ucyB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJlbmRlcl9mdW5jLCByZW5kZXJfdHlwZSAsc2NhbGVfdHlwZX0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBCaW5kLCBjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZSB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7REVCVUcsIGRlZXAsIGdhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgRGlzdGFuY2UgfSBmcm9tIFwiLi9tYXRoXCI7XHJcbmltcG9ydCB7cm9vdF9wYXRoLHBhdGh9IGZyb20gXCIuLi9saWIvZGVidWdcIjsgXHJcblxyXG5pbnRlcmZhY2Ugb2JqX2k8VD4ge1xyXG4gIHN0YXRlZjogc3RhdGVfZnVuYzxUPixcclxuICByZW5kZXJmOiByZW5kZXJfZnVuY1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWQoYTogb2JqW10sIGlkOiBzdHJpbmcpOiBvYmoge1xyXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYS5sZW5ndGg7IGIrKykge1xyXG4gICAgaWYgKGFbYl0uaWQgPT0gaWQpIHtcclxuICAgICAgcmV0dXJuIGFbYl07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8vRmluZHMgdGhlIHNpZGUgbGVuZ3RocyBvZiBhIHRyaWFuZ2xlIGlmIGdpdmVuIHRoZSAgYW5nbGUgKGluIGRlZ3JlZXMpXHJcbi8vYWxvbmcgd2l0aCB0aGUgbGVuZ3RoIG9mIHRoZSBoeXBvdGVudXNlXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbl9sZW5ndGgobGVuZ3RoOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgbGV0IGFfbGVuID0gbGVuZ3RoICogTWF0aC5zaW4oZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgbGV0IGJfbGVuID0gbGVuZ3RoICogTWF0aC5jb3MoZGVncmVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6IGFfbGVuLFxyXG4gICAgeTogYl9sZW5cclxuICB9XHJcbn1cclxuXHJcbi8vVGhpcyBjb3VudGVyIHRyYWNrcyB0aGUgZ2xvYmFsIG51bWJlciBvZiBvYmplY3RzIGNyZWF0ZWQgc28gZmFyXHJcbi8vYW4gb2JqZWN0J3MgaWQgKGlmIG5vdCBvdmVyd3JpdHRlbikgd2lsbCBiZSBhIHVuaXF1ZSBpbnRlZ2VyLCB3aGljaFxyXG4vL3VzZXMgdGhpcyBjb3VudGVyLlxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5pbnRlcmZhY2UgYW5pbV9zdG9yYWdlIHtcclxuICBbaW5kZXg6IHN0cmluZ106IFtBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbnVtYmVyXVxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdm9pZF9mdW5jIHtcclxuICAoKTogdm9pZFxyXG59XHJcblxyXG5jbGFzcyBhbmltYXRpb25zIHtcclxuICBhbmltYXRpb25zOiBhbmltX3N0b3JhZ2UgPSB7fTtcclxuICAvL1RyYWNrcyB0aGUgdGltZSBwYXNzZWQgc2luY2UgdGhlIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgLy9oYXMgc3RhcnRlZCBwbGF5aW5nXHJcbiAgYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIGN1cnJlbnQ6IHN0cmluZztcclxuICBjYWxsYmFjazogdm9pZF9mdW5jO1xyXG4gIGFuaW1hdGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgLy9kZWZpbmVzIGFuIGFuaW1hdGlvbiB0aGF0IGNhbiBiZSBwbGF5ZWQgdXNpbmcgdGhlIHBsYXkgbWV0aG9kXHJcbiAgLy90aGUga2V5ZnJhbWVzIGFyZSBhbiBhcnJheSBvZiB0dXBsZXMgaW4gdGhlIFxyXG4gIC8vZm9ybWF0IG9mIFsodGltZSBmb3IgdGhpcyBzcHJpdGUgdG8gc2hvdyksIHNwcml0ZV1cclxuICBhZGQobmFtZTogc3RyaW5nLCBrZXlmcmFtZXM6IEFycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gW2tleWZyYW1lcywgbGVuZ3RoXTtcclxuICB9XHJcbiAgcGxheShuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogdm9pZF9mdW5jKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgfVxyXG4gIHJlbmRlcmYodDogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIGxldCBjdXJyX2FuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzBdO1xyXG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMV07XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgZm9yICg7IGluZGV4IDwgY3Vycl9hbmltYXRpb24ubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xyXG4gICAgICBsZXQga2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4XVswXTtcclxuICAgICAgbGV0IG5leHRfa2V5ZnJhbWVfdGltZSA9IGN1cnJfYW5pbWF0aW9uW2luZGV4ICsgMV1bMF07XHJcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGtleWZyYW1lX3RpbWUgJiYgdGhpcy5hbmltYXRpb25fdHJhY2tlciA8IG5leHRfa2V5ZnJhbWVfdGltZSkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSB0aGlzLmFuaW1hdGlvbl90cmFja2VyICsgdDtcclxuICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XHJcbiAgICAgICAgLy9SZXR1cm5zIHRoZSByYXcgc3ByaXRlIHRoYXQncyBjb3JyZWN0IHRvIHNob3cgYXQgdGhpcyB0aW1lXHJcbiAgICAgICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0gbGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKz0gdDtcclxuICAgIH1cclxuICAgIC8vUmV0dXJucyB0aGUgbGFzdCBhcHByb3ByaWF0ZSBmcmFtZSB1bnRpbCB0aGUgYW5pbWF0aW9uIGlzIG92ZXIuXHJcbiAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGhpdGJveHtcclxuICB3aWR0aDpudW1iZXIsXHJcbiAgaGVpZ2h0Om51bWJlcixcclxuICB4X29mZnNldDpudW1iZXIsXHJcbiAgeV9vZmZzZXQ6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFyYW1ze1xyXG4gIFtpbmRleDpzdHJpbmddOmJvb2xlYW58c3RyaW5nfG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGJvdW5kaW5nX2JveHtcclxuICBib3R0b21fbGVmdDpWZWN0b3IsXHJcbiAgdG9wX3JpZ2h0OlZlY3RvclxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3Mgb2Jqe1xyXG4gIC8vVXJsIHRvIHRoZSBvYmplY3QncyBpbmRpdmlkdWFsIHNwcml0ZSwgb3IgYWxsIG9mIGl0cyBzcHJpdGVzXHJcbiAgLy9idW5kbGVkIGludG8gYSBzcHJpdGVzaGVldFxyXG4gIHNwcml0ZV91cmwgPSBcIlwiO1xyXG4gIC8vVGhpcyBpcyB0aGUgbG9hZGVkIHNwcml0ZS9zcHJpdGVzaGVldCBvZiB0aGUgb2JqZWN0XHJcbiAgLy93aGljaCBpcyBmZXRjaGVkIGZyb20gdGhlIHVybCBhYm92ZVxyXG4gIHNwcml0ZV9zaGVldDogSFRNTEltYWdlRWxlbWVudDtcclxuICBzdGF0ZTogb2JqX3N0YXRlO1xyXG4gIHJlbmRlcl90eXBlID0gcmVuZGVyX3R5cGUuc3ByaXRlO1xyXG4gIC8vVGhlc2Ugc2hvdWxkIGNvcnJlc3BvbmQgdG8gdGhlIGFjdHVhbCBvYmplY3QncyBzcHJpdGUgaGVpZ2h0IGFuZCB3aWR0aFxyXG4gIC8vSWYgdXNpbmcgYSBzcHJpdGUgc2hlZXQsIHRoZXNlIGJlIG9uZSBzcHJpdGUncyBoZWlnaHQgYW5kIHdpZHRoLlxyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgXHJcbiAgY29sbGlzaW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGl0Ym94OiBoaXRib3hcclxuICBpZDogc3RyaW5nO1xyXG4gIC8vQXJyYXkgb2YgYmluZCBpZHNcclxuICAvL0JpbmRzIGFyZSBpbmRlbnRpZmllZCBieSBhIHVuaXF1ZSBudW1iZXIgdGhhdCBpcyByZXR1cm4gd2hlblxyXG4gIC8vVGhlIGJpbmQgaXMgY3JlYXRlZC4gV2UgbXVzdCBzdG9yZSB0aGVzZSBpZHMgaW4gb3JkZXIgdG8gXHJcbiAgLy9kZWxldGUgdGhlIGJpbmRzIHdoZW4gdGhleSBhcmUgbWFudWFsbHkgdW5ib3VuZCwgb3IgdGhlIG9iamVjdCBpcyBkZWxldGVkLlxyXG4gIGJpbmRzOiBBcnJheTxudW1iZXI+O1xyXG4gIHRhZ3M6c3RyaW5nW10gPSBbXTtcclxuICAvL3RhZ3MgYXJlIHVzZWQgdG8gZXhjbHVkZSBvciBpbmNsdWRlIG9iamVjdHMgd2hlbiBjaGVja2luZyBmb3IgY29sbGlzaW9ucyxcclxuICAvL2FuZCBmb3Igb2JqZWN0IGlkZW50aWZpY2F0aW9uIC8gY2xhc3NpZmljYXRpb24gaW4gc2NyaXB0c1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgYW5pbWF0aW9ucyA9IG5ldyBhbmltYXRpb25zKCk7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICAvL0xhc3QgcmVuZGVyIHRpbWUsIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhX3RpbWVcclxuICBsYXN0X3JlbmRlcjpudW1iZXIgPSAwO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBwYXJlbnQ6Y29tcG9zaXRlX29iajtcclxuICAvL1BhcmFtcyBhcmUgb3B0aW9ucyBmb3IgdGhlIG9iamVjdCwgdGhhdCBkbyBub3QgcmVseSBvbiBzdGF0ZVxyXG4gIC8vIEZvciBleGFtcGxlLCB0aGUgc2lkZSBvZiBhIHBpZWNlIGluIGNoZXNzLlxyXG4gIHBhcmFtczp1bmtub3duID0ge307XHJcbiAgbGF5ZXI6bnVtYmVyID0gMTtcclxuICBzYXZlX3RvX2ZpbGU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgdGlja19zdGF0ZSA9IHRydWU7XHJcbiAgc2NhbGVfdHlwZSA9IHNjYWxlX3R5cGUuZ3JvdztcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6dW5rbm93biA9IHt9O1xyXG4gIG9wYWNpdHk6bnVtYmVyID0gMTtcclxuICBnZXRTdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuICAvL0FuaW1hdGlvbnMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hbmltYXRpb25zLmFkZCBpbiB0aGlzIG1ldGhvZFxyXG4gIHJlZ2lzdGVyQW5pbWF0aW9ucygpIHtcclxuXHJcbiAgfVxyXG4gIC8vU291bmRzIHNob3VsZCBiZSByZWdpc3RlcmVkIHVzaW5nIHRoaXMuYXVkaW8uYWRkIGluIHRoaXMgbWV0aG9kLlxyXG4gIHJlZ2lzdGVyQXVkaW8oKSB7XHJcblxyXG4gIH1cclxuICBkZWZhdWx0UGFyYW1zKCk6dW5rbm93bntcclxuICAgIHJldHVybiBkZWVwKHRoaXMuZGVmYXVsdFBhcmFtcyk7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXMgPSBvYmouZGVmYXVsdF9wYXJhbXMpIHtcclxuICAgIFxyXG4gICAgdGhpcy5pZCA9IFwiXCIgKyBjb3VudGVyO1xyXG4gICAgdGhpcy5iaW5kcyA9IFtdO1xyXG4gICAgY291bnRlcisrO1xyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbHMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJBdWRpbygpO1xyXG4gICAgLy9DcmVhdGVzIGEgY29weSBvZiB0aGUgcGFzc2VkIGluIGluaXRpYWwgc3RhdGUgdG8gYXZvaWQgXHJcbiAgICAvL1VwZGF0aW5nIHRoZSBzYXZlZCBzdGF0ZSBvZiB0aGUgcm9vbVxyXG4gICAgdGhpcy5zdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHAgPSB0aGlzLnNwcml0ZV91cmw7XHJcbiAgICAgIGlmKERFQlVHKXtcclxuICAgICAgICBwID0gcGF0aC5qb2luKHJvb3RfcGF0aCx0aGlzLnNwcml0ZV91cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIGEuc3JjID0gcDtcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNwcml0ZV9zaGVldCA9IGE7XHJcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJBbmltYXRpb25zKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdWRpby5sb2FkKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vV2l0aGluIG5vcm1hbCBvYmplY3RzLCB0aGlzIGp1c3QgcmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBvYmplY3QuXHJcbiAgLy9UaGlzIG1ldGhvZCBpcyBvdmVyd3JpdHRlbiBieSBjb21wb3NpdGUgb2JqZWN0cywgd2hpY2ggcmV0dXJucyBldmVyeSBvYmplY3RcclxuICAvL3RoYXQgdGhlIGNvbXBvc2l0ZSBvYmplY3QgY29udGFpbnMuIFRoaXMgc2ltcGxpZmllcyB0aGUgYmFja2VuZCB3b3JrLCBhcyBlYWNoXHJcbiAgLy9vYmplY3QgcmV0dXJucyBhbiBhcnJheSBvZiBhdGxlYXN0IG9uZSBvYmplY3QuXHJcbiAgY29tYmluZWRPYmplY3RzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW3RoaXNdO1xyXG4gIH1cclxuICBnZXRCb3VuZGluZ0JveCgpOmJvdW5kaW5nX2JveHtcclxuICAgIGxldCBjb2xsX2JveCA9IHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wX3JpZ2h0OntcclxuICAgICAgICB4OmNvbGxfYm94LnggKyBjb2xsX2JveC53aWR0aC8yLFxyXG4gICAgICAgIHk6Y29sbF9ib3gueSArIGNvbGxfYm94LmhlaWdodC8yXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvdHRvbV9sZWZ0OntcclxuICAgICAgICB4OmNvbGxfYm94LnggLSBjb2xsX2JveC53aWR0aC8yLFxyXG4gICAgICAgIHk6Y29sbF9ib3gueSAtIGNvbGxfYm94LmhlaWdodC8yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9EaXN0YW5jZSBmcm9tIG9uZSBvYmplY3QgdG8gYW5vdGhlci5cclxuICBkaXN0YW5jZSh0YXJnZXQ6b2JqKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gRGlzdGFuY2UodGhpcy5zdGF0ZS5wb3NpdGlvbix0YXJnZXQuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhcHBseUZvcmNlKHZlbDpWZWN0b3Ipe1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICs9IHZlbC54O1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICs9IHZlbC55O1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHMoYTogb2JqKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFuZ2xlVG93YXJkc1BvaW50KGEuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHNQb2ludCh0YXJnZXQ6VmVjdG9yKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gOTAgLSBNYXRoLmF0YW4yKCh0YXJnZXQueSAtIHRoaXMuc3RhdGUucG9zaXRpb24ueSksKHRhcmdldC54IC0gdGhpcy5zdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAvTWF0aC5QSTtcclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OiBzdHJpbmcsIHg6IGV4ZWNfdHlwZSwgZnVuYzogY29udHJvbF9mdW5jLCBpbnRlcnZhbCA9IDEpIHtcclxuICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwsIHRoaXMpKTtcclxuICB9XHJcbiAgLy9UaGlzIG1ldGhvZCBpcyB3aGVyZSBjb250cm9scyBhbmQga2V5YmluZHMgc2hvdWxkXHJcbiAgLy9iZSBkZWZpbmVkIHVzaW5nIGJpbmRDb250cm9sXHJcbiAgcmVnaXN0ZXJDb250cm9scygpe1xyXG5cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuXHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmRlbGV0ZUl0ZW0odGhpcy5pZCk7XHJcbiAgfVxyXG4gIFVuYmluZEFsbCgpe1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9SZXR1cm5zIHRoZSBjb2xsaXNpb24gYm94IG9mIHRoZSBvYmplY3RcclxuICAvL0RvZXMgbm90IGhhdmUgdG8gY29ycmVzcG9uZCB0byB0aGUgb2JqZWN0J3Mgc3ByaXRlJ3Mgc2l6ZSBcclxuICAvL0EgY29tcG9zaXRlIG9iamVjdCBpbnN0ZWFkIHJldHVybnMgdGhlIGJvdW5kaW5nIGJveCB0aGF0IFxyXG4gIC8vY29udGFpbnMgZXZlcnkgb25lIG9mIGl0cyBjb250YWluZWQgb2JqZWN0c1xyXG4gIGdldEZ1bGxDb2xsaXNpb25Cb3goKTpjb2xsaXNpb25fYm94e1xyXG4gICAgLy9JZiBhIGRldmVsb3BlciBkZWZpbmVkIGhpdGJveCBleGlzdHMsIHVzZSB0aGF0LCBvdGhlcndpc2VcclxuICAgIC8vZ2VuZXJhdGUgaXQgdXNpbmcgdGhlIHNwcml0ZSB3aWR0aCAvIGhlaWdodFxyXG4gICAgaWYodGhpcy5oaXRib3gpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMuaGl0Ym94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhpdGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9UaGlzIGlzIGFub3RoZXIgbWV0aG9kcywgc2ltaWxhciB0byBnZXRDb21iaW5lZFxyXG4gIC8vSnVzdCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL092ZXJ3cml0dGVuIGluIGNvbXBvc2l0ZSBvYmplY3RzIHRvIHJldHVybiBldmVyeSBvYmplY3QncyBjb2xsaXNpb24gYm94XHJcbiAgLy93aXRoaW4gdGhlIGNvbXBvc2l0ZSBvYmVjdC5cclxuICBnZXRBbGxDb2xsaXNpb25Cb3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIHJldHVybiBbdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCldXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIHRvIHNlZSBpZiBhbiBvYmplY3QgYWN0dWFsbHkgY29sbGlkZXMgd2l0aCB0aGUgcHJvdmlkZWQgYm94LlxyXG4gIC8vQSBib3ggcmVwcmVzZW50cyBhbiBhcmVhIHdpdGhpbiB0aGUgZ2FtZSBzcGFjZVxyXG4gIC8vQ2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaXMgdHJpdmlhbCBjdXJyZW50bHksIGFzIGFsbCBoaXRib3hlcyBhcmUgYXhpcyBhbGlnbmVkXHJcbiAgLy9CdXQgaW1wbGVtZW50aW5nIGEgbW9yZSBjb21wbGljYXRlZCBwaHlzaWNzIGVuZ2luZSB3b3VsZCBtYWtlIHRoaXMgbWV0aG9kJ3MgaW1wbC5cclxuICAvL3NpZ25pZmljYXRseSBtb3JlIGNvbXBsZXguXHJcbiAgY29sbGlkZXNXaXRoQm94KG90aGVyX29iamVjdDogY29sbGlzaW9uX2JveCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSBmYWxzZSwgY29sbGlkZXNfdmVydGljYWxseSA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCAtIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0ICsgaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0ICsgaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgLSBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlcl9vYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAob3RoZXJfb2JqZWN0LnggLSBvdGhlcl9vYmplY3Qud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6IChvdGhlcl9vYmplY3QueCArIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChvdGhlcl9vYmplY3QueSArIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAob3RoZXJfb2JqZWN0LnkgLSBvdGhlcl9vYmplY3QuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICAvL1dlIGNhbiBjb21wYXJlIHRoZSBzaWRlcyBvZiB0aGUgYm94ZXMgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcFxyXG4gICAgLy9XZSBjaGVjayBvbmNlIGZvciBob2l6b250YWwgb3ZlcmxhcCwgdGhlbiB2ZXJ0aWNhbC5cclxuICAgIGlmICgob2JqZWN0X2JvdW5kcy5sZWZ0ID49IG90aGVyX29iamVjdF9ib3VuZHMubGVmdCAmJiBvYmplY3RfYm91bmRzLmxlZnQgPCBvdGhlcl9vYmplY3RfYm91bmRzLnJpZ2h0KSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ID4gb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG90aGVyX29iamVjdF9ib3VuZHMubGVmdCA8IG9iamVjdF9ib3VuZHMucmlnaHQpKSB7XHJcbiAgICAgIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmJvdHRvbSA+PSBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvYmplY3RfYm91bmRzLmJvdHRvbSA8IG90aGVyX29iamVjdF9ib3VuZHMudG9wKSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gPiBvYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA8IG9iamVjdF9ib3VuZHMudG9wKSl7XHJcbiAgICAgIGNvbGxpZGVzX3ZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgJiYgY29sbGlkZXNfdmVydGljYWxseTtcclxuICB9XHJcbiAgLy9UaGUgcGFydGljbGUgbXVzdCBiZSByZWdpc3RlcmVkIGluIHRoZSByb29tJ3MgcmVnaXN0ZXJQYXJ0aWNsZXMgbWV0aG9kIFxyXG4gIC8vVGhlIG5hbWUgcGFyYW1ldGVyIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBrZXkgb2YgYSBwYXJ0aWNsZVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxvZmZzZXQ6VmVjdG9yLGxpZmV0aW1lOm51bWJlcixyYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBmaW5hbF9wb3NpdGlvbjpWZWN0b3IgPSB7XHJcbiAgICAgIHg6c3QucG9zaXRpb24ueCArIG9mZnNldC54LFxyXG4gICAgICB5OnN0LnBvc2l0aW9uLnkgKyBvZmZzZXQueVxyXG4gICAgfVxyXG4gICAgcm9vbS5lbWl0UGFydGljbGUobmFtZSxmaW5hbF9wb3NpdGlvbixsaWZldGltZSxyYW5nZSlcclxuICB9XHJcbiAgLy9JbnRlcm5hbCBtZXRob2QgdGhhdCBrZWVwcyBjYWxjdWxhdGVzIHRoZSBkZWx0YV90aW1lXHJcbiAgLy9BbHNvIGNvbnZlcnRzIGluZGl2aWR1YWwgc3ByaXRlcyBpbnRvIGFycmF5cyBvZiBvbmUgc3ByaXRlLlxyXG4gIHJlbmRlclRyYWNrKHRpbWU6bnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB7XHJcbiAgICBsZXQgcmVuZGVyZWQgPSB0aGlzLnJlbmRlcmYodGltZSAtIHRoaXMubGFzdF9yZW5kZXIpO1xyXG4gICAgbGV0IGZpbmFsOnBvc2l0aW9uZWRfc3ByaXRlW107XHJcbiAgICB0aGlzLmxhc3RfcmVuZGVyID0gdGltZTtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKVxyXG4gICAgICBmaW5hbCA9IHJlbmRlcmVkXHJcbiAgICBlbHNle1xyXG4gICAgICBmaW5hbCA9IFtyZW5kZXJlZF1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbiAgLy9Nb3N0IG9iamVjdHMgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRpbmcgdGhlIHJlbmRlcmYgbWV0aG9kXHJcbiAgLy9SZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBzcHJpdGUgZm9yIHRoZSBvYmplY3RcclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10gfCBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIC8vSWYgdGhlIG9iamVjdCBkb2Vzbid0IGhhdmUgcmVnaXN0ZXJlZCBhbmltYXRpb25zLCBvciBpc24ndCBwbGF5aW5nIG9uZVxyXG4gICAgLy9XZSBoYXZlIHRvIGNyZWF0ZSB0aGUgc3ByaXRlIGhlcmUuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25zLmFuaW1hdGlvbnMpLmxlbmd0aCA9PSAwIHx8ICF0aGlzLmFuaW1hdGlvbnMuY3VycmVudCkge1xyXG4gICAgICBpZighdGhpcy5zcHJpdGVfc2hlZXQgfHwgIXRoaXMuaGVpZ2h0IHx8ICF0aGlzLndpZHRoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3ByaXRlOnVuZGVmaW5lZCxcclxuICAgICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNwcml0ZV9oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgbGV0IHNwcml0ZV93aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIC8vVGVjaG5pY2FsbHkgd2UgZG9uJ3QgbmVlZCB0byBkZWZpbmUgYW4gb2JqZWN0IGhlaWdodCBhbmQgd2lkdGhcclxuICAgICAgLy9JZiB0aGUgc3ByaXRlX3VybCBwb2ludHMgdG8gYSBzaW5nbGUgc3RhdGljIHNwcml0ZSwgYXMgd2UgY2FuIGp1c3QgcHVsbFxyXG4gICAgICAvL3RoZSBkaW1lbnNpb25zIGZyb20gdGhlIGltYWdlXHJcbiAgICAgIGlmICh0aGlzLmhlaWdodCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5zcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLndpZHRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV93aWR0aCA9IHRoaXMuc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIHNwcml0ZV93aWR0aDogc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgICAgc3ByaXRlX2hlaWdodDogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICAgIG9wYWNpdHk6dGhpcy5vcGFjaXR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGU6dGhpcy5hbmltYXRpb25zLnJlbmRlcmYodGltZSksXHJcbiAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9ialxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9zaXRlX29iaiBleHRlbmRzIG9iantcclxuICBvYmplY3RzOm9ialtdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihwb3MpO1xyXG4gIH1cclxuICBsb2FkKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oIGFzeW5jIChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLnRoaXMub2JqZWN0cy5tYXAoKGEpPT5hLmxvYWQoKSksLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iai5sb2FkKCkpXSk7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gWy4uLmNvbWJpbmVkLHRoaXNdO1xyXG4gIH1cclxuICBnZXRJdGVtc0J5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRPYmplY3RzKCkuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgYWRkSXRlbShhOm9iaixsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBsaXN0LnB1c2goYSk7XHJcbiAgICBhLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW0oYSk7XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IGFycjpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgIGZvcihsZXQgb2JqIG9mIFsuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKSwuLi50aGlzLm9iamVjdHNdKXtcclxuICAgICAgbGV0IGNyZWF0ZWRfYm94ID0gb2JqLmdldEFsbENvbGxpc2lvbkJveGVzKCk7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY3JlYXRlZF9ib3gpKXtcclxuICAgICAgICBhcnIucHVzaCguLi5jcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhcnIucHVzaChjcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGEuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgYS5vYmouZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5kZWxldGUoKTtcclxuICB9XHJcbiAgY29sbGlkZXNXaXRoQm94KGE6IGNvbGxpc2lvbl9ib3gpOmJvb2xlYW57XHJcbiAgICBmb3IobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBpZihvYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGlmKG8ub2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBzdGF0aWNfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBncmF2aXR5X29iaiBleHRlbmRzIG9iantcclxuICBncmF2aXR5ID0gdHJ1ZVxyXG59IiwiaW1wb3J0IHsgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFRleHRfTm9kZSwgVGV4dFNldHRpbmcsSFVELFRleHQgfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlXCJcclxuXHJcbmludGVyZmFjZSBjYW1lcmFfc3RhdGUge1xyXG4gIHNjYWxpbmc6IG51bWJlcixcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gIH0sXHJcbiAgdmlld3BvcnQ6IHZpZXdwb3J0LFxyXG4gIGRlYnVnOmJvb2xlYW4sXHJcbiAgaHVkOkhVRCAgXHJcbn1cclxuXHJcbmludGVyZmFjZSB2aWV3cG9ydCB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBjYW1lcmFfcHJvcGVydGllcyB7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZGltZW5zaW9uczp7XHJcbiAgICBoZWlnaHQ6bnVtYmVyLFxyXG4gICAgd2lkdGg6bnVtYmVyXHJcbiAgfVxyXG4gIHNjYWxpbmc6bnVtYmVyLFxyXG4gIGRlYnVnOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgc3RhdGU6IGNhbWVyYV9zdGF0ZTtcclxuICBodWQ6IEhVRDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczpjYW1lcmFfcHJvcGVydGllcywgdjogdmlld3BvcnQsIGh1ZDpIVUQgPSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNjYWxpbmc6cHJvcHMuc2NhbGluZyxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwcm9wcy54LFxyXG4gICAgICAgIHk6IHByb3BzLnlcclxuICAgICAgfSxcclxuICAgICAgZGltZW5zaW9uczogcHJvcHMuZGltZW5zaW9ucyxcclxuICAgICAgdmlld3BvcnQ6IHtcclxuICAgICAgICB4OnYueCxcclxuICAgICAgICB5OnYueSAsXHJcbiAgICAgICAgd2lkdGg6IHYud2lkdGggKiBwcm9wcy5kaW1lbnNpb25zLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdi5oZWlnaHQgKiBwcm9wcy5kaW1lbnNpb25zLmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBkZWJ1Zzpwcm9wcy5kZWJ1ZyxcclxuICAgICAgaHVkXHJcbiAgICB9XHJcbiAgICB0aGlzLmh1ZCA9IGh1ZDtcclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6ZGltZW5zaW9ucyxcclxuICBzY2FsZV90eXBlOnNjYWxlX3R5cGVcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlbmRlcmVyX2FyZ3Mge1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjYW1lcmE6IENhbWVyYVxyXG59XHJcblxyXG5leHBvcnQgZW51bSByZW5kZXJfdHlwZSB7XHJcbiAgdGV4dCxcclxuICBzcHJpdGUsXHJcbiAgcmVjdCxcclxuICBzdHJva2VfcmVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBzY2FsZV90eXBle1xyXG4gIGdyb3csXHJcbiAgcmVwZWF0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZS53aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZS5oZWlnaHQgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICogcy5zY2FsZS5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUud2lkdGg7XHJcbiAgci5jb250ZXh0LnNhdmUoKTtcclxuICByLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBzLnNwcml0ZS5vcGFjaXR5O1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCAgKyAod2lkdGgpIC8gMiwgZmluYWxfeSArIGhlaWdodCAvIDIpXHJcbiAgbGV0IHJhZGlhbnMgPSBzLnJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xyXG4gIHIuY29udGV4dC5yb3RhdGUocmFkaWFucyk7XHJcbiAgaWYocy5zY2FsZV90eXBlID09IHNjYWxlX3R5cGUuZ3Jvdyl7XHJcbiAgICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICAgIHMuc3ByaXRlLmxlZnQsXHJcbiAgICAgIHMuc3ByaXRlLnRvcCxcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX3dpZHRoLFxyXG4gICAgICBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAtKHdpZHRoICkgLyAyLFxyXG4gICAgICAtaGVpZ2h0IC8gMixcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodFxyXG4gICAgKVxyXG4gIH1cclxuICBlbHNlIGlmKHMuc2NhbGVfdHlwZSA9PSBzY2FsZV90eXBlLnJlcGVhdCl7XHJcbiAgICBsZXQgb25lX3dpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICAgIGxldCBvbmVfaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgICBsZXQgdG90YWxfaG9yX3Nwcml0ZXMgPSB3aWR0aC9vbmVfd2lkdGhcclxuICAgIGxldCB0b3RhbF92ZXJfc3ByaXRlcyA9IGhlaWdodC9vbmVfaGVpZ2h0O1xyXG4gICBmb3IobGV0IGEgPSAwO2EgPCB0b3RhbF9ob3Jfc3ByaXRlczthICs9IDEpe1xyXG4gICAgIGZvcihsZXQgYiA9IDA7YiA8IHRvdGFsX3Zlcl9zcHJpdGVzO2IgKz0gMSl7XHJcbiAgICAgICBsZXQgbmV3X3dpZHRoID0gb25lX3dpZHRoO1xyXG4gICAgICAgbGV0IG5ld19oZWlnaHQgPSBvbmVfaGVpZ2h0O1xyXG4gICAgICAgaWYoKGEgKyAxKSAqIG9uZV93aWR0aCAtIHdpZHRoID4gMCl7XHJcbiAgICAgICAgIG5ld193aWR0aCA9IHdpZHRoICUgb25lX3dpZHRoO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYoKGIgKyAxKSAqIG9uZV9oZWlnaHQgLSBoZWlnaHQgPiAwKXtcclxuICAgICAgICAgbmV3X2hlaWdodCA9IGhlaWdodCAlIG9uZV9oZWlnaHQ7XHJcbiAgICAgICB9XHJcbiAgICAgICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHMuc3ByaXRlLnNwcml0ZV9zaGVldCxcclxuICAgICAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgICAgIHMuc3ByaXRlLnRvcCxcclxuICAgICAgICBuZXdfd2lkdGggLyAoci5jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgbmV3X2hlaWdodCAvIChyLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICAtd2lkdGgvMiArIGEgKiBvbmVfd2lkdGgsXHJcbiAgICAgICAgLWhlaWdodC8yICsgYiAqIG9uZV9oZWlnaHQsXHJcbiAgICAgICAgbmV3X3dpZHRoLFxyXG4gICAgICAgIG5ld19oZWlnaHRcclxuICAgICAgIClcclxuICAgICB9XHJcblxyXG4gICB9IFxyXG4gIH1cclxuICBcclxuICBcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmZpbGxSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59IiwiaW1wb3J0IHsgZ3Jhdml0eV9vYmosb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlLCBWZWN0b3IgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrLGNoZWNrX2NvbGxpc2lvbnMsY29sbGlzaW9uX2JveCxjaGVja19hbGxfY29sbGlzaW9ucyxjaGVja19hbGxfb2JqZWN0c30gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVuZGVyX2NvbGxpc2lvbl9ib3gsREVCVUd9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtCaW5kLGNvbnRyb2xfZnVuYywgZXhlY190eXBlfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge0hVRCxUZXh0LCBUZXh0X05vZGV9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiXHJcbmltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge2RlYnVnX3VwZGF0ZV9vYmpfbGlzdCxyb290X3BhdGgscGF0aH0gZnJvbSBcIi4uL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQge3ByZWZhYnN9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5cclxuaW50ZXJmYWNlIHBvc2l0aW9ue1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUdyYXZpdHkob2I6Z3Jhdml0eV9vYmosZ3Jhdl9jb25zdDpudW1iZXIsIGdyYXZfbWF4Om51bWJlcil7XHJcbiAgaWYob2IuZ3Jhdml0eSAmJiBvYi5zdGF0ZS52ZWxvY2l0eS55ID4gZ3Jhdl9tYXgpe1xyXG4gICAgb2Iuc3RhdGUudmVsb2NpdHkueSArPSBncmF2X2NvbnN0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJ0aWNsZV9lbnRyeXtcclxuICBzcHJpdGU6c3RyaW5nLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwYXJ0aWNsZXN7XHJcbiAgW2luZGV4OnN0cmluZ106cGFydGljbGVfZW50cnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByb29tX2k8VD57XHJcbiAgYmFja2dyb3VuZF91cmw6c3RyaW5nLFxyXG4gIG9iamVjdHM6b2JqW11cclxuICBzdGF0ZTpUXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0X3N0YXRlX2NvbmZpZyB7XHJcbiAgdHlwZTpzdHJpbmcsXHJcbiAgc3RhdGU6b2JqX3N0YXRlLFxyXG4gIHBhcmFtZXRlcnM/OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RhdGVfY29uZmlne1xyXG4gIG9iamVjdHM6b2JqZWN0X3N0YXRlX2NvbmZpZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyByb29tPFQ+e1xyXG4gIC8vVXJsIHRvIGFuIGltYWdlIHRvIGJlIHVzZWQgZm9yIHRoZSByb29tIGJhY2tncm91bmRcclxuICBiYWNrZ3JvdW5kX3VybDogc3RyaW5nO1xyXG4gIGJhY2tncm91bmQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgb2JqZWN0czogb2JqW10gPSBbXTtcclxuICAvL1RoaXMgb2JqZWN0IGNvbnRhaW5zIHBhcnRpY2xlIGRlZmluaXRpb25zXHJcbiAgcGFydGljbGVzOnBhcnRpY2xlcyA9IHt9O1xyXG4gIC8vVGhpcyBhcnJheSBpcyB3aGF0IGFjdHVhbGx5IGNvbnRhaW5zIHRoZSBwYXJ0aWNsZXNcclxuICAvL3RoYXQgZXhpc3RzIHdpdGhpbiB0aGUgcm9vbS5cclxuICBwYXJ0aWNsZXNfYXJyOiBvYmpbXSA9IFtdO1xyXG4gIHN0YXRlOiBUO1xyXG4gIGJpbmRzOm51bWJlcltdID0gW107XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIGh1ZDpIVUQ7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICAvL1RoZXNlIHRleHQgbm9kZXMgZXhpc3RzIGluIHRoZSBhY3R1YWwgcm9vbSBzcGFjZSwgcmF0aGVyIHRoYW5cclxuICAvL29uIHRoZSBodWQgbGF5ZXIuXHJcbiAgcmVuZGVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gIHRleHRfbm9kZXM6VGV4dFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+LGNvbmZpZzpzdGF0ZV9jb25maWcpe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIGZvcihsZXQgYyBvZiBjb25maWcub2JqZWN0cyl7XHJcbiAgICAgIC8vVGhpcyBoYW5kbGVzIGxvYWRpbmcgb2JqZWN0cyBmcm9tIHRoZSBzYXZlZCBqc29uIGZpbGUgYXNzb2NpYXRlZCB3aXRoIGVhY2ggcm9vbS5cclxuICAgICAgdGhpcy5hZGRJdGVtU3RhdGVDb25maWcoYylcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0U3RhdGVDb25maWcoKXtcclxuICAgIGxldCBjb25maWc6c3RhdGVfY29uZmlnID0ge29iamVjdHM6W119O1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub2JqZWN0cy5maWx0ZXIoKG9iaik9Pm9iai5zYXZlX3RvX2ZpbGUpKXtcclxuICAgICAgLy9JZiBhbiBvYmplY3QgaGFzIGEgcGFyZW50IG9iamVjdCwgaXQncyBhIGRlc2NlbmRlbnQgb2YgYSBjb21wb3NpdGUgb2JqZWN0XHJcbiAgICAgIC8vVGhlIHBhcmVudCB3aWxsIHNwYXduIHRoaXMgb2JqZWN0IHdoZW4gaXQncyBpbnN0YW50aWF0ZWQsIHNvIHdlIGRvXHJcbiAgICAgIC8vbm90IGhhdmUgdG8gc2F2ZSB0aGlzIGluc3RhbmNlLlxyXG4gICAgICAgIGlmKCFvLnBhcmVudCl7XHJcbiAgICAgICAgY29uZmlnLm9iamVjdHMucHVzaCh7XHJcbiAgICAgICAgICB0eXBlOm8uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgIHN0YXRlOm8uc3RhdGUsXHJcbiAgICAgICAgICBwYXJhbWV0ZXJzOm8ucGFyYW1zXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcbiAgLy9UaGlzIGhhbmRsZXMgdGhlIGxvYWRpbmcgb2YgYWxsIHJvb20gc3ByaXRlcywgYW5kXHJcbiAgLy9hbnkgb2JqZWN0cyBpdCBjb250YWlucy5cclxuICBsb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBhID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGxldCB0b19hd2FpdCA9IHRoaXMub2JqZWN0cy5tYXAoKGEpID0+IGEubG9hZCgpKTtcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodG9fYXdhaXQpO1xyXG4gICAgICBsZXQgcCA9IHRoaXMuYmFja2dyb3VuZF91cmw7XHJcbiAgICAgIGlmKERFQlVHKXtcclxuICAgICAgICBwID0gcGF0aC5qb2luKHJvb3RfcGF0aCx0aGlzLmJhY2tncm91bmRfdXJsKTtcclxuICAgICAgfVxyXG4gICAgICBhLnNyYyA9IHA7XHJcbiAgICAgIGEub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9hZGluZyBFcnJvcjpcIiArIHRoaXMuYmFja2dyb3VuZF91cmwpO1xyXG4gICAgICB9KVxyXG4gICAgICBhLm9ubG9hZCA9IChhc3luYygpID0+IHtcclxuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kID0gYTtcclxuICAgICAgICBhd2FpdCB0aGlzLmF1ZGlvLmxvYWQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgLy9UaGlzIGlzIHVzZWQgd2hpbGUgbG9hZGluZyBvYmplY3RzIGZyb20gZmlsZSwgaXQncyB1c2VkIHRvIGR5bmFtaWNhbGx5IGxvYWRcclxuICAvL29iamVjdHMgZnJvbSB0aGUgcm9vbSdzIGpzb24uIElmIGFkZGluZyBpdGVtcyB3aXRoaW4gY29kZSwgaXQncyBiZXR0ZXIgdG8gY3JlYXRlXHJcbiAgLy9uZXcgaW5zdGFuY2VzIG9mIG9iamVjdHMgdGhyb3VnaCBhZGRJdGVtXHJcbiAgYXN5bmMgYWRkSXRlbVN0YXRlQ29uZmlnKGNvbmZpZzpvYmplY3Rfc3RhdGVfY29uZmlnKXtcclxuICAgIGlmKHByZWZhYnNbY29uZmlnLnR5cGVdKXtcclxuICAgICAgbGV0IG5ld19vYmogPSA8b2JqPihuZXcgcHJlZmFic1tjb25maWcudHlwZV0oT2JqZWN0LmFzc2lnbih7fSxjb25maWcuc3RhdGUpLGNvbmZpZy5wYXJhbWV0ZXJzKSk7XHJcbiAgICAgIHRoaXMuYWRkSXRlbXMobmV3X29iai5jb21iaW5lZE9iamVjdHMoKSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVOS05PV04gVFlQRSBBVFRFTVBURUQgVE8gTE9BRDogXCIgKyBjb25maWcudHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgLy9BZGRzIHRoZSBwYXNzZWQgaXRlbSB0byB0aGUgcm9vbS5cclxuICBhc3luYyBhZGRJdGVtKG86b2JqLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIHRoaXMuYWRkSXRlbXMoW29dLGxpc3QpO1xyXG4gIH1cclxuICAvL0FkZHMgZXZlcnkgaXRlbSBpbiB0aGUgcGFzc2VkIGFycmF5IHRvIHRoZSByb29tLlxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqW10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL0RlbGV0ZXMgdGhlIGl0ZW0gYW5kIHJlbW92ZXMgaXQgZnJvbSB0aGUgcm9vbSdzIG9iamVjdCBsaXN0XHJcbiAgZGVsZXRlSXRlbShpZDpzdHJpbmcsIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBhID0gMDthIDwgbGlzdC5sZW5ndGg7YSsrKXtcclxuICAgICAgaWYobGlzdFthXS5pZCA9PT0gaWQpe1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGEsMSlcclxuICAgICAgICBhLS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL0FueSBwYXJ0aWNsZXMgdGhhdCBhcmUgbmVlZGVkIGluIHRoZSByb29tIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgcGFydGljbGUgYXJyYXkgaGVyZS5cclxuICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG5cclxuICB9XHJcbiAgLy9BZGRzIGEgYmluZCB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gdGhlIHBhc3NlZCBrZXkgaXMgYWN0aXZhdGVkXHJcbiAgLy9rZXkgZXhhbXBsZXM6IG1vdXNlMGRvd24gS2V5QWRvd24gS2V5THVwXHJcbiAgYmluZENvbnRyb2woa2V5OnN0cmluZyx4OmV4ZWNfdHlwZSxmdW5jOmNvbnRyb2xfZnVuYyxpbnRlcnZhbDpudW1iZXIgPSAxKXtcclxuICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSxmdW5jLHgsaW50ZXJ2YWwpKTsgXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBvYmplY3RzIHRoYXQgaGF2ZSBjb2xsaXNpb24gYXQgdGhlIHBhc3NlZCBwb2ludFxyXG4gIGNoZWNrQ29sbGlzaW9uc1BvaW50KHBvczpWZWN0b3IsZXhlbXB0PzpzdHJpbmdbXSxsaXN0ID0gdGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrQ29sbGlzaW9ucyh7eDpwb3MueCx5OnBvcy55LGhlaWdodDowLHdpZHRoOjB9LGV4ZW1wdCxsaXN0KTtcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIGFueSBvYmplY3RzIGF0IHRoZSBwYXNzZWQgcG9pbnRcclxuICBjaGVja09iamVjdHNQb2ludChwb3M6VmVjdG9yLGV4ZW1wdD86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja09iamVjdHMoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSxleGVtcHQsbGlzdCk7XHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBjb2xsaXNpb25zIGF0IHRoZSBwb2ludCB0aGF0IGNvbnRhaW4gZXZlcnkgdGFnIHdpdGhpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tDb2xsaXNpb25zUG9pbnRJbmNsdXNpdmUocG9zOlZlY3Rvcix0YWdzPzpzdHJpbmdbXSxsaXN0ID0gdGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrQ29sbGlzaW9uc0luY2x1c2l2ZSh7eDpwb3MueCx5OnBvcy55LGhlaWdodDowLHdpZHRoOjB9LHRhZ3MsbGlzdCk7XHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBhbnkgb2JqZWN0cyB0aGF0IGNvbnRhaW4gZXZlcnkgdGFnIHdpdGhpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tPYmplY3RzUG9pbnRJbmNsdXNpdmUocG9zOlZlY3Rvcix0YWdzPzpzdHJpbmdbXSxsaXN0ID0gdGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrT2JqZWN0c0luY2x1c2l2ZSh7eDpwb3MueCx5OnBvcy55LGhlaWdodDowLHdpZHRoOjB9LHRhZ3MsbGlzdCk7XHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBjb2xsaXNpb25zIGluIHRoZSBib3ggdGhhdCBjb250YWluIHRoZSB0YWdzIGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja0NvbGxpc2lvbnNJbmNsdXNpdmUoYm94OmNvbGxpc2lvbl9ib3gsdGFnczpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIob2JqPT5vYmouY29sbGlzaW9uICYmIG9iai5jb2xsaWRlc1dpdGhCb3goYm94KSAmJiB0YWdzLmV2ZXJ5KCh2YWwpPT5vYmoudGFncy5pbmNsdWRlcyh2YWwpKSk7XHJcbiAgICBcclxuICB9XHJcbiAgLy9DaGVja3MgZm9yIGFueSBvYmplY3RzIGluIHRoZSBib3ggdGhhdCBjb250YWluIGFsbCB0YWdzIGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja09iamVjdHNJbmNsdXNpdmUoYm94OmNvbGxpc2lvbl9ib3gsdGFnczpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoKG9iaik9Pm9iai5jb2xsaWRlc1dpdGhCb3goYm94KSAmJiB0YWdzLmV2ZXJ5KCh2YWwpPT5vYmoudGFncy5pbmNsdWRlcyh2YWwpKSk7XHJcbiAgICBcclxuICB9XHJcbiAgLy9jaGVja3MgZm9yIG9iamVjdHMgd2l0aCBjb2xsaXNpb24gaW4gdGhlIGJveCB0aGF0IGRvIG5vdCBjb250YWluIHRoZSB0YWdzIGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja0NvbGxpc2lvbnMoYm94OmNvbGxpc2lvbl9ib3gsZXhlbXB0PzpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYm94LGxpc3QsZXhlbXB0KTtcclxuICB9XHJcbiAgLy9jaGVja3MgZm9yICBhbnkgb2JqZWN0cyBpbiB0aGUgYm94IHRoYXQgZG8gbm90IGNvbnRhaW4gdGhlIHRhZ3MgaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrT2JqZWN0cyhib3g6Y29sbGlzaW9uX2JveCxleGVtcHQ/OnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja19hbGxfb2JqZWN0cyhib3gsbGlzdCxleGVtcHQpO1xyXG4gIH1cclxuICAvL1RoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIGNhbGwgYmluZENvbnRyb2wgYW5kIGNyZWF0ZSBhbnkgbmVlZGVkIGtleUJpbmRpbmdzXHJcbiAgcmVnaXN0ZXJDb250cm9scygpe1xyXG5cclxuICB9XHJcbiAgY2xlYW51cCgpe1xyXG5cclxuICB9XHJcbiAgLy9UaGUgcm9vbSdzIHN0YXRlIHVwZGF0aW5nIGZ1bmN0aW9uLlxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGxldCB0aWNraW5nX29iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChvKT0+by50aWNrX3N0YXRlKTtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGlja2luZ19vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIHZlbG9jaXR5IG9mIGV2ZXJ5IG9iamVjdCwgYW5kIG1vdmVzIGl0IGludG8gaXQncyBuZXh0IGxvY2F0aW9uXHJcbiAgICAgIC8vcHJvdmlkZWQgdGhhdCBpdCBjYW4gZml0IHRoZXJlLlxyXG4gICAgICB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrKHRpY2tpbmdfb2JqZWN0c1thXSwgdGhpcy5vYmplY3RzKTtcclxuICAgICAgdGlja2luZ19vYmplY3RzW2FdLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzKXtcclxuICAgICAgZm9yKGxldCBjYW1lcmFzIG9mIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzKXtcclxuICAgICAgICBpZihjYW1lcmFzLmh1ZCl7XHJcbiAgICAgICAgICBjYW1lcmFzLmh1ZC5zdGF0ZWYodGltZSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbiAgZW1pdFBhcnRpY2xlKG5hbWU6c3RyaW5nLHBvczpwb3NpdGlvbixsaWZldGltZTpudW1iZXIscG9zX3JhbmdlOm51bWJlcil7XHJcbiAgICBsZXQgc3RhdGUgPSB7XHJcbiAgICAgIHBvc2l0aW9uOnBvcyxcclxuICAgICAgdmVsb2NpdHk6e3g6MCx5OjB9LFxyXG4gICAgICByb3RhdGlvbjowLFxyXG4gICAgICBzY2FsaW5nOnt3aWR0aDoxLGhlaWdodDoxfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRJdGVtKG5ldyBQYXJ0aWNsZSh0aGlzLnBhcnRpY2xlc1tuYW1lXSxzdGF0ZSxsaWZldGltZSxwb3NfcmFuZ2UpLCB0aGlzLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBnZXRPYmooaWQ6c3RyaW5nKXtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCB0aGlzLm9iamVjdHMubGVuZ3RoOyBhKyspe1xyXG4gICAgICBpZih0aGlzLm9iamVjdHNbYV0uaWQgPT0gaWQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHNbYV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICAvL0dldHMgYW55IG9iamVjdHMgdGhhdCBoYXZlIHRoZSBwYXNzZWQgdGFnXHJcbiAgZ2V0T2JqQnlUYWcodGFnOnN0cmluZyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5vYmplY3RzLmZpbHRlcigoYSk9PmEudGFncy5pbmRleE9mKHRhZykgPiAtMSk7XHJcbiAgfVxyXG4gIC8vcmVuZGVycyB0aGUgcm9vbSdzIHNwcml0ZVxyXG4gIHJlbmRlcmYodGltZTogbnVtYmVyKTogc3ByaXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNwcml0ZV9zaGVldDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIHNwcml0ZV9oZWlnaHQ6IHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsXHJcbiAgICAgIHNwcml0ZV93aWR0aDogdGhpcy5iYWNrZ3JvdW5kLndpZHRoLFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBvYmogfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBWZWN0b3IsIGRpbWVuc2lvbnN9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2V0UmFuZEludH0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge3BhcnRpY2xlX2VudHJ5fSBmcm9tIFwiLi9yb29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHNwcml0ZXtcclxuICBzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxcclxuICBsZWZ0Om51bWJlcixcclxuICB0b3A6bnVtYmVyLFxyXG4gIHNwcml0ZV93aWR0aDpudW1iZXIsXHJcbiAgc3ByaXRlX2hlaWdodDpudW1iZXIsXHJcbiAgb3BhY2l0eTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICBzcHJpdGU6c3ByaXRlLFxyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXJ0aWNsZV9pIGV4dGVuZHMgb2JqX3N0YXRle1xyXG4gIGxpZmV0aW1lOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIGV4dGVuZHMgb2Jqe1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHJhbmRvbV9yYW5nZTpudW1iZXI7XHJcbiAgbWF4X2xpZmV0aW1lOm51bWJlcjtcclxuICBzdGF0ZTpQYXJ0aWNsZV9pO1xyXG4gIHNlbGVjdGVkX3Nwcml0ZTpzcHJpdGU7XHJcbiAgY29uc3RydWN0b3IocGFydDpwYXJ0aWNsZV9lbnRyeSxzdGF0ZTpvYmpfc3RhdGUsbGlmZXRpbWU6bnVtYmVyLHJhbmRvbV9yYW5nZTpudW1iZXIpe1xyXG4gICAgc3VwZXIoc3RhdGUpO1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSA9IDA7XHJcbiAgICB0aGlzLnNwcml0ZV91cmwgPSBwYXJ0LnNwcml0ZTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gcGFydC5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gcGFydC53aWR0aDtcclxuICAgIHRoaXMubWF4X2xpZmV0aW1lID0gbGlmZXRpbWU7XHJcbiAgICB0aGlzLnJhbmRvbV9yYW5nZSA9IHJhbmRvbV9yYW5nZTtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCArPSBnZXRSYW5kSW50KC1yYW5kb21fcmFuZ2UvMixyYW5kb21fcmFuZ2UvMik7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIHJvb20uZGVsZXRlSXRlbSh0aGlzLmlkLHJvb20ucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcbiAgICB0aGlzLnN0YXRlLmxpZmV0aW1lICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxpZmV0aW1lID4gdGhpcy5tYXhfbGlmZXRpbWUpe1xyXG4gICAgICB0aGlzLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6bnVtYmVyKTpwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIGlmKCF0aGlzLnNlbGVjdGVkX3Nwcml0ZSl7XHJcbiAgICAgIGxldCBzcHJpdGVzID0gc3ByaXRlX2dlbih0aGlzLnNwcml0ZV9zaGVldCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KVxyXG4gICAgICBsZXQgcmFuZG9tX3JvdyA9IGdldFJhbmRJbnQoMCxzcHJpdGVzLmxlbmd0aCk7XHJcbiAgICAgIGxldCByYW5kb21fY29sID0gZ2V0UmFuZEludCgwLHNwcml0ZXNbcmFuZG9tX3Jvd10ubGVuZ3RoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUgPSBzcHJpdGVzW3JhbmRvbV9yb3ddW3JhbmRvbV9jb2xdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZF9zcHJpdGUub3BhY2l0eSA9IDEgLSB0aGlzLnN0YXRlLmxpZmV0aW1lL3RoaXMubWF4X2xpZmV0aW1lO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgIHNwcml0ZTp0aGlzLnNlbGVjdGVkX3Nwcml0ZSBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGVfZ2VuKHNwcml0ZV9zaGVldDpIVE1MSW1hZ2VFbGVtZW50LHNwcml0ZV93aWR0aDpudW1iZXIsc3ByaXRlX2hlaWdodDpudW1iZXIpOkFycmF5PEFycmF5PHNwcml0ZT4+e1xyXG4gIGxldCB3aWR0aCA9IHNwcml0ZV9zaGVldC53aWR0aDtcclxuICBsZXQgaGVpZ2h0ID0gc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICBsZXQgc3ByaXRlczpBcnJheTxBcnJheTxzcHJpdGU+PiA9IFtdO1xyXG4gIGZvcihsZXQgYiA9IDA7IGIgPCBoZWlnaHQ7YiArPSBzcHJpdGVfaGVpZ2h0KXtcclxuICAgIHNwcml0ZXMucHVzaChbXSk7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgd2lkdGg7YSArPSBzcHJpdGVfd2lkdGgpe1xyXG4gICAgICBzcHJpdGVzW2JdLnB1c2goe1xyXG4gICAgICAgIHNwcml0ZV9zaGVldCxcclxuICAgICAgICBsZWZ0OmEsXHJcbiAgICAgICAgdG9wOmIgKiBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgIG9wYWNpdHk6MVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3ByaXRlcztcclxufVxyXG5cclxuIiwiZXhwb3J0IGxldCBERUJVRyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2JztcclxuZXhwb3J0IGxldCBQQVVTRUQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2Rldic7XHJcbmltcG9ydCB7IG9ian0gZnJvbSBcIi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQgeyByb29tIH0gZnJvbSBcIi4vbGliL3Jvb21cIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2xpYi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgc3ByaXRlX3JlbmRlcmVyLCByZWN0X3JlbmRlcmVyLCBzdHJva2VkX3JlY3RfcmVuZGVyZXIsIGh1ZF90ZXh0X3JlbmRlcmVyLCBDYW1lcmEsIHRleHRfcmVuZGVyZXIgLHNjYWxlX3R5cGV9IGZyb20gXCIuL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgRXhlY3V0ZVJlcGVhdEJpbmRzLCBVbmJpbmQgfSBmcm9tIFwiLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgaW5pdF9jbGlja19oYW5kbGVyIH0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGRlYnVnX3N0YXRlLCBkZWJ1Z191cGRhdGVfcm9vbV9saXN0LCBkZWJ1Z191cGRhdGVfb2JqX2xpc3QsZGVidWdfdXBkYXRlX3ByZWZhYnMsIGRlYnVnX3N0YXRlZiwgZGVidWdfc2V0dXAgfSBmcm9tIFwiLi9saWIvZGVidWdcIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4vZ2FtZS9yb29tcy9yb29tc1wiO1xyXG5cclxuXHJcbmxldCBjYW52YXNfZWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxubGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhc19lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblxyXG5sZXQgc2NyZWVuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmxldCBzY3JlZW5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHJcbi8vSG93IG9mdGVuIHRoZSBnYW1lIGxvZ2ljIGxvb3Agc2hvdWxkIHJ1biwgaW4gbWlsbGlzZWNvbmRzXHJcbmxldCBsb2dpY19sb29wX2ludGVydmFsOiBudW1iZXIgPSAxMDAwIC8gNjA7XHJcblxyXG5sZXQgbGFzdF90aW1lID0gbmV3IERhdGUoKTtcclxuXHJcbmxldCBsYXN0X3JlbmRlcl90aW1lID0gMDtcclxuXHJcbmludGVyZmFjZSBkaW1lbnNpb25zIHtcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0U2NyZWVuRGltZW5zaW9ucygpOiBkaW1lbnNpb25zIHtcclxuICByZXR1cm4gKHtcclxuICAgIHdpZHRoOiBzY3JlZW5fd2lkdGgsXHJcbiAgICBoZWlnaHQ6IHNjcmVlbl9oZWlnaHRcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Vmlld3BvcnREaW1lbnNpb25zKCk6IGRpbWVuc2lvbnMge1xyXG4gIHJldHVybiAoe1xyXG4gICAgaGVpZ2h0OiBjYW52YXNfZWxlbWVudC5oZWlnaHQsXHJcbiAgICB3aWR0aDogY2FudmFzX2VsZW1lbnQud2lkdGhcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHZpZXdwb3J0ID0ge1xyXG4gIGhlaWdodDogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0LFxyXG4gIHdpZHRoOiBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgdmlld3BvcnQuaGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0XHJcbiAgdmlld3BvcnQud2lkdGggPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS53aWR0aFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWcoeDogYm9vbGVhbikge1xyXG4gIERFQlVHID0geDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhdXNlZCh4OiBib29sZWFuKSB7XHJcbiAgUEFVU0VEID0geDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcl9jb2xsaXNpb25fYm94ID0gKGE6IGNvbGxpc2lvbl9ib3gpID0+IHtcclxuICBib3hlcy5wdXNoKGEpO1xyXG59XHJcblxyXG5sZXQgYm94ZXM6IEFycmF5PGNvbGxpc2lvbl9ib3g+ID0gW107XHJcblxyXG5leHBvcnQgbGV0IGRlZXAgPSAoYTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYSkpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgZ2FtZV9zdGF0ZTxUPiB7XHJcbiAgbG9naWM6IG51bWJlcixcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY3VycmVudF9yb29tOiByb29tPHVua25vd24+LFxyXG4gIGNhbWVyYXM6IEFycmF5PENhbWVyYT4sXHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICBnbG9iYWxzOiBUXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHJvb21zOiBhbnlbXSA9IFtdO1xyXG5leHBvcnQgbGV0IG9iamVjdHM6IGFueVtdO1xyXG5cclxuZXhwb3J0IGNsYXNzIGdhbWU8VD57XHJcbiAgc3RhdGU6IGdhbWVfc3RhdGU8VD47XHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIC8vVGhlIG9mZnNjcmVlbiBjYW52YXMgYW5kIGNvbnRleHQgYXJlIHVzZWQgaW4gcmVuZGVyaW5nIG11bHRpcGxlIENhbWVyYXNcclxuICAvL1RoZSBjb250ZW50cyBhcmUgcmVuZGVyZWQgdG8gdGhlIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29waWVkIHRvIHRoZSBcclxuICAvL29uc2NyZWVuIGNhbnZhcywgaW4gdGhlIHByb3BlciBwb3NpdGlvbiBpbiB0aGUgdmlld3BvcnRcclxuICBvZmZzY3JlZW5fY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBvZmZzY3JlZW5fY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByb3RvdHlwZXM6IEFycmF5PG9iaj4gPSBbXTtcclxuICByb29tczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIGlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGluaXRfc3RhdGU6IFQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhbnZhczogY2FudmFzX2VsZW1lbnQsXHJcbiAgICAgIGxvZ2ljOiB1bmRlZmluZWQsXHJcbiAgICAgIGNvbnRleHQ6IGN0eCxcclxuICAgICAgY2FtZXJhczogW1xyXG4gICAgICBdLFxyXG4gICAgICBjdXJyZW50X3Jvb206IHVuZGVmaW5lZCxcclxuICAgICAgZ2xvYmFsczogaW5pdF9zdGF0ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5vZmZzY3JlZW5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQgPSB0aGlzLm9mZnNjcmVlbl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgLy9ERUJVRyBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdhbWUgaXMgcnVubmluZyB3aXRoaW4gdGhlIGVkaXRvclxyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIC8vU2V0cyB1cCBzb21lIGdsb2JhbCBkZWJ1ZyBzdGF0ZSBhbmQgdGhlIGVkaXRvciBrZXliaW5kaW5nc1xyXG4gICAgICBkZWJ1Z19zZXR1cCgpO1xyXG4gICAgICAvL0luaXRpYWxpemVzIGEgc2VwYXJhdGUgbG9naWMgbG9vcCBzb2xlbHkgZm9yIHRoZSBlZGl0b3JcclxuICAgICAgLy9UaGlzIHNlcGFyYXRpb24gYWxsb3dzIGZvciB0aGUgZWRpdG9yIHRvIGludGVyYWN0IHdpdGggdGhlIGVudmlyb25tZW50IHdoaWxlXHJcbiAgICAgIC8vdGhlIGFjdHVhbCByb29tJ3Mgc3RhdGUgbG9vcCBpcyBwYXVzZWQuXHJcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5nZXRSb29tKCkpIHtcclxuICAgICAgICAgIC8vVGhpcyBmdW5jdGlvbnMgaGFuZGxlcyB0aGUgZWRpdG9yIGludGVyYWN0aW9ucyB3aXRoIHRoZSBnYW1lIGVudmlyb25tZW50XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZWYoMTYuNjYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTYuNjYpXHJcbiAgICB9XHJcbiAgICAvL0NyZWF0ZXMgYSBvbmNsaWNrIGZ1bmN0aW9uIG9uIHRoZSB3aW5kb3cgdGhhdCBoYW5kbGVzIGVsZW1lbnQgb25jbGljayBmdW5jdGlvbnNcclxuICAgIGluaXRfY2xpY2tfaGFuZGxlcih0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKHQ6IG51bWJlcikge1xyXG4gICAgLy90IGlzIGN1cnJlbnQgcmVuZGVyIHRpbWVcclxuICAgIGxldCBkZWx0YV90aW1lID0gdCAtIGxhc3RfcmVuZGVyX3RpbWVcclxuICAgIGxhc3RfcmVuZGVyX3RpbWUgPSB0O1xyXG4gICAgbGV0IGFsbF9jYW1lcmFzID0gdGhpcy5zdGF0ZS5jYW1lcmFzO1xyXG4gICAgbGV0IGVkaXRvcl9jYW1lcmFfaW5kZXggPSAtMTtcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5yZW5kZXJfZGVsdGFfdGltZSA9IGRlbHRhX3RpbWU7XHJcbiAgICAgIGFsbF9jYW1lcmFzID0gWy4uLmFsbF9jYW1lcmFzLCBkZWJ1Z19zdGF0ZS5jYW1lcmFdXHJcbiAgICAgIGVkaXRvcl9jYW1lcmFfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAvL1RoZSBlZGl0b3IgY2FtZXJhIGlzIGFsd2F5cyB0aGUgbGFzdCBjYW1lcmEgaW5zaWRlIHRoZSBjYW1lcmFzIGFycmF5XHJcbiAgICAgIC8vdGhlIGVkaXRvciBjYW1lcmEgaXMgcmVuZGVyZWQgdG8gYSBkaWZmZXJlbnQgY2FudmFzIHRoYW4gdGhlIG1haW4gZ2FtZSBjYW52YXNcclxuICAgICAgLy9zbyB3ZSB1c2UgdGhlIGNhbWVyYSdzIGluZGV4IHRvIGNoZWNrIHdoYXQgY2FudmFzIHRvIHJlbmRlciB0b1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxfY2FtZXJhcy5sZW5ndGg7IGErKykge1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIC8vV2UgcmVuZGVyIHRoZSBjYW1lcmFzIGNvbnRlbnRzIHRvIGFuIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29weSBpdHMgY29udGVudHNcclxuICAgICAgLy90byB0aGUgbWFpbiBjYW52YXMuXHJcbiAgICAgIC8vVGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgYW55IG1hdGggbmVlZGVkIHRvIGRldGVybWluZSBzcHJpdGVzIHRoYXQgYXJlIHBhcnRpYWxseSBvZmZzY3JlZW5cclxuICAgICAgLy9hcyBhbnkgb2Zmc2NyZWVuIHNlY3Rpb25zIG9mIHRoZSBzcHJpdGVzIHdpbGwgbm90IGJlIGNvcGllZCBvdmVyLCByYXRoZXIgdGhhbiBleHBsaWNpdGx5IFxyXG4gICAgICAvL2NhbGN1bGF0aW5nIHRoZSBjdXRvZmZzXHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIC8vVGhpcyBjb2xsaXNpb24gYm94IHJlcHJlc2VudHMgdGhlIGNhbWVyYSdzIGZpZWxkIG9mIHZpZXcgaW4gdGhlIGdhbWUgc3BhY2VcclxuICAgICAgLy9XZSB1c2UgdGhlIHJvb20ncyBjaGVja09iamVjdHMgZnVuY3Rpb24gdG8gZmluZCBhbnkgb2JqZWN0IHRoYXQgZXhpc3RzIHdpdGhpbiB0aGlzIGFyZWFcclxuICAgICAgLy9UaGVzZSBvYmplY3RzIGFyZSB0aGUgb2JqZWN0cyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgZm9yIHRoaXMgY2FtZXJhXHJcbiAgICAgIGxldCBjYW1lcmFfYm94ID0ge1xyXG4gICAgICAgIHg6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOiBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEgLyBjYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBwYXJ0aWNsZXMgd2l0aGluIHRoZSBjYW1lcmEncyBmb3ZcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tPYmplY3RzKGNhbWVyYV9ib3gsIFtdLCB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBvYmplY3RzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94KSwgLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG5cclxuICAgICAgbGV0IHJlbmRlcl9hcmdzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsXHJcbiAgICAgICAgY2FtZXJhOiBjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vUmVuZGVycyB0aGUgcm9vbSdzIGJhY2tncm91bmQuXHJcbiAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcil7XHJcbiAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICBzcHJpdGU6IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYoZGVsdGFfdGltZSksXHJcbiAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgeTogMCxcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlX3R5cGU6c2NhbGVfdHlwZS5ncm93XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9BcnJheSBvZiBoaXRib3hlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSByb29tXHJcbiAgICAgIGxldCBoaXRib3hlczogY29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGEgb2YgY2FtZXJhX2NvbGxpZGVycy5maWx0ZXIoKGIpID0+IGIucmVuZGVyKS5zb3J0KChhLCBiKSA9PiAoYS5sYXllciAtIGIubGF5ZXIpKSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyVHJhY2sodCk7XHJcblxyXG4gICAgICAgIC8vT2JqZWN0cyBjYW4gcmV0dXJuIGVpdGhlciBhIHNwcml0ZSwgb3IgYW4gYXJyYXkgb2Ygc3ByaXRlcyB0byBzaW1wbGlmeSB0aGUgQVBJXHJcbiAgICAgICAgLy9Gb3IgdGhlIHVzZXIsIGFuZCBmb3IgdXNlIGluIGNvbXBvc2l0ZSBvYmplY3RzKG9iamVjdCB0aGF0IGJ1bmRsZXMgb3RoZXIgb2JqZWN0cyB0b2dldGhlcilcclxuICAgICAgICAvL0ludGVybmFsbHksIHdlIGNvbnZlcnQgYW55IHNpbmdsZSBzcHJpdGUgaW50byBhbiBhcnJheSBvZiBvbmUgc3ByaXRlLlxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiBhLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsZTogYS5zdGF0ZS5zY2FsaW5nLFxyXG4gICAgICAgICAgICBzY2FsZV90eXBlOmEuc2NhbGVfdHlwZVxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL0hpdGJveGVzIGFyZSByZW5kZXJlZCBsYXRlIGluIHRoZSByZW5kZXIgbG9vcCwgdG8gZW5zdXJlIG9iamVjdHMgZG9uJ3Qgb3ZlcmxhcCB0aGVtXHJcbiAgICAgICAgLy9BcyB3ZSByZW5kZXIgb2JqZWN0cywgd2UgYWRkIHRoZWlyIGhpdGJveGVzIHRvIHRoaXMgbGlzdFxyXG4gICAgICAgIGlmIChERUJVRyAmJiBhLmNvbGxpc2lvbikge1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldEFsbENvbGxpc2lvbkJveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgaXMgYSBzcGVjaWFsIGNsYXNzIG9mIG9iamVjdCB0aGF0IGV4aXN0cyBpbiB0aGUgZ2FtZSB3b3JsZFxyXG4gICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpIHtcclxuICAgICAgICB0ZXh0X3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICB4OiBub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiBub2RlLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBmb250OiBub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2FtZXJhLmh1ZCkge1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICAvL1JlbmRlcnMgc3RhdGljIGdyYXBoaWNzIHRoYXQgYXJlIGEgcGFydCBvZiB0aGUgaHVkXHJcbiAgICAgICAgZm9yIChsZXQgZ3JhcGhpYyBvZiBncmFwaGljcykge1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gZ3JhcGhpYy5yZW5kZXJUcmFjayh0KTtcclxuICAgICAgICAgIGlmIChncmFwaGljLnJlbmRlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBncmFwaGljLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IGdyYXBoaWMuc3RhdGUuc2NhbGluZyxcclxuICAgICAgICAgICAgICAgIHNjYWxlX3R5cGU6Z3JhcGhpYy5zY2FsZV90eXBlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdGV4dCBvZiB0ZXh0X2VsZW1lbnRzKSB7XHJcbiAgICAgICAgICBodWRfdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICB4OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRleHQuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDogdGV4dC5yZW5kZXJmKHQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0lmIGEgY2FtZXJhIGlzIG1hcmtlZCBhcyBhIGRlYnVnIGNhbWVyYSwgd2UgcmVuZGVyIHRoZVxyXG4gICAgICAvLyAgaGl0Ym94ZXMsIGFuZCBwb3RlbnRpYWxseSB1cGRhdGUgdGhlIGVkaXRvclxyXG4gICAgICBpZiAoY2FtZXJhLnN0YXRlLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGJveDogY29sbGlzaW9uX2JveDtcclxuICAgICAgICBsZXQgYm94ZXNfY29weSA9IFsuLi5ib3hlc11cclxuICAgICAgICB3aGlsZSAoYm94ZXNfY29weS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiI0ZGMDAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaGl0Ym94ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHJlY3QsIGJveC54LCBib3gueSwgXCIjMDA4MDAwXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRHJhd3MgYSBzcGVjaWFsIGJveCBhcm91bmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICAgICAgLy9pbnNpZGUgdGhlIGVkaXRvciBVSVxyXG4gICAgICAgIGlmIChERUJVRyAmJiBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBjb2xsID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50LmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgICAgIHJlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgeyB3aWR0aDogMjUsIGhlaWdodDogMjUgfSwgY29sbC54LCBjb2xsLnksIFwic2t5Ymx1ZVwiLCAxMCwgY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCBjb2xsLCBjb2xsLngsIGNvbGwueSwgXCJibHVlXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vU2VwYXJhdGUgY2FudmFzIGZvciB0aGUgZWRpdG9yIGNhbWVyYVxyXG4gICAgICBpZiAoYSAhPT0gZWRpdG9yX2NhbWVyYV9pbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLCBjYW1lcmEuc3RhdGUudmlld3BvcnQueCwgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnRhcmdldC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKERFQlVHKVxyXG4gICAgICBib3hlcyA9IFtdO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChhKSA9PiB7IHRoaXMucmVuZGVyKGEpIH0pO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOiBudW1iZXIpIHtcclxuICAgIC8vdGhpcyBpcyB0aGUgcm9vbSdzIHN0YXRlIGxvb3BcclxuICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3X3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBpZiAoIVBBVVNFRCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aW1lX3NpbmNlID0gbmV3X3RpbWUuZ2V0VGltZSgpIC0gbGFzdF90aW1lLmdldFRpbWUoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20pIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkLnN0YXRlZih0aW1lX3NpbmNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGFzdF90aW1lID0gbmV3X3RpbWU7XHJcbiAgICAgIC8vVGhpcyBmdW5jdGlvbnMgaGFuZGxlcyBiaW5kcyB0aGF0IG9jY3VyIG9uIGFuIGludGVydmFsXHJcbiAgICAgIEV4ZWN1dGVSZXBlYXRCaW5kcyhhKTtcclxuICAgIH0sIGEpO1xyXG4gIH1cclxuICBnZXRSb29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY3VycmVudF9yb29tO1xyXG4gIH1cclxuICBhc3luYyBsb2FkUm9vbVN0cmluZyh4OiBzdHJpbmcpIHtcclxuICAgIC8vcm9vbSBsaXN0IGlzIGEgb2JqZWN0IHRoYXQgY29udGFpbnMgZWFjaCByb29tJ3MgY2xhc3MsXHJcbiAgICAvL3dpdGggdGhlIHJvb20ncyBuYW1lIGFzIHRoZSBrZXkgZm9yIGNsYXNzXHJcbiAgICAvL1RoaXMgb2JqZWN0IGlzIHBvcHVsYXRlZCBhdCBjb21waWxlIHRpbWVcclxuICAgIGZvciAobGV0IGEgb2YgT2JqZWN0LmtleXMocm9vbV9saXN0KSkge1xyXG4gICAgICBpZiAoYSA9PSB4KSB7XHJcbiAgICAgICAgLy90aGlzIGlzbid0IHBhcnRpY3VsYXJseSB0eXBlLXNhZmUuXHJcbiAgICAgICAgbGV0IG5ld19yb29tID0gPHJvb208e30+Pm5ldyByb29tX2xpc3RbYV0odGhpcylcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRSb29tKG5ld19yb29tKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFJvb20oeDogcm9vbTx1bmtub3duPikge1xyXG4gICAgLy9DbGVhcnMgdGhlIHJvb20ncyBsb2dpYyBsb29wIGlmIG9uZVxyXG4gICAgLy9XYXMgYWxyZWFkeSBydW5uaW5nXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dpYykge1xyXG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmxvZ2ljKTtcclxuICAgIH1cclxuICAgIC8vVGhpcyByZWZlcmVuY2UgaXMgdXNlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb25cclxuICAgIHguZ2FtZSA9IHRoaXM7XHJcbiAgICAvL0RlbGV0ZXMgZWFjaCBvYmplY3QgaW4gdGhlIHJvb20gKHdoaWNoIGFsc28gdW5iaW5kcyB0aGVpciBiaW5kcyksXHJcbiAgICAvL2FuZCB1bmJpbmRzIHRoZSByb29tJ3MgYmluZGluZ3MuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB3aGlsZSAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ub2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ub2JqZWN0c1swXS5kZWxldGUoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpZCBvZiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5iaW5kcykge1xyXG4gICAgICAgIFVuYmluZChpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBuZXdfcm9vbSA9IGF3YWl0IHgubG9hZCgpO1xyXG4gICAgeC5yZWdpc3RlckNvbnRyb2xzKCk7XHJcbiAgICB4LnJlZ2lzdGVyUGFydGljbGVzKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS5sb2dpYyA9IHRoaXMuc3RhcnRfbG9naWMobG9naWNfbG9vcF9pbnRlcnZhbClcclxuICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tID0geDtcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCk7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCk7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNSZW5kZXJpbmcpIHtcclxuICAgICAgLy9UaGlzIHN0YXJ0cyB0aGUgcmVuZGVyIGxvb3AgZm9yIHRoZSByb29tXHJcbiAgICAgIHRoaXMucmVuZGVyKDApO1xyXG4gICAgICB0aGlzLmlzUmVuZGVyaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==