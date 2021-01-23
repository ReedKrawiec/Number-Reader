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
    side_length: {
        height: 28,
        width: 56
    }
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

module.exports = JSON.parse("{\"objects\":[{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":560,\"y\":140},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":28}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":280,\"y\":280},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":56,\"height\":1}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":0,\"y\":140},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":1,\"height\":28}},\"parameters\":{}},{\"type\":\"paint_border\",\"state\":{\"position\":{\"x\":280,\"y\":0},\"velocity\":{\"x\":0,\"y\":0},\"rotation\":0,\"scaling\":{\"width\":56,\"height\":1}},\"parameters\":{}}]}");

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
            x: game.state.globals.side_length.width / 2 * 10,
            y: game.state.globals.side_length.height / 2 * 10,
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
    sendTensor() {
        return __awaiter(this, void 0, void 0, function* () {
            let getY = (a) => this.game.state.globals.side_length.height - 1 - a;
            let tensor = zero2D(this.game.state.globals.side_length.height, this.game.state.globals.side_length.width);
            let visited = zero2D(this.game.state.globals.side_length.height, this.game.state.globals.side_length.width);
            let num_container = [];
            let current_num = undefined;
            let threshold = 3;
            let thresholder = (b, a) => {
                for (let y_thresh = -threshold; y_thresh < threshold; y_thresh++) {
                    for (let x_thresh = -threshold; x_thresh < threshold; x_thresh++) {
                        if (b + y_thresh >= 0 && b + y_thresh < side_length.height && a + x_thresh >= 0 && a + x_thresh < side_length.width) {
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
            for (let a = side_length.height - 1; a >= 0; a--) {
                for (let b = 0; b < side_length.width; b++) {
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
                let arr_n = zero2D(28, 28);
                let x_offset = (side_length.width / 2 - Math.round(num.average_x));
                let y_offset = (side_length.height / 2 - Math.round(num.average_y));
                num.cords = num.cords.map((a) => [a[0] + y_offset - (side_length.height - 28) / 2, a[1] + x_offset - (side_length.width - 28) / 2]);
                for (let c of num.cords) {
                    arr_n[c[0]][c[1]] = 1;
                }
                let to_send = num.cords.map((o) => `[${o[0]},${o[1]}]`).join(",");
                console.log(`average x:${num.average_x} | average y:${num.average_y}`);
                this.logArray(arr_n);
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
    logArray(arr) {
        console.log(arr.map((x) => {
            return x.map((y) => {
                if (y == 0)
                    return "▯";
                return "▮";
            }).join("");
        }).join("\n"));
    }
    registerControls() {
        this.bindControl("mouse0down", controls_1.exec_type.repeat, () => {
            let mouse = controls_1.Poll_Mouse(this.game.state.cameras[0]);
            let side_length = this.game.state.globals.side_length;
            if (mouse) {
                let grid_mouse = {
                    x: Math.floor(mouse.x / 10) * 10,
                    y: Math.floor(mouse.y / 10) * 10
                };
                if (grid_mouse.x > 0 && grid_mouse.x < 10 * side_length.width && grid_mouse.y > 0 && grid_mouse.y < 10 * side_length.height - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3BhaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGFpbnRfYm9yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3BhaW50X3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcm9vbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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SUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN4RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUks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QWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDakssSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3BFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckosSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakssSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3JELE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FB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QUFTLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDN0M7Z0JBQ0QsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7b0JBQzVDLGlCQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ1o7YUFDRjtZQUNELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXRCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7WUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksYUFBSyxFQUFFO2dCQUNULDhCQUFzQixFQUFFLENBQUM7Z0JBQ3pCLDRCQUFvQixFQUFFLENBQUM7Z0JBQ3ZCLDZCQUFxQixFQUFFLENBQUM7YUFDekI7WUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDckIsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFuUkQsb0JBbVJDIiwiZmlsZSI6InZhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7VmVjdG9yLG9ial9zdGF0ZSxyb29tX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7Z2FtZSxHZXRWaWV3cG9ydERpbWVuc2lvbnMsdmlld3BvcnR9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmxldCBjYW52YXNfZWxlbWVudDpIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cgeyBmdW5jdGlvbnM6IGFueTsgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBhaW50ZXJfc3RhdGV7XHJcbiAgc2lkZV9sZW5ndGg6e1xyXG4gICAgd2lkdGg6bnVtYmVyLFxyXG4gICAgaGVpZ2h0Om51bWJlclxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBnID0gbmV3IGdhbWU8cGFpbnRlcl9zdGF0ZT4oY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLHtcclxuICBzaWRlX2xlbmd0aDp7XHJcbiAgICBoZWlnaHQ6MjgsXHJcbiAgICB3aWR0aDo1NlxyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuZnVuY3Rpb25zID0ge307XHJcblxyXG53aW5kb3cuZnVuY3Rpb25zLnJlc2V0ID0gKCkgPT4ge1xyXG4gIGxldCBvYmplY3RzID0gZy5nZXRSb29tKCkub2JqZWN0cy5maWx0ZXIoKG8pPT5vLnRhZ3NbMF09PVwicGFpbnRcIik7XHJcbiAgb2JqZWN0cy5mb3JFYWNoKChvKT0+by5kZWxldGUoKSk7XHJcbn1cclxuXHJcbmcubG9hZFJvb21TdHJpbmcoXCJwYWludF9yb29tXCIpO1xyXG5cclxuIiwiXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbmltcG9ydCB7IHNwcml0ZV9nZW4gfSBmcm9tIFwiLi4vLi4vbGliL3Nwcml0ZVwiO1xuaW1wb3J0IHsgb2JqX3N0YXRlLCBWZWN0b3IgfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XG5cbmludGVyZmFjZSBwYWludF9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcbiAgY29sb3JlZDpib29sZWFuXG59XG4gICAgXG5pbnRlcmZhY2UgcGFpbnRfcGFyYW1ldGVyc3tcbiAgICBcbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBwYWludCBleHRlbmRzIG9iantcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3BhaW50LnBuZ1wiO1xuICBoZWlnaHQgPSAxMDtcbiAgd2lkdGggPSAxMDtcbiAgY29sbGlzaW9uID0gZmFsc2U7XG4gIHN0YXRlOnBhaW50X3N0YXRlO1xuICByZW5kZXIgPSB0cnVlO1xuICB0aWNrX3N0YXRlOmZhbHNlO1xuICBwYXJhbXM6cGFpbnRfcGFyYW1ldGVycztcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnBhaW50X3BhcmFtZXRlcnMgPSB7fVxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zOnBhaW50X3BhcmFtZXRlcnMgPSBwYWludC5kZWZhdWx0X3BhcmFtcyl7XG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgICB0aGlzLnN0YXRlLmNvbG9yZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRhZ3MucHVzaChcInBhaW50XCIpO1xuICB9XG4gIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgXG4gIH1cbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgbGV0IHNwcml0ZXMgPSBzcHJpdGVfZ2VuKHRoaXMuc3ByaXRlX3NoZWV0LHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xuICAgIGxldCBzZWxlY3RlZDtcbiAgICBpZih0aGlzLnN0YXRlLmNvbG9yZWQpe1xuICAgICAgc2VsZWN0ZWQgPSBzcHJpdGVzWzBdWzFdO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgc2VsZWN0ZWQgPSBzcHJpdGVzWzBdWzBdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXG4gICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcbiAgICAgIHNwcml0ZTpzZWxlY3RlZFxuICAgIH1cbiAgfVxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfYXVkaW8oKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgfVxufVxuICAgICIsIlxuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG5pbXBvcnQgeyBvYmpfc3RhdGUsIFZlY3RvciB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcblxuaW50ZXJmYWNlIHBhaW50X2JvcmRlcl9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcbiAgICBcbn1cbiAgICBcbmludGVyZmFjZSBwYWludF9ib3JkZXJfcGFyYW1ldGVyc3tcbiAgICBcbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBwYWludF9ib3JkZXIgZXh0ZW5kcyBvYmp7XG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9wYWludC5wbmdcIjtcbiAgaGVpZ2h0ID0gMTA7XG4gIHdpZHRoID0gMTA7XG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xuICByZW5kZXIgPSB0cnVlO1xuICBwYXJhbXM6cGFpbnRfYm9yZGVyX3BhcmFtZXRlcnM7XG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpwYWludF9ib3JkZXJfcGFyYW1ldGVycyA9IHt9XG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGFpbnRfYm9yZGVyX3BhcmFtZXRlcnMgPSBwYWludF9ib3JkZXIuZGVmYXVsdF9wYXJhbXMpe1xuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XG4gIH1cbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICBcbiAgfVxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICByZXR1cm4gc3VwZXIucmVuZGVyZih0aW1lX2RlbHRhKTsgXG4gIH1cbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcbiAgICAgICAgXG4gIH1cbn1cbiAgICAiLCJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuaW1wb3J0IHsgb2JqX3N0YXRlLCBWZWN0b3J9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcblxuaW50ZXJmYWNlIHBsYWNlaG9sZGVyX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICAgIFxufVxuICAgIFxuaW50ZXJmYWNlIHBsYWNlaG9sZGVyX3BhcmFtZXRlcnN7XG4gICAgXG59XG4gICAgXG5leHBvcnQgY2xhc3MgcGxhY2Vob2xkZXIgZXh0ZW5kcyBvYmp7XG4gIHNwcml0ZV91cmwgPSBcIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcbiAgaGVpZ2h0ID0gMTAwO1xuICB3aWR0aCA9IDEwMDtcbiAgdGFnczpBcnJheTxzdHJpbmc+ID0gW107XG4gIGNvbGxpc2lvbiA9IHRydWU7XG4gIHJlbmRlciA9IHRydWU7XG4gIHBhcmFtczpwbGFjZWhvbGRlcl9wYXJhbWV0ZXJzO1xuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6cGxhY2Vob2xkZXJfcGFyYW1ldGVycyA9IHt9XG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGxhY2Vob2xkZXJfcGFyYW1ldGVycyA9IHBsYWNlaG9sZGVyLmRlZmF1bHRfcGFyYW1zKXtcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xuICB9XG4gIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICAgXG4gIH1cbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XG4gICByZXR1cm4gc3VwZXIucmVuZGVyZih0aW1lX2RlbHRhKTsgXG4gIH1cbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcbiAgICAgICAgXG4gIH1cbn1cbiAgICAiLCJcbmludGVyZmFjZSBwcmVmYWJzIHtcbiAgW2luZGV4OnN0cmluZ106YW55XG59XG5pbXBvcnQge3BhaW50fSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHtwYWludF9ib3JkZXJ9IGZyb20gXCIuL3BhaW50X2JvcmRlclwiO1xuaW1wb3J0IHtwbGFjZWhvbGRlcn0gZnJvbSBcIi4vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBsZXQgcHJlZmFiczpwcmVmYWJzID0ge1xuXHRwYWludDpwYWludCxcblx0cGFpbnRfYm9yZGVyOnBhaW50X2JvcmRlcixcblx0cGxhY2Vob2xkZXI6cGxhY2Vob2xkZXIsXG59IiwiaW1wb3J0IHsgcm9vbSB9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuaW1wb3J0IHsgZ2FtZSwgdmlld3BvcnQgfSBmcm9tIFwiLi4vLi4vdmFuXCI7XG5pbXBvcnQgeyBzdGF0ZV9jb25maWcgfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcbmltcG9ydCB7IHBhaW50ZXJfc3RhdGUsIGcgfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL3BhaW50X3Jvb20uanNvblwiO1xuaW1wb3J0IHsgcGFpbnQgfSBmcm9tIFwiLi4vb2JqZWN0cy9wYWludFwiO1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IGV4ZWNfdHlwZSwgUG9sbF9Nb3VzZSB9IGZyb20gXCIuLi8uLi9saWIvY29udHJvbHNcIjtcbmltcG9ydCB7IFRleHQsIEhVRCB9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XG5sZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcblxuXG5jbGFzcyBwYWludF9odWQgZXh0ZW5kcyBIVUQge1xuICBzZXRUZXh0RWxlbWVudHMoKTogVGV4dFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFRleHQoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHg6IHZpZXdwb3J0LndpZHRoICogLjUsXG4gICAgICAgICAgeTogdmlld3BvcnQuaGVpZ2h0ICogNyAvIDhcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogMzAsXG4gICAgICAgIGZvbnQ6IFwiQWxhdGFcIixcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHNjYWxpbmc6IDFcbiAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgcm9vbSA9IGcuZ2V0Um9vbSgpIGFzIHBhaW50X3Jvb207XG4gICAgICAgICAgcmV0dXJuIGBMYXN0IFByZWRpY3Rpb246ICR7cm9vbS5zdGF0ZS5sYXN0X3ByZWRpY3Rpb259YDtcbiAgICAgICAgfSlcbiAgICBdO1xuICB9XG59XG5cbmludGVyZmFjZSBwYWludF9yb29tX3N0YXRlIHtcbiAgdGltZXI6IG51bWJlcixcbiAgaGFzX3NlbnQ6IGJvb2xlYW4sXG4gIGxhc3RfcHJlZGljdGlvbjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIHplcm8yRChyb3dzOiBudW1iZXIsIGNvbHM6IG51bWJlcikge1xuICB2YXIgYXJyYXkgPSBbXSwgcm93ID0gW107XG4gIHdoaWxlIChjb2xzLS0pIHJvdy5wdXNoKDApO1xuICB3aGlsZSAocm93cy0tKSBhcnJheS5wdXNoKHJvdy5zbGljZSgpKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5pbnRlcmZhY2UgbnVtIHtcbiAgY29yZHM6IG51bWJlcltdW11cbiAgYXZlcmFnZV94OiBudW1iZXIsXG4gIGF2ZXJhZ2VfeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBwYWludF9yb29tIGV4dGVuZHMgcm9vbTxwYWludF9yb29tX3N0YXRlPntcbiAgYmFja2dyb3VuZF91cmwgPSBcIi4vc3ByaXRlcy9wYWludC5wbmdcIjtcbiAgZ2FtZTogZ2FtZTxwYWludGVyX3N0YXRlPjtcbiAgcmVuZGVyID0gZmFsc2U7XG4gIHN0YXRlOiBwYWludF9yb29tX3N0YXRlO1xuICB3YWl0X3RpbWU6IG51bWJlciA9IDE1MDA7XG4gIGNvbnN0cnVjdG9yKGdhbWU6IGdhbWU8cGFpbnRlcl9zdGF0ZT4pIHtcbiAgICBzdXBlcihnYW1lLCBjZmlnKTtcbiAgICB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcy5wdXNoKG5ldyBDYW1lcmEoe1xuICAgICAgeDogZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLndpZHRoIC8gMiAqIDEwLFxuICAgICAgeTogZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLmhlaWdodCAvIDIgKiAxMCxcbiAgICAgIGRpbWVuc2lvbnM6IHZpZXdwb3J0LFxuICAgICAgc2NhbGluZzogMS41LFxuICAgICAgZGVidWc6IGZhbHNlXG4gICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIG5ldyBwYWludF9odWQoKVxuICAgICkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lcjogMCxcbiAgICAgIGhhc19zZW50OiB0cnVlLFxuICAgICAgbGFzdF9wcmVkaWN0aW9uOiBcIlwiXG4gICAgfVxuICB9XG4gIGFzeW5jIHNlbmRUZW5zb3IoKSB7XG4gICAgbGV0IGdldFkgPSAoYTogbnVtYmVyKSA9PiB0aGlzLmdhbWUuc3RhdGUuZ2xvYmFscy5zaWRlX2xlbmd0aC5oZWlnaHQgLSAxIC0gYTtcbiAgICBsZXQgdGVuc29yOiBudW1iZXJbXVtdID0gemVybzJEKHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLmhlaWdodCwgdGhpcy5nYW1lLnN0YXRlLmdsb2JhbHMuc2lkZV9sZW5ndGgud2lkdGgpO1xuICAgIGxldCB2aXNpdGVkOiBudW1iZXJbXVtdID0gemVybzJEKHRoaXMuZ2FtZS5zdGF0ZS5nbG9iYWxzLnNpZGVfbGVuZ3RoLmhlaWdodCwgdGhpcy5nYW1lLnN0YXRlLmdsb2JhbHMuc2lkZV9sZW5ndGgud2lkdGgpO1xuICAgIGxldCBudW1fY29udGFpbmVyOiBudW1bXSA9IFtdO1xuICAgIGxldCBjdXJyZW50X251bTogbnVtYmVyW11bXSA9IHVuZGVmaW5lZDtcblxuICAgIGxldCB0aHJlc2hvbGQgPSAzO1xuXG5cbiAgICBsZXQgdGhyZXNob2xkZXIgPSAoYjogbnVtYmVyLCBhOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAobGV0IHlfdGhyZXNoID0gLSB0aHJlc2hvbGQ7IHlfdGhyZXNoIDwgdGhyZXNob2xkOyB5X3RocmVzaCsrKSB7XG4gICAgICAgIGZvciAobGV0IHhfdGhyZXNoID0gLXRocmVzaG9sZDsgeF90aHJlc2ggPCB0aHJlc2hvbGQ7IHhfdGhyZXNoKyspIHtcblxuICAgICAgICAgIGlmIChiICsgeV90aHJlc2ggPj0gMCAmJiBiICsgeV90aHJlc2ggPCBzaWRlX2xlbmd0aC5oZWlnaHQgJiYgYSArIHhfdGhyZXNoID49IDAgJiYgYSArIHhfdGhyZXNoIDwgc2lkZV9sZW5ndGgud2lkdGgpIHtcbiAgICAgICAgICAgIGlmICh0ZW5zb3JbYiArIHlfdGhyZXNoXVthICsgeF90aHJlc2hdID09PSAxICYmIHZpc2l0ZWRbYiArIHlfdGhyZXNoXVthICsgeF90aHJlc2hdID09PSAwKSB7XG4gICAgICAgICAgICAgIHZpc2l0ZWRbYiArIHlfdGhyZXNoXVthICsgeF90aHJlc2hdID0gMTtcbiAgICAgICAgICAgICAgY3VycmVudF9udW0ucHVzaChbYiArIHlfdGhyZXNoLCBhICsgeF90aHJlc2hdKTtcbiAgICAgICAgICAgICAgdGhyZXNob2xkZXIoYiArIHlfdGhyZXNoLCBhICsgeF90aHJlc2gpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vYmplY3RzLmZpbHRlcigobykgPT4gby50YWdzWzBdID09IFwicGFpbnRcIikuZm9yRWFjaCgobykgPT4ge1xuICAgICAgbGV0IHBvcyA9IG8uc3RhdGUucG9zaXRpb247XG4gICAgICB0ZW5zb3JbZ2V0WShwb3MueSAvIDEwKV1bcG9zLnggLyAxMF0gPSAxO1xuICAgIH0pXG4gICAgbGV0IHNpZGVfbGVuZ3RoID0gdGhpcy5nYW1lLnN0YXRlLmdsb2JhbHMuc2lkZV9sZW5ndGg7XG4gICAgZm9yIChsZXQgYSA9IHNpZGVfbGVuZ3RoLmhlaWdodCAtIDE7IGEgPj0gMDsgYS0tKSB7XG4gICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHNpZGVfbGVuZ3RoLndpZHRoOyBiKyspIHtcbiAgICAgICAgaWYgKHRlbnNvclthXVtiXSA9PT0gMSAmJiB2aXNpdGVkW2FdW2JdID09PSAwKSB7XG4gICAgICAgICAgdmlzaXRlZFthXVtiXSA9IDE7XG4gICAgICAgICAgY3VycmVudF9udW0gPSBbXTtcbiAgICAgICAgICB0aHJlc2hvbGRlcihhLCBiKTtcbiAgICAgICAgICBsZXQgeF9zdW0gPSAwLCB5X3N1bSA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgYyBvZiBjdXJyZW50X251bSkge1xuICAgICAgICAgICAgeV9zdW0gKz0gY1swXTtcbiAgICAgICAgICAgIHhfc3VtICs9IGNbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bV9jb250YWluZXIucHVzaCh7XG4gICAgICAgICAgICBjb3JkczogY3VycmVudF9udW0sXG4gICAgICAgICAgICBhdmVyYWdlX3g6IHhfc3VtIC8gY3VycmVudF9udW0ubGVuZ3RoLFxuICAgICAgICAgICAgYXZlcmFnZV95OiB5X3N1bSAvIGN1cnJlbnRfbnVtLmxlbmd0aFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG51bV9jb250YWluZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIChhLmF2ZXJhZ2VfeCAtIGIuYXZlcmFnZV94KVxuICAgIH0pO1xuICAgIGxldCBmaW5hbF9udW0gPSBcIlwiO1xuICAgIGZvciAobGV0IG51bSBvZiBudW1fY29udGFpbmVyKSB7XG4gICAgICBsZXQgYXJyX24gPSB6ZXJvMkQoMjgsIDI4KTtcbiAgICAgIGxldCB4X29mZnNldCA9IChzaWRlX2xlbmd0aC53aWR0aCAvIDIgLSBNYXRoLnJvdW5kKG51bS5hdmVyYWdlX3gpKTtcbiAgICAgIGxldCB5X29mZnNldCA9IChzaWRlX2xlbmd0aC5oZWlnaHQgLyAyIC0gTWF0aC5yb3VuZChudW0uYXZlcmFnZV95KSk7XG4gICAgICBudW0uY29yZHMgPSBudW0uY29yZHMubWFwKChhKSA9PiBbYVswXSArIHlfb2Zmc2V0IC0gKHNpZGVfbGVuZ3RoLmhlaWdodCAtIDI4KSAvIDIsIGFbMV0gKyB4X29mZnNldCAtIChzaWRlX2xlbmd0aC53aWR0aCAtIDI4KSAvIDJdKTtcbiAgICAgIGZvciAobGV0IGMgb2YgbnVtLmNvcmRzKSB7XG4gICAgICAgIGFycl9uW2NbMF1dW2NbMV1dID0gMTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRvX3NlbmQgPSBudW0uY29yZHMubWFwKChvKSA9PiBgWyR7b1swXX0sJHtvWzFdfV1gKS5qb2luKFwiLFwiKTtcblxuICAgICAgY29uc29sZS5sb2coYGF2ZXJhZ2UgeDoke251bS5hdmVyYWdlX3h9IHwgYXZlcmFnZSB5OiR7bnVtLmF2ZXJhZ2VfeX1gKTtcbiAgICAgIHRoaXMubG9nQXJyYXkoYXJyX24pO1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2V2YWx1YXRlXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBge1wiaW5wdXR0ZWRcIjpbJHt0b19zZW5kfV19YFxuICAgICAgfSlcblxuICAgICAgbGV0IGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBmaW5hbF9udW0gPSBmaW5hbF9udW0gKyBhO1xuXG4gICAgfVxuICAgIHRoaXMuc3RhdGUubGFzdF9wcmVkaWN0aW9uID0gZmluYWxfbnVtO1xuXG4gIH1cbiAgbG9nQXJyYXkoYXJyOiBudW1iZXJbXVtdKSB7XG4gICAgY29uc29sZS5sb2coYXJyLm1hcCgoeDogbnVtYmVyW10pID0+IHtcbiAgICAgIHJldHVybiB4Lm1hcCgoeTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh5ID09IDApIHJldHVybiBcIuKWr1wiO1xuICAgICAgICByZXR1cm4gXCLilq5cIlxuICAgICAgfSkuam9pbihcIlwiKVxuICAgIH0pLmpvaW4oXCJcXG5cIikpO1xuICB9XG4gIHJlZ2lzdGVyQ29udHJvbHMoKSB7XG4gICAgdGhpcy5iaW5kQ29udHJvbChcIm1vdXNlMGRvd25cIiwgZXhlY190eXBlLnJlcGVhdCwgKCkgPT4ge1xuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZSh0aGlzLmdhbWUuc3RhdGUuY2FtZXJhc1swXSk7XG4gICAgICBsZXQgc2lkZV9sZW5ndGggPSB0aGlzLmdhbWUuc3RhdGUuZ2xvYmFscy5zaWRlX2xlbmd0aDtcbiAgICAgIGlmIChtb3VzZSkge1xuICAgICAgICBsZXQgZ3JpZF9tb3VzZSA9IHtcbiAgICAgICAgICB4OiBNYXRoLmZsb29yKG1vdXNlLnggLyAxMCkgKiAxMCxcbiAgICAgICAgICB5OiBNYXRoLmZsb29yKG1vdXNlLnkgLyAxMCkgKiAxMFxuICAgICAgICB9XG4gICAgICAgIGlmIChncmlkX21vdXNlLnggPiAwICYmIGdyaWRfbW91c2UueCA8IDEwICogc2lkZV9sZW5ndGgud2lkdGggJiYgZ3JpZF9tb3VzZS55ID4gMCAmJiBncmlkX21vdXNlLnkgPCAxMCAqIHNpZGVfbGVuZ3RoLmhlaWdodCAtIDEpIHtcbiAgICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5jaGVja09iamVjdHNQb2ludEluY2x1c2l2ZShncmlkX21vdXNlLCBbXCJwYWludFwiXSkgYXMgcGFpbnRbXTtcbiAgICAgICAgICBpZiAoIXBpeGVsc1swXSkge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKG5ldyBwYWludCh7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBncmlkX21vdXNlLFxuICAgICAgICAgICAgICB2ZWxvY2l0eToge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgICAgc2NhbGluZzoge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaGFzX3NlbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDEpXG4gIH1cbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKSB7XG5cbiAgfVxuICBzdGF0ZWYoZGVsdGFfdGltZTogbnVtYmVyKSB7XG4gICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xuICAgIHRoaXMuc3RhdGUudGltZXIgKz0gZGVsdGFfdGltZTtcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lciA+IHRoaXMud2FpdF90aW1lICYmICF0aGlzLnN0YXRlLmhhc19zZW50KSB7XG4gICAgICB0aGlzLnNlbmRUZW5zb3IoKTtcbiAgICAgIGxldCBvYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcigobykgPT4gby50YWdzWzBdID09IFwicGFpbnRcIik7XG4gICAgICBvYmplY3RzLmZvckVhY2goKG8pID0+IG8uZGVsZXRlKCkpO1xuICAgICAgdGhpcy5zdGF0ZS5oYXNfc2VudCA9IHRydWU7XG4gICAgfVxuICB9XG5cbn1cblxuIiwiXG4gICAgXG4gICAgaW1wb3J0IHtyb29tfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcbiAgICBpbXBvcnQge2dhbWUsIHZpZXdwb3J0fSBmcm9tIFwiLi4vLi4vdmFuXCI7XG4gICAgaW1wb3J0IHtzdGF0ZV9jb25maWd9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuICAgIGltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi9wbGFjZWhvbGRlci5qc29uXCI7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vLi4vbGliL3JlbmRlclwiO1xuICAgIGxldCBjZmlnID0gY29uZmlnIGFzIHVua25vd24gYXMgc3RhdGVfY29uZmlnO1xuICAgIGludGVyZmFjZSBwbGFjZWhvbGRlcl9zdGF0ZXtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIHBsYWNlaG9sZGVyIGV4dGVuZHMgcm9vbTxwbGFjZWhvbGRlcl9zdGF0ZT57XG4gICAgICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcbiAgICAgIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XG4gICAgICAgIHN1cGVyKGdhbWUsY2ZpZyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzLnB1c2gobmV3IENhbWVyYSh7XG4gICAgICAgICAgeDowLFxuICAgICAgICAgIHk6MCxcbiAgICAgICAgICBkaW1lbnNpb25zOnZpZXdwb3J0LFxuICAgICAgICAgIHNjYWxpbmc6MSxcbiAgICAgICAgICBkZWJ1ZzpmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDowLFxuICAgICAgICAgIHk6MCxcbiAgICAgICAgICBoZWlnaHQ6MSxcbiAgICAgICAgICB3aWR0aDoxXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJDb250cm9scygpe1xuICAgIFxuICAgICAgfVxuICAgICAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcbiAgICBcbiAgICAgIH1cbiAgICAgIHN0YXRlZihkZWx0YV90aW1lOm51bWJlcil7XG4gICAgICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG4gICAgXG4gICAgIiwiXG5pbnRlcmZhY2Ugcm9vbV9kaXIge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7cGFpbnRfcm9vbX0gZnJvbSBcIi4vcGFpbnRfcm9vbVwiO1xuaW1wb3J0IHtwbGFjZWhvbGRlcn0gZnJvbSBcIi4vcGxhY2Vob2xkZXJcIjtcbmV4cG9ydCBsZXQgcm9vbXM6cm9vbV9kaXIgPSB7XG5cdHBhaW50X3Jvb206cGFpbnRfcm9vbSxcblx0cGxhY2Vob2xkZXI6cGxhY2Vob2xkZXIsXG59IiwiaW1wb3J0IHsgcm9vdF9wYXRoLCBwYXRoIH0gZnJvbSBcIi4vZGVidWdcIjtcclxuaW1wb3J0IHsgREVCVUcgfSBmcm9tIFwiLi4vdmFuXCI7XHJcblxyXG5pbnRlcmZhY2Ugc291bmRfc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBhdWRpbyB7XHJcbiAgc291bmRzOiBzb3VuZF9zdG9yYWdlID0ge307XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgIGxldCBwID0gdXJsO1xyXG4gICAgaWYgKERFQlVHKSB7XHJcbiAgICAgIHAgPSBwYXRoLmpvaW4ocm9vdF9wYXRoLCB1cmwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zb3VuZHNbbmFtZV0gPSBuZXcgQXVkaW8ocCk7XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc291bmRzKTtcclxuICAgIGxldCBwcm9taXNlcyA9IGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnNvdW5kc1trZXldLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHggPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgIHJldHVybiAoeCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcGxheShuYW1lOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgYSA9IHRoaXMuc291bmRzW25hbWVdO1xyXG4gICAgYS5wYXVzZSgpXHJcbiAgICBhLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGEudm9sdW1lID0gdm9sdW1lO1xyXG4gICAgYS5wbGF5KCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtvYmosZ2V0SWR9IGZyb20gXCIuLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7b2JqX3N0YXRlfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcbmltcG9ydCB7ZGVlcH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb2xsaXNpb25fYm94e1xyXG4gIHg6bnVtYmVyO1xyXG4gIHk6bnVtYmVyO1xyXG4gIHdpZHRoOm51bWJlcjtcclxuICBoZWlnaHQ6bnVtYmVyO1xyXG59XHJcblxyXG5lbnVtIGRpcmVjdGlvbntcclxuICBsZWZ0LFxyXG4gIHJpZ2h0LFxyXG4gIHVwLFxyXG4gIGRvd25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVuY29tcGFzc2luZ0JveChvYmplY3RzOm9ialtdKTpjb2xsaXNpb25fYm94e1xyXG4gIGxldCBmaXJzdF9vYmplY3QgPSBvYmplY3RzWzBdLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgbGV0IG1heF95ID0gZmlyc3Rfb2JqZWN0LnRvcF9yaWdodC55O1xyXG4gIGxldCBtYXhfeCA9IGZpcnN0X29iamVjdC50b3BfcmlnaHQueDtcclxuICBsZXQgbWluX3kgPSBmaXJzdF9vYmplY3QuYm90dG9tX2xlZnQueTtcclxuICBsZXQgbWluX3ggPSBmaXJzdF9vYmplY3QuYm90dG9tX2xlZnQueDtcclxuICBmb3IobGV0IGEgPSAxOyBhIDwgb2JqZWN0cy5sZW5ndGg7YSsrKXtcclxuICAgIGxldCBvYmplY3QgPSBvYmplY3RzW2FdLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBpZihvYmplY3QudG9wX3JpZ2h0LnkgPiBtYXhfeSlcclxuICAgICAgbWF4X3kgPSBvYmplY3QudG9wX3JpZ2h0Lnk7XHJcbiAgICBpZihvYmplY3QudG9wX3JpZ2h0LnggPiBtYXhfeClcclxuICAgICAgbWF4X3ggPSBvYmplY3QudG9wX3JpZ2h0Lng7XHJcbiAgICBpZihvYmplY3QuYm90dG9tX2xlZnQueSA8IG1pbl95KVxyXG4gICAgICBtaW5feSA9IG9iamVjdC5ib3R0b21fbGVmdC55O1xyXG4gICAgaWYob2JqZWN0LmJvdHRvbV9sZWZ0LnggPCBtaW5feClcclxuICAgICAgbWluX3ggPSBvYmplY3QuYm90dG9tX2xlZnQueDtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHg6bWluX3ggKyAobWF4X3ggLSBtaW5feCkvMixcclxuICAgIHk6bWluX3kgKyAobWF4X3kgLSBtaW5feSkvMixcclxuICAgIGhlaWdodDptYXhfeSAtIG1pbl95LFxyXG4gICAgd2lkdGg6bWF4X3ggLSBtaW5feFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9vYmplY3RzKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSxleGVtcHRpb246c3RyaW5nW10gPSBbXSk6b2JqW117XHJcbiAgcmV0dXJuIG9ianMuZmlsdGVyKChhKT0+KCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2FsbF9jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsb2JqczpvYmpbXSxleGVtcHRpb246c3RyaW5nW10gPSBbXSk6QXJyYXk8b2JqPntcclxuICBsZXQgbWF0Y2hlZCA9IFtdO1xyXG4gIGZvciAobGV0IGEgb2Ygb2Jqcykge1xyXG4gICAgaWYgKCFleGVtcHRpb24uc29tZSgoYik9PmEudGFncy5pbmRleE9mKGIpICE9PSAtMSkgJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgbWF0Y2hlZC5wdXNoKGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWF0Y2hlZFxyXG59XHJcbi8vQ2hlY2tzIHVwIHRvIHRoZSBmaXJzdCBjb2xsaXNpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2NvbGxpc2lvbnMoYzogY29sbGlzaW9uX2JveCwgb2Jqczogb2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcpIHtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmIChhLmlkICE9PSBleGVtcHRpb24gJiYgYS5jb2xsaXNpb24gJiYgYS5jb2xsaWRlc1dpdGhCb3goYykpIHtcclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZWxvY2l0eV9tYXgodmVsb2NpdHk6bnVtYmVyLGJveDpjb2xsaXNpb25fYm94LG9ianM6b2JqW10sIGV4ZW1wdGlvbjpzdHJpbmcsZGlyOmRpcmVjdGlvbil7XHJcbiAgbGV0IGNvbGxpc2lvbiA9IGNoZWNrX2NvbGxpc2lvbnMoYm94LCBvYmpzLCBleGVtcHRpb24pO1xyXG4gIGlmKGNvbGxpc2lvbiA9PSBudWxsKXtcclxuICAgIHJldHVybiB2ZWxvY2l0eTtcclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBjb2xsaWRlciA9IGNvbGxpc2lvbjtcclxuICAgIGxldCBvcmlnaW4gPSBnZXRJZChvYmpzLGV4ZW1wdGlvbik7XHJcbiAgICBsZXQgb3JpZ19zdCA9IG9yaWdpbi5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgY29sbGlkZXJfc3QgPSBjb2xsaWRlci5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgb3JpZ19jb2wgPSBvcmlnaW4uZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgbGV0IGNvbGxpZGVyX2NvbCA9IGNvbGxpZGVyLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGlmKGRpciA9PSBkaXJlY3Rpb24ubGVmdCl7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueCAtIG9yaWdfY29sLndpZHRoLzIpIC0gKGNvbGxpZGVyX2NvbC54ICsgY29sbGlkZXJfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnJpZ2h0KXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueCAtIGNvbGxpZGVyX2NvbC53aWR0aC8yKSAtIChvcmlnX2NvbC54ICsgb3JpZ19jb2wud2lkdGgvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24uZG93bil7XHJcbiAgICAgIHJldHVybiAob3JpZ19jb2wueSAtIG9yaWdfY29sLmhlaWdodC8yKSAtIChjb2xsaWRlcl9jb2wueSArIGNvbGxpZGVyX2NvbC5oZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGRpciA9PSBkaXJlY3Rpb24udXApe1xyXG4gICAgICByZXR1cm4gKGNvbGxpZGVyX2NvbC55IC0gY29sbGlkZXJfY29sLmhlaWdodC8yKSAtIChvcmlnX2NvbC55ICsgb3JpZ19jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sob2JqZWN0Om9iaixsaXN0Om9ialtdKSB7XHJcbiAgbGlzdCA9IFsuLi5saXN0XTtcclxuICBsZXQgb2IgPSBvYmplY3Q7XHJcbiAgbGV0IHN0ID0gb2JqZWN0LnN0YXRlIGFzIG9ial9zdGF0ZTtcclxuICBsZXQgeF92ZWwgPSBzdC52ZWxvY2l0eS54O1xyXG4gIGxldCB5X3ZlbCA9IHN0LnZlbG9jaXR5Lnk7XHJcbiAgaWYoIW9iLmNvbGxpc2lvbil7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueCArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueDtcclxuICAgICg8b2JqX3N0YXRlPm9iLnN0YXRlKS5wb3NpdGlvbi55ICs9ICg8b2JqX3N0YXRlPm9iLnN0YXRlKS52ZWxvY2l0eS55O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgY29sX2JveCA9IG9iLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICBpZiAoeF92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LnggKyBjb2xfYm94LndpZHRoLzIgKyB4X3ZlbC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiB4X3ZlbCxcclxuICAgICAgaGVpZ2h0OiBjb2xfYm94LmhlaWdodFxyXG4gICAgfTtcclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueCxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24ucmlnaHQpO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7ICBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeF92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiB4X3ZlbC8yICsgY29sX2JveC54IC0gY29sX2JveC53aWR0aC8yLFxyXG4gICAgICB5OiBjb2xfYm94LnksXHJcbiAgICAgIHdpZHRoOiAtMSAqIHhfdmVsLFxyXG4gICAgICBoZWlnaHQ6IGNvbF9ib3guaGVpZ2h0XHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmxlZnQpO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueCA9IDA7IFxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoeV92ZWwgPiAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IGNvbF9ib3gueSArIGNvbF9ib3guaGVpZ2h0LzIgKyB5X3ZlbC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB5X3ZlbFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS55LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi51cCk7XHJcbiAgICBpZih2ZWwgPiAwKXtcclxuICAgICAgc3QucG9zaXRpb24ueSArPSB2ZWw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBzdC52ZWxvY2l0eS55ID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSBpZiAoeV92ZWwgPCAwKSB7XHJcbiAgICBsZXQgYm94ID0ge1xyXG4gICAgICB4OiBjb2xfYm94LngsXHJcbiAgICAgIHk6IHlfdmVsLzIgKyBjb2xfYm94LnkgLSBjb2xfYm94LmhlaWdodC8yLFxyXG4gICAgICB3aWR0aDogY29sX2JveC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiAtMSAqIHlfdmVsXHJcbiAgICB9XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LnksYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLmRvd24pO1xyXG4gICAgaWYodmVsIDwgMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHtnYW1lLFBBVVNFRCxERUJVRywgR2V0U2NyZWVuRGltZW5zaW9ucyxHZXRWaWV3cG9ydERpbWVuc2lvbnN9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgY29sbGlzaW9uX2JveCB9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtkZWJ1Z19zdGF0ZX0gZnJvbSBcIi4vZGVidWdcIjtcclxuXHJcbmludGVyZmFjZSBtb3VzZVBvc3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBsYXN0OntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBjb250cm9sX2Z1bmN7XHJcbiAgKCk6dm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgbW91c2VCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PFtjb250cm9sX2Z1bmMsb2JqXT5cclxufVxyXG5cclxuaW50ZXJmYWNlIGtleUJpbmRze1xyXG4gIFtrZXk6c3RyaW5nXTogQXJyYXk8Y29udHJvbF9mdW5jPlxyXG59XHJcbmxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRfY2xpY2tfaGFuZGxlcihnYW1lOmdhbWU8dW5rbm93bj4pe1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIFxyXG4gICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShnYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xyXG4gICAgaWYoIW1vdXNlKXtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgYm94OmNvbGxpc2lvbl9ib3ggPSB7XHJcbiAgICAgIHg6bW91c2UueCxcclxuICAgICAgeTptb3VzZS55LFxyXG4gICAgICBoZWlnaHQ6MSxcclxuICAgICAgd2lkdGg6MVxyXG4gICAgfTtcclxuICAgIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IGQubGVuZ3RoO2ErKyl7XHJcbiAgICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICAgIGlmKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gXCJtb3VzZTFcIiAmJiBzZWxlY3RlZC5leGVjdXRlID09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBpZihzZWxlY3RlZC5vYmogIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICBpZihzZWxlY3RlZC5vYmouY29sbGlkZXNXaXRoQm94KGJveCkpe1xyXG4gICAgICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJkb3duXCIpICAmJiAhc2VsZWN0ZWQuZXhlY3V0ZWQpIHtcclxuICAgICAgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLm9uY2Upe1xyXG4gICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBzZWxlY3RlZC5yZXBlYXRfdGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgIH1cclxuICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcInVwXCIpIHx8IHNlbGVjdGVkLmtleSA9PSBcIm1vdXNldXBcIikgJiYgc2VsZWN0ZWQuZXhlY3V0ZWQgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgbGV0IGcgPSBbLi4ucmVwZWF0X2JpbmRzXTtcclxuICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgIGlmKGdbYV0uYmluZC5pZCA9PT0gc2VsZWN0ZWQuaWQpe1xyXG4gICAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICBicmVhaztcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuaW50ZXJmYWNlIGhlbGRfa2V5c3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgaGVsZF9rZXlzOmhlbGRfa2V5cyA9IHt9O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLChlKT0+e1xyXG4gIGxldCBjb2RlOnN0cmluZztcclxuXHJcbiAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbHVwXCI7XHJcbiAgfVxyXG4gIGVsc2UgaWYoZS5kZWx0YVkgPiAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbGRvd25cIjtcclxuICB9XHJcblxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBjb2RlKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGZvcihsZXQgYyBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgICAgICAgaWYoYy5iaW5kLmlkID09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAmJiBzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSApe1xyXG4gICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbmxldCB0cmFja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgdmFyIHJlY3QgPSAoZS50YXJnZXQgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDtcclxuICAvL2NvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gIGxhc3RfeCA9IHg7XHJcbiAgbGFzdF95ID0geTtcclxuICB4ID0gZS5jbGllbnRYOyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gIHkgPSBlLmNsaWVudFk7ICAvL3kgcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBlbnVtIGJ0eXBle1xyXG4gIG1vdXNlLFxyXG4gIGtleWJvYXJkXHJcbn1cclxuXHJcbmludGVyZmFjZSBiaW5ke1xyXG4gIGtleTpzdHJpbmcsXHJcbiAgdHlwZTpidHlwZSxcclxuICBpZDpudW1iZXIsXHJcbiAgZnVuY3Rpb246Y29udHJvbF9mdW5jLFxyXG4gIGV4ZWN1dGU6ZXhlY190eXBlLFxyXG4gIHJlcGVhdF90aW1lcj86cmVwZWF0X2JpbmQsXHJcbiAgb2JqPzpvYmosXHJcbiAgZXhlY3V0ZWQ/OmJvb2xlYW4sXHJcbiAgaW50ZXJ2YWw/Om51bWJlcixcclxuICBjYW1lcmE/OkNhbWVyYVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVwZWF0X2JpbmR7XHJcbiAgYmluZDpiaW5kLFxyXG4gIHRpbWVyOm51bWJlcixcclxuICBpbnRlcnZhbDpudW1iZXIsXHJcbiAgYWN0aXZlOmJvb2xlYW5cclxufVxyXG5cclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbmxldCBsYXN0X3ggPSAwO1xyXG5sZXQgbGFzdF95ID0gMDtcclxubGV0IGJpbmRzOmtleUJpbmRzID0ge307XHJcbmV4cG9ydCBsZXQgZGVidWdfYmluZHM6YmluZFtdID0gW107XHJcbmxldCBtb3VzZUJpbmRzOm1vdXNlQmluZHMgPSB7fTtcclxubGV0IGJpbmRfY291bnQgPSAwO1xyXG5cclxubGV0IGFsbF9iaW5kczpBcnJheTxiaW5kPiA9IFtdXHJcblxyXG5sZXQgcmVwZWF0X2JpbmRzOkFycmF5PHJlcGVhdF9iaW5kPiA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvbGxfTW91c2UoY2FtZXJhOkNhbWVyYSxjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQgPSBnLnN0YXRlLmNhbnZhcyk6VmVjdG9ye1xyXG4gIGxldCBoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgbGV0IHdyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGg7XHJcbiAgbGV0IHZyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmKHggPiBib3VuZHMubGVmdCAmJiB4IDwgYm91bmRzLnJpZ2h0ICYmIHkgPCBib3VuZHMuYm90dG9tICYmIHkgPiBib3VuZHMudG9wKXtcclxuICAgIFxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHg6ICgoeCAtIGJvdW5kcy5sZWZ0IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgICB5OiAoKGhlaWdodCAtICh5LWJvdW5kcy50b3ApL3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhlY3V0ZVJlcGVhdEJpbmRzKGI6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgIGlmKGEuYmluZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0ICYmIGEudGltZXIgPT0gMCAmJiBhLmFjdGl2ZSl7XHJcbiAgICAgIGEuYmluZC5mdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZihhLnRpbWVyID4gYS5pbnRlcnZhbCl7XHJcbiAgICAgIGEudGltZXIgPSAwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmJpbmQoYmluZF9pZDpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSA9IDA7YSA8IGFsbF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihhbGxfYmluZHNbYV0uaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIGFsbF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihsZXQgYSA9IDA7YSA8IHJlcGVhdF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihyZXBlYXRfYmluZHNbYV0uYmluZC5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgcmVwZWF0X2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGV4ZWNfdHlwZXtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChrZXluYW1lOnN0cmluZyxmdW5jOmNvbnRyb2xfZnVuYyx0eXBlOmV4ZWNfdHlwZSxpbnRlcnZhbDpudW1iZXIsb2JqZWN0PzpvYmopOm51bWJlcntcclxuICBpZihrZXluYW1lLnNsaWNlKDAsNSkgPT09IFwibW91c2VcIiB8fCBrZXluYW1lLnNsaWNlKDAsNikgPT09IFwic2Nyb2xsXCIpe1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUubW91c2UsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBvYmo6b2JqZWN0LFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfTtcclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG5cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGxldCBiOmJpbmQgPSB7XHJcbiAgICAgIGtleTprZXluYW1lLFxyXG4gICAgICB0eXBlOmJ0eXBlLmtleWJvYXJkLFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb246ZnVuYyxcclxuICAgICAgZXhlY3V0ZTp0eXBlLFxyXG4gICAgICBleGVjdXRlZDpmYWxzZSxcclxuICAgICAgaW50ZXJ2YWxcclxuICAgIH1cclxuICAgIGlmKHR5cGUgPT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgIGIucmVwZWF0X3RpbWVyID0ge1xyXG4gICAgICAgIGJpbmQ6YixcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgICAgIGludGVydmFsLFxyXG4gICAgICAgIGFjdGl2ZTpmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHJlcGVhdF9iaW5kcy5wdXNoKGIucmVwZWF0X3RpbWVyKTtcclxuICAgIH1cclxuICAgIGFsbF9iaW5kcy5wdXNoKGIpO1xyXG4gIH1cclxuICBpZCsrO1xyXG4gIHJldHVybiBpZCAtIDE7XHJcbn0iLCJpbXBvcnQgeyBERUJVRywgUEFVU0VELCBzZXRQYXVzZWQsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5leHBvcnQgbGV0IHBhdGg6YW55OyBcclxubGV0IGZzOmFueTtcclxubGV0IGlwY1JlbmRlcmVyOmFueTtcclxuaW1wb3J0IHsgcHJlZmFicyB9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5leHBvcnQgbGV0IHByb2plY3RfcGF0aCA9IFwiXCI7XHJcbmV4cG9ydCBsZXQgcm9vdF9wYXRoID0gXCJcIjtcclxuaWYoREVCVUcpe1xyXG4gcGF0aCA9ICB3aW5kb3cucmVxdWlyZShcInBhdGhcIik7XHJcbiBmcyA9IHdpbmRvdy5yZXF1aXJlKFwiZnNcIik7XHJcbiBpcGNSZW5kZXJlciAgPSB3aW5kb3cucmVxdWlyZShcImVsZWN0cm9uXCIpLmlwY1JlbmRlcmVyO1xyXG4gcHJvamVjdF9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ3BhdGgtcmVxdWVzdCcsICdwaW5nJylbMF1cclxuIHJvb3RfcGF0aCA9IHBhdGguam9pbihwcm9qZWN0X3BhdGgsXCIuLlwiKVxyXG59XHJcbmltcG9ydCB7IG9iaiwgcGFyYW1zIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4uL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuaW1wb3J0IHsgQmluZCwgYnR5cGUsIFBvbGxfTW91c2UsIGV4ZWNfdHlwZSwgaGVsZF9rZXlzLCBkZWJ1Z19iaW5kcyB9IGZyb20gXCIuLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yLCBkaW1lbnNpb25zfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdfaHVkIGV4dGVuZHMgSFVEIHtcclxuICBzZXRUZXh0RWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgVGV4dCh7XHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgIHg6IDEwLFxyXG4gICAgICAgICAgeTogdmlld3BvcnQuaGVpZ2h0IC0gMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IDIyLFxyXG4gICAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBzY2FsaW5nOiAxXHJcbiAgICAgIH0sICgpID0+IGRlYnVnX3N0YXRlLnJlbmRlcl9kZWx0YV90aW1lID4gMCA/IE1hdGgucm91bmQoMTAwMC9kZWJ1Z19zdGF0ZS5yZW5kZXJfZGVsdGFfdGltZSkgKyBcIlwiIDogXCJcIiksXHJcbiAgICAgIG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiAxMFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAyMixcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6IDFcclxuICAgIH0sICgpID0+IGBYOiR7ZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLngudG9GaXhlZCgwKX1gKSxcclxuICAgIG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAxMCxcclxuICAgICAgICB5OiAzMlxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAyMixcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgIHNjYWxpbmc6IDFcclxuICAgIH0sICgpID0+IGBZOiR7ZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgwKX1gKSxcclxuICAgIG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiB2aWV3cG9ydC53aWR0aCAtIDEwLFxyXG4gICAgICAgIHk6IDMyXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgIHNjYWxpbmc6IDFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgaWYobW91c2Upe1xyXG4gICAgICAgIHJldHVybiBgJHttb3VzZS54LnRvRml4ZWQoMCl9OlhgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGA6WGBcclxuICAgIH0pLFxyXG4gICAgbmV3IFRleHQoe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IHZpZXdwb3J0LndpZHRoIC0gMTAsXHJcbiAgICAgICAgeTogMTBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgICAgc2NhbGluZzogMVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSxkZWJ1Z19zdGF0ZS50YXJnZXQpO1xyXG4gICAgICBpZihtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuIGAke21vdXNlLnkudG9GaXhlZCgwKX06WWBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDpZYFxyXG4gICAgfSksXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3N0YXRlZih0OiBudW1iZXIpIHtcclxuICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICBpZiAoZGVidWdfc3RhdGUuY2FtZXJhLmh1ZCkge1xyXG4gICAgZGVidWdfc3RhdGUuY2FtZXJhLmh1ZC5zdGF0ZWYodCk7XHJcbiAgfVxyXG4gIGlmICghUEFVU0VEKSB7XHJcbiAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCk7XHJcbiAgfVxyXG4gIGlmKG1vdXNlKXtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50KSB7XHJcbiAgICAgIGlmIChQQVVTRUQgJiYgaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0gJiYgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICBsZXQgZGlzdCA9IHtcclxuICAgICAgICAgIHg6IE1hdGguYWJzKG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLngpLFxyXG4gICAgICAgICAgeTogTWF0aC5hYnMobW91c2UueSAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUucG9zaXRpb24ueSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nLndpZHRoID0gKDIgKiBkaXN0LngpIC8gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC53aWR0aDtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnNjYWxpbmcuaGVpZ2h0ID0gKDIgKiBkaXN0LnkpIC8gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHN0ID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgICAgICBzdC5wb3NpdGlvbi54ID0gbW91c2UueCAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LngsXHJcbiAgICAgICAgICBzdC5wb3NpdGlvbi55ID0gbW91c2UueSAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKFBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50KSB7XHJcbiAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQuc3RhdGUucm90YXRpb24gPSBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LmFuZ2xlVG93YXJkc1BvaW50KG1vdXNlKTtcclxuICAgIH1cclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24pIHtcclxuICAgICAgbGV0IGRpZmZfeSA9IG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24ueTtcclxuICAgICAgbGV0IGRpZmZfeCA9IG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24ueDtcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIC0xICogZGlmZl94O1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55ICsgLTEgKiBkaWZmX3k7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbV9saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCByb29tX25hbWUgb2YgT2JqZWN0LmtleXMocm9vbV9saXN0KSkge1xyXG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocm9vbV9uYW1lKSk7XHJcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJyb29tX2xpc3RfaXRlbVwiKTtcclxuICAgIHBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGcubG9hZFJvb21TdHJpbmcocm9vbV9uYW1lKTtcclxuICAgIH0pXHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIHByb3BlcnRpZXNfZWxlbWVudCB7XHJcbiAgcG9zX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcG9zX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgdmVsX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgdmVsX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcm90OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHNjYV94OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHNjYV95OiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIHJlbmRlcjogSFRNTElucHV0RWxlbWVudCxcclxuICBjb2xsaXNpb246IEhUTUxJbnB1dEVsZW1lbnRcclxufVxyXG5sZXQgcHJvcGVydGllc19lbGVtZW50czogcHJvcGVydGllc19lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG5pZiAoREVCVUcpIHtcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzID0ge1xyXG4gICAgcG9zX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc194XCIpKSxcclxuICAgIHBvc195OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3NfeVwiKSksXHJcbiAgICB2ZWxfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3hcIikpLFxyXG4gICAgdmVsX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlbF95XCIpKSxcclxuICAgIHJvdDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90XCIpKSxcclxuICAgIHNjYV94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeFwiKSksXHJcbiAgICBzY2FfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhX3lcIikpLFxyXG4gICAgcmVuZGVyOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5kZXJcIikpLFxyXG4gICAgY29sbGlzaW9uOiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsaXNpb25cIikpXHJcbiAgfVxyXG5cclxuICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKTtcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgaW5wdXRzW2FdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAoPEhUTUxFbGVtZW50PmlucHV0c1thXSkuZm9jdXMoKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBmb2N1c2VkO1xyXG4gIGxldCBkZWJ1Z190YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKVxyXG4gIGRlYnVnX3RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIGlucHV0c1thXS5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcblxyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnBvc194LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwicG9zaXRpb25cIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgeDogbmV3X3ZhbCwgeTogZWxlLnN0YXRlLnBvc2l0aW9uLnkgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5wb3NpdGlvbi54ID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB4OiBlbGUuc3RhdGUucG9zaXRpb24ueCwgeTogbmV3X3ZhbCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnkgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeC52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnN0YXRlLnZlbG9jaXR5LnkgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUpIHx8IDA7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJyb3RhdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkobmV3X3ZhbCksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnJvdGF0aW9uKVxyXG4gICAgfSlcclxuICAgIGVsZS5zdGF0ZS5yb3RhdGlvbiA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB3aWR0aDogbmV3X3ZhbCwgaGVpZ2h0OiBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnNjYWxpbmcpXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnNjYWxpbmcud2lkdGggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInNjYWxpbmdcIixcclxuICAgICAgZWxlbWVudDogZWxlLFxyXG4gICAgICBuZXc6IEpTT04uc3RyaW5naWZ5KHsgd2lkdGg6IGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLCBoZWlnaHQ6IG5ld192YWwgfSksXHJcbiAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZWxlLnN0YXRlLnNjYWxpbmcpXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnNjYWxpbmcuaGVpZ2h0ID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5yZW5kZXIgPSBwcm9wZXJ0aWVzX2VsZW1lbnRzLnJlbmRlci5jaGVja2VkO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmNvbGxpc2lvbiA9IHByb3BlcnRpZXNfZWxlbWVudHMuY29sbGlzaW9uLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZV9lbGVtZW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5kZWxldGUoKTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpIHtcclxuICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KSB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmpfbmFtZVwiKS5pbm5lckhUTUwgPSBlbGUuY29uc3RydWN0b3IubmFtZTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnBvc2l0aW9uLnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3gudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LngudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMudmVsX3kudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnZlbG9jaXR5LnkudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucm90LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5yb3RhdGlvbi50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy53aWR0aC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5zY2FfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQudG9GaXhlZCgyKTtcclxuICAgIHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQgPSBlbGUucmVuZGVyO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZCA9IGVsZS5jb2xsaXNpb247XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyYW1zX2xpc3RcIik7XHJcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBmb3IgKGxldCBrIG9mIE9iamVjdC5rZXlzKGVsZS5wYXJhbXMpKSB7XHJcblxyXG4gICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspKTtcclxuICAgICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGspXHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdICsgXCJcIik7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHZhbDogc3RyaW5nID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKCFpc05hTih2YWwgYXMgdW5rbm93biBhcyBudW1iZXIpKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHBhcnNlRmxvYXQodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbCA9PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICBwLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgIGxpc3QuYXBwZW5kKHApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKSB7XHJcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdHNfbGlzdFwiKTtcclxuICBsaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgaWYgKGcuZ2V0Um9vbSgpKSB7XHJcbiAgICBmb3IgKGxldCBvYmogb2YgZy5nZXRSb29tKCkub2JqZWN0cy5zbGljZSgpLnJldmVyc2UoKSkge1xyXG4gICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9iai5jb25zdHJ1Y3Rvci5uYW1lKSk7XHJcbiAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcIm9iamVjdF9saXN0X2l0ZW1cIik7XHJcbiAgICAgIHBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9PSA8b2JqPm9iaikge1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgKDxvYmo+b2JqKS5zdGF0ZS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQgPSA8b2JqPm9iajtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJlZmFicygpIHtcclxuICBsZXQgcHJlcyA9IE9iamVjdC5rZXlzKHByZWZhYnMpLm1hcChhc3luYyAobzogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgYSA9IDxvYmo+KG5ldyBwcmVmYWJzW29dKHtcclxuICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICBzY2FsaW5nOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfVxyXG4gICAgfSkpO1xyXG4gICAgYXdhaXQgYS5sb2FkKCk7XHJcbiAgICBhLnJlbmRlciA9IHRydWU7XHJcbiAgICBsZXQgb2JqcyA9IGEuY29tYmluZWRPYmplY3RzKCk7XHJcbiAgICBmb3IgKGxldCBvYmogb2Ygb2Jqcykge1xyXG4gICAgICBvYmouVW5iaW5kQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbHRlcmVkID0gb2Jqcy5maWx0ZXIoKGEpID0+IGEucmVuZGVyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByZWZhYjogcHJlZmFic1tvXSxcclxuICAgICAgbmFtZTogYS5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICByZW5kZXJlZDogZmlsdGVyZWQubWFwKChvKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IG8uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgIHJlbmRlcjogby5yZW5kZXJmKDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgfSlcclxuICBsZXQgYSA9IGF3YWl0IFByb21pc2UuYWxsKHByZXMpO1xyXG5cclxuICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVmYWJfdGFyZ2V0XCIpO1xyXG4gIHRhcmdldC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHByZWZhYiBvZiBhKSB7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmVmYWIubmFtZSkpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlcikpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBkaXYuYXBwZW5kKHByZWZhYi5yZW5kZXJlZFswXS5yZW5kZXIuc3ByaXRlLnNwcml0ZV9zaGVldCk7XHJcbiAgICB9XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByZWZhYl9ib3hcIik7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCB2YWwgPSB7XHJcbiAgICAgICAgcG9zaXRpb246IHsgeDogZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLngsIHk6IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55IH0sXHJcbiAgICAgICAgdmVsb2NpdHk6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgIHNjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBvYmogPSA8b2JqPihuZXcgcHJlZmFiLnByZWZhYih2YWwpKTtcclxuICAgICAgYXdhaXQgZy5zdGF0ZS5jdXJyZW50X3Jvb20uYWRkSXRlbXMob2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH0pO1xyXG4gICAgdGFyZ2V0LmFwcGVuZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGRlYnVnX2FjdGlvbiB7XHJcbiAgcHJvcGVydHk6IHN0cmluZyxcclxuICBvbGQ6IHN0cmluZyxcclxuICBuZXc6IHN0cmluZyxcclxuICBlbGVtZW50OiBvYmpcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBkZWJ1Z192YXJzIHtcclxuICB0YXJnZXQ6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gIGNhbWVyYTogQ2FtZXJhLFxyXG4gIGxhc3RfY2xpY2tlZDogSFRNTEVsZW1lbnQsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmc6IGRpbWVuc2lvbnMsXHJcbiAgc2VsZWN0ZWRfZWxlbWVudDogb2JqLFxyXG4gIHNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0OiBWZWN0b3IsXHJcbiAgcm90YXRpb25fZWxlbWVudDogb2JqLFxyXG4gIHNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDogb2JqLFxyXG4gIG1pZGRsZV9wb3NpdGlvbjogVmVjdG9yLFxyXG4gIGNsaWNrX3Bvc2l0aW9uOiBWZWN0b3IsXHJcbiAgYWN0aW9uc19zdGFjazogZGVidWdfYWN0aW9uW10sXHJcbiAgY3VycmVudF9hY3Rpb246IGRlYnVnX2FjdGlvbixcclxuICByZW5kZXJfZGVsdGFfdGltZTpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGxldCBkZWJ1Z19zdGF0ZTogZGVidWdfdmFycztcclxuXHJcbmV4cG9ydCBsZXQgZGVidWdfc2V0dXAgPSAoKSA9PiB7XHJcbiAgZGVidWdfc3RhdGUgPSB7XHJcbiAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgY2FtZXJhOiBuZXcgQ2FtZXJhKHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgIGhlaWdodDogdmlld3BvcnQuaGVpZ2h0LFxyXG4gICAgICAgIHdpZHRoOiB2aWV3cG9ydC53aWR0aFxyXG4gICAgICB9LFxyXG4gICAgICBzY2FsaW5nOiAxLFxyXG4gICAgICBkZWJ1ZzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgICAsIHtcclxuICAgICAgICB4OiAxLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgaGVpZ2h0OiAxXHJcbiAgICAgIH0pLFxyXG4gICAgbGFzdF9jbGlja2VkOiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50X29mZnNldDogdW5kZWZpbmVkLFxyXG4gICAgcm90YXRpb25fZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgbWlkZGxlX3Bvc2l0aW9uOiB1bmRlZmluZWQsXHJcbiAgICBjbGlja19wb3NpdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH0sXHJcbiAgICBhY3Rpb25zX3N0YWNrOiBbXSxcclxuICAgIHJlbmRlcl9kZWx0YV90aW1lOjAsXHJcbiAgICBjdXJyZW50X2FjdGlvbjogdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGRlYnVnX3N0YXRlLmNhbWVyYS5odWQgPSBuZXcgRGVidWdfaHVkKCk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UwZG93blwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogMCxcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50KSB7XHJcbiAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z19zdGF0ZS5jbGlja19wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgICAgIGxldCBhbExfY2xpY2tlZCA9IGcuZ2V0Um9vbSgpLmNoZWNrT2JqZWN0c1BvaW50KG1vdXNlKTtcclxuICAgICAgICBsZXQgY2xpY2tlZDtcclxuICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbExfY2xpY2tlZC5maWx0ZXIoKGVsZSkgPT4gZWxlID09IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudClcclxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY2xpY2tlZCA9IGZpbHRlcmVkWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY2xpY2tlZCA9IGFsTF9jbGlja2VkWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgaWYgKGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdKSB7XHJcbiAgICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoY2xpY2tlZC5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICAgICAgICBuZXc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2tlZCxcclxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZyA9IGNsaWNrZWQuc3RhdGUuc2NhbGluZztcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54IC0gY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55IC0gY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMXVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA1LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTFkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA2LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAxLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeSgoPG9ial9zdGF0ZT5kZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlKS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTJkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAzLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzUG9pbnQobW91c2UpWzBdXHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiksXHJcbiAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMnVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA0LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbilcclxuICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcblxyXG4gIGxldCBsZWZ0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHJpZ2h0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IGRvd25fZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcblxyXG4gICAgaWYgKCFoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCB1cF9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCBzY3JvbGxfdXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIgJiYgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPCAwLjA1KVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICsgMC4wMTtcclxuICAgIGVsc2UgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyAwLjA1O1xyXG4gIH1cclxuICBsZXQgc2F2ZV9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgaWYgKGN0cmxfaGVsZCAmJiBQQVVTRUQpIHtcclxuICAgICAgbGV0IG5hbWUgPSBnLmdldFJvb20oKS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICBsZXQgYSA9IHBhdGguam9pbihgJHtwcm9qZWN0X3BhdGh9YCwgYC4uL3Jvb21zLyR7bmFtZX0uanNvbmApO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYSwgSlNPTi5zdHJpbmdpZnkoZy5nZXRSb29tKCkuZXhwb3J0U3RhdGVDb25maWcoKSkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBXUklUSU5HIFJPT00gSU5GTyBGSUxFLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBhbGVydChcIlNhdmVkXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN0cmxfaGVsZCAmJiAhUEFVU0VEKSB7XHJcbiAgICAgIGFsZXJ0KFwicGF1c2UgdG8gZW5hYmxlIHNhdmluZy5cIilcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHNjcm9sbF9kb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wNSlcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDU7XHJcbiAgICBlbHNlIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIiAmJiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyA+IDAuMDEpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgLSAwLjAxO1xyXG4gIH1cclxuICBsZXQgdW5kb19mdW5jID0gKCkgPT4ge1xyXG4gICAgaWYgKGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdKSB7XHJcbiAgICAgIGxldCBjdXJyOiBkZWJ1Z19hY3Rpb24gPSBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnBvcCgpO1xyXG4gICAgICBpZiAoY3Vycikge1xyXG4gICAgICAgIGlmIChjdXJyLnByb3BlcnR5ID09IFwicG9zaXRpb25cIikge1xyXG4gICAgICAgICAgY3Vyci5lbGVtZW50LnN0YXRlLnBvc2l0aW9uID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnIucHJvcGVydHkgPT09IFwicm90YXRpb25cIikge1xyXG4gICAgICAgICAgY3Vyci5lbGVtZW50LnN0YXRlLnJvdGF0aW9uID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnIucHJvcGVydHkgPT09IFwic2NhbGluZ1wiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUuc2NhbGluZyA9IEpTT04ucGFyc2UoY3Vyci5vbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlBXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5QVwiLCBsZWZ0X2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IGxlZnRfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleURcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlEXCIsIHJpZ2h0X2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IHJpZ2h0X2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlXXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5V1wiLCB1cF9mdW5jLCBleGVjX3R5cGUucmVwZWF0LCAxKSxcclxuICAgIGZ1bmN0aW9uOiB1cF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5U1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVNcIiwgZG93bl9mdW5jLCBleGVjX3R5cGUucmVwZWF0LCAxKSxcclxuICAgIGZ1bmN0aW9uOiBkb3duX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJzY3JvbGx1cFwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogQmluZChcInNjcm9sbHVwXCIsIHNjcm9sbF91cCwgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHNjcm9sbF91cCxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJzY3JvbGxkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiBCaW5kKFwic2Nyb2xsZG93blwiLCBzY3JvbGxfZG93biwgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHNjcm9sbF9kb3duLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVNcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlTXCIsIHNhdmVfZnVuYywgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHNhdmVfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlaXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5WlwiLCB1bmRvX2Z1bmMsIGV4ZWNfdHlwZS5vbmNlLCAxKSxcclxuICAgIGZ1bmN0aW9uOiB1bmRvX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkID0gZS50YXJnZXQ7XHJcbiAgICB9XHJcbiAgfSlcclxuICBsZXQgcGF1c2VfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZV9idXR0b25cIilcclxuICBwYXVzZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBzZXRQYXVzZWQoIVBBVVNFRCk7XHJcbiAgICBpZiAoUEFVU0VEKSB7XHJcbiAgICAgIHBhdXNlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlVOUEFVU0VcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBwYXVzZV9idXR0b24uaW5uZXJIVE1MID0gXCJQQVVTRVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGxldCBvYmpfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfb2JqZWN0X2J1dHRvblwiKTtcclxuICBsZXQgcm9vbV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19yb29tX2J1dHRvblwiKTtcclxuICByb29tX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGxldCBmaWxlX3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygnb2JqZWN0LXBhdGgtcmVxdWVzdCcsIFwicm9vbXNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAgXHJcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xyXG4gICAgaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi4vLi4vdmFuXCI7XHJcbiAgICBpbXBvcnQge3N0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4vJHtuZXdfbmFtZX0uanNvblwiO1xyXG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XHJcbiAgICBpbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGV7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgJHtuZXdfbmFtZX0gZXh0ZW5kcyByb29tPCR7bmV3X25hbWV9X3N0YXRlPntcclxuICAgICAgYmFja2dyb3VuZF91cmw9XCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgICAgIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPil7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcclxuICAgICAgICBzdXBlci5zdGF0ZWYoZGVsdGFfdGltZSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgKVxyXG5cclxuICAgICAgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuICAgIHtcclxuICAgICAgXCJvYmplY3RzXCI6W11cclxuICAgIH1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuICBvYmpfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJvYmplY3RzXCIpO1xyXG4gICAgaWYgKGZpbGVfcGF0aCkge1xyXG4gICAgICBsZXQgZnVsbF9uYW1lID0gcGF0aC5wYXJzZShmaWxlX3BhdGgpLmJhc2U7XHJcbiAgICAgIGxldCBuZXdfbmFtZSA9IGZ1bGxfbmFtZS5zdWJzdHIoMCwgZnVsbF9uYW1lLmxlbmd0aCAtIDMpO1xyXG4gICAgICBsZXQgcGF0aF90b193cml0ZSA9IHBhdGguam9pbihgJHtmaWxlX3BhdGh9YCwgXCIuLlwiLCBuZXdfbmFtZSArIFwiLnRzXCIpO1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGhfdG9fd3JpdGUsIGBcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgcG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vbGliL3N0YXRlXCI7XHJcblxyXG5pbnRlcmZhY2UgJHtuZXdfbmFtZX1fc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XHJcbiAgICBcclxufVxyXG4gICAgXHJcbmludGVyZmFjZSAke25ld19uYW1lfV9wYXJhbWV0ZXJze1xyXG4gICAgXHJcbn1cclxuICAgIFxyXG5leHBvcnQgY2xhc3MgJHtuZXdfbmFtZX0gZXh0ZW5kcyBvYmp7XHJcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xyXG4gIGhlaWdodCA9IDEwMDtcclxuICB3aWR0aCA9IDEwMDtcclxuICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcclxuICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gIHJlbmRlciA9IHRydWU7XHJcbiAgcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnM7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOiR7bmV3X25hbWV9X3BhcmFtZXRlcnMgPSB7fVxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycyA9ICR7bmV3X25hbWV9LmRlZmF1bHRfcGFyYW1zKXtcclxuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lX2RlbHRhOm51bWJlcil7XHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyZih0aW1lX2RlbHRhOm51bWJlcil7XHJcbiAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcclxuICB9XHJcbiAgcmVnaXN0ZXJfYW5pbWF0aW9ucygpe1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlZ2lzdGVyX2F1ZGlvKCl7XHJcbiAgICBcclxuICB9XHJcbiAgcmVnaXN0ZXJfY29udHJvbHMoKXtcclxuICAgICAgICBcclxuICB9XHJcbn1cclxuICAgIGApXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn0iLCJpbXBvcnQge29ian0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSHVkVGV4dEdldEZ1bmN7XHJcbiAgKCk6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNldHRpbmd7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZm9udDpGb250XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9udHtcclxuICBtYXhfd2lkdGg/Om51bWJlcixcclxuICBzaXplOm51bWJlcixcclxuICBmb250OnN0cmluZyxcclxuICBjb2xvcjpzdHJpbmcsXHJcbiAgdGV4dDpzdHJpbmcsXHJcbiAgYWxpZ246Q2FudmFzVGV4dEFsaWduXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dF9Ob2Rle1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHBvc2l0aW9uOntcclxuICAgIHg6bnVtYmVyLFxyXG4gICAgeTpudW1iZXJcclxuICB9XHJcbiAgc2l6ZTpudW1iZXI7XHJcbiAgc2NhbGluZzpudW1iZXI7XHJcbiAgZm9udDpzdHJpbmc7XHJcbiAgY29sb3I6c3RyaW5nO1xyXG4gIHRleHQ/OnN0cmluZztcclxuICBhbGlnbj86Q2FudmFzVGV4dEFsaWduO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBIVUR7XHJcbiAgZ3JhcGhpY19lbGVtZW50czpvYmpbXSA9IFtdO1xyXG4gIHRleHRfZWxlbWVudHM6QXJyYXk8VGV4dD4gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy50ZXh0X2VsZW1lbnRzLnB1c2goLi4udGhpcy5zZXRUZXh0RWxlbWVudHMoKSk7XHJcbiAgICB0aGlzLmdyYXBoaWNfZWxlbWVudHMucHVzaCguLi50aGlzLnNldEdyYXBoaWNFbGVtZW50cygpKTsgXHJcbiAgfVxyXG4gIHN0YXRlZihhOm51bWJlcil7XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy5ncmFwaGljX2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IHggb2YgdGhpcy50ZXh0X2VsZW1lbnRzKXtcclxuICAgICAgeC5zdGF0ZWYoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFRleHRFbGVtZW50cygpOlRleHRbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgc2V0R3JhcGhpY0VsZW1lbnRzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHtcclxuICBnZXRGdW5jOkh1ZFRleHRHZXRGdW5jO1xyXG4gIHN0YXRlOlRleHRfTm9kZTtcclxuICBjb25zdHJ1Y3Rvcihub2RlOlRleHRfTm9kZSxnZXRGdW5jOkh1ZFRleHRHZXRGdW5jKXtcclxuICAgIGlmKCFub2RlLmFsaWduKXtcclxuICAgICAgbm9kZS5hbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gbm9kZTtcclxuICAgIGlmKCF0aGlzLnN0YXRlLnRleHQpe1xyXG4gICAgICB0aGlzLnN0YXRlLnRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRGdW5jID0gZ2V0RnVuYztcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgdGhpcy5zdGF0ZS50ZXh0ID0gdGhpcy5nZXRGdW5jKCk7XHJcbiAgfVxyXG4gIHJlbmRlcmYoYTpudW1iZXIpOkZvbnR7XHJcbiAgICBsZXQge3NpemUsY29sb3IsZm9udCx0ZXh0LG1heF93aWR0aCxhbGlnbn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgY29sb3IsXHJcbiAgICAgIGZvbnQsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIG1heF93aWR0aCxcclxuICAgICAgYWxpZ25cclxuICAgIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtWZWN0b3J9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlzdGFuY2UoYTpWZWN0b3IsYjpWZWN0b3Ipe1xyXG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LDIpICsgTWF0aC5wb3coYS55IC0gYi55LDIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRJbnQobWluOm51bWJlciwgbWF4Om51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG59IiwiaW1wb3J0IHsgc3RhdGVfZnVuYywgb2JqX3N0YXRlLCBWZWN0b3IsIGRpbWVuc2lvbnMgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJfZnVuYywgcmVuZGVyX3R5cGUgLHNjYWxlX3R5cGV9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgcG9zaXRpb25lZF9zcHJpdGUsIHNwcml0ZSwgc3ByaXRlX2dlbiB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBjb2xsaXNpb25fYm94IH0gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFVuYmluZCwgQmluZCwgY29udHJvbF9mdW5jLCBleGVjX3R5cGUgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiO1xyXG5pbXBvcnQge0RFQlVHLCBkZWVwLCBnYW1lfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlIH0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge3Jvb3RfcGF0aCxwYXRofSBmcm9tIFwiLi4vbGliL2RlYnVnXCI7IFxyXG5cclxuaW50ZXJmYWNlIG9ial9pPFQ+IHtcclxuICBzdGF0ZWY6IHN0YXRlX2Z1bmM8VD4sXHJcbiAgcmVuZGVyZjogcmVuZGVyX2Z1bmNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElkKGE6IG9ialtdLCBpZDogc3RyaW5nKTogb2JqIHtcclxuICBmb3IgKGxldCBiID0gMDsgYiA8IGEubGVuZ3RoOyBiKyspIHtcclxuICAgIGlmIChhW2JdLmlkID09IGlkKSB7XHJcbiAgICAgIHJldHVybiBhW2JdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vL0ZpbmRzIHRoZSBzaWRlIGxlbmd0aHMgb2YgYSB0cmlhbmdsZSBpZiBnaXZlbiB0aGUgIGFuZ2xlIChpbiBkZWdyZWVzKVxyXG4vL2Fsb25nIHdpdGggdGhlIGxlbmd0aCBvZiB0aGUgaHlwb3RlbnVzZVxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25fbGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBkZWdyZWU6IG51bWJlcikge1xyXG4gIGxldCBhX2xlbiA9IGxlbmd0aCAqIE1hdGguc2luKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIGxldCBiX2xlbiA9IGxlbmd0aCAqIE1hdGguY29zKGRlZ3JlZSAqIE1hdGguUEkgLyAxODApO1xyXG4gIHJldHVybiB7XHJcbiAgICB4OiBhX2xlbixcclxuICAgIHk6IGJfbGVuXHJcbiAgfVxyXG59XHJcblxyXG4vL1RoaXMgY291bnRlciB0cmFja3MgdGhlIGdsb2JhbCBudW1iZXIgb2Ygb2JqZWN0cyBjcmVhdGVkIHNvIGZhclxyXG4vL2FuIG9iamVjdCdzIGlkIChpZiBub3Qgb3ZlcndyaXR0ZW4pIHdpbGwgYmUgYSB1bmlxdWUgaW50ZWdlciwgd2hpY2hcclxuLy91c2VzIHRoaXMgY291bnRlci5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuaW50ZXJmYWNlIGFuaW1fc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBbQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIG51bWJlcl1cclxufVxyXG5cclxuaW50ZXJmYWNlIHZvaWRfZnVuYyB7XHJcbiAgKCk6IHZvaWRcclxufVxyXG5cclxuY2xhc3MgYW5pbWF0aW9ucyB7XHJcbiAgYW5pbWF0aW9uczogYW5pbV9zdG9yYWdlID0ge307XHJcbiAgLy9UcmFja3MgdGhlIHRpbWUgcGFzc2VkIHNpbmNlIHRoZSBjdXJyZW50IGFuaW1hdGlvblxyXG4gIC8vaGFzIHN0YXJ0ZWQgcGxheWluZ1xyXG4gIGFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICBjdXJyZW50OiBzdHJpbmc7XHJcbiAgY2FsbGJhY2s6IHZvaWRfZnVuYztcclxuICBhbmltYXRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIC8vZGVmaW5lcyBhbiBhbmltYXRpb24gdGhhdCBjYW4gYmUgcGxheWVkIHVzaW5nIHRoZSBwbGF5IG1ldGhvZFxyXG4gIC8vdGhlIGtleWZyYW1lcyBhcmUgYW4gYXJyYXkgb2YgdHVwbGVzIGluIHRoZSBcclxuICAvL2Zvcm1hdCBvZiBbKHRpbWUgZm9yIHRoaXMgc3ByaXRlIHRvIHNob3cpLCBzcHJpdGVdXHJcbiAgYWRkKG5hbWU6IHN0cmluZywga2V5ZnJhbWVzOiBBcnJheTxbbnVtYmVyLCBzcHJpdGVdPiwgbGVuZ3RoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IFtrZXlmcmFtZXMsIGxlbmd0aF07XHJcbiAgfVxyXG4gIHBsYXkobmFtZTogc3RyaW5nLCBjYWxsYmFjaz86IHZvaWRfZnVuYykge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gbmFtZTtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPSAwO1xyXG4gIH1cclxuICByZW5kZXJmKHQ6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICBsZXQgY3Vycl9hbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVswXTtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IHRoaXMuYW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRdWzFdO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAoOyBpbmRleCA8IGN1cnJfYW5pbWF0aW9uLmxlbmd0aCAtIDE7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGtleWZyYW1lX3RpbWUgPSBjdXJyX2FuaW1hdGlvbltpbmRleF1bMF07XHJcbiAgICAgIGxldCBuZXh0X2tleWZyYW1lX3RpbWUgPSBjdXJyX2FuaW1hdGlvbltpbmRleCArIDFdWzBdO1xyXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBrZXlmcmFtZV90aW1lICYmIHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPCBuZXh0X2tleWZyYW1lX3RpbWUpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gdGhpcy5hbmltYXRpb25fdHJhY2tlciArIHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vUmV0dXJucyB0aGUgcmF3IHNwcml0ZSB0aGF0J3MgY29ycmVjdCB0byBzaG93IGF0IHRoaXMgdGltZVxyXG4gICAgICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbl90cmFja2VyID49IGxlbmd0aCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyICs9IHQ7XHJcbiAgICB9XHJcbiAgICAvL1JldHVybnMgdGhlIGxhc3QgYXBwcm9wcmlhdGUgZnJhbWUgdW50aWwgdGhlIGFuaW1hdGlvbiBpcyBvdmVyLlxyXG4gICAgcmV0dXJuIGN1cnJfYW5pbWF0aW9uW2luZGV4XVsxXTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBoaXRib3h7XHJcbiAgd2lkdGg6bnVtYmVyLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgeF9vZmZzZXQ6bnVtYmVyLFxyXG4gIHlfb2Zmc2V0Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHBhcmFtc3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFufHN0cmluZ3xudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBib3VuZGluZ19ib3h7XHJcbiAgYm90dG9tX2xlZnQ6VmVjdG9yLFxyXG4gIHRvcF9yaWdodDpWZWN0b3JcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIG9iantcclxuICAvL1VybCB0byB0aGUgb2JqZWN0J3MgaW5kaXZpZHVhbCBzcHJpdGUsIG9yIGFsbCBvZiBpdHMgc3ByaXRlc1xyXG4gIC8vYnVuZGxlZCBpbnRvIGEgc3ByaXRlc2hlZXRcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICAvL1RoaXMgaXMgdGhlIGxvYWRlZCBzcHJpdGUvc3ByaXRlc2hlZXQgb2YgdGhlIG9iamVjdFxyXG4gIC8vd2hpY2ggaXMgZmV0Y2hlZCBmcm9tIHRoZSB1cmwgYWJvdmVcclxuICBzcHJpdGVfc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgc3RhdGU6IG9ial9zdGF0ZTtcclxuICByZW5kZXJfdHlwZSA9IHJlbmRlcl90eXBlLnNwcml0ZTtcclxuICAvL1RoZXNlIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBhY3R1YWwgb2JqZWN0J3Mgc3ByaXRlIGhlaWdodCBhbmQgd2lkdGhcclxuICAvL0lmIHVzaW5nIGEgc3ByaXRlIHNoZWV0LCB0aGVzZSBiZSBvbmUgc3ByaXRlJ3MgaGVpZ2h0IGFuZCB3aWR0aC5cclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIFxyXG4gIGNvbGxpc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGhpdGJveDogaGl0Ym94XHJcbiAgaWQ6IHN0cmluZztcclxuICAvL0FycmF5IG9mIGJpbmQgaWRzXHJcbiAgLy9CaW5kcyBhcmUgaW5kZW50aWZpZWQgYnkgYSB1bmlxdWUgbnVtYmVyIHRoYXQgaXMgcmV0dXJuIHdoZW5cclxuICAvL1RoZSBiaW5kIGlzIGNyZWF0ZWQuIFdlIG11c3Qgc3RvcmUgdGhlc2UgaWRzIGluIG9yZGVyIHRvIFxyXG4gIC8vZGVsZXRlIHRoZSBiaW5kcyB3aGVuIHRoZXkgYXJlIG1hbnVhbGx5IHVuYm91bmQsIG9yIHRoZSBvYmplY3QgaXMgZGVsZXRlZC5cclxuICBiaW5kczogQXJyYXk8bnVtYmVyPjtcclxuICB0YWdzOnN0cmluZ1tdID0gW107XHJcbiAgLy90YWdzIGFyZSB1c2VkIHRvIGV4Y2x1ZGUgb3IgaW5jbHVkZSBvYmplY3RzIHdoZW4gY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMsXHJcbiAgLy9hbmQgZm9yIG9iamVjdCBpZGVudGlmaWNhdGlvbiAvIGNsYXNzaWZpY2F0aW9uIGluIHNjcmlwdHNcclxuICByZW5kZXIgPSB0cnVlO1xyXG4gIGFuaW1hdGlvbnMgPSBuZXcgYW5pbWF0aW9ucygpO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgLy9MYXN0IHJlbmRlciB0aW1lLCB1c2VkIHRvIGNhbGN1bGF0ZSBkZWx0YV90aW1lXHJcbiAgbGFzdF9yZW5kZXI6bnVtYmVyID0gMDtcclxuICBnYW1lOmdhbWU8dW5rbm93bj47XHJcbiAgcGFyZW50OmNvbXBvc2l0ZV9vYmo7XHJcbiAgLy9QYXJhbXMgYXJlIG9wdGlvbnMgZm9yIHRoZSBvYmplY3QsIHRoYXQgZG8gbm90IHJlbHkgb24gc3RhdGVcclxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIHNpZGUgb2YgYSBwaWVjZSBpbiBjaGVzcy5cclxuICBwYXJhbXM6dW5rbm93biA9IHt9O1xyXG4gIGxheWVyOm51bWJlciA9IDE7XHJcbiAgc2F2ZV90b19maWxlOmJvb2xlYW4gPSB0cnVlO1xyXG4gIHRpY2tfc3RhdGUgPSB0cnVlO1xyXG4gIHNjYWxlX3R5cGUgPSBzY2FsZV90eXBlLmdyb3c7XHJcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBvcGFjaXR5Om51bWJlciA9IDE7XHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcbiAgLy9BbmltYXRpb25zIHNob3VsZCBiZSByZWdpc3RlcmVkIHVzaW5nIHRoaXMuYW5pbWF0aW9ucy5hZGQgaW4gdGhpcyBtZXRob2RcclxuICByZWdpc3RlckFuaW1hdGlvbnMoKSB7XHJcblxyXG4gIH1cclxuICAvL1NvdW5kcyBzaG91bGQgYmUgcmVnaXN0ZXJlZCB1c2luZyB0aGlzLmF1ZGlvLmFkZCBpbiB0aGlzIG1ldGhvZC5cclxuICByZWdpc3RlckF1ZGlvKCkge1xyXG5cclxuICB9XHJcbiAgZGVmYXVsdFBhcmFtcygpOnVua25vd257XHJcbiAgICByZXR1cm4gZGVlcCh0aGlzLmRlZmF1bHRQYXJhbXMpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTpvYmpfc3RhdGUscGFyYW1zID0gb2JqLmRlZmF1bHRfcGFyYW1zKSB7XHJcbiAgICBcclxuICAgIHRoaXMuaWQgPSBcIlwiICsgY291bnRlcjtcclxuICAgIHRoaXMuYmluZHMgPSBbXTtcclxuICAgIGNvdW50ZXIrKztcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgdGhpcy5yZWdpc3RlckNvbnRyb2xzKCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQXVkaW8oKTtcclxuICAgIC8vQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHBhc3NlZCBpbiBpbml0aWFsIHN0YXRlIHRvIGF2b2lkIFxyXG4gICAgLy9VcGRhdGluZyB0aGUgc2F2ZWQgc3RhdGUgb2YgdGhlIHJvb21cclxuICAgIHRoaXMuc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbiAgICBcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gIH1cclxuICBsb2FkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBhID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGxldCBwID0gdGhpcy5zcHJpdGVfdXJsO1xyXG4gICAgICBpZihERUJVRyl7XHJcbiAgICAgICAgcCA9IHBhdGguam9pbihyb290X3BhdGgsdGhpcy5zcHJpdGVfdXJsKTtcclxuICAgICAgfVxyXG4gICAgICBhLnNyYyA9IHA7XHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jICgpID0+IHtcclxuICAgICAgICBfdGhpcy5zcHJpdGVfc2hlZXQgPSBhO1xyXG4gICAgICAgIF90aGlzLnJlZ2lzdGVyQW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAvL1dpdGhpbiBub3JtYWwgb2JqZWN0cywgdGhpcyBqdXN0IHJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgb2JqZWN0LlxyXG4gIC8vVGhpcyBtZXRob2QgaXMgb3ZlcndyaXR0ZW4gYnkgY29tcG9zaXRlIG9iamVjdHMsIHdoaWNoIHJldHVybnMgZXZlcnkgb2JqZWN0XHJcbiAgLy90aGF0IHRoZSBjb21wb3NpdGUgb2JqZWN0IGNvbnRhaW5zLiBUaGlzIHNpbXBsaWZpZXMgdGhlIGJhY2tlbmQgd29yaywgYXMgZWFjaFxyXG4gIC8vb2JqZWN0IHJldHVybnMgYW4gYXJyYXkgb2YgYXRsZWFzdCBvbmUgb2JqZWN0LlxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgcmV0dXJuIFt0aGlzXTtcclxuICB9XHJcbiAgZ2V0Qm91bmRpbmdCb3goKTpib3VuZGluZ19ib3h7XHJcbiAgICBsZXQgY29sbF9ib3ggPSB0aGlzLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcF9yaWdodDp7XHJcbiAgICAgICAgeDpjb2xsX2JveC54ICsgY29sbF9ib3gud2lkdGgvMixcclxuICAgICAgICB5OmNvbGxfYm94LnkgKyBjb2xsX2JveC5oZWlnaHQvMlxyXG4gICAgICB9LFxyXG4gICAgICBib3R0b21fbGVmdDp7XHJcbiAgICAgICAgeDpjb2xsX2JveC54IC0gY29sbF9ib3gud2lkdGgvMixcclxuICAgICAgICB5OmNvbGxfYm94LnkgLSBjb2xsX2JveC5oZWlnaHQvMlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vRGlzdGFuY2UgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXHJcbiAgZGlzdGFuY2UodGFyZ2V0Om9iaik6bnVtYmVye1xyXG4gICAgcmV0dXJuIERpc3RhbmNlKHRoaXMuc3RhdGUucG9zaXRpb24sdGFyZ2V0LnN0YXRlLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgYXBwbHlGb3JjZSh2ZWw6VmVjdG9yKXtcclxuICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueCArPSB2ZWwueDtcclxuICAgIHRoaXMuc3RhdGUudmVsb2NpdHkueSArPSB2ZWwueTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzKGE6IG9iaik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5hbmdsZVRvd2FyZHNQb2ludChhLnN0YXRlLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgYW5nbGVUb3dhcmRzUG9pbnQodGFyZ2V0OlZlY3Rvcik6bnVtYmVye1xyXG4gICAgcmV0dXJuIDkwIC0gTWF0aC5hdGFuMigodGFyZ2V0LnkgLSB0aGlzLnN0YXRlLnBvc2l0aW9uLnkpLCh0YXJnZXQueCAtIHRoaXMuc3RhdGUucG9zaXRpb24ueCkpICogMTgwL01hdGguUEk7XHJcbiAgfVxyXG4gIGJpbmRDb250cm9sKGtleTogc3RyaW5nLCB4OiBleGVjX3R5cGUsIGZ1bmM6IGNvbnRyb2xfZnVuYywgaW50ZXJ2YWwgPSAxKSB7XHJcbiAgICB0aGlzLmJpbmRzLnB1c2goQmluZChrZXksIGZ1bmMsIHgsIGludGVydmFsLCB0aGlzKSk7XHJcbiAgfVxyXG4gIC8vVGhpcyBtZXRob2QgaXMgd2hlcmUgY29udHJvbHMgYW5kIGtleWJpbmRzIHNob3VsZFxyXG4gIC8vYmUgZGVmaW5lZCB1c2luZyBiaW5kQ29udHJvbFxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOm51bWJlcil7XHJcblxyXG4gIH1cclxuICBkZWxldGUoKSB7XHJcbiAgICBmb3IgKGxldCBhIG9mIHRoaXMuYmluZHMpIHtcclxuICAgICAgVW5iaW5kKGEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5kZWxldGVJdGVtKHRoaXMuaWQpO1xyXG4gIH1cclxuICBVbmJpbmRBbGwoKXtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vUmV0dXJucyB0aGUgY29sbGlzaW9uIGJveCBvZiB0aGUgb2JqZWN0XHJcbiAgLy9Eb2VzIG5vdCBoYXZlIHRvIGNvcnJlc3BvbmQgdG8gdGhlIG9iamVjdCdzIHNwcml0ZSdzIHNpemUgXHJcbiAgLy9BIGNvbXBvc2l0ZSBvYmplY3QgaW5zdGVhZCByZXR1cm5zIHRoZSBib3VuZGluZyBib3ggdGhhdCBcclxuICAvL2NvbnRhaW5zIGV2ZXJ5IG9uZSBvZiBpdHMgY29udGFpbmVkIG9iamVjdHNcclxuICBnZXRGdWxsQ29sbGlzaW9uQm94KCk6Y29sbGlzaW9uX2JveHtcclxuICAgIC8vSWYgYSBkZXZlbG9wZXIgZGVmaW5lZCBoaXRib3ggZXhpc3RzLCB1c2UgdGhhdCwgb3RoZXJ3aXNlXHJcbiAgICAvL2dlbmVyYXRlIGl0IHVzaW5nIHRoZSBzcHJpdGUgd2lkdGggLyBoZWlnaHRcclxuICAgIGlmKHRoaXMuaGl0Ym94KXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OnRoaXMuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDp0aGlzLmhpdGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oaXRib3guaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vVGhpcyBpcyBhbm90aGVyIG1ldGhvZHMsIHNpbWlsYXIgdG8gZ2V0Q29tYmluZWRcclxuICAvL0p1c3QgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBvYmplY3QncyBjb2xsaXNpb24gYm94XHJcbiAgLy9PdmVyd3JpdHRlbiBpbiBjb21wb3NpdGUgb2JqZWN0cyB0byByZXR1cm4gZXZlcnkgb2JqZWN0J3MgY29sbGlzaW9uIGJveFxyXG4gIC8vd2l0aGluIHRoZSBjb21wb3NpdGUgb2JlY3QuXHJcbiAgZ2V0QWxsQ29sbGlzaW9uQm94ZXMoKTpjb2xsaXNpb25fYm94W117XHJcbiAgICByZXR1cm4gW3RoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpXVxyXG4gIH1cclxuICAvL0NoZWNrcyB0byBzZWUgaWYgYW4gb2JqZWN0IGFjdHVhbGx5IGNvbGxpZGVzIHdpdGggdGhlIHByb3ZpZGVkIGJveC5cclxuICAvL0EgYm94IHJlcHJlc2VudHMgYW4gYXJlYSB3aXRoaW4gdGhlIGdhbWUgc3BhY2VcclxuICAvL0NoZWNraW5nIGZvciBjb2xsaXNpb25zIGlzIHRyaXZpYWwgY3VycmVudGx5LCBhcyBhbGwgaGl0Ym94ZXMgYXJlIGF4aXMgYWxpZ25lZFxyXG4gIC8vQnV0IGltcGxlbWVudGluZyBhIG1vcmUgY29tcGxpY2F0ZWQgcGh5c2ljcyBlbmdpbmUgd291bGQgbWFrZSB0aGlzIG1ldGhvZCdzIGltcGwuXHJcbiAgLy9zaWduaWZpY2F0bHkgbW9yZSBjb21wbGV4LlxyXG4gIGNvbGxpZGVzV2l0aEJveChvdGhlcl9vYmplY3Q6IGNvbGxpc2lvbl9ib3gpOiBib29sZWFuIHtcclxuICAgIGxldCBjb2xsaWRlc19ob3JyaXpvbnRhbGx5ID0gZmFsc2UsIGNvbGxpZGVzX3ZlcnRpY2FsbHkgPSBmYWxzZTtcclxuICAgIGxldCBoYm94ID0gdGhpcy5oaXRib3g7XHJcbiAgICBpZighdGhpcy5oaXRib3gpe1xyXG4gICAgICBoYm94ID0ge1xyXG4gICAgICAgIHhfb2Zmc2V0OjAsXHJcbiAgICAgICAgeV9vZmZzZXQ6MCxcclxuICAgICAgICB3aWR0aDp0aGlzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhlaWdodFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgb2JqZWN0X2JvdW5kcyA9IHtcclxuICAgICAgbGVmdDogKHRoaXMuc3RhdGUucG9zaXRpb24ueCArIGhib3gueF9vZmZzZXQgLSBoYm94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoIC8gMiksXHJcbiAgICAgIHJpZ2h0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCArIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgdG9wOiAodGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgaGJveC55X29mZnNldCArIGhib3guaGVpZ2h0ICogdGhpcy5zdGF0ZS5zY2FsaW5nLmhlaWdodCAvIDIpLFxyXG4gICAgICBib3R0b206ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0IC0gaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3RoZXJfb2JqZWN0X2JvdW5kcyA9IHtcclxuICAgICAgbGVmdDogKG90aGVyX29iamVjdC54IC0gb3RoZXJfb2JqZWN0LndpZHRoIC8gMiksXHJcbiAgICAgIHJpZ2h0OiAob3RoZXJfb2JqZWN0LnggKyBvdGhlcl9vYmplY3Qud2lkdGggLyAyKSxcclxuICAgICAgdG9wOiAob3RoZXJfb2JqZWN0LnkgKyBvdGhlcl9vYmplY3QuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKG90aGVyX29iamVjdC55IC0gb3RoZXJfb2JqZWN0LmhlaWdodCAvIDIpXHJcbiAgICB9XHJcblxyXG4gICAgLy9XZSBjYW4gY29tcGFyZSB0aGUgc2lkZXMgb2YgdGhlIGJveGVzIHRvIHNlZSBpZiB0aGV5IG92ZXJsYXBcclxuICAgIC8vV2UgY2hlY2sgb25jZSBmb3IgaG9pem9udGFsIG92ZXJsYXAsIHRoZW4gdmVydGljYWwuXHJcbiAgICBpZiAoKG9iamVjdF9ib3VuZHMubGVmdCA+PSBvdGhlcl9vYmplY3RfYm91bmRzLmxlZnQgJiYgb2JqZWN0X2JvdW5kcy5sZWZ0IDwgb3RoZXJfb2JqZWN0X2JvdW5kcy5yaWdodCkgfHwgKG90aGVyX29iamVjdF9ib3VuZHMubGVmdCA+IG9iamVjdF9ib3VuZHMubGVmdCAmJiBvdGhlcl9vYmplY3RfYm91bmRzLmxlZnQgPCBvYmplY3RfYm91bmRzLnJpZ2h0KSkge1xyXG4gICAgICBjb2xsaWRlc19ob3JyaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgob2JqZWN0X2JvdW5kcy5ib3R0b20gPj0gb3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gJiYgb2JqZWN0X2JvdW5kcy5ib3R0b20gPCBvdGhlcl9vYmplY3RfYm91bmRzLnRvcCkgfHwgKG90aGVyX29iamVjdF9ib3VuZHMuYm90dG9tID4gb2JqZWN0X2JvdW5kcy5ib3R0b20gJiYgb3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gPCBvYmplY3RfYm91bmRzLnRvcCkpe1xyXG4gICAgICBjb2xsaWRlc192ZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsaWRlc19ob3JyaXpvbnRhbGx5ICYmIGNvbGxpZGVzX3ZlcnRpY2FsbHk7XHJcbiAgfVxyXG4gIC8vVGhlIHBhcnRpY2xlIG11c3QgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgcm9vbSdzIHJlZ2lzdGVyUGFydGljbGVzIG1ldGhvZCBcclxuICAvL1RoZSBuYW1lIHBhcmFtZXRlciBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUga2V5IG9mIGEgcGFydGljbGVcclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcsb2Zmc2V0OlZlY3RvcixsaWZldGltZTpudW1iZXIscmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCByb29tID0gdGhpcy5nYW1lLmdldFJvb20oKTtcclxuICAgIGxldCBzdCA9IHRoaXMuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICBsZXQgZmluYWxfcG9zaXRpb246VmVjdG9yID0ge1xyXG4gICAgICB4OnN0LnBvc2l0aW9uLnggKyBvZmZzZXQueCxcclxuICAgICAgeTpzdC5wb3NpdGlvbi55ICsgb2Zmc2V0LnlcclxuICAgIH1cclxuICAgIHJvb20uZW1pdFBhcnRpY2xlKG5hbWUsZmluYWxfcG9zaXRpb24sbGlmZXRpbWUscmFuZ2UpXHJcbiAgfVxyXG4gIC8vSW50ZXJuYWwgbWV0aG9kIHRoYXQga2VlcHMgY2FsY3VsYXRlcyB0aGUgZGVsdGFfdGltZVxyXG4gIC8vQWxzbyBjb252ZXJ0cyBpbmRpdmlkdWFsIHNwcml0ZXMgaW50byBhcnJheXMgb2Ygb25lIHNwcml0ZS5cclxuICByZW5kZXJUcmFjayh0aW1lOm51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10ge1xyXG4gICAgbGV0IHJlbmRlcmVkID0gdGhpcy5yZW5kZXJmKHRpbWUgLSB0aGlzLmxhc3RfcmVuZGVyKTtcclxuICAgIGxldCBmaW5hbDpwb3NpdGlvbmVkX3Nwcml0ZVtdO1xyXG4gICAgdGhpcy5sYXN0X3JlbmRlciA9IHRpbWU7XHJcbiAgICBpZihBcnJheS5pc0FycmF5KHJlbmRlcmVkKSlcclxuICAgICAgZmluYWwgPSByZW5kZXJlZFxyXG4gICAgZWxzZXtcclxuICAgICAgZmluYWwgPSBbcmVuZGVyZWRdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWw7XHJcbiAgfVxyXG4gIC8vTW9zdCBvYmplY3RzIHNob3VsZCBub3QgYmUgb3ZlcndyaXR0aW5nIHRoZSByZW5kZXJmIG1ldGhvZFxyXG4gIC8vUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgc3ByaXRlIGZvciB0aGUgb2JqZWN0XHJcbiAgcmVuZGVyZih0aW1lOiBudW1iZXIpOiBwb3NpdGlvbmVkX3Nwcml0ZVtdIHwgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICAvL0lmIHRoZSBvYmplY3QgZG9lc24ndCBoYXZlIHJlZ2lzdGVyZWQgYW5pbWF0aW9ucywgb3IgaXNuJ3QgcGxheWluZyBvbmVcclxuICAgIC8vV2UgaGF2ZSB0byBjcmVhdGUgdGhlIHNwcml0ZSBoZXJlLlxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYW5pbWF0aW9ucy5hbmltYXRpb25zKS5sZW5ndGggPT0gMCB8fCAhdGhpcy5hbmltYXRpb25zLmN1cnJlbnQpIHtcclxuICAgICAgaWYoIXRoaXMuc3ByaXRlX3NoZWV0IHx8ICF0aGlzLmhlaWdodCB8fCAhdGhpcy53aWR0aCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNwcml0ZTp1bmRlZmluZWQsXHJcbiAgICAgICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIGxldCBzcHJpdGVfd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAvL1RlY2huaWNhbGx5IHdlIGRvbid0IG5lZWQgdG8gZGVmaW5lIGFuIG9iamVjdCBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgICAgIC8vSWYgdGhlIHNwcml0ZV91cmwgcG9pbnRzIHRvIGEgc2luZ2xlIHN0YXRpYyBzcHJpdGUsIGFzIHdlIGNhbiBqdXN0IHB1bGxcclxuICAgICAgLy90aGUgZGltZW5zaW9ucyBmcm9tIHRoZSBpbWFnZVxyXG4gICAgICBpZiAodGhpcy5oZWlnaHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3ByaXRlX2hlaWdodCA9IHRoaXMuc3ByaXRlX3NoZWV0LmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy53aWR0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfd2lkdGggPSB0aGlzLnNwcml0ZV9zaGVldC53aWR0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgc3ByaXRlX3NoZWV0OiB0aGlzLnNwcml0ZV9zaGVldCxcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBzcHJpdGVfd2lkdGg6IHNwcml0ZV93aWR0aCxcclxuICAgICAgICAgIHNwcml0ZV9oZWlnaHQ6IHNwcml0ZV9oZWlnaHQsXHJcbiAgICAgICAgICBvcGFjaXR5OnRoaXMub3BhY2l0eVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IHRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3ByaXRlOnRoaXMuYW5pbWF0aW9ucy5yZW5kZXJmKHRpbWUpLFxyXG4gICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHRoaXMuc3RhdGUucG9zaXRpb24ueVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBjb21wb3NpdGVfc3RhdGlje1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIG9iajpvYmpcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIGNvbXBvc2l0ZV9vYmogZXh0ZW5kcyBvYmp7XHJcbiAgb2JqZWN0czpvYmpbXSA9IFtdO1xyXG4gIHJlbmRlciA9IGZhbHNlO1xyXG4gIHJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICBzdGF0aWNzOmNvbXBvc2l0ZV9zdGF0aWNbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHBvczpvYmpfc3RhdGUpe1xyXG4gICAgc3VwZXIocG9zKTtcclxuICB9XHJcbiAgbG9hZCgpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KCBhc3luYyAocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFsuLi50aGlzLm9iamVjdHMubWFwKChhKT0+YS5sb2FkKCkpLC4uLnRoaXMuc3RhdGljcy5tYXAoYT0+YS5vYmoubG9hZCgpKV0pO1xyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBjb21iaW5lZE9iamVjdHMoKTpvYmpbXXtcclxuICAgIGxldCBjb21iaW5lZCA9IFsuLi50aGlzLm9iamVjdHMsLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iaildO1xyXG4gICAgY29tYmluZWQuZm9yRWFjaChhPT5hLnBhcmVudCA9IHRoaXMpO1xyXG4gICAgcmV0dXJuIFsuLi5jb21iaW5lZCx0aGlzXTtcclxuICB9XHJcbiAgZ2V0SXRlbXNCeVRhZyh0YWc6c3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLmNvbWJpbmVkT2JqZWN0cygpLmZpbHRlcigoYSk9PmEudGFncy5pbmRleE9mKHRhZykgPiAtMSk7XHJcbiAgfVxyXG4gIGFkZEl0ZW0oYTpvYmosbGlzdD10aGlzLm9iamVjdHMpe1xyXG4gICAgbGlzdC5wdXNoKGEpO1xyXG4gICAgYS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5nYW1lLmdldFJvb20oKS5hZGRJdGVtKGEpO1xyXG4gIH1cclxuICBnZXRBbGxDb2xsaXNpb25Cb3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIGxldCBhcnI6Y29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICBmb3IobGV0IG9iaiBvZiBbLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iaiksLi4udGhpcy5vYmplY3RzXSl7XHJcbiAgICAgIGxldCBjcmVhdGVkX2JveCA9IG9iai5nZXRBbGxDb2xsaXNpb25Cb3hlcygpO1xyXG4gICAgICBpZihBcnJheS5pc0FycmF5KGNyZWF0ZWRfYm94KSl7XHJcbiAgICAgICAgYXJyLnB1c2goLi4uY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgYXJyLnB1c2goY3JlYXRlZF9ib3gpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuICBkZWxldGUoKXtcclxuICAgIGZvcihsZXQgYSBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBhLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGEub2JqLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuZGVsZXRlKCk7XHJcbiAgfVxyXG4gIGNvbGxpZGVzV2l0aEJveChhOiBjb2xsaXNpb25fYm94KTpib29sZWFue1xyXG4gICAgZm9yKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKXtcclxuICAgICAgaWYob2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgbyBvZiB0aGlzLnN0YXRpY3Mpe1xyXG4gICAgICBpZihvLm9iai5jb2xsaWRlc1dpdGhCb3goYSkpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3Mgc3RhdGljX29iaiB7XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgZ3Jhdml0eV9vYmogZXh0ZW5kcyBvYmp7XHJcbiAgZ3Jhdml0eSA9IHRydWVcclxufSIsImltcG9ydCB7IHNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBHZXRWaWV3cG9ydERpbWVuc2lvbnMgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBvYmpfc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBUZXh0X05vZGUsIFRleHRTZXR0aW5nLEhVRCxUZXh0IH0gZnJvbSBcIi4vaHVkXCI7XHJcbmltcG9ydCB7cG9zaXRpb25lZF9zcHJpdGV9IGZyb20gXCIuL3Nwcml0ZVwiXHJcblxyXG5pbnRlcmZhY2UgY2FtZXJhX3N0YXRlIHtcclxuICBzY2FsaW5nOiBudW1iZXIsXHJcbiAgcG9zaXRpb246IHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG4gIH1cclxuICBkaW1lbnNpb25zOiB7XHJcbiAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBudW1iZXJcclxuICB9LFxyXG4gIHZpZXdwb3J0OiB2aWV3cG9ydCxcclxuICBkZWJ1Zzpib29sZWFuLFxyXG4gIGh1ZDpIVUQgIFxyXG59XHJcblxyXG5pbnRlcmZhY2Ugdmlld3BvcnQge1xyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgY2FtZXJhX3Byb3BlcnRpZXMge1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyLFxyXG4gIGRpbWVuc2lvbnM6e1xyXG4gICAgaGVpZ2h0Om51bWJlcixcclxuICAgIHdpZHRoOm51bWJlclxyXG4gIH1cclxuICBzY2FsaW5nOm51bWJlcixcclxuICBkZWJ1Zzpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gIHN0YXRlOiBjYW1lcmFfc3RhdGU7XHJcbiAgaHVkOiBIVUQ7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6Y2FtZXJhX3Byb3BlcnRpZXMsIHY6IHZpZXdwb3J0LCBodWQ6SFVEID0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzY2FsaW5nOnByb3BzLnNjYWxpbmcsXHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogcHJvcHMueCxcclxuICAgICAgICB5OiBwcm9wcy55XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbWVuc2lvbnM6IHByb3BzLmRpbWVuc2lvbnMsXHJcbiAgICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgICAgeDp2LngsXHJcbiAgICAgICAgeTp2LnkgLFxyXG4gICAgICAgIHdpZHRoOiB2LndpZHRoICogcHJvcHMuZGltZW5zaW9ucy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHYuaGVpZ2h0ICogcHJvcHMuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgfSxcclxuICAgICAgZGVidWc6cHJvcHMuZGVidWcsXHJcbiAgICAgIGh1ZFxyXG4gICAgfVxyXG4gICAgdGhpcy5odWQgPSBodWQ7XHJcbiAgfVxyXG4gIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi54ID0geDtcclxuICB9XHJcbiAgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgPSB5XHJcbiAgfVxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucG9zaXRpb24ueDtcclxuICB9XHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcmVuZGVyX2Z1bmMge1xyXG4gICh4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGluZzogbnVtYmVyKTogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVjdGFuZ2xlIHtcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBzcHJpdGVfYXJncyB7XHJcbiAgc3ByaXRlOiBzcHJpdGUsXHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICByb3RhdGlvbjogbnVtYmVyLFxyXG4gIHNjYWxlOmRpbWVuc2lvbnMsXHJcbiAgc2NhbGVfdHlwZTpzY2FsZV90eXBlXHJcbn1cclxuXHJcbmludGVyZmFjZSByZW5kZXJlcl9hcmdzIHtcclxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgY2FtZXJhOiBDYW1lcmFcclxufVxyXG5cclxuZXhwb3J0IGVudW0gcmVuZGVyX3R5cGUge1xyXG4gIHRleHQsXHJcbiAgc3ByaXRlLFxyXG4gIHJlY3QsXHJcbiAgc3Ryb2tlX3JlY3RcclxufVxyXG5cclxuZXhwb3J0IGVudW0gc2NhbGVfdHlwZXtcclxuICBncm93LFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHVkX3RleHRfcmVuZGVyZXIgPSAocjogcmVuZGVyZXJfYXJncywgczogVGV4dFNldHRpbmcpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICByLmNvbnRleHQuZm9udCA9IGAke3MuZm9udC5zaXplfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ247XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55LCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIHMueCwgdmhlaWdodCAtIHMueSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dF9yZW5kZXJlciA9IChyOnJlbmRlcmVyX2FyZ3MsczpUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHIuY29udGV4dC5tZWFzdXJlVGV4dChzLmZvbnQudGV4dCkud2lkdGggKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBoZWlnaHQgPSBzLmZvbnQuc2l6ZSAqIDEuMiAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHMueCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC8yICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemUgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nfXB4ICR7cy5mb250LmZvbnR9YDtcclxuICByLmNvbnRleHQuZmlsbFN0eWxlID0gcy5mb250LmNvbG9yO1xyXG4gIHIuY29udGV4dC50ZXh0QWxpZ24gPSBzLmZvbnQuYWxpZ25cclxuICByLmNvbnRleHQuc2F2ZSgpO1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCwgZmluYWxfeSk7XHJcbiAgaWYgKHMuZm9udC5tYXhfd2lkdGgpIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgMCwgMCwgcy5mb250Lm1heF93aWR0aCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwKTtcclxuICB9XHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNwcml0ZV9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBzcHJpdGVfYXJncykgPT4ge1xyXG4gIGxldCBjYW1lcmEgPSByLmNhbWVyYTtcclxuICBsZXQgdmhlaWdodCA9IHIuY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHMuc2NhbGUud2lkdGggLyAyKSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0gcy55IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHMuc2NhbGUuaGVpZ2h0IC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUuaGVpZ2h0O1xyXG4gIGxldCB3aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKiBzLnNjYWxlLndpZHRoO1xyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0Lmdsb2JhbEFscGhhID0gcy5zcHJpdGUub3BhY2l0eTtcclxuICByLmNvbnRleHQudHJhbnNsYXRlKGZpbmFsX3ggICsgKHdpZHRoKSAvIDIsIGZpbmFsX3kgKyBoZWlnaHQgLyAyKVxyXG4gIGxldCByYWRpYW5zID0gcy5yb3RhdGlvbiAqIChNYXRoLlBJIC8gMTgwKTtcclxuICByLmNvbnRleHQucm90YXRlKHJhZGlhbnMpO1xyXG4gIGlmKHMuc2NhbGVfdHlwZSA9PSBzY2FsZV90eXBlLmdyb3cpe1xyXG4gICAgci5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX3NoZWV0LFxyXG4gICAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgICBzLnNwcml0ZS50b3AsXHJcbiAgICAgIHMuc3ByaXRlLnNwcml0ZV93aWR0aCxcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX2hlaWdodCxcclxuICAgICAgLSh3aWR0aCApIC8gMixcclxuICAgICAgLWhlaWdodCAvIDIsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHRcclxuICAgIClcclxuICB9XHJcbiAgZWxzZSBpZihzLnNjYWxlX3R5cGUgPT0gc2NhbGVfdHlwZS5yZXBlYXQpe1xyXG4gICAgbGV0IG9uZV93aWR0aCA9IHMuc3ByaXRlLnNwcml0ZV93aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgICBsZXQgb25lX2hlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gICAgbGV0IHRvdGFsX2hvcl9zcHJpdGVzID0gd2lkdGgvb25lX3dpZHRoXHJcbiAgICBsZXQgdG90YWxfdmVyX3Nwcml0ZXMgPSBoZWlnaHQvb25lX2hlaWdodDtcclxuICAgZm9yKGxldCBhID0gMDthIDwgdG90YWxfaG9yX3Nwcml0ZXM7YSArPSAxKXtcclxuICAgICBmb3IobGV0IGIgPSAwO2IgPCB0b3RhbF92ZXJfc3ByaXRlcztiICs9IDEpe1xyXG4gICAgICAgbGV0IG5ld193aWR0aCA9IG9uZV93aWR0aDtcclxuICAgICAgIGxldCBuZXdfaGVpZ2h0ID0gb25lX2hlaWdodDtcclxuICAgICAgIGlmKChhICsgMSkgKiBvbmVfd2lkdGggLSB3aWR0aCA+IDApe1xyXG4gICAgICAgICBuZXdfd2lkdGggPSB3aWR0aCAlIG9uZV93aWR0aDtcclxuICAgICAgIH1cclxuICAgICAgIGlmKChiICsgMSkgKiBvbmVfaGVpZ2h0IC0gaGVpZ2h0ID4gMCl7XHJcbiAgICAgICAgIG5ld19oZWlnaHQgPSBoZWlnaHQgJSBvbmVfaGVpZ2h0O1xyXG4gICAgICAgfVxyXG4gICAgICAgci5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgcy5zcHJpdGUubGVmdCxcclxuICAgICAgICBzLnNwcml0ZS50b3AsXHJcbiAgICAgICAgbmV3X3dpZHRoIC8gKHIuY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIG5ld19oZWlnaHQgLyAoci5jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgLXdpZHRoLzIgKyBhICogb25lX3dpZHRoLFxyXG4gICAgICAgIC1oZWlnaHQvMiArIGIgKiBvbmVfaGVpZ2h0LFxyXG4gICAgICAgIG5ld193aWR0aCxcclxuICAgICAgICBuZXdfaGVpZ2h0XHJcbiAgICAgICApXHJcbiAgICAgfVxyXG5cclxuICAgfSBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgci5jb250ZXh0LnJlc3RvcmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cm9rZWRfcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY3RfcmVuZGVyZXIgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZWN0OiByZWN0YW5nbGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBsaW5lV2lkdGg6bnVtYmVyLCBjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0IC8gY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGZpbmFsX3ggPSAoKHggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiAtIHJlY3Qud2lkdGggLyAyKSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHkgLSByZWN0LmhlaWdodCAvIDIgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBoZWlnaHQgPSByZWN0LmhlaWdodCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCB3aWR0aCA9IHJlY3Qud2lkdGggKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY29udGV4dC5maWxsUmVjdChmaW5hbF94LCBmaW5hbF95LCB3aWR0aCwgaGVpZ2h0KTtcclxufSIsImltcG9ydCB7IGdyYXZpdHlfb2JqLG9iaiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZSwgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSwgVmVjdG9yIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgdmVsb2NpdHlDb2xsaXNpb25DaGVjayxjaGVja19jb2xsaXNpb25zLGNvbGxpc2lvbl9ib3gsY2hlY2tfYWxsX2NvbGxpc2lvbnMsY2hlY2tfYWxsX29iamVjdHN9IGZyb20gXCIuL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlbmRlcl9jb2xsaXNpb25fYm94LERFQlVHfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7QmluZCxjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZX0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtIVUQsVGV4dCwgVGV4dF9Ob2RlfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHthdWRpb30gZnJvbSBcIi4vYXVkaW9cIlxyXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtkZWJ1Z191cGRhdGVfb2JqX2xpc3Qscm9vdF9wYXRoLHBhdGh9IGZyb20gXCIuLi9saWIvZGVidWdcIjtcclxuaW1wb3J0IHtwcmVmYWJzfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL3ByZWZhYnNcIjtcclxuXHJcbmludGVyZmFjZSBwb3NpdGlvbntcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlHcmF2aXR5KG9iOmdyYXZpdHlfb2JqLGdyYXZfY29uc3Q6bnVtYmVyLCBncmF2X21heDpudW1iZXIpe1xyXG4gIGlmKG9iLmdyYXZpdHkgJiYgb2Iuc3RhdGUudmVsb2NpdHkueSA+IGdyYXZfbWF4KXtcclxuICAgIG9iLnN0YXRlLnZlbG9jaXR5LnkgKz0gZ3Jhdl9jb25zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFydGljbGVfZW50cnl7XHJcbiAgc3ByaXRlOnN0cmluZyxcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHdpZHRoOm51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgcGFydGljbGVze1xyXG4gIFtpbmRleDpzdHJpbmddOnBhcnRpY2xlX2VudHJ5XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugcm9vbV9pPFQ+e1xyXG4gIGJhY2tncm91bmRfdXJsOnN0cmluZyxcclxuICBvYmplY3RzOm9ialtdXHJcbiAgc3RhdGU6VFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIG9iamVjdF9zdGF0ZV9jb25maWcge1xyXG4gIHR5cGU6c3RyaW5nLFxyXG4gIHN0YXRlOm9ial9zdGF0ZSxcclxuICBwYXJhbWV0ZXJzPzogdW5rbm93blxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHN0YXRlX2NvbmZpZ3tcclxuICBvYmplY3RzOm9iamVjdF9zdGF0ZV9jb25maWdbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3Mgcm9vbTxUPntcclxuICAvL1VybCB0byBhbiBpbWFnZSB0byBiZSB1c2VkIGZvciB0aGUgcm9vbSBiYWNrZ3JvdW5kXHJcbiAgYmFja2dyb3VuZF91cmw6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIG9iamVjdHM6IG9ialtdID0gW107XHJcbiAgLy9UaGlzIG9iamVjdCBjb250YWlucyBwYXJ0aWNsZSBkZWZpbml0aW9uc1xyXG4gIHBhcnRpY2xlczpwYXJ0aWNsZXMgPSB7fTtcclxuICAvL1RoaXMgYXJyYXkgaXMgd2hhdCBhY3R1YWxseSBjb250YWlucyB0aGUgcGFydGljbGVzXHJcbiAgLy90aGF0IGV4aXN0cyB3aXRoaW4gdGhlIHJvb20uXHJcbiAgcGFydGljbGVzX2Fycjogb2JqW10gPSBbXTtcclxuICBzdGF0ZTogVDtcclxuICBiaW5kczpudW1iZXJbXSA9IFtdO1xyXG4gIGdhbWU6Z2FtZTx1bmtub3duPjtcclxuICBodWQ6SFVEO1xyXG4gIGF1ZGlvID0gbmV3IGF1ZGlvKCk7XHJcbiAgLy9UaGVzZSB0ZXh0IG5vZGVzIGV4aXN0cyBpbiB0aGUgYWN0dWFsIHJvb20gc3BhY2UsIHJhdGhlciB0aGFuXHJcbiAgLy9vbiB0aGUgaHVkIGxheWVyLlxyXG4gIHJlbmRlcjpib29sZWFuID0gdHJ1ZTtcclxuICB0ZXh0X25vZGVzOlRleHRbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKGdhbWU6Z2FtZTx1bmtub3duPixjb25maWc6c3RhdGVfY29uZmlnKXtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBmb3IobGV0IGMgb2YgY29uZmlnLm9iamVjdHMpe1xyXG4gICAgICAvL1RoaXMgaGFuZGxlcyBsb2FkaW5nIG9iamVjdHMgZnJvbSB0aGUgc2F2ZWQganNvbiBmaWxlIGFzc29jaWF0ZWQgd2l0aCBlYWNoIHJvb20uXHJcbiAgICAgIHRoaXMuYWRkSXRlbVN0YXRlQ29uZmlnKGMpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydFN0YXRlQ29uZmlnKCl7XHJcbiAgICBsZXQgY29uZmlnOnN0YXRlX2NvbmZpZyA9IHtvYmplY3RzOltdfTtcclxuICAgIGZvcihsZXQgbyBvZiB0aGlzLm9iamVjdHMuZmlsdGVyKChvYmopPT5vYmouc2F2ZV90b19maWxlKSl7XHJcbiAgICAgIC8vSWYgYW4gb2JqZWN0IGhhcyBhIHBhcmVudCBvYmplY3QsIGl0J3MgYSBkZXNjZW5kZW50IG9mIGEgY29tcG9zaXRlIG9iamVjdFxyXG4gICAgICAvL1RoZSBwYXJlbnQgd2lsbCBzcGF3biB0aGlzIG9iamVjdCB3aGVuIGl0J3MgaW5zdGFudGlhdGVkLCBzbyB3ZSBkb1xyXG4gICAgICAvL25vdCBoYXZlIHRvIHNhdmUgdGhpcyBpbnN0YW5jZS5cclxuICAgICAgICBpZighby5wYXJlbnQpe1xyXG4gICAgICAgIGNvbmZpZy5vYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTpvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICBzdGF0ZTpvLnN0YXRlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIC8vVGhpcyBoYW5kbGVzIHRoZSBsb2FkaW5nIG9mIGFsbCByb29tIHNwcml0ZXMsIGFuZFxyXG4gIC8vYW55IG9iamVjdHMgaXQgY29udGFpbnMuXHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBsZXQgdG9fYXdhaXQgPSB0aGlzLm9iamVjdHMubWFwKChhKSA9PiBhLmxvYWQoKSk7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRvX2F3YWl0KTtcclxuICAgICAgbGV0IHAgPSB0aGlzLmJhY2tncm91bmRfdXJsO1xyXG4gICAgICBpZihERUJVRyl7XHJcbiAgICAgICAgcCA9IHBhdGguam9pbihyb290X3BhdGgsdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH1cclxuICAgICAgYS5zcmMgPSBwO1xyXG4gICAgICBhLm9uZXJyb3IgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvYWRpbmcgRXJyb3I6XCIgKyB0aGlzLmJhY2tncm91bmRfdXJsKTtcclxuICAgICAgfSlcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZCA9IGE7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdWRpby5sb2FkKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vVGhpcyBpcyB1c2VkIHdoaWxlIGxvYWRpbmcgb2JqZWN0cyBmcm9tIGZpbGUsIGl0J3MgdXNlZCB0byBkeW5hbWljYWxseSBsb2FkXHJcbiAgLy9vYmplY3RzIGZyb20gdGhlIHJvb20ncyBqc29uLiBJZiBhZGRpbmcgaXRlbXMgd2l0aGluIGNvZGUsIGl0J3MgYmV0dGVyIHRvIGNyZWF0ZVxyXG4gIC8vbmV3IGluc3RhbmNlcyBvZiBvYmplY3RzIHRocm91Z2ggYWRkSXRlbVxyXG4gIGFzeW5jIGFkZEl0ZW1TdGF0ZUNvbmZpZyhjb25maWc6b2JqZWN0X3N0YXRlX2NvbmZpZyl7XHJcbiAgICBpZihwcmVmYWJzW2NvbmZpZy50eXBlXSl7XHJcbiAgICAgIGxldCBuZXdfb2JqID0gPG9iaj4obmV3IHByZWZhYnNbY29uZmlnLnR5cGVdKE9iamVjdC5hc3NpZ24oe30sY29uZmlnLnN0YXRlKSxjb25maWcucGFyYW1ldGVycykpO1xyXG4gICAgICB0aGlzLmFkZEl0ZW1zKG5ld19vYmouY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJVTktOT1dOIFRZUEUgQVRURU1QVEVEIFRPIExPQUQ6IFwiICsgY29uZmlnLnR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vQWRkcyB0aGUgcGFzc2VkIGl0ZW0gdG8gdGhlIHJvb20uXHJcbiAgYXN5bmMgYWRkSXRlbShvOm9iaiwgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICB0aGlzLmFkZEl0ZW1zKFtvXSxsaXN0KTtcclxuICB9XHJcbiAgLy9BZGRzIGV2ZXJ5IGl0ZW0gaW4gdGhlIHBhc3NlZCBhcnJheSB0byB0aGUgcm9vbS5cclxuICBhc3luYyBhZGRJdGVtcyhvOm9ialtdLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGZvcihsZXQgb2Igb2Ygbyl7XHJcbiAgICAgIG9iLmdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChvLm1hcCgoYSk9PmEubG9hZCgpKSk7XHJcbiAgICBsaXN0LnB1c2goLi4ubyk7XHJcbiAgICBpZihERUJVRyAmJiBsaXN0ID09PSB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9EZWxldGVzIHRoZSBpdGVtIGFuZCByZW1vdmVzIGl0IGZyb20gdGhlIHJvb20ncyBvYmplY3QgbGlzdFxyXG4gIGRlbGV0ZUl0ZW0oaWQ6c3RyaW5nLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGZvcihsZXQgYSA9IDA7YSA8IGxpc3QubGVuZ3RoO2ErKyl7XHJcbiAgICAgIGlmKGxpc3RbYV0uaWQgPT09IGlkKXtcclxuICAgICAgICBsaXN0LnNwbGljZShhLDEpXHJcbiAgICAgICAgYS0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihERUJVRyAmJiBsaXN0ID09PSB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9BbnkgcGFydGljbGVzIHRoYXQgYXJlIG5lZWRlZCBpbiB0aGUgcm9vbSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHBhcnRpY2xlIGFycmF5IGhlcmUuXHJcbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKXtcclxuXHJcbiAgfVxyXG4gIC8vQWRkcyBhIGJpbmQgdGhhdCBpcyBleGVjdXRlZCB3aGVuIHRoZSBwYXNzZWQga2V5IGlzIGFjdGl2YXRlZFxyXG4gIC8va2V5IGV4YW1wbGVzOiBtb3VzZTBkb3duIEtleUFkb3duIEtleUx1cFxyXG4gIGJpbmRDb250cm9sKGtleTpzdHJpbmcseDpleGVjX3R5cGUsZnVuYzpjb250cm9sX2Z1bmMsaW50ZXJ2YWw6bnVtYmVyID0gMSl7XHJcbiAgICB0aGlzLmJpbmRzLnB1c2goQmluZChrZXksZnVuYyx4LGludGVydmFsKSk7IFxyXG4gIH1cclxuICAvL0NoZWNrcyBmb3Igb2JqZWN0cyB0aGF0IGhhdmUgY29sbGlzaW9uIGF0IHRoZSBwYXNzZWQgcG9pbnRcclxuICBjaGVja0NvbGxpc2lvbnNQb2ludChwb3M6VmVjdG9yLGV4ZW1wdD86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbGxpc2lvbnMoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSxleGVtcHQsbGlzdCk7XHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBhbnkgb2JqZWN0cyBhdCB0aGUgcGFzc2VkIHBvaW50XHJcbiAgY2hlY2tPYmplY3RzUG9pbnQocG9zOlZlY3RvcixleGVtcHQ/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tPYmplY3RzKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sZXhlbXB0LGxpc3QpO1xyXG4gIH1cclxuICAvL0NoZWNrcyBmb3IgY29sbGlzaW9ucyBhdCB0aGUgcG9pbnQgdGhhdCBjb250YWluIGV2ZXJ5IHRhZyB3aXRoaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrQ29sbGlzaW9uc1BvaW50SW5jbHVzaXZlKHBvczpWZWN0b3IsdGFncz86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbGxpc2lvbnNJbmNsdXNpdmUoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSx0YWdzLGxpc3QpO1xyXG4gIH1cclxuICAvL0NoZWNrcyBmb3IgYW55IG9iamVjdHMgdGhhdCBjb250YWluIGV2ZXJ5IHRhZyB3aXRoaW4gdGhlIHNlY29uZCBhcmd1bWVudFxyXG4gIGNoZWNrT2JqZWN0c1BvaW50SW5jbHVzaXZlKHBvczpWZWN0b3IsdGFncz86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja09iamVjdHNJbmNsdXNpdmUoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSx0YWdzLGxpc3QpO1xyXG4gIH1cclxuICAvL0NoZWNrcyBmb3IgY29sbGlzaW9ucyBpbiB0aGUgYm94IHRoYXQgY29udGFpbiB0aGUgdGFncyBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tDb2xsaXNpb25zSW5jbHVzaXZlKGJveDpjb2xsaXNpb25fYm94LHRhZ3M6c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKG9iaj0+b2JqLmNvbGxpc2lvbiAmJiBvYmouY29sbGlkZXNXaXRoQm94KGJveCkgJiYgdGFncy5ldmVyeSgodmFsKT0+b2JqLnRhZ3MuaW5jbHVkZXModmFsKSkpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIGZvciBhbnkgb2JqZWN0cyBpbiB0aGUgYm94IHRoYXQgY29udGFpbiBhbGwgdGFncyBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tPYmplY3RzSW5jbHVzaXZlKGJveDpjb2xsaXNpb25fYm94LHRhZ3M6c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKChvYmopPT5vYmouY29sbGlkZXNXaXRoQm94KGJveCkgJiYgdGFncy5ldmVyeSgodmFsKT0+b2JqLnRhZ3MuaW5jbHVkZXModmFsKSkpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC8vY2hlY2tzIGZvciBvYmplY3RzIHdpdGggY29sbGlzaW9uIGluIHRoZSBib3ggdGhhdCBkbyBub3QgY29udGFpbiB0aGUgdGFncyBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50XHJcbiAgY2hlY2tDb2xsaXNpb25zKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9jb2xsaXNpb25zKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIC8vY2hlY2tzIGZvciAgYW55IG9iamVjdHMgaW4gdGhlIGJveCB0aGF0IGRvIG5vdCBjb250YWluIHRoZSB0YWdzIGluIHRoZSBzZWNvbmQgYXJndW1lbnRcclxuICBjaGVja09iamVjdHMoYm94OmNvbGxpc2lvbl9ib3gsZXhlbXB0PzpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX29iamVjdHMoYm94LGxpc3QsZXhlbXB0KTtcclxuICB9XHJcbiAgLy9UaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB0byBjYWxsIGJpbmRDb250cm9sIGFuZCBjcmVhdGUgYW55IG5lZWRlZCBrZXlCaW5kaW5nc1xyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIC8vVGhlIHJvb20ncyBzdGF0ZSB1cGRhdGluZyBmdW5jdGlvbi5cclxuICBzdGF0ZWYodGltZTogbnVtYmVyKSB7XHJcbiAgICBmb3IobGV0IHBhcnRpY2xlIG9mIHRoaXMucGFydGljbGVzX2Fycil7XHJcbiAgICAgIHBhcnRpY2xlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgdGV4dF9ub2RlIG9mIHRoaXMudGV4dF9ub2Rlcyl7XHJcbiAgICAgIHRleHRfbm9kZS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdGlja2luZ19vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcigobyk9Pm8udGlja19zdGF0ZSk7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRpY2tpbmdfb2JqZWN0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICAvL1RoaXMgZnVuY3Rpb24gY2hlY2tzIHRoZSB2ZWxvY2l0eSBvZiBldmVyeSBvYmplY3QsIGFuZCBtb3ZlcyBpdCBpbnRvIGl0J3MgbmV4dCBsb2NhdGlvblxyXG4gICAgICAvL3Byb3ZpZGVkIHRoYXQgaXQgY2FuIGZpdCB0aGVyZS5cclxuICAgICAgdmVsb2NpdHlDb2xsaXNpb25DaGVjayh0aWNraW5nX29iamVjdHNbYV0sIHRoaXMub2JqZWN0cyk7XHJcbiAgICAgIHRpY2tpbmdfb2JqZWN0c1thXS5zdGF0ZWYodGltZSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgIGZvcihsZXQgY2FtZXJhcyBvZiB0aGlzLmdhbWUuc3RhdGUuY2FtZXJhcyl7XHJcbiAgICAgICAgaWYoY2FtZXJhcy5odWQpe1xyXG4gICAgICAgICAgY2FtZXJhcy5odWQuc3RhdGVmKHRpbWUpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxwb3M6cG9zaXRpb24sbGlmZXRpbWU6bnVtYmVyLHBvc19yYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHN0YXRlID0ge1xyXG4gICAgICBwb3NpdGlvbjpwb3MsXHJcbiAgICAgIHZlbG9jaXR5Ont4OjAseTowfSxcclxuICAgICAgcm90YXRpb246MCxcclxuICAgICAgc2NhbGluZzp7d2lkdGg6MSxoZWlnaHQ6MX1cclxuICAgIH1cclxuICAgIHRoaXMuYWRkSXRlbShuZXcgUGFydGljbGUodGhpcy5wYXJ0aWNsZXNbbmFtZV0sc3RhdGUsbGlmZXRpbWUscG9zX3JhbmdlKSwgdGhpcy5wYXJ0aWNsZXNfYXJyKTtcclxuICB9XHJcbiAgZ2V0T2JqKGlkOnN0cmluZyl7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgYSsrKXtcclxuICAgICAgaWYodGhpcy5vYmplY3RzW2FdLmlkID09IGlkKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RzW2FdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgLy9HZXRzIGFueSBvYmplY3RzIHRoYXQgaGF2ZSB0aGUgcGFzc2VkIHRhZ1xyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICAvL3JlbmRlcnMgdGhlIHJvb20ncyBzcHJpdGVcclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yLCBkaW1lbnNpb25zfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dldFJhbmRJbnR9IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtwYXJ0aWNsZV9lbnRyeX0gZnJvbSBcIi4vcm9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzcHJpdGV7XHJcbiAgc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgbGVmdDpudW1iZXIsXHJcbiAgdG9wOm51bWJlcixcclxuICBzcHJpdGVfd2lkdGg6bnVtYmVyLFxyXG4gIHNwcml0ZV9oZWlnaHQ6bnVtYmVyLFxyXG4gIG9wYWNpdHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgc3ByaXRlOnNwcml0ZSxcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFydGljbGVfaSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBsaWZldGltZTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSBleHRlbmRzIG9iantcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByYW5kb21fcmFuZ2U6bnVtYmVyO1xyXG4gIG1heF9saWZldGltZTpudW1iZXI7XHJcbiAgc3RhdGU6UGFydGljbGVfaTtcclxuICBzZWxlY3RlZF9zcHJpdGU6c3ByaXRlO1xyXG4gIGNvbnN0cnVjdG9yKHBhcnQ6cGFydGljbGVfZW50cnksc3RhdGU6b2JqX3N0YXRlLGxpZmV0aW1lOm51bWJlcixyYW5kb21fcmFuZ2U6bnVtYmVyKXtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgPSAwO1xyXG4gICAgdGhpcy5zcHJpdGVfdXJsID0gcGFydC5zcHJpdGU7XHJcbiAgICB0aGlzLmhlaWdodCA9IHBhcnQuaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHBhcnQud2lkdGg7XHJcbiAgICB0aGlzLm1heF9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgdGhpcy5yYW5kb21fcmFuZ2UgPSByYW5kb21fcmFuZ2U7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICs9IGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZS8yLHJhbmRvbV9yYW5nZS8yKTtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICByb29tLmRlbGV0ZUl0ZW0odGhpcy5pZCxyb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5saWZldGltZSA+IHRoaXMubWF4X2xpZmV0aW1lKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOm51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBpZighdGhpcy5zZWxlY3RlZF9zcHJpdGUpe1xyXG4gICAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgbGV0IHJhbmRvbV9yb3cgPSBnZXRSYW5kSW50KDAsc3ByaXRlcy5sZW5ndGgpO1xyXG4gICAgICBsZXQgcmFuZG9tX2NvbCA9IGdldFJhbmRJbnQoMCxzcHJpdGVzW3JhbmRvbV9yb3ddLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlID0gc3ByaXRlc1tyYW5kb21fcm93XVtyYW5kb21fY29sXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlLm9wYWNpdHkgPSAxIC0gdGhpcy5zdGF0ZS5saWZldGltZS90aGlzLm1heF9saWZldGltZTtcclxuICAgIHJldHVybntcclxuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICBzcHJpdGU6dGhpcy5zZWxlY3RlZF9zcHJpdGUgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlX2dlbihzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxzcHJpdGVfd2lkdGg6bnVtYmVyLHNwcml0ZV9oZWlnaHQ6bnVtYmVyKTpBcnJheTxBcnJheTxzcHJpdGU+PntcclxuICBsZXQgd2lkdGggPSBzcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgbGV0IHNwcml0ZXM6QXJyYXk8QXJyYXk8c3ByaXRlPj4gPSBbXTtcclxuICBmb3IobGV0IGIgPSAwOyBiIDwgaGVpZ2h0O2IgKz0gc3ByaXRlX2hlaWdodCl7XHJcbiAgICBzcHJpdGVzLnB1c2goW10pO1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHdpZHRoO2EgKz0gc3ByaXRlX3dpZHRoKXtcclxuICAgICAgc3ByaXRlc1tiXS5wdXNoKHtcclxuICAgICAgICBzcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgbGVmdDphLFxyXG4gICAgICAgIHRvcDpiICogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV93aWR0aCxcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNwcml0ZXM7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBsZXQgREVCVUcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2Rldic7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnO1xyXG5pbXBvcnQgeyBvYmp9IGZyb20gXCIuL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcm9vbSB9IGZyb20gXCIuL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IHNwcml0ZV9yZW5kZXJlciwgcmVjdF9yZW5kZXJlciwgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyLCBodWRfdGV4dF9yZW5kZXJlciwgQ2FtZXJhLCB0ZXh0X3JlbmRlcmVyICxzY2FsZV90eXBlfSBmcm9tIFwiLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVSZXBlYXRCaW5kcywgVW5iaW5kIH0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGluaXRfY2xpY2tfaGFuZGxlciB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z19zdGF0ZSwgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCwgZGVidWdfdXBkYXRlX29ial9saXN0LGRlYnVnX3VwZGF0ZV9wcmVmYWJzLCBkZWJ1Z19zdGF0ZWYsIGRlYnVnX3NldHVwIH0gZnJvbSBcIi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7IHJvb21zIGFzIHJvb21fbGlzdCB9IGZyb20gXCIuL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuXHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblxyXG4vL0hvdyBvZnRlbiB0aGUgZ2FtZSBsb2dpYyBsb29wIHNob3VsZCBydW4sIGluIG1pbGxpc2Vjb25kc1xyXG5sZXQgbG9naWNfbG9vcF9pbnRlcnZhbDogbnVtYmVyID0gMTAwMCAvIDYwO1xyXG5cclxubGV0IGxhc3RfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5sZXQgbGFzdF9yZW5kZXJfdGltZSA9IDA7XHJcblxyXG5pbnRlcmZhY2UgZGltZW5zaW9ucyB7XHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNjcmVlbkRpbWVuc2lvbnMoKTogZGltZW5zaW9ucyB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB3aWR0aDogc2NyZWVuX3dpZHRoLFxyXG4gICAgaGVpZ2h0OiBzY3JlZW5faGVpZ2h0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZpZXdwb3J0RGltZW5zaW9ucygpOiBkaW1lbnNpb25zIHtcclxuICByZXR1cm4gKHtcclxuICAgIGhlaWdodDogY2FudmFzX2VsZW1lbnQuaGVpZ2h0LFxyXG4gICAgd2lkdGg6IGNhbnZhc19lbGVtZW50LndpZHRoXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGxldCB2aWV3cG9ydCA9IHtcclxuICBoZWlnaHQ6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICB3aWR0aDogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIHZpZXdwb3J0LmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodFxyXG4gIHZpZXdwb3J0LndpZHRoID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnKHg6IGJvb2xlYW4pIHtcclxuICBERUJVRyA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXVzZWQoeDogYm9vbGVhbikge1xyXG4gIFBBVVNFRCA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJfY29sbGlzaW9uX2JveCA9IChhOiBjb2xsaXNpb25fYm94KSA9PiB7XHJcbiAgYm94ZXMucHVzaChhKTtcclxufVxyXG5cclxubGV0IGJveGVzOiBBcnJheTxjb2xsaXNpb25fYm94PiA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBkZWVwID0gKGE6IGFueSkgPT4ge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEpKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGdhbWVfc3RhdGU8VD4ge1xyXG4gIGxvZ2ljOiBudW1iZXIsXHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGN1cnJlbnRfcm9vbTogcm9vbTx1bmtub3duPixcclxuICBjYW1lcmFzOiBBcnJheTxDYW1lcmE+LFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgZ2xvYmFsczogVFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCByb29tczogYW55W10gPSBbXTtcclxuZXhwb3J0IGxldCBvYmplY3RzOiBhbnlbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBnYW1lPFQ+e1xyXG4gIHN0YXRlOiBnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAvL1RoZSBvZmZzY3JlZW4gY2FudmFzIGFuZCBjb250ZXh0IGFyZSB1c2VkIGluIHJlbmRlcmluZyBtdWx0aXBsZSBDYW1lcmFzXHJcbiAgLy9UaGUgY29udGVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZSBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcGllZCB0byB0aGUgXHJcbiAgLy9vbnNjcmVlbiBjYW52YXMsIGluIHRoZSBwcm9wZXIgcG9zaXRpb24gaW4gdGhlIHZpZXdwb3J0XHJcbiAgb2Zmc2NyZWVuX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcm90b3R5cGVzOiBBcnJheTxvYmo+ID0gW107XHJcbiAgcm9vbXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBpbml0X3N0YXRlOiBUKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYW52YXM6IGNhbnZhc19lbGVtZW50LFxyXG4gICAgICBsb2dpYzogdW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OiBjdHgsXHJcbiAgICAgIGNhbWVyYXM6IFtcclxuICAgICAgXSxcclxuICAgICAgY3VycmVudF9yb29tOiB1bmRlZmluZWQsXHJcbiAgICAgIGdsb2JhbHM6IGluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIC8vREVCVUcgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnYW1lIGlzIHJ1bm5pbmcgd2l0aGluIHRoZSBlZGl0b3JcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICAvL1NldHMgdXAgc29tZSBnbG9iYWwgZGVidWcgc3RhdGUgYW5kIHRoZSBlZGl0b3Iga2V5YmluZGluZ3NcclxuICAgICAgZGVidWdfc2V0dXAoKTtcclxuICAgICAgLy9Jbml0aWFsaXplcyBhIHNlcGFyYXRlIGxvZ2ljIGxvb3Agc29sZWx5IGZvciB0aGUgZWRpdG9yXHJcbiAgICAgIC8vVGhpcyBzZXBhcmF0aW9uIGFsbG93cyBmb3IgdGhlIGVkaXRvciB0byBpbnRlcmFjdCB3aXRoIHRoZSBlbnZpcm9ubWVudCB3aGlsZVxyXG4gICAgICAvL3RoZSBhY3R1YWwgcm9vbSdzIHN0YXRlIGxvb3AgaXMgcGF1c2VkLlxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Um9vbSgpKSB7XHJcbiAgICAgICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgdGhlIGVkaXRvciBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgZ2FtZSBlbnZpcm9ubWVudFxyXG4gICAgICAgICAgZGVidWdfc3RhdGVmKDE2LjY2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE2LjY2KVxyXG4gICAgfVxyXG4gICAgLy9DcmVhdGVzIGEgb25jbGljayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IHRoYXQgaGFuZGxlcyBlbGVtZW50IG9uY2xpY2sgZnVuY3Rpb25zXHJcbiAgICBpbml0X2NsaWNrX2hhbmRsZXIodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcih0OiBudW1iZXIpIHtcclxuICAgIC8vdCBpcyBjdXJyZW50IHJlbmRlciB0aW1lXHJcbiAgICBsZXQgZGVsdGFfdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBlZGl0b3JfY2FtZXJhX2luZGV4ID0gLTE7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfc3RhdGUucmVuZGVyX2RlbHRhX3RpbWUgPSBkZWx0YV90aW1lO1xyXG4gICAgICBhbGxfY2FtZXJhcyA9IFsuLi5hbGxfY2FtZXJhcywgZGVidWdfc3RhdGUuY2FtZXJhXVxyXG4gICAgICBlZGl0b3JfY2FtZXJhX2luZGV4ID0gYWxsX2NhbWVyYXMubGVuZ3RoIC0gMTtcclxuICAgICAgLy9UaGUgZWRpdG9yIGNhbWVyYSBpcyBhbHdheXMgdGhlIGxhc3QgY2FtZXJhIGluc2lkZSB0aGUgY2FtZXJhcyBhcnJheVxyXG4gICAgICAvL3RoZSBlZGl0b3IgY2FtZXJhIGlzIHJlbmRlcmVkIHRvIGEgZGlmZmVyZW50IGNhbnZhcyB0aGFuIHRoZSBtYWluIGdhbWUgY2FudmFzXHJcbiAgICAgIC8vc28gd2UgdXNlIHRoZSBjYW1lcmEncyBpbmRleCB0byBjaGVjayB3aGF0IGNhbnZhcyB0byByZW5kZXIgdG9cclxuICAgIH1cclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsX2NhbWVyYXMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgbGV0IGNhbWVyYSA9IGFsbF9jYW1lcmFzW2FdO1xyXG4gICAgICAvL1dlIHJlbmRlciB0aGUgY2FtZXJhcyBjb250ZW50cyB0byBhbiBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcHkgaXRzIGNvbnRlbnRzXHJcbiAgICAgIC8vdG8gdGhlIG1haW4gY2FudmFzLlxyXG4gICAgICAvL1RoaXMgYWxsb3dzIHVzIHRvIGF2b2lkIGFueSBtYXRoIG5lZWRlZCB0byBkZXRlcm1pbmUgc3ByaXRlcyB0aGF0IGFyZSBwYXJ0aWFsbHkgb2Zmc2NyZWVuXHJcbiAgICAgIC8vYXMgYW55IG9mZnNjcmVlbiBzZWN0aW9ucyBvZiB0aGUgc3ByaXRlcyB3aWxsIG5vdCBiZSBjb3BpZWQgb3ZlciwgcmF0aGVyIHRoYW4gZXhwbGljaXRseSBcclxuICAgICAgLy9jYWxjdWxhdGluZyB0aGUgY3V0b2Zmc1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMuaGVpZ2h0ID0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jYW52YXMud2lkdGggPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICAvL1RoaXMgY29sbGlzaW9uIGJveCByZXByZXNlbnRzIHRoZSBjYW1lcmEncyBmaWVsZCBvZiB2aWV3IGluIHRoZSBnYW1lIHNwYWNlXHJcbiAgICAgIC8vV2UgdXNlIHRoZSByb29tJ3MgY2hlY2tPYmplY3RzIGZ1bmN0aW9uIHRvIGZpbmQgYW55IG9iamVjdCB0aGF0IGV4aXN0cyB3aXRoaW4gdGhpcyBhcmVhXHJcbiAgICAgIC8vVGhlc2Ugb2JqZWN0cyBhcmUgdGhlIG9iamVjdHMgdGhhdCBuZWVkIHRvIGJlIHJlbmRlcmVkIGZvciB0aGlzIGNhbWVyYVxyXG4gICAgICBsZXQgY2FtZXJhX2JveCA9IHtcclxuICAgICAgICB4OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgICB5OiBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMSAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICBoZWlnaHQ6IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpXHJcbiAgICAgIH07XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgcGFydGljbGVzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBwYXJ0aWNsZV9jb2xsaWRlcyA9IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94LCBbXSwgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20ucGFydGljbGVzX2Fycik7XHJcbiAgICAgIC8vTGlzdCBvZiBhbGwgb2JqZWN0cyB3aXRoaW4gdGhlIGNhbWVyYSdzIGZvdlxyXG4gICAgICBsZXQgY2FtZXJhX2NvbGxpZGVycyA9IFsuLi50aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5jaGVja09iamVjdHMoY2FtZXJhX2JveCksIC4uLnBhcnRpY2xlX2NvbGxpZGVzXTtcclxuXHJcbiAgICAgIGxldCByZW5kZXJfYXJncyA9IHtcclxuICAgICAgICBjb250ZXh0OiB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LFxyXG4gICAgICAgIGNhbWVyYTogY2FtZXJhLFxyXG4gICAgICB9O1xyXG4gICAgICAvL1JlbmRlcnMgdGhlIHJvb20ncyBiYWNrZ3JvdW5kLlxyXG4gICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5yZW5kZXIpe1xyXG4gICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgc3ByaXRlOiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5yZW5kZXJmKGRlbHRhX3RpbWUpLFxyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICByb3RhdGlvbjogMCxcclxuICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY2FsZV90eXBlOnNjYWxlX3R5cGUuZ3Jvd1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vQXJyYXkgb2YgaGl0Ym94ZXMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgcm9vbVxyXG4gICAgICBsZXQgaGl0Ym94ZXM6IGNvbGxpc2lvbl9ib3hbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBhIG9mIGNhbWVyYV9jb2xsaWRlcnMuZmlsdGVyKChiKSA9PiBiLnJlbmRlcikuc29ydCgoYSwgYikgPT4gKGEubGF5ZXIgLSBiLmxheWVyKSkpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWQgPSBhLnJlbmRlclRyYWNrKHQpO1xyXG5cclxuICAgICAgICAvL09iamVjdHMgY2FuIHJldHVybiBlaXRoZXIgYSBzcHJpdGUsIG9yIGFuIGFycmF5IG9mIHNwcml0ZXMgdG8gc2ltcGxpZnkgdGhlIEFQSVxyXG4gICAgICAgIC8vRm9yIHRoZSB1c2VyLCBhbmQgZm9yIHVzZSBpbiBjb21wb3NpdGUgb2JqZWN0cyhvYmplY3QgdGhhdCBidW5kbGVzIG90aGVyIG9iamVjdHMgdG9nZXRoZXIpXHJcbiAgICAgICAgLy9JbnRlcm5hbGx5LCB3ZSBjb252ZXJ0IGFueSBzaW5nbGUgc3ByaXRlIGludG8gYW4gYXJyYXkgb2Ygb25lIHNwcml0ZS5cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uZWRfc3ByaXRlIG9mIHJlbmRlcmVkKVxyXG4gICAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbmVkX3Nwcml0ZS55LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogYS5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgc2NhbGU6IGEuc3RhdGUuc2NhbGluZyxcclxuICAgICAgICAgICAgc2NhbGVfdHlwZTphLnNjYWxlX3R5cGVcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy9IaXRib3hlcyBhcmUgcmVuZGVyZWQgbGF0ZSBpbiB0aGUgcmVuZGVyIGxvb3AsIHRvIGVuc3VyZSBvYmplY3RzIGRvbid0IG92ZXJsYXAgdGhlbVxyXG4gICAgICAgIC8vQXMgd2UgcmVuZGVyIG9iamVjdHMsIHdlIGFkZCB0aGVpciBoaXRib3hlcyB0byB0aGlzIGxpc3RcclxuICAgICAgICBpZiAoREVCVUcgJiYgYS5jb2xsaXNpb24pIHtcclxuICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4uYS5nZXRBbGxDb2xsaXNpb25Cb3hlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9UaGlzIGlzIGEgc3BlY2lhbCBjbGFzcyBvZiBvYmplY3QgdGhhdCBleGlzdHMgaW4gdGhlIGdhbWUgd29ybGRcclxuICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS50ZXh0X25vZGVzKSB7XHJcbiAgICAgICAgdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgeDogbm9kZS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTogbm9kZS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgZm9udDogbm9kZS5yZW5kZXJmKHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhbWVyYS5odWQpIHtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBjYW1lcmEuaHVkLmdyYXBoaWNfZWxlbWVudHM7XHJcbiAgICAgICAgbGV0IHRleHRfZWxlbWVudHMgPSBjYW1lcmEuaHVkLnRleHRfZWxlbWVudHM7XHJcbiAgICAgICAgLy9SZW5kZXJzIHN0YXRpYyBncmFwaGljcyB0aGF0IGFyZSBhIHBhcnQgb2YgdGhlIGh1ZFxyXG4gICAgICAgIGZvciAobGV0IGdyYXBoaWMgb2YgZ3JhcGhpY3MpIHtcclxuICAgICAgICAgIGxldCByZW5kZXJlZCA9IGdyYXBoaWMucmVuZGVyVHJhY2sodCk7XHJcbiAgICAgICAgICBpZiAoZ3JhcGhpYy5yZW5kZXIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZTogcG9zaXRpb25lZF9zcHJpdGUuc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgeDogcG9zaXRpb25lZF9zcHJpdGUueCxcclxuICAgICAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogZ3JhcGhpYy5zdGF0ZS5yb3RhdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBncmFwaGljLnN0YXRlLnNjYWxpbmcsXHJcbiAgICAgICAgICAgICAgICBzY2FsZV90eXBlOmdyYXBoaWMuc2NhbGVfdHlwZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgdGV4dF9lbGVtZW50cykge1xyXG4gICAgICAgICAgaHVkX3RleHRfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgeDogdGV4dC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIGZvbnQ6IHRleHQucmVuZGVyZih0KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9JZiBhIGNhbWVyYSBpcyBtYXJrZWQgYXMgYSBkZWJ1ZyBjYW1lcmEsIHdlIHJlbmRlciB0aGVcclxuICAgICAgLy8gIGhpdGJveGVzLCBhbmQgcG90ZW50aWFsbHkgdXBkYXRlIHRoZSBlZGl0b3JcclxuICAgICAgaWYgKGNhbWVyYS5zdGF0ZS5kZWJ1Zykge1xyXG4gICAgICAgIGxldCBib3g6IGNvbGxpc2lvbl9ib3g7XHJcbiAgICAgICAgbGV0IGJveGVzX2NvcHkgPSBbLi4uYm94ZXNdXHJcbiAgICAgICAgd2hpbGUgKGJveGVzX2NvcHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGJveGVzX2NvcHkucG9wKCk7XHJcbiAgICAgICAgICBsZXQgcmVjdCA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGJveC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgcmVjdCwgYm94LngsIGJveC55LCBcIiNGRjAwMDBcIiwgMSwgY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGhpdGJveGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBib3ggPSBoaXRib3hlcy5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiIzAwODAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0RyYXdzIGEgc3BlY2lhbCBib3ggYXJvdW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZWxlbWVudFxyXG4gICAgICAgIC8vaW5zaWRlIHRoZSBlZGl0b3IgVUlcclxuICAgICAgICBpZiAoREVCVUcgJiYgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgY29sbCA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudC5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICAgICAgICByZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHsgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1IH0sIGNvbGwueCwgY29sbC55LCBcInNreWJsdWVcIiwgMTAsIGNhbWVyYSk7XHJcbiAgICAgICAgICBzdHJva2VkX3JlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgY29sbCwgY29sbC54LCBjb2xsLnksIFwiYmx1ZVwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1NlcGFyYXRlIGNhbnZhcyBmb3IgdGhlIGVkaXRvciBjYW1lcmFcclxuICAgICAgaWYgKGEgIT09IGVkaXRvcl9jYW1lcmFfaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS50YXJnZXQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLm9mZnNjcmVlbl9jYW52YXMsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC54LCBjYW1lcmEuc3RhdGUudmlld3BvcnQueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChERUJVRylcclxuICAgICAgYm94ZXMgPSBbXTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSkgPT4geyB0aGlzLnJlbmRlcihhKSB9KTtcclxuICB9XHJcbiAgc3RhcnRfbG9naWMoYTogbnVtYmVyKSB7XHJcbiAgICAvL3RoaXMgaXMgdGhlIHJvb20ncyBzdGF0ZSBsb29wXHJcbiAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IG5ld190aW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgaWYgKCFQQVVTRUQpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdGltZV9zaW5jZSA9IG5ld190aW1lLmdldFRpbWUoKSAtIGxhc3RfdGltZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uaHVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZC5zdGF0ZWYodGltZV9zaW5jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgYmluZHMgdGhhdCBvY2N1ciBvbiBhbiBpbnRlcnZhbFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LCBhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDogc3RyaW5nKSB7XHJcbiAgICAvL3Jvb20gbGlzdCBpcyBhIG9iamVjdCB0aGF0IGNvbnRhaW5zIGVhY2ggcm9vbSdzIGNsYXNzLFxyXG4gICAgLy93aXRoIHRoZSByb29tJ3MgbmFtZSBhcyB0aGUga2V5IGZvciBjbGFzc1xyXG4gICAgLy9UaGlzIG9iamVjdCBpcyBwb3B1bGF0ZWQgYXQgY29tcGlsZSB0aW1lXHJcbiAgICBmb3IgKGxldCBhIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgICAgaWYgKGEgPT0geCkge1xyXG4gICAgICAgIC8vdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgdHlwZS1zYWZlLlxyXG4gICAgICAgIGxldCBuZXdfcm9vbSA9IDxyb29tPHt9Pj5uZXcgcm9vbV9saXN0W2FdKHRoaXMpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUm9vbShuZXdfcm9vbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRSb29tKHg6IHJvb208dW5rbm93bj4pIHtcclxuICAgIC8vQ2xlYXJzIHRoZSByb29tJ3MgbG9naWMgbG9vcCBpZiBvbmVcclxuICAgIC8vV2FzIGFscmVhZHkgcnVubmluZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naWMpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICAvL1RoaXMgcmVmZXJlbmNlIGlzIHVzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgLy9EZWxldGVzIGVhY2ggb2JqZWN0IGluIHRoZSByb29tICh3aGljaCBhbHNvIHVuYmluZHMgdGhlaXIgYmluZHMpLFxyXG4gICAgLy9hbmQgdW5iaW5kcyB0aGUgcm9vbSdzIGJpbmRpbmdzLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaWQgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uYmluZHMpIHtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3X3Jvb20gPSBhd2FpdCB4LmxvYWQoKTtcclxuICAgIHgucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubG9naWMgPSB0aGlzLnN0YXJ0X2xvZ2ljKGxvZ2ljX2xvb3BfaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJlZmFicygpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIC8vVGhpcyBzdGFydHMgdGhlIHJlbmRlciBsb29wIGZvciB0aGUgcm9vbVxyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=