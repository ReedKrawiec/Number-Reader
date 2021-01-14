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
    sendTensor() {
        return __awaiter(this, void 0, void 0, function* () {
            let tensor = [];
            this.objects.filter((o) => o.tags[0] == "paint").forEach((o) => {
                let pos = o.state.position;
                tensor.push(`[${27 - pos.y / 10},${pos.x / 10}]`);
            });
            let to_send = tensor.join(",");
            let res = yield fetch("http://127.0.0.1:5000/evaluate", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: `{"inputted":[${to_send}]}`
            });
            let content = yield res.json();
            this.state.last_prediction = content;
            let objects = this.objects.filter((o) => o.tags[0] == "paint");
            objects.forEach((o) => o.delete());
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
class audio {
    constructor() {
        this.sounds = {};
    }
    add(name, url) {
        this.sounds[name] = new Audio(url);
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
    if (keyname.slice(0, 5) === "mouse") {
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
exports.debug_setup = exports.debug_state = exports.debug_update_prefabs = exports.debug_update_obj_list = exports.debug_update_properties_element = exports.debug_update_room_list = exports.debug_statef = exports.Debug_hud = exports.project_path = void 0;
const van_1 = __webpack_require__(/*! ../van */ "./src/van.ts");
let path;
let fs;
let ipcRenderer;
const prefabs_1 = __webpack_require__(/*! ../game/objects/prefabs */ "./src/game/objects/prefabs.ts");
exports.project_path = "";
if (van_1.DEBUG) {
    path = window.require("path");
    fs = window.require("fs");
    ipcRenderer = window.require("electron").ipcRenderer;
    exports.project_path = ipcRenderer.sendSync('path-request', 'ping')[0];
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
            }, () => exports.debug_state.delta_time > 0 ? Math.round(1000 / exports.debug_state.delta_time) + "" : ""),
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
    if (!mouse) {
        return;
    }
    if (exports.debug_state.camera.hud) {
        exports.debug_state.camera.hud.statef(t);
    }
    if (!van_1.PAUSED) {
        debug_update_properties_element();
    }
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
        for (let obj of main_1.g.getRoom().objects) {
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
        delta_time: 0,
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
        if (exports.debug_state.last_clicked.id == "debug_target")
            exports.debug_state.camera.state.scaling = exports.debug_state.camera.state.scaling + 0.05;
    };
    let save_func = () => {
        let ctrl_held = controls_1.held_keys["ControlLeft"];
        if (ctrl_held && van_1.PAUSED) {
            let name = main_1.g.getRoom().constructor.name;
            let a = path.join(`${exports.project_path}`, `../rooms/${name}.json`);
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
            let full_name = path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
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
            path_to_write = path.join(`${file_path}`, "..", new_name + ".json");
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
            let full_name = path.parse(file_path).base;
            let new_name = full_name.substr(0, full_name.length - 3);
            let path_to_write = path.join(`${file_path}`, "..", new_name + ".ts");
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
            a.src = this.sprite_url;
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
    load() {
        let _this = this;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let a = new Image();
            let to_await = this.objects.map((a) => a.load());
            yield Promise.all(to_await);
            a.src = this.background_url;
            a.onerror = (() => {
                console.log("error loading url:" + this.background_url);
            });
            a.onload = (() => __awaiter(this, void 0, void 0, function* () {
                _this.background = a;
                yield this.audio.load();
                resolve();
            }));
        }));
    }
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
    addItem(o, list = this.objects) {
        return __awaiter(this, void 0, void 0, function* () {
            yield o.load();
            o.game = this.game;
            list.push(o);
            if (van_1.DEBUG && list === this.objects) {
                debug_1.debug_update_obj_list();
            }
        });
    }
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
    registerParticles() {
    }
    bindControl(key, x, func, interval = 1) {
        this.binds.push(controls_1.Bind(key, func, x, interval));
    }
    checkCollisionsPoint(pos, exempt, list = this.objects) {
        return this.checkCollisions({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    checkObjectsPoint(pos, exempt, list = this.objects) {
        return this.checkObjects({ x: pos.x, y: pos.y, height: 0, width: 0 }, exempt, list);
    }
    checkCollisionsPointInclusive(pos, tags, list = this.objects) {
        return this.checkCollisionsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    checkObjectsPointInclusive(pos, tags, list = this.objects) {
        return this.checkObjectsInclusive({ x: pos.x, y: pos.y, height: 0, width: 0 }, tags, list);
    }
    checkCollisionsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter(obj => obj.collision && obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    checkObjectsInclusive(box, tags, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return list.filter((obj) => obj.collidesWithBox(box) && tags.every((val) => obj.tags.includes(val)));
    }
    checkCollisions(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_collisions(box, list, exempt);
    }
    checkObjects(box, exempt, list = this.objects) {
        if (van_1.DEBUG) {
            van_1.render_collision_box(box);
        }
        return collision_1.check_all_objects(box, list, exempt);
    }
    registerControls() {
    }
    cleanup() {
    }
    statef(time) {
        for (let particle of this.particles_arr) {
            particle.statef(time);
        }
        for (let text_node of this.text_nodes) {
            text_node.statef(time);
        }
        let ticking_objects = this.objects.filter((o) => o.tick_state);
        for (let a = 0; a < ticking_objects.length; a++) {
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
    getObjByTag(tag) {
        return this.objects.filter((a) => a.tags.indexOf(tag) > -1);
    }
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
exports.DEBUG = 'dev' === 'dev';
exports.PAUSED = 'dev' === 'dev';
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
            debug_1.debug_state.delta_time = delta_time;
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
            if (!exports.PAUSED) {
                let new_time = new Date();
                let time_since = new_time.getTime() - last_time.getTime();
                last_time = new_time;
                if (this.state.current_room) {
                    this.state.current_room.statef(time_since);
                    if (this.state.current_room.hud) {
                        this.state.current_room.hud.statef(time_since);
                    }
                }
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9vYmplY3RzL3BhaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGFpbnRfYm9yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL29iamVjdHMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvb2JqZWN0cy9wcmVmYWJzLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Jvb21zL3BhaW50X3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcGxhY2Vob2xkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvcm9vbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbnRyb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9odWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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QUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7SUFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNwQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FB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QUFJLENBQUM7YUFDekI7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQWpSRCxvQkFpUkMiLCJmaWxlIjoidmFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHtWZWN0b3Isb2JqX3N0YXRlLHJvb21fc3RhdGV9IGZyb20gXCIuLi9saWIvc3RhdGVcIjtcclxuaW1wb3J0IHtnYW1lLEdldFZpZXdwb3J0RGltZW5zaW9ucyx2aWV3cG9ydH0gZnJvbSBcIi4uL3ZhblwiO1xyXG5cclxubGV0IGNhbnZhc19lbGVtZW50OkhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7IGZ1bmN0aW9uczogYW55OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGFpbnRlcl9zdGF0ZXtcclxuICBzaWRlX2xlbmd0aDpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGxldCBnID0gbmV3IGdhbWU8cGFpbnRlcl9zdGF0ZT4oY2FudmFzX2VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLHtcclxuICBzaWRlX2xlbmd0aDoyOFxyXG59KTtcclxuXHJcbndpbmRvdy5mdW5jdGlvbnMgPSB7fTtcclxuXHJcbndpbmRvdy5mdW5jdGlvbnMucmVzZXQgPSAoKSA9PiB7XHJcbiAgbGV0IG9iamVjdHMgPSBnLmdldFJvb20oKS5vYmplY3RzLmZpbHRlcigobyk9Pm8udGFnc1swXT09XCJwYWludFwiKTtcclxuICBvYmplY3RzLmZvckVhY2goKG8pPT5vLmRlbGV0ZSgpKTtcclxufVxyXG5cclxuZy5sb2FkUm9vbVN0cmluZyhcInBhaW50X3Jvb21cIik7XHJcblxyXG4iLCJcbmltcG9ydCB7b2JqfSBmcm9tIFwiLi4vLi4vbGliL29iamVjdFwiO1xuaW1wb3J0IHsgc3ByaXRlX2dlbiB9IGZyb20gXCIuLi8uLi9saWIvc3ByaXRlXCI7XG5pbXBvcnQgeyBvYmpfc3RhdGUsIFZlY3RvciB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcblxuaW50ZXJmYWNlIHBhaW50X3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICBjb2xvcmVkOmJvb2xlYW5cbn1cbiAgICBcbmludGVyZmFjZSBwYWludF9wYXJhbWV0ZXJze1xuICAgIFxufVxuICAgIFxuZXhwb3J0IGNsYXNzIHBhaW50IGV4dGVuZHMgb2Jqe1xuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvcGFpbnQucG5nXCI7XG4gIGhlaWdodCA9IDEwO1xuICB3aWR0aCA9IDEwO1xuICBjb2xsaXNpb24gPSBmYWxzZTtcbiAgc3RhdGU6cGFpbnRfc3RhdGU7XG4gIHJlbmRlciA9IHRydWU7XG4gIHRpY2tfc3RhdGU6ZmFsc2U7XG4gIHBhcmFtczpwYWludF9wYXJhbWV0ZXJzO1xuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6cGFpbnRfcGFyYW1ldGVycyA9IHt9XG4gIGNvbnN0cnVjdG9yKHN0YXRlOm9ial9zdGF0ZSxwYXJhbXM6cGFpbnRfcGFyYW1ldGVycyA9IHBhaW50LmRlZmF1bHRfcGFyYW1zKXtcbiAgICBzdXBlcihzdGF0ZSxwYXJhbXMpO1xuICAgIHRoaXMuc3RhdGUuY29sb3JlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFncy5wdXNoKFwicGFpbnRcIik7XG4gIH1cbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICBcbiAgfVxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XG4gICAgbGV0IHNlbGVjdGVkO1xuICAgIGlmKHRoaXMuc3RhdGUuY29sb3JlZCl7XG4gICAgICBzZWxlY3RlZCA9IHNwcml0ZXNbMF1bMV07XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZWxlY3RlZCA9IHNwcml0ZXNbMF1bMF07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB4OnRoaXMuc3RhdGUucG9zaXRpb24ueCxcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxuICAgICAgc3ByaXRlOnNlbGVjdGVkXG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyX2FuaW1hdGlvbnMoKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9hdWRpbygpe1xuICAgIFxuICB9XG4gIHJlZ2lzdGVyX2NvbnRyb2xzKCl7XG4gICAgICAgIFxuICB9XG59XG4gICAgIiwiXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yIH0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuXG5pbnRlcmZhY2UgcGFpbnRfYm9yZGVyX3N0YXRlIGV4dGVuZHMgb2JqX3N0YXRle1xuICAgIFxufVxuICAgIFxuaW50ZXJmYWNlIHBhaW50X2JvcmRlcl9wYXJhbWV0ZXJze1xuICAgIFxufVxuICAgIFxuZXhwb3J0IGNsYXNzIHBhaW50X2JvcmRlciBleHRlbmRzIG9iantcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL3BhaW50LnBuZ1wiO1xuICBoZWlnaHQgPSAxMDtcbiAgd2lkdGggPSAxMDtcbiAgY29sbGlzaW9uID0gZmFsc2U7XG4gIHJlbmRlciA9IHRydWU7XG4gIHBhcmFtczpwYWludF9ib3JkZXJfcGFyYW1ldGVycztcbiAgc3RhdGljIGRlZmF1bHRfcGFyYW1zOnBhaW50X2JvcmRlcl9wYXJhbWV0ZXJzID0ge31cbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwYWludF9ib3JkZXJfcGFyYW1ldGVycyA9IHBhaW50X2JvcmRlci5kZWZhdWx0X3BhcmFtcyl7XG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcbiAgfVxuICBzdGF0ZWYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIFxuICB9XG4gIHJlbmRlcmYodGltZV9kZWx0YTpudW1iZXIpe1xuICAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgfVxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfYXVkaW8oKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgfVxufVxuICAgICIsIlxuaW1wb3J0IHtvYmp9IGZyb20gXCIuLi8uLi9saWIvb2JqZWN0XCI7XG5pbXBvcnQgeyBvYmpfc3RhdGUsIFZlY3Rvcn0gZnJvbSBcIi4uLy4uL2xpYi9zdGF0ZVwiO1xuXG5pbnRlcmZhY2UgcGxhY2Vob2xkZXJfc3RhdGUgZXh0ZW5kcyBvYmpfc3RhdGV7XG4gICAgXG59XG4gICAgXG5pbnRlcmZhY2UgcGxhY2Vob2xkZXJfcGFyYW1ldGVyc3tcbiAgICBcbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBwbGFjZWhvbGRlciBleHRlbmRzIG9iantcbiAgc3ByaXRlX3VybCA9IFwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xuICBoZWlnaHQgPSAxMDA7XG4gIHdpZHRoID0gMTAwO1xuICB0YWdzOkFycmF5PHN0cmluZz4gPSBbXTtcbiAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgcmVuZGVyID0gdHJ1ZTtcbiAgcGFyYW1zOnBsYWNlaG9sZGVyX3BhcmFtZXRlcnM7XG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczpwbGFjZWhvbGRlcl9wYXJhbWV0ZXJzID0ge31cbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczpwbGFjZWhvbGRlcl9wYXJhbWV0ZXJzID0gcGxhY2Vob2xkZXIuZGVmYXVsdF9wYXJhbXMpe1xuICAgIHN1cGVyKHN0YXRlLHBhcmFtcyk7XG4gIH1cbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgICBcbiAgfVxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcbiAgIHJldHVybiBzdXBlci5yZW5kZXJmKHRpbWVfZGVsdGEpOyBcbiAgfVxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJfYXVkaW8oKXtcbiAgICBcbiAgfVxuICByZWdpc3Rlcl9jb250cm9scygpe1xuICAgICAgICBcbiAgfVxufVxuICAgICIsIlxuaW50ZXJmYWNlIHByZWZhYnMge1xuICBbaW5kZXg6c3RyaW5nXTphbnlcbn1cbmltcG9ydCB7cGFpbnR9IGZyb20gXCIuL3BhaW50XCI7XG5pbXBvcnQge3BhaW50X2JvcmRlcn0gZnJvbSBcIi4vcGFpbnRfYm9yZGVyXCI7XG5pbXBvcnQge3BsYWNlaG9sZGVyfSBmcm9tIFwiLi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGxldCBwcmVmYWJzOnByZWZhYnMgPSB7XG5cdHBhaW50OnBhaW50LFxuXHRwYWludF9ib3JkZXI6cGFpbnRfYm9yZGVyLFxuXHRwbGFjZWhvbGRlcjpwbGFjZWhvbGRlcixcbn0iLCJpbXBvcnQgeyByb29tIH0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XG5pbXBvcnQgeyBnYW1lLCB2aWV3cG9ydCB9IGZyb20gXCIuLi8uLi92YW5cIjtcbmltcG9ydCB7IHN0YXRlX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuaW1wb3J0IHsgcGFpbnRlcl9zdGF0ZSxnIH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi9wYWludF9yb29tLmpzb25cIjtcbmltcG9ydCB7IHBhaW50IH0gZnJvbSBcIi4uL29iamVjdHMvcGFpbnRcIjtcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XG5pbXBvcnQgeyBleGVjX3R5cGUsIFBvbGxfTW91c2UgfSBmcm9tIFwiLi4vLi4vbGliL2NvbnRyb2xzXCI7XG5pbXBvcnQgeyBUZXh0LEhVRCB9IGZyb20gXCIuLi8uLi9saWIvaHVkXCI7XG5sZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcblxuXG5jbGFzcyBwYWludF9odWQgZXh0ZW5kcyBIVUR7XG4gIHNldFRleHRFbGVtZW50cygpOlRleHRbXXtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFRleHQoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHg6IHZpZXdwb3J0LndpZHRoICogLjUsXG4gICAgICAgICAgeTogdmlld3BvcnQuaGVpZ2h0ICogNy84XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IDMwLFxuICAgICAgICBmb250OiBcIkFsYXRhXCIsXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIGFsaWduOlwiY2VudGVyXCIsXG4gICAgICAgIHNjYWxpbmc6MVxuICAgICAgfSxcbiAgICAgICgpPT57XG4gICAgICAgIGxldCByb29tID0gZy5nZXRSb29tKCkgYXMgcGFpbnRfcm9vbTtcbiAgICAgICAgcmV0dXJuIGBMYXN0IFByZWRpY3Rpb246ICR7cm9vbS5zdGF0ZS5sYXN0X3ByZWRpY3Rpb259YDtcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgcGFpbnRfcm9vbV9zdGF0ZSB7XG4gIHRpbWVyOm51bWJlcixcbiAgaGFzX3NlbnQ6Ym9vbGVhbixcbiAgbGFzdF9wcmVkaWN0aW9uOnN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgcGFpbnRfcm9vbSBleHRlbmRzIHJvb208cGFpbnRfcm9vbV9zdGF0ZT57XG4gIGJhY2tncm91bmRfdXJsID0gXCIuL3Nwcml0ZXMvcGFpbnQucG5nXCI7XG4gIGdhbWU6IGdhbWU8cGFpbnRlcl9zdGF0ZT47XG4gIHJlbmRlciA9IGZhbHNlO1xuICBzdGF0ZTpwYWludF9yb29tX3N0YXRlO1xuICB3YWl0X3RpbWU6bnVtYmVyID0gMTUwMDtcbiAgY29uc3RydWN0b3IoZ2FtZTogZ2FtZTxwYWludGVyX3N0YXRlPikge1xuICAgIHN1cGVyKGdhbWUsIGNmaWcpO1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5jYW1lcmFzLnB1c2gobmV3IENhbWVyYSh7XG4gICAgICB4OmdhbWUuc3RhdGUuZ2xvYmFscy5zaWRlX2xlbmd0aC8yICogMTAsXG4gICAgICB5OmdhbWUuc3RhdGUuZ2xvYmFscy5zaWRlX2xlbmd0aC8yICogMTAsXG4gICAgICBkaW1lbnNpb25zOnZpZXdwb3J0LFxuICAgICAgc2NhbGluZzoxLjUsXG4gICAgICBkZWJ1ZzpmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgeDowLFxuICAgICAgeTowLFxuICAgICAgaGVpZ2h0OjEsXG4gICAgICB3aWR0aDoxXG4gICAgfSxcbiAgICBuZXcgcGFpbnRfaHVkKClcbiAgICApKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZXI6MCxcbiAgICAgIGhhc19zZW50OnRydWUsXG4gICAgICBsYXN0X3ByZWRpY3Rpb246XCJcIlxuICAgIH1cbiAgfVxuICBhc3luYyBzZW5kVGVuc29yKCl7XG4gICAgbGV0IHRlbnNvcjpzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMub2JqZWN0cy5maWx0ZXIoKG8pPT5vLnRhZ3NbMF0gPT0gXCJwYWludFwiKS5mb3JFYWNoKChvKT0+e1xuICAgICAgbGV0IHBvcyA9IG8uc3RhdGUucG9zaXRpb247XG4gICAgICB0ZW5zb3IucHVzaChgWyR7MjcgLSBwb3MueS8xMH0sJHtwb3MueC8xMH1dYCk7XG4gICAgfSlcbiAgICBsZXQgdG9fc2VuZCA9IHRlbnNvci5qb2luKFwiLFwiKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjUwMDAvZXZhbHVhdGVcIiwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICBib2R5OiBge1wiaW5wdXR0ZWRcIjpbJHt0b19zZW5kfV19YFxuICAgIH0pXG4gICAgbGV0IGNvbnRlbnQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHRoaXMuc3RhdGUubGFzdF9wcmVkaWN0aW9uID0gY29udGVudDtcbiAgICBsZXQgb2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoKG8pPT5vLnRhZ3NbMF09PVwicGFpbnRcIik7XG4gICAgb2JqZWN0cy5mb3JFYWNoKChvKT0+by5kZWxldGUoKSk7XG4gICAgXG4gIH1cbiAgcmVnaXN0ZXJDb250cm9scygpIHtcbiAgICB0aGlzLmJpbmRDb250cm9sKFwibW91c2UwZG93blwiLCBleGVjX3R5cGUucmVwZWF0LCgpID0+IHtcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXNbMF0pO1xuICAgICAgaWYobW91c2UgJiYgbW91c2UueCA+PSAwICYmIG1vdXNlLnggPD0gMjcwICYmIG1vdXNlLnkgPj0gMCAmJiBtb3VzZS55IDw9IDI3MCl7XG4gICAgICAgIGxldCBncmlkX21vdXNlID0ge1xuICAgICAgICAgIHg6TWF0aC5mbG9vcihtb3VzZS54LzEwKSAqIDEwLFxuICAgICAgICAgIHk6TWF0aC5mbG9vcihtb3VzZS55LzEwKSAqIDEwXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMuY2hlY2tPYmplY3RzUG9pbnRJbmNsdXNpdmUoZ3JpZF9tb3VzZSxbXCJwYWludFwiXSkgYXMgcGFpbnRbXTtcbiAgICAgICAgaWYoIXBpeGVsc1swXSl7XG4gICAgICAgICAgdGhpcy5hZGRJdGVtKG5ldyBwYWludCh7XG4gICAgICAgICAgICBwb3NpdGlvbjpncmlkX21vdXNlLFxuICAgICAgICAgICAgdmVsb2NpdHk6e1xuICAgICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICAgIHk6MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJvdGF0aW9uOjAsXG4gICAgICAgICAgICBzY2FsaW5nOntcbiAgICAgICAgICAgICAgaGVpZ2h0OjEsXG4gICAgICAgICAgICAgIHdpZHRoOjFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdGhpcy5zdGF0ZS50aW1lciA9IDA7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5oYXNfc2VudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9LDEpXG4gIH1cbiAgcmVnaXN0ZXJQYXJ0aWNsZXMoKSB7XG5cbiAgfVxuICBzdGF0ZWYoZGVsdGFfdGltZTogbnVtYmVyKSB7XG4gICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xuICAgIHRoaXMuc3RhdGUudGltZXIgKz0gZGVsdGFfdGltZTtcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyID4gdGhpcy53YWl0X3RpbWUgJiYgIXRoaXMuc3RhdGUuaGFzX3NlbnQpe1xuICAgICAgdGhpcy5zZW5kVGVuc29yKCk7XG4gICAgICB0aGlzLnN0YXRlLmhhc19zZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG4iLCJcbiAgICBcbiAgICBpbXBvcnQge3Jvb219IGZyb20gXCIuLi8uLi9saWIvcm9vbVwiO1xuICAgIGltcG9ydCB7Z2FtZSwgdmlld3BvcnR9IGZyb20gXCIuLi8uLi92YW5cIjtcbiAgICBpbXBvcnQge3N0YXRlX2NvbmZpZ30gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XG4gICAgaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuL3BsYWNlaG9sZGVyLmpzb25cIjtcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuLi8uLi9saWIvcmVuZGVyXCI7XG4gICAgbGV0IGNmaWcgPSBjb25maWcgYXMgdW5rbm93biBhcyBzdGF0ZV9jb25maWc7XG4gICAgaW50ZXJmYWNlIHBsYWNlaG9sZGVyX3N0YXRle1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBleHBvcnQgY2xhc3MgcGxhY2Vob2xkZXIgZXh0ZW5kcyByb29tPHBsYWNlaG9sZGVyX3N0YXRlPntcbiAgICAgIGJhY2tncm91bmRfdXJsPVwiLi9zcHJpdGVzL0Vycm9yLnBuZ1wiO1xuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcbiAgICAgICAgc3VwZXIoZ2FtZSxjZmlnKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMucHVzaChuZXcgQ2FtZXJhKHtcbiAgICAgICAgICB4OjAsXG4gICAgICAgICAgeTowLFxuICAgICAgICAgIGRpbWVuc2lvbnM6dmlld3BvcnQsXG4gICAgICAgICAgc2NhbGluZzoxLFxuICAgICAgICAgIGRlYnVnOmZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OjAsXG4gICAgICAgICAgeTowLFxuICAgICAgICAgIGhlaWdodDoxLFxuICAgICAgICAgIHdpZHRoOjFcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICByZWdpc3RlckNvbnRyb2xzKCl7XG4gICAgXG4gICAgICB9XG4gICAgICByZWdpc3RlclBhcnRpY2xlcygpe1xuICAgIFxuICAgICAgfVxuICAgICAgc3RhdGVmKGRlbHRhX3RpbWU6bnVtYmVyKXtcbiAgICAgICAgc3VwZXIuc3RhdGVmKGRlbHRhX3RpbWUpO1xuICAgICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICAiLCJcbmludGVyZmFjZSByb29tX2RpciB7XG4gIFtpbmRleDpzdHJpbmddOmFueVxufVxuaW1wb3J0IHtwYWludF9yb29tfSBmcm9tIFwiLi9wYWludF9yb29tXCI7XG5pbXBvcnQge3BsYWNlaG9sZGVyfSBmcm9tIFwiLi9wbGFjZWhvbGRlclwiO1xuZXhwb3J0IGxldCByb29tczpyb29tX2RpciA9IHtcblx0cGFpbnRfcm9vbTpwYWludF9yb29tLFxuXHRwbGFjZWhvbGRlcjpwbGFjZWhvbGRlcixcbn0iLCJpbnRlcmZhY2Ugc291bmRfc3RvcmFnZSB7XHJcbiAgW2luZGV4OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBhdWRpbyB7XHJcbiAgc291bmRzOiBzb3VuZF9zdG9yYWdlID0ge307XHJcbiAgYWRkKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc291bmRzW25hbWVdID0gbmV3IEF1ZGlvKHVybCk7XHJcbiAgfVxyXG4gIGFzeW5jIGxvYWQoKSB7XHJcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc291bmRzKTtcclxuICAgIGxldCBwcm9taXNlcyA9IGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnNvdW5kc1trZXldLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBsZXQgeCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgcmV0dXJuKHgpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwbGF5KG5hbWU6c3RyaW5nLHZvbHVtZTpudW1iZXIpe1xyXG4gICAgbGV0IGEgPSB0aGlzLnNvdW5kc1tuYW1lXTtcclxuICAgIGEucGF1c2UoKVxyXG4gICAgYS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBhLnZvbHVtZSA9IHZvbHVtZTtcclxuICAgIGEucGxheSgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7b2JqLGdldElkfSBmcm9tIFwiLi4vbGliL29iamVjdFwiO1xyXG5pbXBvcnQge29ial9zdGF0ZX0gZnJvbSBcIi4uL2xpYi9zdGF0ZVwiO1xyXG5pbXBvcnQge2RlZXB9IGZyb20gXCIuLi92YW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29sbGlzaW9uX2JveHtcclxuICB4Om51bWJlcjtcclxuICB5Om51bWJlcjtcclxuICB3aWR0aDpudW1iZXI7XHJcbiAgaGVpZ2h0Om51bWJlcjtcclxufVxyXG5cclxuZW51bSBkaXJlY3Rpb257XHJcbiAgbGVmdCxcclxuICByaWdodCxcclxuICB1cCxcclxuICBkb3duXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmNvbXBhc3NpbmdCb3gob2JqZWN0czpvYmpbXSk6Y29sbGlzaW9uX2JveHtcclxuICBsZXQgZmlyc3Rfb2JqZWN0ID0gb2JqZWN0c1swXS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gIGxldCBtYXhfeSA9IGZpcnN0X29iamVjdC50b3BfcmlnaHQueTtcclxuICBsZXQgbWF4X3ggPSBmaXJzdF9vYmplY3QudG9wX3JpZ2h0Lng7XHJcbiAgbGV0IG1pbl95ID0gZmlyc3Rfb2JqZWN0LmJvdHRvbV9sZWZ0Lnk7XHJcbiAgbGV0IG1pbl94ID0gZmlyc3Rfb2JqZWN0LmJvdHRvbV9sZWZ0Lng7XHJcbiAgZm9yKGxldCBhID0gMTsgYSA8IG9iamVjdHMubGVuZ3RoO2ErKyl7XHJcbiAgICBsZXQgb2JqZWN0ID0gb2JqZWN0c1thXS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgaWYob2JqZWN0LnRvcF9yaWdodC55ID4gbWF4X3kpXHJcbiAgICAgIG1heF95ID0gb2JqZWN0LnRvcF9yaWdodC55O1xyXG4gICAgaWYob2JqZWN0LnRvcF9yaWdodC54ID4gbWF4X3gpXHJcbiAgICAgIG1heF94ID0gb2JqZWN0LnRvcF9yaWdodC54O1xyXG4gICAgaWYob2JqZWN0LmJvdHRvbV9sZWZ0LnkgPCBtaW5feSlcclxuICAgICAgbWluX3kgPSBvYmplY3QuYm90dG9tX2xlZnQueTtcclxuICAgIGlmKG9iamVjdC5ib3R0b21fbGVmdC54IDwgbWluX3gpXHJcbiAgICAgIG1pbl94ID0gb2JqZWN0LmJvdHRvbV9sZWZ0Lng7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB4Om1pbl94ICsgKG1heF94IC0gbWluX3gpLzIsXHJcbiAgICB5Om1pbl95ICsgKG1heF95IC0gbWluX3kpLzIsXHJcbiAgICBoZWlnaHQ6bWF4X3kgLSBtaW5feSxcclxuICAgIHdpZHRoOm1heF94IC0gbWluX3hcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfb2JqZWN0cyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOm9ialtde1xyXG4gIHJldHVybiBvYmpzLmZpbHRlcigoYSk9PighZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19hbGxfY29sbGlzaW9ucyhjOiBjb2xsaXNpb25fYm94LG9ianM6b2JqW10sZXhlbXB0aW9uOnN0cmluZ1tdID0gW10pOkFycmF5PG9iaj57XHJcbiAgbGV0IG1hdGNoZWQgPSBbXTtcclxuICBmb3IgKGxldCBhIG9mIG9ianMpIHtcclxuICAgIGlmICghZXhlbXB0aW9uLnNvbWUoKGIpPT5hLnRhZ3MuaW5kZXhPZihiKSAhPT0gLTEpICYmIGEuY29sbGlzaW9uICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSB7XHJcbiAgICAgIG1hdGNoZWQucHVzaChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1hdGNoZWRcclxufVxyXG4vL0NoZWNrcyB1cCB0byB0aGUgZmlyc3QgY29sbGlzaW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja19jb2xsaXNpb25zKGM6IGNvbGxpc2lvbl9ib3gsIG9ianM6IG9ialtdLCBleGVtcHRpb246c3RyaW5nKSB7XHJcbiAgZm9yIChsZXQgYSBvZiBvYmpzKSB7XHJcbiAgICBpZiAoYS5pZCAhPT0gZXhlbXB0aW9uICYmIGEuY29sbGlzaW9uICYmIGEuY29sbGlkZXNXaXRoQm94KGMpKSB7XHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVsb2NpdHlfbWF4KHZlbG9jaXR5Om51bWJlcixib3g6Y29sbGlzaW9uX2JveCxvYmpzOm9ialtdLCBleGVtcHRpb246c3RyaW5nLGRpcjpkaXJlY3Rpb24pe1xyXG4gIGxldCBjb2xsaXNpb24gPSBjaGVja19jb2xsaXNpb25zKGJveCwgb2JqcywgZXhlbXB0aW9uKTtcclxuICBpZihjb2xsaXNpb24gPT0gbnVsbCl7XHJcbiAgICByZXR1cm4gdmVsb2NpdHk7XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBsZXQgY29sbGlkZXIgPSBjb2xsaXNpb247XHJcbiAgICBsZXQgb3JpZ2luID0gZ2V0SWQob2JqcyxleGVtcHRpb24pO1xyXG4gICAgbGV0IG9yaWdfc3QgPSBvcmlnaW4uc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IGNvbGxpZGVyX3N0ID0gY29sbGlkZXIuc3RhdGUgYXMgb2JqX3N0YXRlO1xyXG4gICAgbGV0IG9yaWdfY29sID0gb3JpZ2luLmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgIGxldCBjb2xsaWRlcl9jb2wgPSBjb2xsaWRlci5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgICBpZihkaXIgPT0gZGlyZWN0aW9uLmxlZnQpe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnggLSBvcmlnX2NvbC53aWR0aC8yKSAtIChjb2xsaWRlcl9jb2wueCArIGNvbGxpZGVyX2NvbC53aWR0aC8yKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoZGlyID09IGRpcmVjdGlvbi5yaWdodCl7XHJcbiAgICAgIHJldHVybiAoY29sbGlkZXJfY29sLnggLSBjb2xsaWRlcl9jb2wud2lkdGgvMikgLSAob3JpZ19jb2wueCArIG9yaWdfY29sLndpZHRoLzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLmRvd24pe1xyXG4gICAgICByZXR1cm4gKG9yaWdfY29sLnkgLSBvcmlnX2NvbC5oZWlnaHQvMikgLSAoY29sbGlkZXJfY29sLnkgKyBjb2xsaWRlcl9jb2wuaGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihkaXIgPT0gZGlyZWN0aW9uLnVwKXtcclxuICAgICAgcmV0dXJuIChjb2xsaWRlcl9jb2wueSAtIGNvbGxpZGVyX2NvbC5oZWlnaHQvMikgLSAob3JpZ19jb2wueSArIG9yaWdfY29sLmhlaWdodC8yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrKG9iamVjdDpvYmosbGlzdDpvYmpbXSkge1xyXG4gIGxpc3QgPSBbLi4ubGlzdF07XHJcbiAgbGV0IG9iID0gb2JqZWN0O1xyXG4gIGxldCBzdCA9IG9iamVjdC5zdGF0ZSBhcyBvYmpfc3RhdGU7XHJcbiAgbGV0IHhfdmVsID0gc3QudmVsb2NpdHkueDtcclxuICBsZXQgeV92ZWwgPSBzdC52ZWxvY2l0eS55O1xyXG4gIGlmKCFvYi5jb2xsaXNpb24pe1xyXG4gICAgKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnBvc2l0aW9uLnggKz0gKDxvYmpfc3RhdGU+b2Iuc3RhdGUpLnZlbG9jaXR5Lng7XHJcbiAgICAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkucG9zaXRpb24ueSArPSAoPG9ial9zdGF0ZT5vYi5zdGF0ZSkudmVsb2NpdHkueTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbGV0IGNvbF9ib3ggPSBvYi5nZXRGdWxsQ29sbGlzaW9uQm94KCk7XHJcbiAgaWYgKHhfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54ICsgY29sX2JveC53aWR0aC8yICsgeF92ZWwvMixcclxuICAgICAgeTogY29sX2JveC55LFxyXG4gICAgICB3aWR0aDogeF92ZWwsXHJcbiAgICAgIGhlaWdodDogY29sX2JveC5oZWlnaHRcclxuICAgIH07XHJcbiAgICBsZXQgdmVsID0gdmVsb2NpdHlfbWF4KHN0LnZlbG9jaXR5LngsYm94LGxpc3Qsb2IuaWQsZGlyZWN0aW9uLnJpZ2h0KTtcclxuICAgIGlmKHZlbCA+IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi54ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnggPSAwOyAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHhfdmVsIDwgMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogeF92ZWwvMiArIGNvbF9ib3gueCAtIGNvbF9ib3gud2lkdGgvMixcclxuICAgICAgeTogY29sX2JveC55LFxyXG4gICAgICB3aWR0aDogLTEgKiB4X3ZlbCxcclxuICAgICAgaGVpZ2h0OiBjb2xfYm94LmhlaWdodFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS54LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5sZWZ0KTtcclxuICAgIGlmKHZlbCA8IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi54ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnggPSAwOyBcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHlfdmVsID4gMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54LFxyXG4gICAgICB5OiBjb2xfYm94LnkgKyBjb2xfYm94LmhlaWdodC8yICsgeV92ZWwvMixcclxuICAgICAgd2lkdGg6IGNvbF9ib3gud2lkdGgsXHJcbiAgICAgIGhlaWdodDogeV92ZWxcclxuICAgIH1cclxuICAgIGxldCB2ZWwgPSB2ZWxvY2l0eV9tYXgoc3QudmVsb2NpdHkueSxib3gsbGlzdCxvYi5pZCxkaXJlY3Rpb24udXApO1xyXG4gICAgaWYodmVsID4gMCl7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnkgKz0gdmVsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgc3QudmVsb2NpdHkueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2UgaWYgKHlfdmVsIDwgMCkge1xyXG4gICAgbGV0IGJveCA9IHtcclxuICAgICAgeDogY29sX2JveC54LFxyXG4gICAgICB5OiB5X3ZlbC8yICsgY29sX2JveC55IC0gY29sX2JveC5oZWlnaHQvMixcclxuICAgICAgd2lkdGg6IGNvbF9ib3gud2lkdGgsXHJcbiAgICAgIGhlaWdodDogLTEgKiB5X3ZlbFxyXG4gICAgfVxyXG4gICAgbGV0IHZlbCA9IHZlbG9jaXR5X21heChzdC52ZWxvY2l0eS55LGJveCxsaXN0LG9iLmlkLGRpcmVjdGlvbi5kb3duKTtcclxuICAgIGlmKHZlbCA8IDApe1xyXG4gICAgICBzdC5wb3NpdGlvbi55ICs9IHZlbDtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHN0LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi4vZ2FtZS9tYWluXCI7XHJcbmltcG9ydCB7Z2FtZSxQQVVTRUQsREVCVUcsIEdldFNjcmVlbkRpbWVuc2lvbnMsR2V0Vmlld3BvcnREaW1lbnNpb25zfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtvYmp9IGZyb20gXCIuL29iamVjdFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHtWZWN0b3J9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7ZGVidWdfc3RhdGV9IGZyb20gXCIuL2RlYnVnXCI7XHJcblxyXG5pbnRlcmZhY2UgbW91c2VQb3N7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgbGFzdDp7XHJcbiAgICB4Om51bWJlcixcclxuICAgIHk6bnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgY29udHJvbF9mdW5je1xyXG4gICgpOnZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIG1vdXNlQmluZHN7XHJcbiAgW2tleTpzdHJpbmddOiBBcnJheTxbY29udHJvbF9mdW5jLG9ial0+XHJcbn1cclxuXHJcbmludGVyZmFjZSBrZXlCaW5kc3tcclxuICBba2V5OnN0cmluZ106IEFycmF5PGNvbnRyb2xfZnVuYz5cclxufVxyXG5sZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0X2NsaWNrX2hhbmRsZXIoZ2FtZTpnYW1lPHVua25vd24+KXtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XHJcbiAgICBcclxuICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZ2FtZS5zdGF0ZS5jYW1lcmFzWzBdKTtcclxuICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IGJveDpjb2xsaXNpb25fYm94ID0ge1xyXG4gICAgICB4Om1vdXNlLngsXHJcbiAgICAgIHk6bW91c2UueSxcclxuICAgICAgaGVpZ2h0OjEsXHJcbiAgICAgIHdpZHRoOjFcclxuICAgIH07XHJcbiAgICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcInRhcmdldFwiKXtcclxuICAgICAgZD0gWy4uLmFsbF9iaW5kc11cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGQgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGQgPSBbLi4uYWxsX2JpbmRzXTtcclxuICB9XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBkLmxlbmd0aDthKyspe1xyXG4gICAgICBsZXQgc2VsZWN0ZWQgPSBkW2FdO1xyXG4gICAgICBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IFwibW91c2UxXCIgJiYgc2VsZWN0ZWQuZXhlY3V0ZSA9PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWQub2JqICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgaWYoc2VsZWN0ZWQub2JqLmNvbGxpZGVzV2l0aEJveChib3gpKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHNlbGVjdGVkLmZ1bmN0aW9uKCk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gIFxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICBsZXQgZDpiaW5kW107XHJcbiAgaWYoREVCVUcpe1xyXG4gICAgaWYoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKXtcclxuICAgICAgZCA9IFsuLi5kZWJ1Z19iaW5kc107XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFQQVVTRUQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkICYmICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwiZG93blwiKSAgJiYgIXNlbGVjdGVkLmV4ZWN1dGVkKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoc2VsZWN0ZWQuZXhlY3V0ZSA9PT0gZXhlY190eXBlLnJlcGVhdCl7XHJcbiAgICAgICAgc2VsZWN0ZWQucmVwZWF0X3RpbWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkLnR5cGUgPT09IGJ0eXBlLm1vdXNlICYmIChzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2V1cFwiKSAmJiBzZWxlY3RlZC5leGVjdXRlZCAmJiBzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSkge1xyXG4gICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgKHNlbGVjdGVkLmtleSA9PT0gKFwibW91c2VcIiArIGUuYnV0dG9uICsgXCJ1cFwiKSB8fCBzZWxlY3RlZC5rZXkgPT0gXCJtb3VzZXVwXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgIGxldCBnID0gWy4uLnJlcGVhdF9iaW5kc107XHJcbiAgICAgZm9yKGxldCBhID0gMDsgYSA8IGcubGVuZ3RoO2ErKyl7XHJcbiAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgZ1thXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiBzZWxlY3RlZC5rZXkgPT09IChcIm1vdXNlXCIgKyBlLmJ1dHRvbiArIFwidXBcIikgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIHNlbGVjdGVkLnJlcGVhdF90aW1lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKSB7XHJcbiAgICAgICBzZWxlY3RlZC5leGVjdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihzZWxlY3RlZC50eXBlID09PSBidHlwZS5tb3VzZSAmJiAoc2VsZWN0ZWQua2V5ID09PSAoXCJtb3VzZVwiICsgZS5idXR0b24gKyBcImRvd25cIikgfHwgc2VsZWN0ZWQua2V5ID09IFwibW91c2Vkb3duXCIpICYmIHNlbGVjdGVkLmV4ZWN1dGVkICYmIHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICBmb3IobGV0IGEgPSAwOyBhIDwgZy5sZW5ndGg7YSsrKXtcclxuICAgICAgICBpZihnW2FdLmJpbmQuaWQgPT09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBnW2FdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuaW50ZXJmYWNlIGhlbGRfa2V5c3tcclxuICBbaW5kZXg6c3RyaW5nXTpib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgaGVsZF9rZXlzOmhlbGRfa2V5cyA9IHt9O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLChlKT0+e1xyXG4gIGxldCBjb2RlOnN0cmluZztcclxuXHJcbiAgaWYoZS5kZWx0YVkgPCAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbHVwXCI7XHJcbiAgfVxyXG4gIGVsc2UgaWYoZS5kZWx0YVkgPiAwKXtcclxuICAgIGNvZGUgPSBcInNjcm9sbGRvd25cIjtcclxuICB9XHJcblxyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUubW91c2UgJiYgc2VsZWN0ZWQua2V5ID09PSBjb2RlKSB7XHJcbiAgICAgIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5vbmNlKXtcclxuICAgICAgICBzZWxlY3RlZC5mdW5jdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaGVsZF9rZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4gIGxldCBkOmJpbmRbXTtcclxuICBpZihERUJVRyl7XHJcbiAgICBpZihkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpe1xyXG4gICAgICBkID0gWy4uLmRlYnVnX2JpbmRzXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIVBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgJiYgZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwidGFyZ2V0XCIpe1xyXG4gICAgICBkPSBbLi4uYWxsX2JpbmRzXVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZCA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgZCA9IFsuLi5hbGxfYmluZHNdO1xyXG4gIH1cclxuICBmb3IgKGxldCBhID0gMDsgYSA8IGQubGVuZ3RoOyBhKyspIHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGRbYV07XHJcbiAgICBpZiAoc2VsZWN0ZWQudHlwZSA9PT0gYnR5cGUua2V5Ym9hcmQgJiYgc2VsZWN0ZWQua2V5ID09PSBlLmNvZGUgICYmICFzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSl7XHJcbiAgICAgICAgc2VsZWN0ZWQuZnVuY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHNlbGVjdGVkLmV4ZWN1dGUgPT09IGV4ZWNfdHlwZS5yZXBlYXQpe1xyXG4gICAgICAgIGZvcihsZXQgYyBvZiByZXBlYXRfYmluZHMpe1xyXG4gICAgICAgICAgaWYoYy5iaW5kLmlkID09IHNlbGVjdGVkLmlkKXtcclxuICAgICAgICAgICAgYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0ZWQuZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gIGhlbGRfa2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbiAgXHJcbiAgbGV0IGQ6YmluZFtdO1xyXG4gIGlmKERFQlVHKXtcclxuICAgIGlmKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIil7XHJcbiAgICAgIGQgPSBbLi4uZGVidWdfYmluZHNdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighUEFVU0VEICYmIGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZCAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJ0YXJnZXRcIil7XHJcbiAgICAgIGQ9IFsuLi5hbGxfYmluZHNdXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2V7XHJcbiAgICBkID0gWy4uLmFsbF9iaW5kc107XHJcbiAgfVxyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgZC5sZW5ndGg7IGErKykge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZFthXTtcclxuICAgIGlmIChzZWxlY3RlZC50eXBlID09PSBidHlwZS5rZXlib2FyZCAmJiBzZWxlY3RlZC5rZXkgPT09IGUuY29kZSAmJiBzZWxlY3RlZC5leGVjdXRlZCkge1xyXG4gICAgICBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUub25jZSApe1xyXG4gICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihzZWxlY3RlZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgICBsZXQgZyA9IFsuLi5yZXBlYXRfYmluZHNdO1xyXG4gICAgICAgIGZvcihsZXQgYSA9IDA7IGEgPCBnLmxlbmd0aDthKyspe1xyXG4gICAgICAgICAgaWYoZ1thXS5iaW5kLmlkID09PSBzZWxlY3RlZC5pZCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmV4ZWN1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdbYV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbmxldCB0cmFja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgdmFyIHJlY3QgPSAoZS50YXJnZXQgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDtcclxuICAvL2NvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gIGxhc3RfeCA9IHg7XHJcbiAgbGFzdF95ID0geTtcclxuICB4ID0gZS5jbGllbnRYOyAvL3ggcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG4gIHkgPSBlLmNsaWVudFk7ICAvL3kgcG9zaXRpb24gd2l0aGluIHRoZSBlbGVtZW50LlxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBlbnVtIGJ0eXBle1xyXG4gIG1vdXNlLFxyXG4gIGtleWJvYXJkXHJcbn1cclxuXHJcbmludGVyZmFjZSBiaW5ke1xyXG4gIGtleTpzdHJpbmcsXHJcbiAgdHlwZTpidHlwZSxcclxuICBpZDpudW1iZXIsXHJcbiAgZnVuY3Rpb246Y29udHJvbF9mdW5jLFxyXG4gIGV4ZWN1dGU6ZXhlY190eXBlLFxyXG4gIHJlcGVhdF90aW1lcj86cmVwZWF0X2JpbmQsXHJcbiAgb2JqPzpvYmosXHJcbiAgZXhlY3V0ZWQ/OmJvb2xlYW4sXHJcbiAgaW50ZXJ2YWw/Om51bWJlcixcclxuICBjYW1lcmE/OkNhbWVyYVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVwZWF0X2JpbmR7XHJcbiAgYmluZDpiaW5kLFxyXG4gIHRpbWVyOm51bWJlcixcclxuICBpbnRlcnZhbDpudW1iZXIsXHJcbiAgYWN0aXZlOmJvb2xlYW5cclxufVxyXG5cclxubGV0IHggPSAwO1xyXG5sZXQgeSA9IDA7XHJcbmxldCBsYXN0X3ggPSAwO1xyXG5sZXQgbGFzdF95ID0gMDtcclxubGV0IGJpbmRzOmtleUJpbmRzID0ge307XHJcbmV4cG9ydCBsZXQgZGVidWdfYmluZHM6YmluZFtdID0gW107XHJcbmxldCBtb3VzZUJpbmRzOm1vdXNlQmluZHMgPSB7fTtcclxubGV0IGJpbmRfY291bnQgPSAwO1xyXG5cclxubGV0IGFsbF9iaW5kczpBcnJheTxiaW5kPiA9IFtdXHJcblxyXG5sZXQgcmVwZWF0X2JpbmRzOkFycmF5PHJlcGVhdF9iaW5kPiA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvbGxfTW91c2UoY2FtZXJhOkNhbWVyYSxjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQgPSBnLnN0YXRlLmNhbnZhcyk6VmVjdG9ye1xyXG4gIGxldCBoZWlnaHQgPSBHZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XHJcbiAgbGV0IHdyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aCkvR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGg7XHJcbiAgbGV0IHZyYXRpbyA9IHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQpL0dldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodDtcclxuICBsZXQgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmKHggPiBib3VuZHMubGVmdCAmJiB4IDwgYm91bmRzLnJpZ2h0ICYmIHkgPCBib3VuZHMuYm90dG9tICYmIHkgPiBib3VuZHMudG9wKXtcclxuICAgIFxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHg6ICgoeCAtIGJvdW5kcy5sZWZ0IC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngpL3dyYXRpby9jYW1lcmEuc3RhdGUuc2NhbGluZyArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgvY2FtZXJhLnN0YXRlLnNjYWxpbmcvMikgLFxyXG4gICAgICB5OiAoKGhlaWdodCAtICh5LWJvdW5kcy50b3ApL3ZyYXRpbykvY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodC9jYW1lcmEuc3RhdGUuc2NhbGluZy8yIC0gY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhlY3V0ZVJlcGVhdEJpbmRzKGI6bnVtYmVyKXtcclxuICBmb3IobGV0IGEgb2YgcmVwZWF0X2JpbmRzKXtcclxuICAgIGlmKGEuYmluZC5leGVjdXRlID09PSBleGVjX3R5cGUucmVwZWF0ICYmIGEudGltZXIgPT0gMCAmJiBhLmFjdGl2ZSl7XHJcbiAgICAgIGEuYmluZC5mdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYoYS5hY3RpdmUgfHwgKCFhLmFjdGl2ZSAmJiBhLnRpbWVyICE9IDApKVxyXG4gICAgICBhLnRpbWVyICs9IGI7XHJcbiAgICBpZihhLnRpbWVyID4gYS5pbnRlcnZhbCl7XHJcbiAgICAgIGEudGltZXIgPSAwOyBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVbmJpbmQoYmluZF9pZDpudW1iZXIpe1xyXG4gIGZvcihsZXQgYSA9IDA7YSA8IGFsbF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihhbGxfYmluZHNbYV0uaWQgPT0gYmluZF9pZCl7XHJcbiAgICAgIGFsbF9iaW5kcy5zcGxpY2UoYSwxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvcihsZXQgYSA9IDA7YSA8IHJlcGVhdF9iaW5kcy5sZW5ndGg7IGErKyl7XHJcbiAgICBpZihyZXBlYXRfYmluZHNbYV0uYmluZC5pZCA9PSBiaW5kX2lkKXtcclxuICAgICAgcmVwZWF0X2JpbmRzLnNwbGljZShhLDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGV4ZWNfdHlwZXtcclxuICBvbmNlLFxyXG4gIHJlcGVhdFxyXG59XHJcblxyXG5sZXQgaWQgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gQmluZChrZXluYW1lOnN0cmluZyxmdW5jOmNvbnRyb2xfZnVuYyx0eXBlOmV4ZWNfdHlwZSxpbnRlcnZhbDpudW1iZXIsb2JqZWN0PzpvYmopOm51bWJlcntcclxuICBpZihrZXluYW1lLnNsaWNlKDAsNSkgPT09IFwibW91c2VcIil7XHJcbiAgICBsZXQgYjpiaW5kID0ge1xyXG4gICAgICBrZXk6a2V5bmFtZSxcclxuICAgICAgdHlwZTpidHlwZS5tb3VzZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uOmZ1bmMsXHJcbiAgICAgIG9iajpvYmplY3QsXHJcbiAgICAgIGV4ZWN1dGU6dHlwZSxcclxuICAgICAgZXhlY3V0ZWQ6ZmFsc2UsXHJcbiAgICAgIGludGVydmFsXHJcbiAgICB9O1xyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcblxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgbGV0IGI6YmluZCA9IHtcclxuICAgICAga2V5OmtleW5hbWUsXHJcbiAgICAgIHR5cGU6YnR5cGUua2V5Ym9hcmQsXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbjpmdW5jLFxyXG4gICAgICBleGVjdXRlOnR5cGUsXHJcbiAgICAgIGV4ZWN1dGVkOmZhbHNlLFxyXG4gICAgICBpbnRlcnZhbFxyXG4gICAgfVxyXG4gICAgaWYodHlwZSA9PSBleGVjX3R5cGUucmVwZWF0KXtcclxuICAgICAgYi5yZXBlYXRfdGltZXIgPSB7XHJcbiAgICAgICAgYmluZDpiLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICAgICAgaW50ZXJ2YWwsXHJcbiAgICAgICAgYWN0aXZlOmZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmVwZWF0X2JpbmRzLnB1c2goYi5yZXBlYXRfdGltZXIpO1xyXG4gICAgfVxyXG4gICAgYWxsX2JpbmRzLnB1c2goYik7XHJcbiAgfVxyXG4gIGlkKys7XHJcbiAgcmV0dXJuIGlkIC0gMTtcclxufSIsImltcG9ydCB7IERFQlVHLCBQQVVTRUQsIHNldFBhdXNlZCwgdmlld3BvcnQgfSBmcm9tIFwiLi4vdmFuXCI7XHJcbmxldCBwYXRoOmFueTsgXHJcbmxldCBmczphbnk7XHJcbmxldCBpcGNSZW5kZXJlcjphbnk7XHJcbmltcG9ydCB7IHByZWZhYnMgfSBmcm9tIFwiLi4vZ2FtZS9vYmplY3RzL3ByZWZhYnNcIjtcclxuZXhwb3J0IGxldCBwcm9qZWN0X3BhdGggPSBcIlwiO1xyXG5pZihERUJVRyl7XHJcbiBwYXRoID0gIHdpbmRvdy5yZXF1aXJlKFwicGF0aFwiKTtcclxuIGZzID0gd2luZG93LnJlcXVpcmUoXCJmc1wiKTtcclxuIGlwY1JlbmRlcmVyICA9IHdpbmRvdy5yZXF1aXJlKFwiZWxlY3Ryb25cIikuaXBjUmVuZGVyZXI7XHJcbiBwcm9qZWN0X3BhdGggPSBpcGNSZW5kZXJlci5zZW5kU3luYygncGF0aC1yZXF1ZXN0JywgJ3BpbmcnKVswXVxyXG59XHJcbmltcG9ydCB7IG9iaiwgcGFyYW1zIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgZyB9IGZyb20gXCIuLi9nYW1lL21haW5cIjtcclxuaW1wb3J0IHsgcm9vbXMgYXMgcm9vbV9saXN0IH0gZnJvbSBcIi4uL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuaW1wb3J0IHsgQmluZCwgYnR5cGUsIFBvbGxfTW91c2UsIGV4ZWNfdHlwZSwgaGVsZF9rZXlzLCBkZWJ1Z19iaW5kcyB9IGZyb20gXCIuLi9saWIvY29udHJvbHNcIjtcclxuaW1wb3J0IHsgSFVELCBUZXh0IH0gZnJvbSBcIi4uL2xpYi9odWRcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yLCBkaW1lbnNpb25zfSBmcm9tIFwiLi4vbGliL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdfaHVkIGV4dGVuZHMgSFVEIHtcclxuICBzZXRUZXh0RWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBuZXcgVGV4dCh7XHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgIHg6IDEwLFxyXG4gICAgICAgICAgeTogdmlld3BvcnQuaGVpZ2h0IC0gMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IDIyLFxyXG4gICAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBzY2FsaW5nOiAxXHJcbiAgICAgIH0sICgpID0+IGRlYnVnX3N0YXRlLmRlbHRhX3RpbWUgPiAwID8gTWF0aC5yb3VuZCgxMDAwL2RlYnVnX3N0YXRlLmRlbHRhX3RpbWUpICsgXCJcIiA6IFwiXCIpLFxyXG4gICAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMTBcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiBgWDoke2RlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LnRvRml4ZWQoMCl9YCksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogMTAsXHJcbiAgICAgICAgeTogMzJcclxuICAgICAgfSxcclxuICAgICAgc2l6ZTogMjIsXHJcbiAgICAgIGZvbnQ6IFwiQWxhdGFcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiBgWToke2RlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LnRvRml4ZWQoMCl9YCksXHJcbiAgICBuZXcgVGV4dCh7XHJcbiAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgeDogdmlld3BvcnQud2lkdGggLSAxMCxcclxuICAgICAgICB5OiAzMlxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiAyMixcclxuICAgICAgZm9udDogXCJBbGF0YVwiLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICBzY2FsaW5nOiAxXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGxldCBtb3VzZSA9IFBvbGxfTW91c2UoZGVidWdfc3RhdGUuY2FtZXJhLGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgIGlmKG1vdXNlKXtcclxuICAgICAgICByZXR1cm4gYCR7bW91c2UueC50b0ZpeGVkKDApfTpYYFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBgOlhgXHJcbiAgICB9KSxcclxuICAgIG5ldyBUZXh0KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiB2aWV3cG9ydC53aWR0aCAtIDEwLFxyXG4gICAgICAgIHk6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IDIyLFxyXG4gICAgICBmb250OiBcIkFsYXRhXCIsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgIHNjYWxpbmc6IDFcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgaWYobW91c2Upe1xyXG4gICAgICAgIHJldHVybiBgJHttb3VzZS55LnRvRml4ZWQoMCl9OllgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGA6WWBcclxuICAgIH0pLFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z19zdGF0ZWYodDogbnVtYmVyKSB7XHJcbiAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgaWYoIW1vdXNlKXtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoZGVidWdfc3RhdGUuY2FtZXJhLmh1ZCkge1xyXG4gICAgZGVidWdfc3RhdGUuY2FtZXJhLmh1ZC5zdGF0ZWYodCk7XHJcbiAgfVxyXG4gIGlmICghUEFVU0VEKSB7XHJcbiAgICBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCk7XHJcbiAgfVxyXG4gIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50KSB7XHJcbiAgICBpZiAoUEFVU0VEICYmIGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdICYmIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLnByb3BlcnR5ID09IFwic2NhbGluZ1wiKSB7XHJcbiAgICAgIGxldCBkaXN0ID0ge1xyXG4gICAgICAgIHg6IE1hdGguYWJzKG1vdXNlLnggLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLngpLFxyXG4gICAgICAgIHk6IE1hdGguYWJzKG1vdXNlLnkgLSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlLnBvc2l0aW9uLnkpXHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nLndpZHRoID0gKDIgKiBkaXN0LngpIC8gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC53aWR0aDtcclxuICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudC5zdGF0ZS5zY2FsaW5nLmhlaWdodCA9ICgyICogZGlzdC55KSAvIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCBzdCA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUgYXMgdW5rbm93biBhcyBvYmpfc3RhdGU7XHJcbiAgICAgIHN0LnBvc2l0aW9uLnggPSBtb3VzZS54IC0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQueCxcclxuICAgICAgICBzdC5wb3NpdGlvbi55ID0gbW91c2UueSAtIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0LnlcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKFBBVVNFRCAmJiBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50KSB7XHJcbiAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50LnN0YXRlLnJvdGF0aW9uID0gZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5hbmdsZVRvd2FyZHNQb2ludChtb3VzZSk7XHJcbiAgfVxyXG4gIGlmIChkZWJ1Z19zdGF0ZS5taWRkbGVfcG9zaXRpb24pIHtcclxuICAgIGxldCBkaWZmX3kgPSBtb3VzZS55IC0gZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uLnk7XHJcbiAgICBsZXQgZGlmZl94ID0gbW91c2UueCAtIGRlYnVnX3N0YXRlLm1pZGRsZV9wb3NpdGlvbi54O1xyXG4gICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIC0xICogZGlmZl94O1xyXG4gICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArIC0xICogZGlmZl95O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcm9vbV9saXN0KCkge1xyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tX2xpc3RcIik7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IHJvb21fbmFtZSBvZiBPYmplY3Qua2V5cyhyb29tX2xpc3QpKSB7XHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyb29tX25hbWUpKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcInJvb21fbGlzdF9pdGVtXCIpO1xyXG4gICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZy5sb2FkUm9vbVN0cmluZyhyb29tX25hbWUpO1xyXG4gICAgfSlcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgcHJvcGVydGllc19lbGVtZW50IHtcclxuICBwb3NfeDogSFRNTElucHV0RWxlbWVudCxcclxuICBwb3NfeTogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeDogSFRNTElucHV0RWxlbWVudCxcclxuICB2ZWxfeTogSFRNTElucHV0RWxlbWVudCxcclxuICByb3Q6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3g6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgc2NhX3k6IEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgcmVuZGVyOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGNvbGxpc2lvbjogSFRNTElucHV0RWxlbWVudFxyXG59XHJcbmxldCBwcm9wZXJ0aWVzX2VsZW1lbnRzOiBwcm9wZXJ0aWVzX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbmlmIChERUJVRykge1xyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMgPSB7XHJcbiAgICBwb3NfeDogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zX3hcIikpLFxyXG4gICAgcG9zX3k6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc195XCIpKSxcclxuICAgIHZlbF94OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZWxfeFwiKSksXHJcbiAgICB2ZWxfeTogKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVsX3lcIikpLFxyXG4gICAgcm90OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RcIikpLFxyXG4gICAgc2NhX3g6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYV94XCIpKSxcclxuICAgIHNjYV95OiAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FfeVwiKSksXHJcbiAgICByZW5kZXI6ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlclwiKSksXHJcbiAgICBjb2xsaXNpb246ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGxpc2lvblwiKSlcclxuICB9XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpO1xyXG4gIGZvciAobGV0IGEgPSAwOyBhIDwgaW5wdXRzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICBpbnB1dHNbYV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICg8SFRNTEVsZW1lbnQ+aW5wdXRzW2FdKS5mb2N1cygpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgbGV0IGZvY3VzZWQ7XHJcbiAgbGV0IGRlYnVnX3RhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgZGVidWdfdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBpbnB1dHMubGVuZ3RoOyBhKyspIHtcclxuICAgICAgaW5wdXRzW2FdLmJsdXIoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKTtcclxuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGlucHV0cy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpbnB1dHNbYV0uYmx1cigpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuXHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMucG9zX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB4OiBuZXdfdmFsLCB5OiBlbGUuc3RhdGUucG9zaXRpb24ueSB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucG9zaXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnBvc2l0aW9uLnggPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBsZXQgbmV3X3ZhbCA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInBvc2l0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHg6IGVsZS5zdGF0ZS5wb3NpdGlvbi54LCB5OiBuZXdfdmFsIH0pLFxyXG4gICAgICBvbGQ6IEpTT04uc3RyaW5naWZ5KGVsZS5zdGF0ZS5wb3NpdGlvbilcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUucG9zaXRpb24ueSA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGVsZS5zdGF0ZS52ZWxvY2l0eS54ID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnZlbF94LnZhbHVlKSB8fCAwO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuc3RhdGUudmVsb2NpdHkueSA9IHBhcnNlRmxvYXQocHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSkgfHwgMDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMucm90LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnJvdC52YWx1ZSkgfHwgMDtcclxuICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeShuZXdfdmFsKSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUucm90YXRpb24pXHJcbiAgICB9KVxyXG4gICAgZWxlLnN0YXRlLnJvdGF0aW9uID0gbmV3X3ZhbDtcclxuICB9KVxyXG4gIHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgbGV0IG5ld192YWwgPSBwYXJzZUZsb2F0KHByb3BlcnRpZXNfZWxlbWVudHMuc2NhX3gudmFsdWUpIHx8IDA7XHJcbiAgICBkZWJ1Z19zdGF0ZS5hY3Rpb25zX3N0YWNrLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogXCJzY2FsaW5nXCIsXHJcbiAgICAgIGVsZW1lbnQ6IGVsZSxcclxuICAgICAgbmV3OiBKU09OLnN0cmluZ2lmeSh7IHdpZHRoOiBuZXdfdmFsLCBoZWlnaHQ6IGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy53aWR0aCA9IG5ld192YWw7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgIGxldCBuZXdfdmFsID0gcGFyc2VGbG9hdChwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlKSB8fCAwO1xyXG4gICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICBlbGVtZW50OiBlbGUsXHJcbiAgICAgIG5ldzogSlNPTi5zdHJpbmdpZnkoeyB3aWR0aDogZWxlLnN0YXRlLnNjYWxpbmcud2lkdGgsIGhlaWdodDogbmV3X3ZhbCB9KSxcclxuICAgICAgb2xkOiBKU09OLnN0cmluZ2lmeShlbGUuc3RhdGUuc2NhbGluZylcclxuICAgIH0pXHJcbiAgICBlbGUuc3RhdGUuc2NhbGluZy5oZWlnaHQgPSBuZXdfdmFsO1xyXG4gIH0pXHJcbiAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLnJlbmRlciA9IHByb3BlcnRpZXNfZWxlbWVudHMucmVuZGVyLmNoZWNrZWQ7XHJcbiAgfSlcclxuICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBlbGUuY29sbGlzaW9uID0gcHJvcGVydGllc19lbGVtZW50cy5jb2xsaXNpb24uY2hlY2tlZDtcclxuICB9KVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlX2VsZW1lbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZWxlID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50O1xyXG4gICAgZWxlLmRlbGV0ZSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z191cGRhdGVfcHJvcGVydGllc19lbGVtZW50KCkge1xyXG4gIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgIGxldCBlbGUgPSBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9ial9uYW1lXCIpLmlubmVySFRNTCA9IGVsZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5wb3NfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUucG9zaXRpb24ueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeC52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy52ZWxfeS52YWx1ZSA9IFwiXCIgKyBlbGUuc3RhdGUudmVsb2NpdHkueS50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yb3QudmFsdWUgPSBcIlwiICsgZWxlLnN0YXRlLnJvdGF0aW9uLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV94LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLndpZHRoLnRvRml4ZWQoMik7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLnNjYV95LnZhbHVlID0gXCJcIiArIGVsZS5zdGF0ZS5zY2FsaW5nLmhlaWdodC50b0ZpeGVkKDIpO1xyXG4gICAgcHJvcGVydGllc19lbGVtZW50cy5yZW5kZXIuY2hlY2tlZCA9IGVsZS5yZW5kZXI7XHJcbiAgICBwcm9wZXJ0aWVzX2VsZW1lbnRzLmNvbGxpc2lvbi5jaGVja2VkID0gZWxlLmNvbGxpc2lvbjtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJhbXNfbGlzdFwiKTtcclxuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZWxlLnBhcmFtcykpIHtcclxuXHJcbiAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaykpO1xyXG4gICAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGlmICh0eXBlb2YgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaylcclxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gKyBcIlwiKTtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgfSlcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZSA9IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDtcclxuICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbCBhcyB1bmtub3duIGFzIG51bWJlcikpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWwgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICg8cGFyYW1zPmVsZS5wYXJhbXMpW2tdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgKDxwYXJhbXM+ZWxlLnBhcmFtcylba10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAoPHBhcmFtcz5lbGUucGFyYW1zKVtrXSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgIHAuYXBwZW5kKGlucHV0KTtcclxuICAgICAgbGlzdC5hcHBlbmQocCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpIHtcclxuICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0c19saXN0XCIpO1xyXG4gIGxpc3QudGV4dENvbnRlbnQgPSAnJztcclxuICBpZiAoZy5nZXRSb29tKCkpIHtcclxuICAgIGZvciAobGV0IG9iaiBvZiBnLmdldFJvb20oKS5vYmplY3RzKSB7XHJcbiAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIHBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpKTtcclxuICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0X2xpc3RfaXRlbVwiKTtcclxuICAgICAgcGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID09IDxvYmo+b2JqKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCAoPG9iaj5vYmopLnN0YXRlLnBvc2l0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudCA9IDxvYmo+b2JqO1xyXG4gICAgICAgICAgZGVidWdfdXBkYXRlX3Byb3BlcnRpZXNfZWxlbWVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlYnVnX3VwZGF0ZV9wcmVmYWJzKCkge1xyXG4gIGxldCBwcmVzID0gT2JqZWN0LmtleXMocHJlZmFicykubWFwKGFzeW5jIChvOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBhID0gPG9iaj4obmV3IHByZWZhYnNbb10oe1xyXG4gICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgIHNjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9XHJcbiAgICB9KSk7XHJcbiAgICBhd2FpdCBhLmxvYWQoKTtcclxuICAgIGEucmVuZGVyID0gdHJ1ZTtcclxuICAgIGxldCBvYmpzID0gYS5jb21iaW5lZE9iamVjdHMoKTtcclxuICAgIGZvciAobGV0IG9iaiBvZiBvYmpzKSB7XHJcbiAgICAgIG9iai5VbmJpbmRBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlsdGVyZWQgPSBvYmpzLmZpbHRlcigoYSkgPT4gYS5yZW5kZXIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJlZmFiOiBwcmVmYWJzW29dLFxyXG4gICAgICBuYW1lOiBhLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgIHJlbmRlcmVkOiBmaWx0ZXJlZC5tYXAoKG8pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogby5jb25zdHJ1Y3Rvci5uYW1lLFxyXG4gICAgICAgICAgcmVuZGVyOiBvLnJlbmRlcmYoMClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICB9KVxyXG4gIGxldCBhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJlcyk7XHJcblxyXG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWZhYl90YXJnZXRcIik7XHJcbiAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgcHJlZmFiIG9mIGEpIHtcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByZWZhYi5uYW1lKSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVmYWIucmVuZGVyZWRbMF0ucmVuZGVyKSkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGRpdi5hcHBlbmQocHJlZmFiLnJlbmRlcmVkWzBdLnJlbmRlci5zcHJpdGUuc3ByaXRlX3NoZWV0KTtcclxuICAgIH1cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJlZmFiX2JveFwiKTtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHZhbCA9IHtcclxuICAgICAgICBwb3NpdGlvbjogeyB4OiBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCwgeTogZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgfSxcclxuICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgcm90YXRpb246IDAsXHJcbiAgICAgICAgc2NhbGluZzogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH1cclxuICAgICAgfTtcclxuICAgICAgbGV0IG9iaiA9IDxvYmo+KG5ldyBwcmVmYWIucHJlZmFiKHZhbCkpO1xyXG4gICAgICBhd2FpdCBnLnN0YXRlLmN1cnJlbnRfcm9vbS5hZGRJdGVtcyhvYmouY29tYmluZWRPYmplY3RzKCkpO1xyXG4gICAgfSk7XHJcbiAgICB0YXJnZXQuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgZGVidWdfYWN0aW9uIHtcclxuICBwcm9wZXJ0eTogc3RyaW5nLFxyXG4gIG9sZDogc3RyaW5nLFxyXG4gIG5ldzogc3RyaW5nLFxyXG4gIGVsZW1lbnQ6IG9ialxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGRlYnVnX3ZhcnMge1xyXG4gIHRhcmdldDogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgY2FtZXJhOiBDYW1lcmEsXHJcbiAgbGFzdF9jbGlja2VkOiBIVE1MRWxlbWVudCxcclxuICBzZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZzogZGltZW5zaW9ucyxcclxuICBzZWxlY3RlZF9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQ6IFZlY3RvcixcclxuICByb3RhdGlvbl9lbGVtZW50OiBvYmosXHJcbiAgc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50OiBvYmosXHJcbiAgbWlkZGxlX3Bvc2l0aW9uOiBWZWN0b3IsXHJcbiAgY2xpY2tfcG9zaXRpb246IFZlY3RvcixcclxuICBhY3Rpb25zX3N0YWNrOiBkZWJ1Z19hY3Rpb25bXSxcclxuICBjdXJyZW50X2FjdGlvbjogZGVidWdfYWN0aW9uLFxyXG4gIGRlbHRhX3RpbWU6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZGVidWdfc3RhdGU6IGRlYnVnX3ZhcnM7XHJcblxyXG5leHBvcnQgbGV0IGRlYnVnX3NldHVwID0gKCkgPT4ge1xyXG4gIGRlYnVnX3N0YXRlID0ge1xyXG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnX3RhcmdldFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgIGNhbWVyYTogbmV3IENhbWVyYSh7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGRpbWVuc2lvbnM6IHtcclxuICAgICAgICBoZWlnaHQ6IHZpZXdwb3J0LmhlaWdodCxcclxuICAgICAgICB3aWR0aDogdmlld3BvcnQud2lkdGhcclxuICAgICAgfSxcclxuICAgICAgc2NhbGluZzogMSxcclxuICAgICAgZGVidWc6IHRydWVcclxuICAgIH1cclxuICAgICAgLCB7XHJcbiAgICAgICAgeDogMSxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgIGhlaWdodDogMVxyXG4gICAgICB9KSxcclxuICAgIGxhc3RfY2xpY2tlZDogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0ZWRfZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0ZWRfZWxlbWVudF9vZmZzZXQ6IHVuZGVmaW5lZCxcclxuICAgIHJvdGF0aW9uX2VsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgIG1pZGRsZV9wb3NpdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgY2xpY2tfcG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgIHNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgc2VsZWN0ZWRfZWxlbWVudF9pbml0aWFsX3NjYWxpbmc6IHsgd2lkdGg6IDEsIGhlaWdodDogMSB9LFxyXG4gICAgYWN0aW9uc19zdGFjazogW10sXHJcbiAgICBkZWx0YV90aW1lOjAsXHJcbiAgICBjdXJyZW50X2FjdGlvbjogdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGRlYnVnX3N0YXRlLmNhbWVyYS5odWQgPSBuZXcgRGVidWdfaHVkKCk7XHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwibW91c2UwZG93blwiLFxyXG4gICAgdHlwZTogYnR5cGUubW91c2UsXHJcbiAgICBpZDogMCxcclxuICAgIGZ1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIGlmIChkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50KSB7XHJcbiAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgICAgaWYoIW1vdXNlKXtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z19zdGF0ZS5jbGlja19wb3NpdGlvbiA9IG1vdXNlO1xyXG4gICAgICAgIGxldCBhbExfY2xpY2tlZCA9IGcuZ2V0Um9vbSgpLmNoZWNrT2JqZWN0c1BvaW50KG1vdXNlKTtcclxuICAgICAgICBsZXQgY2xpY2tlZDtcclxuICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbExfY2xpY2tlZC5maWx0ZXIoKGVsZSkgPT4gZWxlID09IGRlYnVnX3N0YXRlLnNlbGVjdGVkX3Byb3BlcnRpZXNfZWxlbWVudClcclxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY2xpY2tlZCA9IGZpbHRlcmVkWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY2xpY2tlZCA9IGFsTF9jbGlja2VkWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xpY2tlZCkge1xyXG4gICAgICAgICAgaWYgKGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdKSB7XHJcbiAgICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwic2NhbGluZ1wiLFxyXG4gICAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoY2xpY2tlZC5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICAgICAgICBuZXc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudDogY2xpY2tlZCxcclxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJwb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgbmV3OiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50ID0gY2xpY2tlZDtcclxuICAgICAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgICAgICAgZGVidWdfc3RhdGUuc2VsZWN0ZWRfZWxlbWVudCA9IGNsaWNrZWQ7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50X2luaXRpYWxfc2NhbGluZyA9IGNsaWNrZWQuc3RhdGUuc2NhbGluZztcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnRfb2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54IC0gY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55IC0gY2xpY2tlZC5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMXVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA1LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTFkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA2LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgbGV0IG1vdXNlID0gUG9sbF9Nb3VzZShkZWJ1Z19zdGF0ZS5jYW1lcmEsIGRlYnVnX3N0YXRlLnRhcmdldCk7XHJcbiAgICAgIGlmKCFtb3VzZSl7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgZGVidWdfc3RhdGUubWlkZGxlX3Bvc2l0aW9uID0gbW91c2U7XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAxLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uLm5ldyA9IEpTT04uc3RyaW5naWZ5KGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQuc3RhdGUuc2NhbGluZylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbi5uZXcgPSBKU09OLnN0cmluZ2lmeSgoPG9ial9zdGF0ZT5kZWJ1Z19zdGF0ZS5zZWxlY3RlZF9lbGVtZW50LnN0YXRlKS5wb3NpdGlvbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucHVzaChkZWJ1Z19zdGF0ZS5jdXJyZW50X2FjdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlYnVnX3N0YXRlLnNlbGVjdGVkX2VsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9wcm9wZXJ0aWVzX2VsZW1lbnQoKVxyXG4gICAgfSxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlLFxyXG4gICAgY2FtZXJhOiBkZWJ1Z19zdGF0ZS5jYW1lcmFcclxuICB9KTtcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJtb3VzZTJkb3duXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiAzLFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgaWYgKGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQpIHtcclxuICAgICAgICBkZWJ1Z19zdGF0ZS5yb3RhdGlvbl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgbW91c2UgPSBQb2xsX01vdXNlKGRlYnVnX3N0YXRlLmNhbWVyYSwgZGVidWdfc3RhdGUudGFyZ2V0KTtcclxuICAgICAgICBpZighbW91c2Upe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjbGlja2VkID0gZy5nZXRSb29tKCkuY2hlY2tPYmplY3RzUG9pbnQobW91c2UpWzBdXHJcbiAgICAgICAgaWYgKGNsaWNrZWQpIHtcclxuICAgICAgICAgIGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQgPSBjbGlja2VkO1xyXG4gICAgICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRlYnVnX3N0YXRlLnJvdGF0aW9uX2VsZW1lbnQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInJvdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG9sZDogSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbiksXHJcbiAgICAgICAgICAgIG5ldzogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2UsXHJcbiAgICBjYW1lcmE6IGRlYnVnX3N0YXRlLmNhbWVyYVxyXG4gIH0pO1xyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIm1vdXNlMnVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiA0LFxyXG4gICAgZnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgZGVidWdfc3RhdGUuY3VycmVudF9hY3Rpb24ubmV3ID0gSlNPTi5zdHJpbmdpZnkoZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudC5zdGF0ZS5yb3RhdGlvbilcclxuICAgICAgZGVidWdfc3RhdGUuYWN0aW9uc19zdGFjay5wdXNoKGRlYnVnX3N0YXRlLmN1cnJlbnRfYWN0aW9uKTtcclxuICAgICAgZGVidWdfc3RhdGUucm90YXRpb25fZWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZSxcclxuICAgIGNhbWVyYTogZGVidWdfc3RhdGUuY2FtZXJhXHJcbiAgfSk7XHJcblxyXG4gIGxldCBsZWZ0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54IC0gKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IHJpZ2h0X2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2hpZnRfaGVsZCA9IGhlbGRfa2V5c1tcIlNoaWZ0TGVmdFwiXSA/IDEgOiAwO1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiKVxyXG4gICAgICBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueCA9IGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgKCg1ICsgc2hpZnRfaGVsZCAqIDUpICogKDEgLyBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZykpO1xyXG4gIH07XHJcbiAgbGV0IGRvd25fZnVuYyA9ICgpID0+IHtcclxuICAgIGxldCBzaGlmdF9oZWxkID0gaGVsZF9rZXlzW1wiU2hpZnRMZWZ0XCJdID8gMSA6IDA7XHJcblxyXG4gICAgaWYgKCFoZWxkX2tleXNbXCJDb250cm9sTGVmdFwiXSAmJiBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSAtICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCB1cF9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IHNoaWZ0X2hlbGQgPSBoZWxkX2tleXNbXCJTaGlmdExlZnRcIl0gPyAxIDogMDtcclxuICAgIGlmIChkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQuaWQgPT0gXCJkZWJ1Z190YXJnZXRcIilcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUucG9zaXRpb24ueSArICgoNSArIHNoaWZ0X2hlbGQgKiA1KSAqICgxIC8gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcpKTtcclxuICB9O1xyXG4gIGxldCBzY3JvbGxfdXAgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVidWdfc3RhdGUubGFzdF9jbGlja2VkLmlkID09IFwiZGVidWdfdGFyZ2V0XCIpXHJcbiAgICAgIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID0gZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgKyAwLjA1O1xyXG4gIH1cclxuICBsZXQgc2F2ZV9mdW5jID0gKCkgPT4ge1xyXG4gICAgbGV0IGN0cmxfaGVsZCA9IGhlbGRfa2V5c1tcIkNvbnRyb2xMZWZ0XCJdO1xyXG4gICAgaWYgKGN0cmxfaGVsZCAmJiBQQVVTRUQpIHtcclxuICAgICAgbGV0IG5hbWUgPSBnLmdldFJvb20oKS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgICBsZXQgYSA9IHBhdGguam9pbihgJHtwcm9qZWN0X3BhdGh9YCwgYC4uL3Jvb21zLyR7bmFtZX0uanNvbmApO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYSwgSlNPTi5zdHJpbmdpZnkoZy5nZXRSb29tKCkuZXhwb3J0U3RhdGVDb25maWcoKSkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBXUklUSU5HIFJPT00gSU5GTyBGSUxFLlwiKTtcclxuICAgICAgfVxyXG4gICAgICBhbGVydChcIlNhdmVkXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGN0cmxfaGVsZCAmJiAhUEFVU0VEKSB7XHJcbiAgICAgIGFsZXJ0KFwicGF1c2UgdG8gZW5hYmxlIHNhdmluZy5cIilcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHNjcm9sbF9kb3duID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlYnVnX3N0YXRlLmxhc3RfY2xpY2tlZC5pZCA9PSBcImRlYnVnX3RhcmdldFwiICYmIGRlYnVnX3N0YXRlLmNhbWVyYS5zdGF0ZS5zY2FsaW5nID4gMC4wNSlcclxuICAgICAgZGVidWdfc3RhdGUuY2FtZXJhLnN0YXRlLnNjYWxpbmcgPSBkZWJ1Z19zdGF0ZS5jYW1lcmEuc3RhdGUuc2NhbGluZyAtIDAuMDU7XHJcbiAgfVxyXG4gIGxldCB1bmRvX2Z1bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGVsZF9rZXlzW1wiQ29udHJvbExlZnRcIl0pIHtcclxuICAgICAgbGV0IGN1cnI6IGRlYnVnX2FjdGlvbiA9IGRlYnVnX3N0YXRlLmFjdGlvbnNfc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChjdXJyKSB7XHJcbiAgICAgICAgaWYgKGN1cnIucHJvcGVydHkgPT0gXCJwb3NpdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucG9zaXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJyb3RhdGlvblwiKSB7XHJcbiAgICAgICAgICBjdXJyLmVsZW1lbnQuc3RhdGUucm90YXRpb24gPSBKU09OLnBhcnNlKGN1cnIub2xkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3Vyci5wcm9wZXJ0eSA9PT0gXCJzY2FsaW5nXCIpIHtcclxuICAgICAgICAgIGN1cnIuZWxlbWVudC5zdGF0ZS5zY2FsaW5nID0gSlNPTi5wYXJzZShjdXJyLm9sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleUFcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlBXCIsIGxlZnRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogbGVmdF9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLnJlcGVhdFxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5RFwiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleURcIiwgcmlnaHRfZnVuYywgZXhlY190eXBlLnJlcGVhdCwgMSksXHJcbiAgICBmdW5jdGlvbjogcmlnaHRfZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVdcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlXXCIsIHVwX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVwX2Z1bmMsXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUucmVwZWF0XHJcbiAgfSlcclxuICBkZWJ1Z19iaW5kcy5wdXNoKHtcclxuICAgIGtleTogXCJLZXlTXCIsXHJcbiAgICB0eXBlOiBidHlwZS5rZXlib2FyZCxcclxuICAgIGlkOiBCaW5kKFwiS2V5U1wiLCBkb3duX2Z1bmMsIGV4ZWNfdHlwZS5yZXBlYXQsIDEpLFxyXG4gICAgZnVuY3Rpb246IGRvd25fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5yZXBlYXRcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbHVwXCIsXHJcbiAgICB0eXBlOiBidHlwZS5tb3VzZSxcclxuICAgIGlkOiBCaW5kKFwic2Nyb2xsdXBcIiwgc2Nyb2xsX3VwLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX3VwLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcInNjcm9sbGRvd25cIixcclxuICAgIHR5cGU6IGJ0eXBlLm1vdXNlLFxyXG4gICAgaWQ6IEJpbmQoXCJzY3JvbGxkb3duXCIsIHNjcm9sbF9kb3duLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2Nyb2xsX2Rvd24sXHJcbiAgICBleGVjdXRlOiBleGVjX3R5cGUub25jZVxyXG4gIH0pXHJcbiAgZGVidWdfYmluZHMucHVzaCh7XHJcbiAgICBrZXk6IFwiS2V5U1wiLFxyXG4gICAgdHlwZTogYnR5cGUua2V5Ym9hcmQsXHJcbiAgICBpZDogQmluZChcIktleVNcIiwgc2F2ZV9mdW5jLCBleGVjX3R5cGUub25jZSwgMSksXHJcbiAgICBmdW5jdGlvbjogc2F2ZV9mdW5jLFxyXG4gICAgZXhlY3V0ZTogZXhlY190eXBlLm9uY2VcclxuICB9KVxyXG4gIGRlYnVnX2JpbmRzLnB1c2goe1xyXG4gICAga2V5OiBcIktleVpcIixcclxuICAgIHR5cGU6IGJ0eXBlLmtleWJvYXJkLFxyXG4gICAgaWQ6IEJpbmQoXCJLZXlaXCIsIHVuZG9fZnVuYywgZXhlY190eXBlLm9uY2UsIDEpLFxyXG4gICAgZnVuY3Rpb246IHVuZG9fZnVuYyxcclxuICAgIGV4ZWN1dGU6IGV4ZWNfdHlwZS5vbmNlXHJcbiAgfSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBkZWJ1Z19zdGF0ZS5sYXN0X2NsaWNrZWQgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICB9KVxyXG4gIGxldCBwYXVzZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlX2J1dHRvblwiKVxyXG4gIHBhdXNlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNldFBhdXNlZCghUEFVU0VEKTtcclxuICAgIGlmIChQQVVTRUQpIHtcclxuICAgICAgcGF1c2VfYnV0dG9uLmlubmVySFRNTCA9IFwiVU5QQVVTRVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHBhdXNlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlBBVVNFXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgbGV0IG9ial9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19vYmplY3RfYnV0dG9uXCIpO1xyXG4gIGxldCByb29tX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Jvb21fYnV0dG9uXCIpO1xyXG4gIHJvb21fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGZpbGVfcGF0aCA9IGlwY1JlbmRlcmVyLnNlbmRTeW5jKCdvYmplY3QtcGF0aC1yZXF1ZXN0JywgXCJyb29tc1wiKTtcclxuICAgIGlmIChmaWxlX3BhdGgpIHtcclxuICAgICAgbGV0IGZ1bGxfbmFtZSA9IHBhdGgucGFyc2UoZmlsZV9wYXRoKS5iYXNlO1xyXG4gICAgICBsZXQgbmV3X25hbWUgPSBmdWxsX25hbWUuc3Vic3RyKDAsIGZ1bGxfbmFtZS5sZW5ndGggLSAzKTtcclxuICAgICAgbGV0IHBhdGhfdG9fd3JpdGUgPSBwYXRoLmpvaW4oYCR7ZmlsZV9wYXRofWAsIFwiLi5cIiwgbmV3X25hbWUgKyBcIi50c1wiKTtcclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoX3RvX3dyaXRlLCBgXHJcbiAgICBcclxuICAgIGltcG9ydCB7cm9vbX0gZnJvbSBcIi4uLy4uL2xpYi9yb29tXCI7XHJcbiAgICBpbXBvcnQge2dhbWV9IGZyb20gXCIuLi8uLi92YW5cIjtcclxuICAgIGltcG9ydCB7c3RhdGVfY29uZmlnfSBmcm9tIFwiLi4vLi4vbGliL3Jvb21cIjtcclxuICAgIGltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi8ke25ld19uYW1lfS5qc29uXCI7XHJcbiAgICBsZXQgY2ZpZyA9IGNvbmZpZyBhcyB1bmtub3duIGFzIHN0YXRlX2NvbmZpZztcclxuICAgIGludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZXtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIHJvb208JHtuZXdfbmFtZX1fc3RhdGU+e1xyXG4gICAgICBiYWNrZ3JvdW5kX3VybD1cIi4vc3ByaXRlcy9FcnJvci5wbmdcIjtcclxuICAgICAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+KXtcclxuICAgICAgICBzdXBlcihnYW1lLGNmaWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICAgIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZWYoZGVsdGFfdGltZTpudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyLnN0YXRlZihkZWx0YV90aW1lKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGApXHJcblxyXG4gICAgICBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIuanNvblwiKTtcclxuXHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG4gICAge1xyXG4gICAgICBcIm9iamVjdHNcIjpbXVxyXG4gICAgfVxyXG4gICAgYClcclxuICAgIH1cclxuICB9KVxyXG4gIG9ial9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZmlsZV9wYXRoID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ29iamVjdC1wYXRoLXJlcXVlc3QnLCBcIm9iamVjdHNcIik7XHJcbiAgICBpZiAoZmlsZV9wYXRoKSB7XHJcbiAgICAgIGxldCBmdWxsX25hbWUgPSBwYXRoLnBhcnNlKGZpbGVfcGF0aCkuYmFzZTtcclxuICAgICAgbGV0IG5ld19uYW1lID0gZnVsbF9uYW1lLnN1YnN0cigwLCBmdWxsX25hbWUubGVuZ3RoIC0gMyk7XHJcbiAgICAgIGxldCBwYXRoX3RvX3dyaXRlID0gcGF0aC5qb2luKGAke2ZpbGVfcGF0aH1gLCBcIi4uXCIsIG5ld19uYW1lICsgXCIudHNcIik7XHJcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aF90b193cml0ZSwgYFxyXG5pbXBvcnQge29ian0gZnJvbSBcIi4uLy4uL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgb2JqX3N0YXRlLCBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9saWIvc3RhdGVcIjtcclxuXHJcbmludGVyZmFjZSAke25ld19uYW1lfV9zdGF0ZSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICAgIFxyXG59XHJcbiAgICBcclxuaW50ZXJmYWNlICR7bmV3X25hbWV9X3BhcmFtZXRlcnN7XHJcbiAgICBcclxufVxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyAke25ld19uYW1lfSBleHRlbmRzIG9iantcclxuICBzcHJpdGVfdXJsID0gXCIuL3Nwcml0ZXMvRXJyb3IucG5nXCI7XHJcbiAgaGVpZ2h0ID0gMTAwO1xyXG4gIHdpZHRoID0gMTAwO1xyXG4gIHRhZ3M6QXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBwYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycztcclxuICBzdGF0aWMgZGVmYXVsdF9wYXJhbXM6JHtuZXdfbmFtZX1fcGFyYW1ldGVycyA9IHt9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtczoke25ld19uYW1lfV9wYXJhbWV0ZXJzID0gJHtuZXdfbmFtZX0uZGVmYXVsdF9wYXJhbXMpe1xyXG4gICAgc3VwZXIoc3RhdGUscGFyYW1zKTtcclxuICB9XHJcbiAgc3RhdGVmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgIFxyXG4gIH1cclxuICByZW5kZXJmKHRpbWVfZGVsdGE6bnVtYmVyKXtcclxuICAgcmV0dXJuIHN1cGVyLnJlbmRlcmYodGltZV9kZWx0YSk7IFxyXG4gIH1cclxuICByZWdpc3Rlcl9hbmltYXRpb25zKCl7XHJcbiAgICBcclxuICB9XHJcbiAgcmVnaXN0ZXJfYXVkaW8oKXtcclxuICAgIFxyXG4gIH1cclxuICByZWdpc3Rlcl9jb250cm9scygpe1xyXG4gICAgICAgIFxyXG4gIH1cclxufVxyXG4gICAgYClcclxuICAgIH1cclxuICB9KVxyXG5cclxufSIsImltcG9ydCB7b2JqfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuXHJcbmludGVyZmFjZSBIdWRUZXh0R2V0RnVuY3tcclxuICAoKTpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0U2V0dGluZ3tcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlcixcclxuICBmb250OkZvbnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb250e1xyXG4gIG1heF93aWR0aD86bnVtYmVyLFxyXG4gIHNpemU6bnVtYmVyLFxyXG4gIGZvbnQ6c3RyaW5nLFxyXG4gIGNvbG9yOnN0cmluZyxcclxuICB0ZXh0OnN0cmluZyxcclxuICBhbGlnbjpDYW52YXNUZXh0QWxpZ25cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0X05vZGV7XHJcbiAgbWF4X3dpZHRoPzpudW1iZXIsXHJcbiAgcG9zaXRpb246e1xyXG4gICAgeDpudW1iZXIsXHJcbiAgICB5Om51bWJlclxyXG4gIH1cclxuICBzaXplOm51bWJlcjtcclxuICBzY2FsaW5nOm51bWJlcjtcclxuICBmb250OnN0cmluZztcclxuICBjb2xvcjpzdHJpbmc7XHJcbiAgdGV4dD86c3RyaW5nO1xyXG4gIGFsaWduPzpDYW52YXNUZXh0QWxpZ247XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhVRHtcclxuICBncmFwaGljX2VsZW1lbnRzOm9ialtdID0gW107XHJcbiAgdGV4dF9lbGVtZW50czpBcnJheTxUZXh0PiA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnRleHRfZWxlbWVudHMucHVzaCguLi50aGlzLnNldFRleHRFbGVtZW50cygpKTtcclxuICAgIHRoaXMuZ3JhcGhpY19lbGVtZW50cy5wdXNoKC4uLnRoaXMuc2V0R3JhcGhpY0VsZW1lbnRzKCkpOyBcclxuICB9XHJcbiAgc3RhdGVmKGE6bnVtYmVyKXtcclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLmdyYXBoaWNfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgeCBvZiB0aGlzLnRleHRfZWxlbWVudHMpe1xyXG4gICAgICB4LnN0YXRlZihhKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0VGV4dEVsZW1lbnRzKCk6VGV4dFtde1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBzZXRHcmFwaGljRWxlbWVudHMoKTpvYmpbXXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0e1xyXG4gIGdldEZ1bmM6SHVkVGV4dEdldEZ1bmM7XHJcbiAgc3RhdGU6VGV4dF9Ob2RlO1xyXG4gIGNvbnN0cnVjdG9yKG5vZGU6VGV4dF9Ob2RlLGdldEZ1bmM6SHVkVGV4dEdldEZ1bmMpe1xyXG4gICAgaWYoIW5vZGUuYWxpZ24pe1xyXG4gICAgICBub2RlLmFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBub2RlO1xyXG4gICAgaWYoIXRoaXMuc3RhdGUudGV4dCl7XHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldEZ1bmMgPSBnZXRGdW5jO1xyXG4gIH1cclxuICBzdGF0ZWYoYTpudW1iZXIpe1xyXG4gICB0aGlzLnN0YXRlLnRleHQgPSB0aGlzLmdldEZ1bmMoKTtcclxuICB9XHJcbiAgcmVuZGVyZihhOm51bWJlcik6Rm9udHtcclxuICAgIGxldCB7c2l6ZSxjb2xvcixmb250LHRleHQsbWF4X3dpZHRoLGFsaWdufSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaXplLFxyXG4gICAgICBjb2xvcixcclxuICAgICAgZm9udCxcclxuICAgICAgdGV4dCxcclxuICAgICAgbWF4X3dpZHRoLFxyXG4gICAgICBhbGlnblxyXG4gICAgfTtcclxuICB9XHJcbn0iLCJpbXBvcnQge1ZlY3Rvcn0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaXN0YW5jZShhOlZlY3RvcixiOlZlY3Rvcil7XHJcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksMikpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtaW46bnVtYmVyLCBtYXg6bnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbn0iLCJpbXBvcnQgeyBzdGF0ZV9mdW5jLCBvYmpfc3RhdGUsIFZlY3RvciwgZGltZW5zaW9ucyB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IHJlbmRlcl9mdW5jLCByZW5kZXJfdHlwZSAsc2NhbGVfdHlwZX0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBwb3NpdGlvbmVkX3Nwcml0ZSwgc3ByaXRlLCBzcHJpdGVfZ2VuIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVW5iaW5kLCBCaW5kLCBjb250cm9sX2Z1bmMsIGV4ZWNfdHlwZSB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7YXVkaW99IGZyb20gXCIuL2F1ZGlvXCI7XHJcbmltcG9ydCB7ZGVlcCwgZ2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZSB9IGZyb20gXCIuL21hdGhcIjtcclxuXHJcbmludGVyZmFjZSBvYmpfaTxUPiB7XHJcbiAgc3RhdGVmOiBzdGF0ZV9mdW5jPFQ+LFxyXG4gIHJlbmRlcmY6IHJlbmRlcl9mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJZChhOiBvYmpbXSwgaWQ6IHN0cmluZyk6IG9iaiB7XHJcbiAgZm9yIChsZXQgYiA9IDA7IGIgPCBhLmxlbmd0aDsgYisrKSB7XHJcbiAgICBpZiAoYVtiXS5pZCA9PSBpZCkge1xyXG4gICAgICByZXR1cm4gYVtiXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuLy9GaW5kcyB0aGUgc2lkZSBsZW5ndGhzIG9mIGEgdHJpYW5nbGUgaWYgZ2l2ZW4gdGhlICBhbmdsZSAoaW4gZGVncmVlcylcclxuLy9hbG9uZyB3aXRoIHRoZSBsZW5ndGggb2YgdGhlIGh5cG90ZW51c2VcclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uX2xlbmd0aChsZW5ndGg6IG51bWJlciwgZGVncmVlOiBudW1iZXIpIHtcclxuICBsZXQgYV9sZW4gPSBsZW5ndGggKiBNYXRoLnNpbihkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICBsZXQgYl9sZW4gPSBsZW5ndGggKiBNYXRoLmNvcyhkZWdyZWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogYV9sZW4sXHJcbiAgICB5OiBiX2xlblxyXG4gIH1cclxufVxyXG5cclxuLy9UaGlzIGNvdW50ZXIgdHJhY2tzIHRoZSBnbG9iYWwgbnVtYmVyIG9mIG9iamVjdHMgY3JlYXRlZCBzbyBmYXJcclxuLy9hbiBvYmplY3QncyBpZCAoaWYgbm90IG92ZXJ3cml0dGVuKSB3aWxsIGJlIGEgdW5pcXVlIGludGVnZXIsIHdoaWNoXHJcbi8vdXNlcyB0aGlzIGNvdW50ZXIuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmludGVyZmFjZSBhbmltX3N0b3JhZ2Uge1xyXG4gIFtpbmRleDogc3RyaW5nXTogW0FycmF5PFtudW1iZXIsIHNwcml0ZV0+LCBudW1iZXJdXHJcbn1cclxuXHJcbmludGVyZmFjZSB2b2lkX2Z1bmMge1xyXG4gICgpOiB2b2lkXHJcbn1cclxuXHJcbmNsYXNzIGFuaW1hdGlvbnMge1xyXG4gIGFuaW1hdGlvbnM6IGFuaW1fc3RvcmFnZSA9IHt9O1xyXG4gIC8vVHJhY2tzIHRoZSB0aW1lIHBhc3NlZCBzaW5jZSB0aGUgY3VycmVudCBhbmltYXRpb25cclxuICAvL2hhcyBzdGFydGVkIHBsYXlpbmdcclxuICBhbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgY3VycmVudDogc3RyaW5nO1xyXG4gIGNhbGxiYWNrOiB2b2lkX2Z1bmM7XHJcbiAgYW5pbWF0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAvL2RlZmluZXMgYW4gYW5pbWF0aW9uIHRoYXQgY2FuIGJlIHBsYXllZCB1c2luZyB0aGUgcGxheSBtZXRob2RcclxuICAvL3RoZSBrZXlmcmFtZXMgYXJlIGFuIGFycmF5IG9mIHR1cGxlcyBpbiB0aGUgXHJcbiAgLy9mb3JtYXQgb2YgWyh0aW1lIGZvciB0aGlzIHNwcml0ZSB0byBzaG93KSwgc3ByaXRlXVxyXG4gIGFkZChuYW1lOiBzdHJpbmcsIGtleWZyYW1lczogQXJyYXk8W251bWJlciwgc3ByaXRlXT4sIGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBba2V5ZnJhbWVzLCBsZW5ndGhdO1xyXG4gIH1cclxuICBwbGF5KG5hbWU6IHN0cmluZywgY2FsbGJhY2s/OiB2b2lkX2Z1bmMpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IG5hbWU7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLmFuaW1hdGlvbl90cmFja2VyID0gMDtcclxuICB9XHJcbiAgcmVuZGVyZih0OiBudW1iZXIpOiBzcHJpdGUge1xyXG4gICAgbGV0IGN1cnJfYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW3RoaXMuY3VycmVudF1bMF07XHJcbiAgICBsZXQgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmFuaW1hdGlvbnNbdGhpcy5jdXJyZW50XVsxXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKDsgaW5kZXggPCBjdXJyX2FuaW1hdGlvbi5sZW5ndGggLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgIGxldCBrZXlmcmFtZV90aW1lID0gY3Vycl9hbmltYXRpb25baW5kZXhdWzBdO1xyXG4gICAgICBsZXQgbmV4dF9rZXlmcmFtZV90aW1lID0gY3Vycl9hbmltYXRpb25baW5kZXggKyAxXVswXTtcclxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgPj0ga2V5ZnJhbWVfdGltZSAmJiB0aGlzLmFuaW1hdGlvbl90cmFja2VyIDwgbmV4dF9rZXlmcmFtZV90aW1lKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IHRoaXMuYW5pbWF0aW9uX3RyYWNrZXIgKyB0O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICAvL1JldHVybnMgdGhlIHJhdyBzcHJpdGUgdGhhdCdzIGNvcnJlY3QgdG8gc2hvdyBhdCB0aGlzIHRpbWVcclxuICAgICAgICByZXR1cm4gY3Vycl9hbmltYXRpb25baW5kZXhdWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25fdHJhY2tlciA+PSBsZW5ndGgpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25fdHJhY2tlciArPSB0O1xyXG4gICAgfVxyXG4gICAgLy9SZXR1cm5zIHRoZSBsYXN0IGFwcHJvcHJpYXRlIGZyYW1lIHVudGlsIHRoZSBhbmltYXRpb24gaXMgb3Zlci5cclxuICAgIHJldHVybiBjdXJyX2FuaW1hdGlvbltpbmRleF1bMV07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgaGl0Ym94e1xyXG4gIHdpZHRoOm51bWJlcixcclxuICBoZWlnaHQ6bnVtYmVyLFxyXG4gIHhfb2Zmc2V0Om51bWJlcixcclxuICB5X29mZnNldDpudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJhbXN7XHJcbiAgW2luZGV4OnN0cmluZ106Ym9vbGVhbnxzdHJpbmd8bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYm91bmRpbmdfYm94e1xyXG4gIGJvdHRvbV9sZWZ0OlZlY3RvcixcclxuICB0b3BfcmlnaHQ6VmVjdG9yXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBvYmp7XHJcbiAgLy9VcmwgdG8gdGhlIG9iamVjdCdzIGluZGl2aWR1YWwgc3ByaXRlLCBvciBhbGwgb2YgaXRzIHNwcml0ZXNcclxuICAvL2J1bmRsZWQgaW50byBhIHNwcml0ZXNoZWV0XHJcbiAgc3ByaXRlX3VybCA9IFwiXCI7XHJcbiAgLy9UaGlzIGlzIHRoZSBsb2FkZWQgc3ByaXRlL3Nwcml0ZXNoZWV0IG9mIHRoZSBvYmplY3RcclxuICAvL3doaWNoIGlzIGZldGNoZWQgZnJvbSB0aGUgdXJsIGFib3ZlXHJcbiAgc3ByaXRlX3NoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHN0YXRlOiBvYmpfc3RhdGU7XHJcbiAgcmVuZGVyX3R5cGUgPSByZW5kZXJfdHlwZS5zcHJpdGU7XHJcbiAgLy9UaGVzZSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgYWN0dWFsIG9iamVjdCdzIHNwcml0ZSBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgLy9JZiB1c2luZyBhIHNwcml0ZSBzaGVldCwgdGhlc2UgYmUgb25lIHNwcml0ZSdzIGhlaWdodCBhbmQgd2lkdGguXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBcclxuICBjb2xsaXNpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaXRib3g6IGhpdGJveFxyXG4gIGlkOiBzdHJpbmc7XHJcbiAgLy9BcnJheSBvZiBiaW5kIGlkc1xyXG4gIC8vQmluZHMgYXJlIGluZGVudGlmaWVkIGJ5IGEgdW5pcXVlIG51bWJlciB0aGF0IGlzIHJldHVybiB3aGVuXHJcbiAgLy9UaGUgYmluZCBpcyBjcmVhdGVkLiBXZSBtdXN0IHN0b3JlIHRoZXNlIGlkcyBpbiBvcmRlciB0byBcclxuICAvL2RlbGV0ZSB0aGUgYmluZHMgd2hlbiB0aGV5IGFyZSBtYW51YWxseSB1bmJvdW5kLCBvciB0aGUgb2JqZWN0IGlzIGRlbGV0ZWQuXHJcbiAgYmluZHM6IEFycmF5PG51bWJlcj47XHJcbiAgdGFnczpzdHJpbmdbXSA9IFtdO1xyXG4gIC8vdGFncyBhcmUgdXNlZCB0byBleGNsdWRlIG9yIGluY2x1ZGUgb2JqZWN0cyB3aGVuIGNoZWNraW5nIGZvciBjb2xsaXNpb25zLFxyXG4gIC8vYW5kIGZvciBvYmplY3QgaWRlbnRpZmljYXRpb24gLyBjbGFzc2lmaWNhdGlvbiBpbiBzY3JpcHRzXHJcbiAgcmVuZGVyID0gdHJ1ZTtcclxuICBhbmltYXRpb25zID0gbmV3IGFuaW1hdGlvbnMoKTtcclxuICBhdWRpbyA9IG5ldyBhdWRpbygpO1xyXG4gIC8vTGFzdCByZW5kZXIgdGltZSwgdXNlZCB0byBjYWxjdWxhdGUgZGVsdGFfdGltZVxyXG4gIGxhc3RfcmVuZGVyOm51bWJlciA9IDA7XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIHBhcmVudDpjb21wb3NpdGVfb2JqO1xyXG4gIC8vUGFyYW1zIGFyZSBvcHRpb25zIGZvciB0aGUgb2JqZWN0LCB0aGF0IGRvIG5vdCByZWx5IG9uIHN0YXRlXHJcbiAgLy8gRm9yIGV4YW1wbGUsIHRoZSBzaWRlIG9mIGEgcGllY2UgaW4gY2hlc3MuXHJcbiAgcGFyYW1zOnVua25vd24gPSB7fTtcclxuICBsYXllcjpudW1iZXIgPSAxO1xyXG4gIHNhdmVfdG9fZmlsZTpib29sZWFuID0gdHJ1ZTtcclxuICB0aWNrX3N0YXRlID0gdHJ1ZTtcclxuICBzY2FsZV90eXBlID0gc2NhbGVfdHlwZS5ncm93O1xyXG4gIHN0YXRpYyBkZWZhdWx0X3BhcmFtczp1bmtub3duID0ge307XHJcbiAgb3BhY2l0eTpudW1iZXIgPSAxO1xyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIC8vQW5pbWF0aW9ucyBzaG91bGQgYmUgcmVnaXN0ZXJlZCB1c2luZyB0aGlzLmFuaW1hdGlvbnMuYWRkIGluIHRoaXMgbWV0aG9kXHJcbiAgcmVnaXN0ZXJBbmltYXRpb25zKCkge1xyXG5cclxuICB9XHJcbiAgLy9Tb3VuZHMgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgdXNpbmcgdGhpcy5hdWRpby5hZGQgaW4gdGhpcyBtZXRob2QuXHJcbiAgcmVnaXN0ZXJBdWRpbygpIHtcclxuXHJcbiAgfVxyXG4gIGRlZmF1bHRQYXJhbXMoKTp1bmtub3due1xyXG4gICAgcmV0dXJuIGRlZXAodGhpcy5kZWZhdWx0UGFyYW1zKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6b2JqX3N0YXRlLHBhcmFtcyA9IG9iai5kZWZhdWx0X3BhcmFtcykge1xyXG4gICAgXHJcbiAgICB0aGlzLmlkID0gXCJcIiArIGNvdW50ZXI7XHJcbiAgICB0aGlzLmJpbmRzID0gW107XHJcbiAgICBjb3VudGVyKys7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHRoaXMucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgdGhpcy5yZWdpc3RlckF1ZGlvKCk7XHJcbiAgICAvL0NyZWF0ZXMgYSBjb3B5IG9mIHRoZSBwYXNzZWQgaW4gaW5pdGlhbCBzdGF0ZSB0byBhdm9pZCBcclxuICAgIC8vVXBkYXRpbmcgdGhlIHNhdmVkIHN0YXRlIG9mIHRoZSByb29tXHJcbiAgICB0aGlzLnN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgXHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB9XHJcbiAgbG9hZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBsZXQgYSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBhLnNyYyA9IHRoaXMuc3ByaXRlX3VybDtcclxuICAgICAgYS5vbmxvYWQgPSAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNwcml0ZV9zaGVldCA9IGE7XHJcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJBbmltYXRpb25zKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdWRpby5sb2FkKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vV2l0aGluIG5vcm1hbCBvYmplY3RzLCB0aGlzIGp1c3QgcmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBvYmplY3QuXHJcbiAgLy9UaGlzIG1ldGhvZCBpcyBvdmVyd3JpdHRlbiBieSBjb21wb3NpdGUgb2JqZWN0cywgd2hpY2ggcmV0dXJucyBldmVyeSBvYmplY3RcclxuICAvL3RoYXQgdGhlIGNvbXBvc2l0ZSBvYmplY3QgY29udGFpbnMuIFRoaXMgc2ltcGxpZmllcyB0aGUgYmFja2VuZCB3b3JrLCBhcyBlYWNoXHJcbiAgLy9vYmplY3QgcmV0dXJucyBhbiBhcnJheSBvZiBhdGxlYXN0IG9uZSBvYmplY3QuXHJcbiAgY29tYmluZWRPYmplY3RzKCk6b2JqW117XHJcbiAgICByZXR1cm4gW3RoaXNdO1xyXG4gIH1cclxuICBnZXRCb3VuZGluZ0JveCgpOmJvdW5kaW5nX2JveHtcclxuICAgIGxldCBjb2xsX2JveCA9IHRoaXMuZ2V0RnVsbENvbGxpc2lvbkJveCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wX3JpZ2h0OntcclxuICAgICAgICB4OmNvbGxfYm94LnggKyBjb2xsX2JveC53aWR0aC8yLFxyXG4gICAgICAgIHk6Y29sbF9ib3gueSArIGNvbGxfYm94LmhlaWdodC8yXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvdHRvbV9sZWZ0OntcclxuICAgICAgICB4OmNvbGxfYm94LnggLSBjb2xsX2JveC53aWR0aC8yLFxyXG4gICAgICAgIHk6Y29sbF9ib3gueSAtIGNvbGxfYm94LmhlaWdodC8yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9EaXN0YW5jZSBmcm9tIG9uZSBvYmplY3QgdG8gYW5vdGhlci5cclxuICBkaXN0YW5jZSh0YXJnZXQ6b2JqKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gRGlzdGFuY2UodGhpcy5zdGF0ZS5wb3NpdGlvbix0YXJnZXQuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhcHBseUZvcmNlKHZlbDpWZWN0b3Ipe1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS54ICs9IHZlbC54O1xyXG4gICAgdGhpcy5zdGF0ZS52ZWxvY2l0eS55ICs9IHZlbC55O1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHMoYTogb2JqKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmFuZ2xlVG93YXJkc1BvaW50KGEuc3RhdGUucG9zaXRpb24pO1xyXG4gIH1cclxuICBhbmdsZVRvd2FyZHNQb2ludCh0YXJnZXQ6VmVjdG9yKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gOTAgLSBNYXRoLmF0YW4yKCh0YXJnZXQueSAtIHRoaXMuc3RhdGUucG9zaXRpb24ueSksKHRhcmdldC54IC0gdGhpcy5zdGF0ZS5wb3NpdGlvbi54KSkgKiAxODAvTWF0aC5QSTtcclxuICB9XHJcbiAgYmluZENvbnRyb2woa2V5OiBzdHJpbmcsIHg6IGV4ZWNfdHlwZSwgZnVuYzogY29udHJvbF9mdW5jLCBpbnRlcnZhbCA9IDEpIHtcclxuICAgIHRoaXMuYmluZHMucHVzaChCaW5kKGtleSwgZnVuYywgeCwgaW50ZXJ2YWwsIHRoaXMpKTtcclxuICB9XHJcbiAgLy9UaGlzIG1ldGhvZCBpcyB3aGVyZSBjb250cm9scyBhbmQga2V5YmluZHMgc2hvdWxkXHJcbiAgLy9iZSBkZWZpbmVkIHVzaW5nIGJpbmRDb250cm9sXHJcbiAgcmVnaXN0ZXJDb250cm9scygpe1xyXG5cclxuICB9XHJcbiAgc3RhdGVmKHRpbWU6bnVtYmVyKXtcclxuXHJcbiAgfVxyXG4gIGRlbGV0ZSgpIHtcclxuICAgIGZvciAobGV0IGEgb2YgdGhpcy5iaW5kcykge1xyXG4gICAgICBVbmJpbmQoYSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmRlbGV0ZUl0ZW0odGhpcy5pZCk7XHJcbiAgfVxyXG4gIFVuYmluZEFsbCgpe1xyXG4gICAgZm9yIChsZXQgYSBvZiB0aGlzLmJpbmRzKSB7XHJcbiAgICAgIFVuYmluZChhKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9SZXR1cm5zIHRoZSBjb2xsaXNpb24gYm94IG9mIHRoZSBvYmplY3RcclxuICAvL0RvZXMgbm90IGhhdmUgdG8gY29ycmVzcG9uZCB0byB0aGUgb2JqZWN0J3Mgc3ByaXRlJ3Mgc2l6ZSBcclxuICAvL0EgY29tcG9zaXRlIG9iamVjdCBpbnN0ZWFkIHJldHVybnMgdGhlIGJvdW5kaW5nIGJveCB0aGF0IFxyXG4gIC8vY29udGFpbnMgZXZlcnkgb25lIG9mIGl0cyBjb250YWluZWQgb2JqZWN0c1xyXG4gIGdldEZ1bGxDb2xsaXNpb25Cb3goKTpjb2xsaXNpb25fYm94e1xyXG4gICAgLy9JZiBhIGRldmVsb3BlciBkZWZpbmVkIGhpdGJveCBleGlzdHMsIHVzZSB0aGF0LCBvdGhlcndpc2VcclxuICAgIC8vZ2VuZXJhdGUgaXQgdXNpbmcgdGhlIHNwcml0ZSB3aWR0aCAvIGhlaWdodFxyXG4gICAgaWYodGhpcy5oaXRib3gpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOnRoaXMuaGl0Ym94LndpZHRoICogdGhpcy5zdGF0ZS5zY2FsaW5nLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDp0aGlzLmhpdGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGg6dGhpcy53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6dGhpcy5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9UaGlzIGlzIGFub3RoZXIgbWV0aG9kcywgc2ltaWxhciB0byBnZXRDb21iaW5lZFxyXG4gIC8vSnVzdCByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG9iamVjdCdzIGNvbGxpc2lvbiBib3hcclxuICAvL092ZXJ3cml0dGVuIGluIGNvbXBvc2l0ZSBvYmplY3RzIHRvIHJldHVybiBldmVyeSBvYmplY3QncyBjb2xsaXNpb24gYm94XHJcbiAgLy93aXRoaW4gdGhlIGNvbXBvc2l0ZSBvYmVjdC5cclxuICBnZXRBbGxDb2xsaXNpb25Cb3hlcygpOmNvbGxpc2lvbl9ib3hbXXtcclxuICAgIHJldHVybiBbdGhpcy5nZXRGdWxsQ29sbGlzaW9uQm94KCldXHJcbiAgfVxyXG4gIC8vQ2hlY2tzIHRvIHNlZSBpZiBhbiBvYmplY3QgYWN0dWFsbHkgY29sbGlkZXMgd2l0aCB0aGUgcHJvdmlkZWQgYm94LlxyXG4gIC8vQSBib3ggcmVwcmVzZW50cyBhbiBhcmVhIHdpdGhpbiB0aGUgZ2FtZSBzcGFjZVxyXG4gIC8vQ2hlY2tpbmcgZm9yIGNvbGxpc2lvbnMgaXMgdHJpdmlhbCBjdXJyZW50bHksIGFzIGFsbCBoaXRib3hlcyBhcmUgYXhpcyBhbGlnbmVkXHJcbiAgLy9CdXQgaW1wbGVtZW50aW5nIGEgbW9yZSBjb21wbGljYXRlZCBwaHlzaWNzIGVuZ2luZSB3b3VsZCBtYWtlIHRoaXMgbWV0aG9kJ3MgaW1wbC5cclxuICAvL3NpZ25pZmljYXRseSBtb3JlIGNvbXBsZXguXHJcbiAgY29sbGlkZXNXaXRoQm94KG90aGVyX29iamVjdDogY29sbGlzaW9uX2JveCk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSBmYWxzZSwgY29sbGlkZXNfdmVydGljYWxseSA9IGZhbHNlO1xyXG4gICAgbGV0IGhib3ggPSB0aGlzLmhpdGJveDtcclxuICAgIGlmKCF0aGlzLmhpdGJveCl7XHJcbiAgICAgIGhib3ggPSB7XHJcbiAgICAgICAgeF9vZmZzZXQ6MCxcclxuICAgICAgICB5X29mZnNldDowLFxyXG4gICAgICAgIHdpZHRoOnRoaXMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OnRoaXMuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBvYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAodGhpcy5zdGF0ZS5wb3NpdGlvbi54ICsgaGJveC54X29mZnNldCAtIGhib3gud2lkdGggKiB0aGlzLnN0YXRlLnNjYWxpbmcud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnggKyBoYm94Lnhfb2Zmc2V0ICsgaGJveC53aWR0aCAqIHRoaXMuc3RhdGUuc2NhbGluZy53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6ICh0aGlzLnN0YXRlLnBvc2l0aW9uLnkgKyBoYm94Lnlfb2Zmc2V0ICsgaGJveC5oZWlnaHQgKiB0aGlzLnN0YXRlLnNjYWxpbmcuaGVpZ2h0IC8gMiksXHJcbiAgICAgIGJvdHRvbTogKHRoaXMuc3RhdGUucG9zaXRpb24ueSArIGhib3gueV9vZmZzZXQgLSBoYm94LmhlaWdodCAqIHRoaXMuc3RhdGUuc2NhbGluZy5oZWlnaHQgLyAyKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlcl9vYmplY3RfYm91bmRzID0ge1xyXG4gICAgICBsZWZ0OiAob3RoZXJfb2JqZWN0LnggLSBvdGhlcl9vYmplY3Qud2lkdGggLyAyKSxcclxuICAgICAgcmlnaHQ6IChvdGhlcl9vYmplY3QueCArIG90aGVyX29iamVjdC53aWR0aCAvIDIpLFxyXG4gICAgICB0b3A6IChvdGhlcl9vYmplY3QueSArIG90aGVyX29iamVjdC5oZWlnaHQgLyAyKSxcclxuICAgICAgYm90dG9tOiAob3RoZXJfb2JqZWN0LnkgLSBvdGhlcl9vYmplY3QuaGVpZ2h0IC8gMilcclxuICAgIH1cclxuXHJcbiAgICAvL1dlIGNhbiBjb21wYXJlIHRoZSBzaWRlcyBvZiB0aGUgYm94ZXMgdG8gc2VlIGlmIHRoZXkgb3ZlcmxhcFxyXG4gICAgLy9XZSBjaGVjayBvbmNlIGZvciBob2l6b250YWwgb3ZlcmxhcCwgdGhlbiB2ZXJ0aWNhbC5cclxuICAgIGlmICgob2JqZWN0X2JvdW5kcy5sZWZ0ID49IG90aGVyX29iamVjdF9ib3VuZHMubGVmdCAmJiBvYmplY3RfYm91bmRzLmxlZnQgPCBvdGhlcl9vYmplY3RfYm91bmRzLnJpZ2h0KSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5sZWZ0ID4gb2JqZWN0X2JvdW5kcy5sZWZ0ICYmIG90aGVyX29iamVjdF9ib3VuZHMubGVmdCA8IG9iamVjdF9ib3VuZHMucmlnaHQpKSB7XHJcbiAgICAgIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChvYmplY3RfYm91bmRzLmJvdHRvbSA+PSBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvYmplY3RfYm91bmRzLmJvdHRvbSA8IG90aGVyX29iamVjdF9ib3VuZHMudG9wKSB8fCAob3RoZXJfb2JqZWN0X2JvdW5kcy5ib3R0b20gPiBvYmplY3RfYm91bmRzLmJvdHRvbSAmJiBvdGhlcl9vYmplY3RfYm91bmRzLmJvdHRvbSA8IG9iamVjdF9ib3VuZHMudG9wKSl7XHJcbiAgICAgIGNvbGxpZGVzX3ZlcnRpY2FsbHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxpZGVzX2hvcnJpem9udGFsbHkgJiYgY29sbGlkZXNfdmVydGljYWxseTtcclxuICB9XHJcbiAgLy9UaGUgcGFydGljbGUgbXVzdCBiZSByZWdpc3RlcmVkIGluIHRoZSByb29tJ3MgcmVnaXN0ZXJQYXJ0aWNsZXMgbWV0aG9kIFxyXG4gIC8vVGhlIG5hbWUgcGFyYW1ldGVyIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBrZXkgb2YgYSBwYXJ0aWNsZVxyXG4gIGVtaXRQYXJ0aWNsZShuYW1lOnN0cmluZyxvZmZzZXQ6VmVjdG9yLGxpZmV0aW1lOm51bWJlcixyYW5nZTpudW1iZXIpe1xyXG4gICAgbGV0IHJvb20gPSB0aGlzLmdhbWUuZ2V0Um9vbSgpO1xyXG4gICAgbGV0IHN0ID0gdGhpcy5zdGF0ZSBhcyB1bmtub3duIGFzIG9ial9zdGF0ZTtcclxuICAgIGxldCBmaW5hbF9wb3NpdGlvbjpWZWN0b3IgPSB7XHJcbiAgICAgIHg6c3QucG9zaXRpb24ueCArIG9mZnNldC54LFxyXG4gICAgICB5OnN0LnBvc2l0aW9uLnkgKyBvZmZzZXQueVxyXG4gICAgfVxyXG4gICAgcm9vbS5lbWl0UGFydGljbGUobmFtZSxmaW5hbF9wb3NpdGlvbixsaWZldGltZSxyYW5nZSlcclxuICB9XHJcbiAgLy9JbnRlcm5hbCBtZXRob2QgdGhhdCBrZWVwcyBjYWxjdWxhdGVzIHRoZSBkZWx0YV90aW1lXHJcbiAgLy9BbHNvIGNvbnZlcnRzIGluZGl2aWR1YWwgc3ByaXRlcyBpbnRvIGFycmF5cyBvZiBvbmUgc3ByaXRlLlxyXG4gIHJlbmRlclRyYWNrKHRpbWU6bnVtYmVyKTogcG9zaXRpb25lZF9zcHJpdGVbXSB7XHJcbiAgICBsZXQgcmVuZGVyZWQgPSB0aGlzLnJlbmRlcmYodGltZSAtIHRoaXMubGFzdF9yZW5kZXIpO1xyXG4gICAgbGV0IGZpbmFsOnBvc2l0aW9uZWRfc3ByaXRlW107XHJcbiAgICB0aGlzLmxhc3RfcmVuZGVyID0gdGltZTtcclxuICAgIGlmKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKVxyXG4gICAgICBmaW5hbCA9IHJlbmRlcmVkXHJcbiAgICBlbHNle1xyXG4gICAgICBmaW5hbCA9IFtyZW5kZXJlZF1cclxuICAgIH1cclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbiAgLy9Nb3N0IG9iamVjdHMgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRpbmcgdGhlIHJlbmRlcmYgbWV0aG9kXHJcbiAgLy9SZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSBzcHJpdGUgZm9yIHRoZSBvYmplY3RcclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHBvc2l0aW9uZWRfc3ByaXRlW10gfCBwb3NpdGlvbmVkX3Nwcml0ZXtcclxuICAgIC8vSWYgdGhlIG9iamVjdCBkb2Vzbid0IGhhdmUgcmVnaXN0ZXJlZCBhbmltYXRpb25zLCBvciBpc24ndCBwbGF5aW5nIG9uZVxyXG4gICAgLy9XZSBoYXZlIHRvIGNyZWF0ZSB0aGUgc3ByaXRlIGhlcmUuXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25zLmFuaW1hdGlvbnMpLmxlbmd0aCA9PSAwIHx8ICF0aGlzLmFuaW1hdGlvbnMuY3VycmVudCkge1xyXG4gICAgICBpZighdGhpcy5zcHJpdGVfc2hlZXQgfHwgIXRoaXMuaGVpZ2h0IHx8ICF0aGlzLndpZHRoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc3ByaXRlOnVuZGVmaW5lZCxcclxuICAgICAgICAgIHg6dGhpcy5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgeTp0aGlzLnN0YXRlLnBvc2l0aW9uLnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNwcml0ZV9oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgbGV0IHNwcml0ZV93aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIC8vVGVjaG5pY2FsbHkgd2UgZG9uJ3QgbmVlZCB0byBkZWZpbmUgYW4gb2JqZWN0IGhlaWdodCBhbmQgd2lkdGhcclxuICAgICAgLy9JZiB0aGUgc3ByaXRlX3VybCBwb2ludHMgdG8gYSBzaW5nbGUgc3RhdGljIHNwcml0ZSwgYXMgd2UgY2FuIGp1c3QgcHVsbFxyXG4gICAgICAvL3RoZSBkaW1lbnNpb25zIGZyb20gdGhlIGltYWdlXHJcbiAgICAgIGlmICh0aGlzLmhlaWdodCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0ID0gdGhpcy5zcHJpdGVfc2hlZXQuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLndpZHRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHNwcml0ZV93aWR0aCA9IHRoaXMuc3ByaXRlX3NoZWV0LndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuc3ByaXRlX3NoZWV0LFxyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIHNwcml0ZV93aWR0aDogc3ByaXRlX3dpZHRoLFxyXG4gICAgICAgICAgc3ByaXRlX2hlaWdodDogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICAgIG9wYWNpdHk6dGhpcy5vcGFjaXR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGU6dGhpcy5hbmltYXRpb25zLnJlbmRlcmYodGltZSksXHJcbiAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGNvbXBvc2l0ZV9zdGF0aWN7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgb2JqOm9ialxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9zaXRlX29iaiBleHRlbmRzIG9iantcclxuICBvYmplY3RzOm9ialtdID0gW107XHJcbiAgcmVuZGVyID0gZmFsc2U7XHJcbiAgcmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG4gIGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gIHN0YXRpY3M6Y29tcG9zaXRlX3N0YXRpY1tdID0gW107XHJcbiAgY29uc3RydWN0b3IocG9zOm9ial9zdGF0ZSl7XHJcbiAgICBzdXBlcihwb3MpO1xyXG4gIH1cclxuICBsb2FkKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oIGFzeW5jIChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWy4uLnRoaXMub2JqZWN0cy5tYXAoKGEpPT5hLmxvYWQoKSksLi4udGhpcy5zdGF0aWNzLm1hcChhPT5hLm9iai5sb2FkKCkpXSk7XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbWJpbmVkT2JqZWN0cygpOm9ialtde1xyXG4gICAgbGV0IGNvbWJpbmVkID0gWy4uLnRoaXMub2JqZWN0cywuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKV07XHJcbiAgICBjb21iaW5lZC5mb3JFYWNoKGE9PmEucGFyZW50ID0gdGhpcyk7XHJcbiAgICByZXR1cm4gWy4uLmNvbWJpbmVkLHRoaXNdO1xyXG4gIH1cclxuICBnZXRJdGVtc0J5VGFnKHRhZzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMuY29tYmluZWRPYmplY3RzKCkuZmlsdGVyKChhKT0+YS50YWdzLmluZGV4T2YodGFnKSA+IC0xKTtcclxuICB9XHJcbiAgYWRkSXRlbShhOm9iaixsaXN0PXRoaXMub2JqZWN0cyl7XHJcbiAgICBsaXN0LnB1c2goYSk7XHJcbiAgICBhLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmdhbWUuZ2V0Um9vbSgpLmFkZEl0ZW0oYSk7XHJcbiAgfVxyXG4gIGdldEFsbENvbGxpc2lvbkJveGVzKCk6Y29sbGlzaW9uX2JveFtde1xyXG4gICAgbGV0IGFycjpjb2xsaXNpb25fYm94W10gPSBbXTtcclxuICAgIGZvcihsZXQgb2JqIG9mIFsuLi50aGlzLnN0YXRpY3MubWFwKGE9PmEub2JqKSwuLi50aGlzLm9iamVjdHNdKXtcclxuICAgICAgbGV0IGNyZWF0ZWRfYm94ID0gb2JqLmdldEFsbENvbGxpc2lvbkJveGVzKCk7XHJcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY3JlYXRlZF9ib3gpKXtcclxuICAgICAgICBhcnIucHVzaCguLi5jcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBhcnIucHVzaChjcmVhdGVkX2JveCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGRlbGV0ZSgpe1xyXG4gICAgZm9yKGxldCBhIG9mIHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGEuZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGEgb2YgdGhpcy5zdGF0aWNzKXtcclxuICAgICAgYS5vYmouZGVsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBzdXBlci5kZWxldGUoKTtcclxuICB9XHJcbiAgY29sbGlkZXNXaXRoQm94KGE6IGNvbGxpc2lvbl9ib3gpOmJvb2xlYW57XHJcbiAgICBmb3IobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpe1xyXG4gICAgICBpZihvYmouY29sbGlkZXNXaXRoQm94KGEpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMuc3RhdGljcyl7XHJcbiAgICAgIGlmKG8ub2JqLmNvbGxpZGVzV2l0aEJveChhKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBzdGF0aWNfb2JqIHtcclxuICBzcHJpdGVfdXJsID0gXCJcIjtcclxuICBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBncmF2aXR5X29iaiBleHRlbmRzIG9iantcclxuICBncmF2aXR5ID0gdHJ1ZVxyXG59IiwiaW1wb3J0IHsgc3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IEdldFZpZXdwb3J0RGltZW5zaW9ucyB9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIG9ial9zdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFRleHRfTm9kZSwgVGV4dFNldHRpbmcsSFVELFRleHQgfSBmcm9tIFwiLi9odWRcIjtcclxuaW1wb3J0IHtwb3NpdGlvbmVkX3Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlXCJcclxuXHJcbmludGVyZmFjZSBjYW1lcmFfc3RhdGUge1xyXG4gIHNjYWxpbmc6IG51bWJlcixcclxuICBwb3NpdGlvbjoge1xyXG4gICAgeDogbnVtYmVyLFxyXG4gICAgeTogbnVtYmVyXHJcbiAgfVxyXG4gIGRpbWVuc2lvbnM6IHtcclxuICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICBoZWlnaHQ6IG51bWJlclxyXG4gIH0sXHJcbiAgdmlld3BvcnQ6IHZpZXdwb3J0LFxyXG4gIGRlYnVnOmJvb2xlYW4sXHJcbiAgaHVkOkhVRCAgXHJcbn1cclxuXHJcbmludGVyZmFjZSB2aWV3cG9ydCB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBjYW1lcmFfcHJvcGVydGllcyB7XHJcbiAgeDpudW1iZXIsXHJcbiAgeTpudW1iZXIsXHJcbiAgZGltZW5zaW9uczp7XHJcbiAgICBoZWlnaHQ6bnVtYmVyLFxyXG4gICAgd2lkdGg6bnVtYmVyXHJcbiAgfVxyXG4gIHNjYWxpbmc6bnVtYmVyLFxyXG4gIGRlYnVnOmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgc3RhdGU6IGNhbWVyYV9zdGF0ZTtcclxuICBodWQ6IEhVRDtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczpjYW1lcmFfcHJvcGVydGllcywgdjogdmlld3BvcnQsIGh1ZDpIVUQgPSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNjYWxpbmc6cHJvcHMuc2NhbGluZyxcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiBwcm9wcy54LFxyXG4gICAgICAgIHk6IHByb3BzLnlcclxuICAgICAgfSxcclxuICAgICAgZGltZW5zaW9uczogcHJvcHMuZGltZW5zaW9ucyxcclxuICAgICAgdmlld3BvcnQ6IHtcclxuICAgICAgICB4OnYueCxcclxuICAgICAgICB5OnYueSAsXHJcbiAgICAgICAgd2lkdGg6IHYud2lkdGggKiBwcm9wcy5kaW1lbnNpb25zLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdi5oZWlnaHQgKiBwcm9wcy5kaW1lbnNpb25zLmhlaWdodFxyXG4gICAgICB9LFxyXG4gICAgICBkZWJ1Zzpwcm9wcy5kZWJ1ZyxcclxuICAgICAgaHVkXHJcbiAgICB9XHJcbiAgICB0aGlzLmh1ZCA9IGh1ZDtcclxuICB9XHJcbiAgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggPSB4O1xyXG4gIH1cclxuICBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSA9IHlcclxuICB9XHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5wb3NpdGlvbi54O1xyXG4gIH1cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByZW5kZXJfZnVuYyB7XHJcbiAgKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsaW5nOiBudW1iZXIpOiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSByZWN0YW5nbGUge1xyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHNwcml0ZV9hcmdzIHtcclxuICBzcHJpdGU6IHNwcml0ZSxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgc2NhbGU6ZGltZW5zaW9ucyxcclxuICBzY2FsZV90eXBlOnNjYWxlX3R5cGVcclxufVxyXG5cclxuaW50ZXJmYWNlIHJlbmRlcmVyX2FyZ3Mge1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICBjYW1lcmE6IENhbWVyYVxyXG59XHJcblxyXG5leHBvcnQgZW51bSByZW5kZXJfdHlwZSB7XHJcbiAgdGV4dCxcclxuICBzcHJpdGUsXHJcbiAgcmVjdCxcclxuICBzdHJva2VfcmVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBzY2FsZV90eXBle1xyXG4gIGdyb3csXHJcbiAgcmVwZWF0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodWRfdGV4dF9yZW5kZXJlciA9IChyOiByZW5kZXJlcl9hcmdzLCBzOiBUZXh0U2V0dGluZykgPT4ge1xyXG4gIGxldCB2aGVpZ2h0ID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkuaGVpZ2h0O1xyXG4gIHIuY29udGV4dC5mb250ID0gYCR7cy5mb250LnNpemV9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnbjtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCBzLngsIHZoZWlnaHQgLSBzLnksIHMuZm9udC5tYXhfd2lkdGgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHIuY29udGV4dC5maWxsVGV4dChzLmZvbnQudGV4dCwgcy54LCB2aGVpZ2h0IC0gcy55KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0X3JlbmRlcmVyID0gKHI6cmVuZGVyZXJfYXJncyxzOlRleHRTZXR0aW5nKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gci5jb250ZXh0Lm1lYXN1cmVUZXh0KHMuZm9udC50ZXh0KS53aWR0aCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IGhlaWdodCA9IHMuZm9udC5zaXplICogMS4yICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgocy54IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL3IuY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMikgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgZmluYWxfeSA9ICgodmhlaWdodCAtIHMueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0LzIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKSk7XHJcbiAgci5jb250ZXh0LmZvbnQgPSBgJHtzLmZvbnQuc2l6ZSAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmd9cHggJHtzLmZvbnQuZm9udH1gO1xyXG4gIHIuY29udGV4dC5maWxsU3R5bGUgPSBzLmZvbnQuY29sb3I7XHJcbiAgci5jb250ZXh0LnRleHRBbGlnbiA9IHMuZm9udC5hbGlnblxyXG4gIHIuY29udGV4dC5zYXZlKCk7XHJcbiAgci5jb250ZXh0LnRyYW5zbGF0ZShmaW5hbF94LCBmaW5hbF95KTtcclxuICBpZiAocy5mb250Lm1heF93aWR0aCkge1xyXG4gICAgci5jb250ZXh0LmZpbGxUZXh0KHMuZm9udC50ZXh0LCAwLCAwLCBzLmZvbnQubWF4X3dpZHRoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByLmNvbnRleHQuZmlsbFRleHQocy5mb250LnRleHQsIDAsIDApO1xyXG4gIH1cclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ByaXRlX3JlbmRlcmVyID0gKHI6IHJlbmRlcmVyX2FyZ3MsIHM6IHNwcml0ZV9hcmdzKSA9PiB7XHJcbiAgbGV0IGNhbWVyYSA9IHIuY2FtZXJhO1xyXG4gIGxldCB2aGVpZ2h0ID0gci5jYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKChzLnggLSBjYW1lcmEuc3RhdGUucG9zaXRpb24ueCArIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoICogKDEvci5jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogcy5zY2FsZS53aWR0aCAvIDIpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSBzLnkgLSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgKiAoMS9yLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0ICogcy5zY2FsZS5oZWlnaHQgLyAyICsgY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnkpICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHMuc3ByaXRlLnNwcml0ZV9oZWlnaHQgKiByLmNhbWVyYS5zdGF0ZS5zY2FsaW5nICogcy5zY2FsZS5oZWlnaHQ7XHJcbiAgbGV0IHdpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZyAqIHMuc2NhbGUud2lkdGg7XHJcbiAgci5jb250ZXh0LnNhdmUoKTtcclxuICByLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBzLnNwcml0ZS5vcGFjaXR5O1xyXG4gIHIuY29udGV4dC50cmFuc2xhdGUoZmluYWxfeCAgKyAod2lkdGgpIC8gMiwgZmluYWxfeSArIGhlaWdodCAvIDIpXHJcbiAgbGV0IHJhZGlhbnMgPSBzLnJvdGF0aW9uICogKE1hdGguUEkgLyAxODApO1xyXG4gIHIuY29udGV4dC5yb3RhdGUocmFkaWFucyk7XHJcbiAgaWYocy5zY2FsZV90eXBlID09IHNjYWxlX3R5cGUuZ3Jvdyl7XHJcbiAgICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICBzLnNwcml0ZS5zcHJpdGVfc2hlZXQsXHJcbiAgICAgIHMuc3ByaXRlLmxlZnQsXHJcbiAgICAgIHMuc3ByaXRlLnRvcCxcclxuICAgICAgcy5zcHJpdGUuc3ByaXRlX3dpZHRoLFxyXG4gICAgICBzLnNwcml0ZS5zcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAtKHdpZHRoICkgLyAyLFxyXG4gICAgICAtaGVpZ2h0IC8gMixcclxuICAgICAgd2lkdGgsXHJcbiAgICAgIGhlaWdodFxyXG4gICAgKVxyXG4gIH1cclxuICBlbHNlIGlmKHMuc2NhbGVfdHlwZSA9PSBzY2FsZV90eXBlLnJlcGVhdCl7XHJcbiAgICBsZXQgb25lX3dpZHRoID0gcy5zcHJpdGUuc3ByaXRlX3dpZHRoICogci5jYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICAgIGxldCBvbmVfaGVpZ2h0ID0gcy5zcHJpdGUuc3ByaXRlX2hlaWdodCAqIHIuY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgICBsZXQgdG90YWxfaG9yX3Nwcml0ZXMgPSB3aWR0aC9vbmVfd2lkdGhcclxuICAgIGxldCB0b3RhbF92ZXJfc3ByaXRlcyA9IGhlaWdodC9vbmVfaGVpZ2h0O1xyXG4gICBmb3IobGV0IGEgPSAwO2EgPCB0b3RhbF9ob3Jfc3ByaXRlczthICs9IDEpe1xyXG4gICAgIGZvcihsZXQgYiA9IDA7YiA8IHRvdGFsX3Zlcl9zcHJpdGVzO2IgKz0gMSl7XHJcbiAgICAgICBsZXQgbmV3X3dpZHRoID0gb25lX3dpZHRoO1xyXG4gICAgICAgbGV0IG5ld19oZWlnaHQgPSBvbmVfaGVpZ2h0O1xyXG4gICAgICAgaWYoKGEgKyAxKSAqIG9uZV93aWR0aCAtIHdpZHRoID4gMCl7XHJcbiAgICAgICAgIG5ld193aWR0aCA9IHdpZHRoICUgb25lX3dpZHRoO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYoKGIgKyAxKSAqIG9uZV9oZWlnaHQgLSBoZWlnaHQgPiAwKXtcclxuICAgICAgICAgbmV3X2hlaWdodCA9IGhlaWdodCAlIG9uZV9oZWlnaHQ7XHJcbiAgICAgICB9XHJcbiAgICAgICByLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHMuc3ByaXRlLnNwcml0ZV9zaGVldCxcclxuICAgICAgICBzLnNwcml0ZS5sZWZ0LFxyXG4gICAgICAgIHMuc3ByaXRlLnRvcCxcclxuICAgICAgICBuZXdfd2lkdGggLyAoci5jYW1lcmEuc3RhdGUuc2NhbGluZyksXHJcbiAgICAgICAgbmV3X2hlaWdodCAvIChyLmNhbWVyYS5zdGF0ZS5zY2FsaW5nKSxcclxuICAgICAgICAtd2lkdGgvMiArIGEgKiBvbmVfd2lkdGgsXHJcbiAgICAgICAgLWhlaWdodC8yICsgYiAqIG9uZV9oZWlnaHQsXHJcbiAgICAgICAgbmV3X3dpZHRoLFxyXG4gICAgICAgIG5ld19oZWlnaHRcclxuICAgICAgIClcclxuICAgICB9XHJcblxyXG4gICB9IFxyXG4gIH1cclxuICBcclxuICBcclxuICByLmNvbnRleHQucmVzdG9yZSgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVjdDogcmVjdGFuZ2xlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZywgbGluZVdpZHRoOm51bWJlciwgY2FtZXJhOiBDYW1lcmEpID0+IHtcclxuICBsZXQgdmhlaWdodCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAvIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGxldCBmaW5hbF94ID0gKCh4IC0gY2FtZXJhLnN0YXRlLnBvc2l0aW9uLnggKyBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgLSByZWN0LndpZHRoIC8gMikgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGZpbmFsX3kgPSAoKHZoZWlnaHQgLSB5IC0gcmVjdC5oZWlnaHQgLyAyIC0gY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEvY2FtZXJhLnN0YXRlLnNjYWxpbmcpIC8gMiArIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55KSAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nKTtcclxuICBsZXQgaGVpZ2h0ID0gcmVjdC5oZWlnaHQgKiBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgd2lkdGggPSByZWN0LndpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgY29udGV4dC5zdHJva2VSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVjdF9yZW5kZXJlciA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlY3Q6IHJlY3RhbmdsZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGxpbmVXaWR0aDpudW1iZXIsIGNhbWVyYTogQ2FtZXJhKSA9PiB7XHJcbiAgbGV0IHZoZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQgLyBjYW1lcmEuc3RhdGUuc2NhbGluZztcclxuICBsZXQgZmluYWxfeCA9ICgoeCAtIGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54ICsgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGggKiAoMS9jYW1lcmEuc3RhdGUuc2NhbGluZykgLyAyIC0gcmVjdC53aWR0aCAvIDIpICogY2FtZXJhLnN0YXRlLnNjYWxpbmcpO1xyXG4gIGxldCBmaW5hbF95ID0gKCh2aGVpZ2h0IC0geSAtIHJlY3QuaGVpZ2h0IC8gMiAtIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCAqICgxL2NhbWVyYS5zdGF0ZS5zY2FsaW5nKSAvIDIgKyBjYW1lcmEuc3RhdGUucG9zaXRpb24ueSkgKiBjYW1lcmEuc3RhdGUuc2NhbGluZyk7XHJcbiAgbGV0IGhlaWdodCA9IHJlY3QuaGVpZ2h0ICogY2FtZXJhLnN0YXRlLnNjYWxpbmc7XHJcbiAgbGV0IHdpZHRoID0gcmVjdC53aWR0aCAqIGNhbWVyYS5zdGF0ZS5zY2FsaW5nO1xyXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjb250ZXh0LmZpbGxSZWN0KGZpbmFsX3gsIGZpbmFsX3ksIHdpZHRoLCBoZWlnaHQpO1xyXG59IiwiaW1wb3J0IHsgZ3Jhdml0eV9vYmosb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlLCBzcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgb2JqX3N0YXRlLCBWZWN0b3IgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyB2ZWxvY2l0eUNvbGxpc2lvbkNoZWNrLGNoZWNrX2NvbGxpc2lvbnMsY29sbGlzaW9uX2JveCxjaGVja19hbGxfY29sbGlzaW9ucyxjaGVja19hbGxfb2JqZWN0c30gZnJvbSBcIi4vY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVuZGVyX2NvbGxpc2lvbl9ib3gsREVCVUd9IGZyb20gXCIuLi92YW5cIjtcclxuaW1wb3J0IHtCaW5kLGNvbnRyb2xfZnVuYywgZXhlY190eXBlfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge0hVRCxUZXh0LCBUZXh0X05vZGV9IGZyb20gXCIuL2h1ZFwiO1xyXG5pbXBvcnQge2F1ZGlvfSBmcm9tIFwiLi9hdWRpb1wiXHJcbmltcG9ydCB7Z2FtZX0gZnJvbSBcIi4uL3ZhblwiO1xyXG5pbXBvcnQge2RlYnVnX3VwZGF0ZV9vYmpfbGlzdH0gZnJvbSBcIi4uL2xpYi9kZWJ1Z1wiO1xyXG5pbXBvcnQge3ByZWZhYnN9IGZyb20gXCIuLi9nYW1lL29iamVjdHMvcHJlZmFic1wiO1xyXG5cclxuaW50ZXJmYWNlIHBvc2l0aW9ue1xyXG4gIHg6bnVtYmVyLFxyXG4gIHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUdyYXZpdHkob2I6Z3Jhdml0eV9vYmosZ3Jhdl9jb25zdDpudW1iZXIsIGdyYXZfbWF4Om51bWJlcil7XHJcbiAgaWYob2IuZ3Jhdml0eSAmJiBvYi5zdGF0ZS52ZWxvY2l0eS55ID4gZ3Jhdl9tYXgpe1xyXG4gICAgb2Iuc3RhdGUudmVsb2NpdHkueSArPSBncmF2X2NvbnN0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBwYXJ0aWNsZV9lbnRyeXtcclxuICBzcHJpdGU6c3RyaW5nLFxyXG4gIGhlaWdodDpudW1iZXIsXHJcbiAgd2lkdGg6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBwYXJ0aWNsZXN7XHJcbiAgW2luZGV4OnN0cmluZ106cGFydGljbGVfZW50cnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSByb29tX2k8VD57XHJcbiAgYmFja2dyb3VuZF91cmw6c3RyaW5nLFxyXG4gIG9iamVjdHM6b2JqW11cclxuICBzdGF0ZTpUXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugb2JqZWN0X3N0YXRlX2NvbmZpZyB7XHJcbiAgdHlwZTpzdHJpbmcsXHJcbiAgc3RhdGU6b2JqX3N0YXRlLFxyXG4gIHBhcmFtZXRlcnM/OiB1bmtub3duXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc3RhdGVfY29uZmlne1xyXG4gIG9iamVjdHM6b2JqZWN0X3N0YXRlX2NvbmZpZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyByb29tPFQ+e1xyXG4gIC8vVXJsIHRvIGFuIGltYWdlIHRvIGJlIHVzZWQgZm9yIHRoZSByb29tIGJhY2tncm91bmRcclxuICBiYWNrZ3JvdW5kX3VybDogc3RyaW5nO1xyXG4gIGJhY2tncm91bmQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgb2JqZWN0czogb2JqW10gPSBbXTtcclxuICAvL1RoaXMgb2JqZWN0IGNvbnRhaW5zIHBhcnRpY2xlIGRlZmluaXRpb25zXHJcbiAgcGFydGljbGVzOnBhcnRpY2xlcyA9IHt9O1xyXG4gIC8vVGhpcyBhcnJheSBpcyB3aGF0IGFjdHVhbGx5IGNvbnRhaW5zIHRoZSBwYXJ0aWNsZXNcclxuICAvL3RoYXQgZXhpc3RzIHdpdGhpbiB0aGUgcm9vbS5cclxuICBwYXJ0aWNsZXNfYXJyOiBvYmpbXSA9IFtdO1xyXG4gIHN0YXRlOiBUO1xyXG4gIGJpbmRzOm51bWJlcltdID0gW107XHJcbiAgZ2FtZTpnYW1lPHVua25vd24+O1xyXG4gIGh1ZDpIVUQ7XHJcbiAgYXVkaW8gPSBuZXcgYXVkaW8oKTtcclxuICAvL1RoZXNlIHRleHQgbm9kZXMgZXhpc3RzIGluIHRoZSBhY3R1YWwgcm9vbSBzcGFjZSwgcmF0aGVyIHRoYW5cclxuICAvL29uIHRoZSBodWQgbGF5ZXIuXHJcbiAgcmVuZGVyOmJvb2xlYW4gPSB0cnVlO1xyXG4gIHRleHRfbm9kZXM6VGV4dFtdID0gW107XHJcbiAgY29uc3RydWN0b3IoZ2FtZTpnYW1lPHVua25vd24+LGNvbmZpZzpzdGF0ZV9jb25maWcpe1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIGZvcihsZXQgYyBvZiBjb25maWcub2JqZWN0cyl7XHJcbiAgICAgIC8vVGhpcyBoYW5kbGVzIGxvYWRpbmcgb2JqZWN0cyBmcm9tIHRoZSBzYXZlZCBqc29uIGZpbGUgYXNzb2NpYXRlZCB3aXRoIGVhY2ggcm9vbS5cclxuICAgICAgdGhpcy5hZGRJdGVtU3RhdGVDb25maWcoYylcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0U3RhdGVDb25maWcoKXtcclxuICAgIGxldCBjb25maWc6c3RhdGVfY29uZmlnID0ge29iamVjdHM6W119O1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub2JqZWN0cy5maWx0ZXIoKG9iaik9Pm9iai5zYXZlX3RvX2ZpbGUpKXtcclxuICAgICAgICBpZighby5wYXJlbnQpe1xyXG4gICAgICAgIGNvbmZpZy5vYmplY3RzLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTpvLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICBzdGF0ZTpvLnN0YXRlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyczpvLnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IGEgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgbGV0IHRvX2F3YWl0ID0gdGhpcy5vYmplY3RzLm1hcCgoYSkgPT4gYS5sb2FkKCkpO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbCh0b19hd2FpdCk7XHJcbiAgICAgIGEuc3JjID0gdGhpcy5iYWNrZ3JvdW5kX3VybDtcclxuICAgICAgYS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvYWRpbmcgdXJsOlwiICsgdGhpcy5iYWNrZ3JvdW5kX3VybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGEub25sb2FkID0gKGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIF90aGlzLmJhY2tncm91bmQgPSBhO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYXVkaW8ubG9hZCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtU3RhdGVDb25maWcoY29uZmlnOm9iamVjdF9zdGF0ZV9jb25maWcpe1xyXG4gICAgaWYocHJlZmFic1tjb25maWcudHlwZV0pe1xyXG4gICAgICBsZXQgbmV3X29iaiA9IDxvYmo+KG5ldyBwcmVmYWJzW2NvbmZpZy50eXBlXShPYmplY3QuYXNzaWduKHt9LGNvbmZpZy5zdGF0ZSksY29uZmlnLnBhcmFtZXRlcnMpKTtcclxuICAgICAgdGhpcy5hZGRJdGVtcyhuZXdfb2JqLmNvbWJpbmVkT2JqZWN0cygpKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVU5LTk9XTiBUWVBFIEFUVEVNUFRFRCBUTyBMT0FEOiBcIiArIGNvbmZpZy50eXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBhZGRJdGVtKG86b2JqLCBsaXN0ID0gdGhpcy5vYmplY3RzKXtcclxuICAgIGF3YWl0IG8ubG9hZCgpO1xyXG4gICAgby5nYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgbGlzdC5wdXNoKG8pO1xyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGFkZEl0ZW1zKG86b2JqW10sIGxpc3QgPSB0aGlzLm9iamVjdHMpe1xyXG4gICAgZm9yKGxldCBvYiBvZiBvKXtcclxuICAgICAgb2IuZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgIH1cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKG8ubWFwKChhKT0+YS5sb2FkKCkpKTtcclxuICAgIGxpc3QucHVzaCguLi5vKTtcclxuICAgIGlmKERFQlVHICYmIGxpc3QgPT09IHRoaXMub2JqZWN0cyl7XHJcbiAgICAgIGRlYnVnX3VwZGF0ZV9vYmpfbGlzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBkZWxldGVJdGVtKGlkOnN0cmluZywgbGlzdCA9IHRoaXMub2JqZWN0cyl7XHJcbiAgICBmb3IobGV0IGEgPSAwO2EgPCBsaXN0Lmxlbmd0aDthKyspe1xyXG4gICAgICBpZihsaXN0W2FdLmlkID09PSBpZCl7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoYSwxKVxyXG4gICAgICAgIGEtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoREVCVUcgJiYgbGlzdCA9PT0gdGhpcy5vYmplY3RzKXtcclxuICAgICAgZGVidWdfdXBkYXRlX29ial9saXN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZ2lzdGVyUGFydGljbGVzKCl7XHJcblxyXG4gIH1cclxuICBiaW5kQ29udHJvbChrZXk6c3RyaW5nLHg6ZXhlY190eXBlLGZ1bmM6Y29udHJvbF9mdW5jLGludGVydmFsOm51bWJlciA9IDEpe1xyXG4gICAgdGhpcy5iaW5kcy5wdXNoKEJpbmQoa2V5LGZ1bmMseCxpbnRlcnZhbCkpOyBcclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb25zUG9pbnQocG9zOlZlY3RvcixleGVtcHQ/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tDb2xsaXNpb25zKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sZXhlbXB0LGxpc3QpO1xyXG4gIH1cclxuICBjaGVja09iamVjdHNQb2ludChwb3M6VmVjdG9yLGV4ZW1wdD86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja09iamVjdHMoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSxleGVtcHQsbGlzdCk7XHJcbiAgfVxyXG4gIGNoZWNrQ29sbGlzaW9uc1BvaW50SW5jbHVzaXZlKHBvczpWZWN0b3IsdGFncz86c3RyaW5nW10sbGlzdCA9IHRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0NvbGxpc2lvbnNJbmNsdXNpdmUoe3g6cG9zLngseTpwb3MueSxoZWlnaHQ6MCx3aWR0aDowfSx0YWdzLGxpc3QpO1xyXG4gIH1cclxuICBjaGVja09iamVjdHNQb2ludEluY2x1c2l2ZShwb3M6VmVjdG9yLHRhZ3M/OnN0cmluZ1tdLGxpc3QgPSB0aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tPYmplY3RzSW5jbHVzaXZlKHt4OnBvcy54LHk6cG9zLnksaGVpZ2h0OjAsd2lkdGg6MH0sdGFncyxsaXN0KTtcclxuICB9XHJcbiAgY2hlY2tDb2xsaXNpb25zSW5jbHVzaXZlKGJveDpjb2xsaXNpb25fYm94LHRhZ3M6c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKG9iaj0+b2JqLmNvbGxpc2lvbiAmJiBvYmouY29sbGlkZXNXaXRoQm94KGJveCkgJiYgdGFncy5ldmVyeSgodmFsKT0+b2JqLnRhZ3MuaW5jbHVkZXModmFsKSkpO1xyXG4gICAgXHJcbiAgfVxyXG4gIGNoZWNrT2JqZWN0c0luY2x1c2l2ZShib3g6Y29sbGlzaW9uX2JveCx0YWdzOnN0cmluZ1tdLGxpc3Q9dGhpcy5vYmplY3RzKTpvYmpbXXtcclxuICAgIGlmKERFQlVHKXtcclxuICAgICAgcmVuZGVyX2NvbGxpc2lvbl9ib3goYm94KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0LmZpbHRlcigob2JqKT0+b2JqLmNvbGxpZGVzV2l0aEJveChib3gpICYmIHRhZ3MuZXZlcnkoKHZhbCk9Pm9iai50YWdzLmluY2x1ZGVzKHZhbCkpKTtcclxuICAgIFxyXG4gIH1cclxuICBjaGVja0NvbGxpc2lvbnMoYm94OmNvbGxpc2lvbl9ib3gsZXhlbXB0PzpzdHJpbmdbXSxsaXN0PXRoaXMub2JqZWN0cyk6b2JqW117XHJcbiAgICBpZihERUJVRyl7XHJcbiAgICAgIHJlbmRlcl9jb2xsaXNpb25fYm94KGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hlY2tfYWxsX2NvbGxpc2lvbnMoYm94LGxpc3QsZXhlbXB0KTtcclxuICB9XHJcbiAgY2hlY2tPYmplY3RzKGJveDpjb2xsaXNpb25fYm94LGV4ZW1wdD86c3RyaW5nW10sbGlzdD10aGlzLm9iamVjdHMpOm9ialtde1xyXG4gICAgaWYoREVCVUcpe1xyXG4gICAgICByZW5kZXJfY29sbGlzaW9uX2JveChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoZWNrX2FsbF9vYmplY3RzKGJveCxsaXN0LGV4ZW1wdCk7XHJcbiAgfVxyXG4gIHJlZ2lzdGVyQ29udHJvbHMoKXtcclxuXHJcbiAgfVxyXG4gIGNsZWFudXAoKXtcclxuXHJcbiAgfVxyXG4gIHN0YXRlZih0aW1lOiBudW1iZXIpIHtcclxuICAgIGZvcihsZXQgcGFydGljbGUgb2YgdGhpcy5wYXJ0aWNsZXNfYXJyKXtcclxuICAgICAgcGFydGljbGUuc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCB0ZXh0X25vZGUgb2YgdGhpcy50ZXh0X25vZGVzKXtcclxuICAgICAgdGV4dF9ub2RlLnN0YXRlZih0aW1lKTtcclxuICAgIH1cclxuICAgIGxldCB0aWNraW5nX29iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKChvKT0+by50aWNrX3N0YXRlKTtcclxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGlja2luZ19vYmplY3RzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgIHZlbG9jaXR5Q29sbGlzaW9uQ2hlY2sodGlja2luZ19vYmplY3RzW2FdLCB0aGlzLm9iamVjdHMpO1xyXG4gICAgICB0aWNraW5nX29iamVjdHNbYV0uc3RhdGVmKHRpbWUpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICBmb3IobGV0IGNhbWVyYXMgb2YgdGhpcy5nYW1lLnN0YXRlLmNhbWVyYXMpe1xyXG4gICAgICAgIGlmKGNhbWVyYXMuaHVkKXtcclxuICAgICAgICAgIGNhbWVyYXMuaHVkLnN0YXRlZih0aW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0UGFydGljbGUobmFtZTpzdHJpbmcscG9zOnBvc2l0aW9uLGxpZmV0aW1lOm51bWJlcixwb3NfcmFuZ2U6bnVtYmVyKXtcclxuICAgIGxldCBzdGF0ZSA9IHtcclxuICAgICAgcG9zaXRpb246cG9zLFxyXG4gICAgICB2ZWxvY2l0eTp7eDowLHk6MH0sXHJcbiAgICAgIHJvdGF0aW9uOjAsXHJcbiAgICAgIHNjYWxpbmc6e3dpZHRoOjEsaGVpZ2h0OjF9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEl0ZW0obmV3IFBhcnRpY2xlKHRoaXMucGFydGljbGVzW25hbWVdLHN0YXRlLGxpZmV0aW1lLHBvc19yYW5nZSksIHRoaXMucGFydGljbGVzX2Fycik7XHJcbiAgfVxyXG4gIGdldE9iaihpZDpzdHJpbmcpe1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGErKyl7XHJcbiAgICAgIGlmKHRoaXMub2JqZWN0c1thXS5pZCA9PSBpZCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0c1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGdldE9iakJ5VGFnKHRhZzpzdHJpbmcpOm9ialtde1xyXG4gICAgcmV0dXJuIHRoaXMub2JqZWN0cy5maWx0ZXIoKGEpPT5hLnRhZ3MuaW5kZXhPZih0YWcpID4gLTEpO1xyXG4gIH1cclxuICByZW5kZXJmKHRpbWU6IG51bWJlcik6IHNwcml0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcHJpdGVfc2hlZXQ6IHRoaXMuYmFja2dyb3VuZCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBzcHJpdGVfaGVpZ2h0OiB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LFxyXG4gICAgICBzcHJpdGVfd2lkdGg6IHRoaXMuYmFja2dyb3VuZC53aWR0aCxcclxuICAgICAgb3BhY2l0eToxXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgb2JqIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcbmltcG9ydCB7IG9ial9zdGF0ZSwgVmVjdG9yLCBkaW1lbnNpb25zfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQge2dldFJhbmRJbnR9IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtwYXJ0aWNsZV9lbnRyeX0gZnJvbSBcIi4vcm9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzcHJpdGV7XHJcbiAgc3ByaXRlX3NoZWV0OkhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgbGVmdDpudW1iZXIsXHJcbiAgdG9wOm51bWJlcixcclxuICBzcHJpdGVfd2lkdGg6bnVtYmVyLFxyXG4gIHNwcml0ZV9oZWlnaHQ6bnVtYmVyLFxyXG4gIG9wYWNpdHk6bnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgc3ByaXRlOnNwcml0ZSxcclxuICB4Om51bWJlcixcclxuICB5Om51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFydGljbGVfaSBleHRlbmRzIG9ial9zdGF0ZXtcclxuICBsaWZldGltZTpudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSBleHRlbmRzIG9iantcclxuICBjb2xsaXNpb24gPSBmYWxzZTtcclxuICByYW5kb21fcmFuZ2U6bnVtYmVyO1xyXG4gIG1heF9saWZldGltZTpudW1iZXI7XHJcbiAgc3RhdGU6UGFydGljbGVfaTtcclxuICBzZWxlY3RlZF9zcHJpdGU6c3ByaXRlO1xyXG4gIGNvbnN0cnVjdG9yKHBhcnQ6cGFydGljbGVfZW50cnksc3RhdGU6b2JqX3N0YXRlLGxpZmV0aW1lOm51bWJlcixyYW5kb21fcmFuZ2U6bnVtYmVyKXtcclxuICAgIHN1cGVyKHN0YXRlKTtcclxuICAgIHRoaXMuc3RhdGUubGlmZXRpbWUgPSAwO1xyXG4gICAgdGhpcy5zcHJpdGVfdXJsID0gcGFydC5zcHJpdGU7XHJcbiAgICB0aGlzLmhlaWdodCA9IHBhcnQuaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHBhcnQud2lkdGg7XHJcbiAgICB0aGlzLm1heF9saWZldGltZSA9IGxpZmV0aW1lO1xyXG4gICAgdGhpcy5yYW5kb21fcmFuZ2UgPSByYW5kb21fcmFuZ2U7XHJcbiAgICB0aGlzLnN0YXRlLnBvc2l0aW9uLnggKz0gZ2V0UmFuZEludCgtcmFuZG9tX3JhbmdlLzIscmFuZG9tX3JhbmdlLzIpO1xyXG4gICAgdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICs9IGdldFJhbmRJbnQoLXJhbmRvbV9yYW5nZS8yLHJhbmRvbV9yYW5nZS8yKTtcclxuICB9XHJcbiAgZGVsZXRlKCl7XHJcbiAgICBsZXQgcm9vbSA9IHRoaXMuZ2FtZS5nZXRSb29tKCk7XHJcbiAgICByb29tLmRlbGV0ZUl0ZW0odGhpcy5pZCxyb29tLnBhcnRpY2xlc19hcnIpO1xyXG4gIH1cclxuICBzdGF0ZWYodGltZTpudW1iZXIpe1xyXG4gICAgdGhpcy5zdGF0ZS5saWZldGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5saWZldGltZSA+IHRoaXMubWF4X2xpZmV0aW1lKXtcclxuICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyZih0aW1lOm51bWJlcik6cG9zaXRpb25lZF9zcHJpdGV7XHJcbiAgICBpZighdGhpcy5zZWxlY3RlZF9zcHJpdGUpe1xyXG4gICAgICBsZXQgc3ByaXRlcyA9IHNwcml0ZV9nZW4odGhpcy5zcHJpdGVfc2hlZXQsdGhpcy53aWR0aCx0aGlzLmhlaWdodClcclxuICAgICAgbGV0IHJhbmRvbV9yb3cgPSBnZXRSYW5kSW50KDAsc3ByaXRlcy5sZW5ndGgpO1xyXG4gICAgICBsZXQgcmFuZG9tX2NvbCA9IGdldFJhbmRJbnQoMCxzcHJpdGVzW3JhbmRvbV9yb3ddLmxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlID0gc3ByaXRlc1tyYW5kb21fcm93XVtyYW5kb21fY29sXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRfc3ByaXRlLm9wYWNpdHkgPSAxIC0gdGhpcy5zdGF0ZS5saWZldGltZS90aGlzLm1heF9saWZldGltZTtcclxuICAgIHJldHVybntcclxuICAgICAgeDp0aGlzLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgIHk6dGhpcy5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICBzcHJpdGU6dGhpcy5zZWxlY3RlZF9zcHJpdGUgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlX2dlbihzcHJpdGVfc2hlZXQ6SFRNTEltYWdlRWxlbWVudCxzcHJpdGVfd2lkdGg6bnVtYmVyLHNwcml0ZV9oZWlnaHQ6bnVtYmVyKTpBcnJheTxBcnJheTxzcHJpdGU+PntcclxuICBsZXQgd2lkdGggPSBzcHJpdGVfc2hlZXQud2lkdGg7XHJcbiAgbGV0IGhlaWdodCA9IHNwcml0ZV9zaGVldC5oZWlnaHQ7XHJcbiAgbGV0IHNwcml0ZXM6QXJyYXk8QXJyYXk8c3ByaXRlPj4gPSBbXTtcclxuICBmb3IobGV0IGIgPSAwOyBiIDwgaGVpZ2h0O2IgKz0gc3ByaXRlX2hlaWdodCl7XHJcbiAgICBzcHJpdGVzLnB1c2goW10pO1xyXG4gICAgZm9yKGxldCBhID0gMDsgYSA8IHdpZHRoO2EgKz0gc3ByaXRlX3dpZHRoKXtcclxuICAgICAgc3ByaXRlc1tiXS5wdXNoKHtcclxuICAgICAgICBzcHJpdGVfc2hlZXQsXHJcbiAgICAgICAgbGVmdDphLFxyXG4gICAgICAgIHRvcDpiICogc3ByaXRlX2hlaWdodCxcclxuICAgICAgICBzcHJpdGVfaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZV93aWR0aCxcclxuICAgICAgICBvcGFjaXR5OjFcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNwcml0ZXM7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBsZXQgREVCVUcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2Rldic7XHJcbmV4cG9ydCBsZXQgUEFVU0VEID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXYnO1xyXG5pbXBvcnQgeyBvYmp9IGZyb20gXCIuL2xpYi9vYmplY3RcIjtcclxuaW1wb3J0IHsgcm9vbSB9IGZyb20gXCIuL2xpYi9yb29tXCI7XHJcbmltcG9ydCB7IGNvbGxpc2lvbl9ib3ggfSBmcm9tIFwiLi9saWIvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IHNwcml0ZV9yZW5kZXJlciwgcmVjdF9yZW5kZXJlciwgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyLCBodWRfdGV4dF9yZW5kZXJlciwgQ2FtZXJhLCB0ZXh0X3JlbmRlcmVyICxzY2FsZV90eXBlfSBmcm9tIFwiLi9saWIvcmVuZGVyXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVSZXBlYXRCaW5kcywgVW5iaW5kIH0gZnJvbSBcIi4vbGliL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7IGluaXRfY2xpY2tfaGFuZGxlciB9IGZyb20gXCIuL2xpYi9jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBkZWJ1Z19zdGF0ZSwgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCwgZGVidWdfdXBkYXRlX29ial9saXN0LGRlYnVnX3VwZGF0ZV9wcmVmYWJzLCBkZWJ1Z19zdGF0ZWYsIGRlYnVnX3NldHVwIH0gZnJvbSBcIi4vbGliL2RlYnVnXCI7XHJcbmltcG9ydCB7IHJvb21zIGFzIHJvb21fbGlzdCB9IGZyb20gXCIuL2dhbWUvcm9vbXMvcm9vbXNcIjtcclxuXHJcblxyXG5sZXQgY2FudmFzX2VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNfZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cclxubGV0IHNjcmVlbl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgc2NyZWVuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblxyXG4vL0hvdyBvZnRlbiB0aGUgZ2FtZSBsb2dpYyBsb29wIHNob3VsZCBydW4sIGluIG1pbGxpc2Vjb25kc1xyXG5sZXQgbG9naWNfbG9vcF9pbnRlcnZhbDogbnVtYmVyID0gMTAwMCAvIDYwO1xyXG5cclxubGV0IGxhc3RfdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5sZXQgbGFzdF9yZW5kZXJfdGltZSA9IDA7XHJcblxyXG5pbnRlcmZhY2UgZGltZW5zaW9ucyB7XHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlclxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFNjcmVlbkRpbWVuc2lvbnMoKTogZGltZW5zaW9ucyB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICB3aWR0aDogc2NyZWVuX3dpZHRoLFxyXG4gICAgaGVpZ2h0OiBzY3JlZW5faGVpZ2h0XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFZpZXdwb3J0RGltZW5zaW9ucygpOiBkaW1lbnNpb25zIHtcclxuICByZXR1cm4gKHtcclxuICAgIGhlaWdodDogY2FudmFzX2VsZW1lbnQuaGVpZ2h0LFxyXG4gICAgd2lkdGg6IGNhbnZhc19lbGVtZW50LndpZHRoXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGxldCB2aWV3cG9ydCA9IHtcclxuICBoZWlnaHQ6IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodCxcclxuICB3aWR0aDogR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gIHZpZXdwb3J0LmhlaWdodCA9IEdldFZpZXdwb3J0RGltZW5zaW9ucygpLmhlaWdodFxyXG4gIHZpZXdwb3J0LndpZHRoID0gR2V0Vmlld3BvcnREaW1lbnNpb25zKCkud2lkdGhcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYnVnKHg6IGJvb2xlYW4pIHtcclxuICBERUJVRyA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXVzZWQoeDogYm9vbGVhbikge1xyXG4gIFBBVVNFRCA9IHg7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJfY29sbGlzaW9uX2JveCA9IChhOiBjb2xsaXNpb25fYm94KSA9PiB7XHJcbiAgYm94ZXMucHVzaChhKTtcclxufVxyXG5cclxubGV0IGJveGVzOiBBcnJheTxjb2xsaXNpb25fYm94PiA9IFtdO1xyXG5cclxuZXhwb3J0IGxldCBkZWVwID0gKGE6IGFueSkgPT4ge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEpKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIGdhbWVfc3RhdGU8VD4ge1xyXG4gIGxvZ2ljOiBudW1iZXIsXHJcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGN1cnJlbnRfcm9vbTogcm9vbTx1bmtub3duPixcclxuICBjYW1lcmFzOiBBcnJheTxDYW1lcmE+LFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgZ2xvYmFsczogVFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCByb29tczogYW55W10gPSBbXTtcclxuZXhwb3J0IGxldCBvYmplY3RzOiBhbnlbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBnYW1lPFQ+e1xyXG4gIHN0YXRlOiBnYW1lX3N0YXRlPFQ+O1xyXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAvL1RoZSBvZmZzY3JlZW4gY2FudmFzIGFuZCBjb250ZXh0IGFyZSB1c2VkIGluIHJlbmRlcmluZyBtdWx0aXBsZSBDYW1lcmFzXHJcbiAgLy9UaGUgY29udGVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZSBvZmZzY3JlZW4gY2FudmFzLCB0aGVuIGNvcGllZCB0byB0aGUgXHJcbiAgLy9vbnNjcmVlbiBjYW52YXMsIGluIHRoZSBwcm9wZXIgcG9zaXRpb24gaW4gdGhlIHZpZXdwb3J0XHJcbiAgb2Zmc2NyZWVuX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgb2Zmc2NyZWVuX2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcm90b3R5cGVzOiBBcnJheTxvYmo+ID0gW107XHJcbiAgcm9vbXM6IEFycmF5PGFueT4gPSBbXTtcclxuICBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBpbml0X3N0YXRlOiBUKSB7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYW52YXM6IGNhbnZhc19lbGVtZW50LFxyXG4gICAgICBsb2dpYzogdW5kZWZpbmVkLFxyXG4gICAgICBjb250ZXh0OiBjdHgsXHJcbiAgICAgIGNhbWVyYXM6IFtcclxuICAgICAgXSxcclxuICAgICAgY3VycmVudF9yb29tOiB1bmRlZmluZWQsXHJcbiAgICAgIGdsb2JhbHM6IGluaXRfc3RhdGVcclxuICAgIH1cclxuICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0ID0gdGhpcy5vZmZzY3JlZW5fY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIC8vREVCVUcgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnYW1lIGlzIHJ1bm5pbmcgd2l0aGluIHRoZSBlZGl0b3JcclxuICAgIGlmIChERUJVRykge1xyXG4gICAgICAvL1NldHMgdXAgc29tZSBnbG9iYWwgZGVidWcgc3RhdGUgYW5kIHRoZSBlZGl0b3Iga2V5YmluZGluZ3NcclxuICAgICAgZGVidWdfc2V0dXAoKTtcclxuICAgICAgLy9Jbml0aWFsaXplcyBhIHNlcGFyYXRlIGxvZ2ljIGxvb3Agc29sZWx5IGZvciB0aGUgZWRpdG9yXHJcbiAgICAgIC8vVGhpcyBzZXBhcmF0aW9uIGFsbG93cyBmb3IgdGhlIGVkaXRvciB0byBpbnRlcmFjdCB3aXRoIHRoZSBlbnZpcm9ubWVudCB3aGlsZVxyXG4gICAgICAvL3RoZSBhY3R1YWwgcm9vbSdzIHN0YXRlIGxvb3AgaXMgcGF1c2VkLlxyXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Um9vbSgpKSB7XHJcbiAgICAgICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgdGhlIGVkaXRvciBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgZ2FtZSBlbnZpcm9ubWVudFxyXG4gICAgICAgICAgZGVidWdfc3RhdGVmKDE2LjY2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE2LjY2KVxyXG4gICAgfVxyXG4gICAgLy9DcmVhdGVzIGEgb25jbGljayBmdW5jdGlvbiBvbiB0aGUgd2luZG93IHRoYXQgaGFuZGxlcyBlbGVtZW50IG9uY2xpY2sgZnVuY3Rpb25zXHJcbiAgICBpbml0X2NsaWNrX2hhbmRsZXIodGhpcyk7XHJcbiAgfVxyXG4gIHJlbmRlcih0OiBudW1iZXIpIHtcclxuICAgIC8vdCBpcyBjdXJyZW50IHJlbmRlciB0aW1lXHJcbiAgICBsZXQgZGVsdGFfdGltZSA9IHQgLSBsYXN0X3JlbmRlcl90aW1lXHJcbiAgICBsYXN0X3JlbmRlcl90aW1lID0gdDtcclxuICAgIGxldCBhbGxfY2FtZXJhcyA9IHRoaXMuc3RhdGUuY2FtZXJhcztcclxuICAgIGxldCBlZGl0b3JfY2FtZXJhX2luZGV4ID0gLTE7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfc3RhdGUuZGVsdGFfdGltZSA9IGRlbHRhX3RpbWU7XHJcbiAgICAgIGFsbF9jYW1lcmFzID0gWy4uLmFsbF9jYW1lcmFzLCBkZWJ1Z19zdGF0ZS5jYW1lcmFdXHJcbiAgICAgIGVkaXRvcl9jYW1lcmFfaW5kZXggPSBhbGxfY2FtZXJhcy5sZW5ndGggLSAxO1xyXG4gICAgICAvL1RoZSBlZGl0b3IgY2FtZXJhIGlzIGFsd2F5cyB0aGUgbGFzdCBjYW1lcmEgaW5zaWRlIHRoZSBjYW1lcmFzIGFycmF5XHJcbiAgICAgIC8vdGhlIGVkaXRvciBjYW1lcmEgaXMgcmVuZGVyZWQgdG8gYSBkaWZmZXJlbnQgY2FudmFzIHRoYW4gdGhlIG1haW4gZ2FtZSBjYW52YXNcclxuICAgICAgLy9zbyB3ZSB1c2UgdGhlIGNhbWVyYSdzIGluZGV4IHRvIGNoZWNrIHdoYXQgY2FudmFzIHRvIHJlbmRlciB0b1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxfY2FtZXJhcy5sZW5ndGg7IGErKykge1xyXG4gICAgICBsZXQgY2FtZXJhID0gYWxsX2NhbWVyYXNbYV07XHJcbiAgICAgIC8vV2UgcmVuZGVyIHRoZSBjYW1lcmFzIGNvbnRlbnRzIHRvIGFuIG9mZnNjcmVlbiBjYW52YXMsIHRoZW4gY29weSBpdHMgY29udGVudHNcclxuICAgICAgLy90byB0aGUgbWFpbiBjYW52YXMuXHJcbiAgICAgIC8vVGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgYW55IG1hdGggbmVlZGVkIHRvIGRldGVybWluZSBzcHJpdGVzIHRoYXQgYXJlIHBhcnRpYWxseSBvZmZzY3JlZW5cclxuICAgICAgLy9hcyBhbnkgb2Zmc2NyZWVuIHNlY3Rpb25zIG9mIHRoZSBzcHJpdGVzIHdpbGwgbm90IGJlIGNvcGllZCBvdmVyLCByYXRoZXIgdGhhbiBleHBsaWNpdGx5IFxyXG4gICAgICAvL2NhbGN1bGF0aW5nIHRoZSBjdXRvZmZzXHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy5oZWlnaHQgPSBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NhbnZhcy53aWR0aCA9IGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICB0aGlzLm9mZnNjcmVlbl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5vZmZzY3JlZW5fY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIHRoaXMub2Zmc2NyZWVuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMud2lkdGgsIGNhbWVyYS5zdGF0ZS5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgIC8vVGhpcyBjb2xsaXNpb24gYm94IHJlcHJlc2VudHMgdGhlIGNhbWVyYSdzIGZpZWxkIG9mIHZpZXcgaW4gdGhlIGdhbWUgc3BhY2VcclxuICAgICAgLy9XZSB1c2UgdGhlIHJvb20ncyBjaGVja09iamVjdHMgZnVuY3Rpb24gdG8gZmluZCBhbnkgb2JqZWN0IHRoYXQgZXhpc3RzIHdpdGhpbiB0aGlzIGFyZWFcclxuICAgICAgLy9UaGVzZSBvYmplY3RzIGFyZSB0aGUgb2JqZWN0cyB0aGF0IG5lZWQgdG8gYmUgcmVuZGVyZWQgZm9yIHRoaXMgY2FtZXJhXHJcbiAgICAgIGxldCBjYW1lcmFfYm94ID0ge1xyXG4gICAgICAgIHg6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi54LFxyXG4gICAgICAgIHk6IGNhbWVyYS5zdGF0ZS5wb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoOiBjYW1lcmEuc3RhdGUuZGltZW5zaW9ucy53aWR0aCAqICgxIC8gY2FtZXJhLnN0YXRlLnNjYWxpbmcpLFxyXG4gICAgICAgIGhlaWdodDogY2FtZXJhLnN0YXRlLmRpbWVuc2lvbnMuaGVpZ2h0ICogKDEgLyBjYW1lcmEuc3RhdGUuc2NhbGluZylcclxuICAgICAgfTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBwYXJ0aWNsZXMgd2l0aGluIHRoZSBjYW1lcmEncyBmb3ZcclxuICAgICAgbGV0IHBhcnRpY2xlX2NvbGxpZGVzID0gdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uY2hlY2tPYmplY3RzKGNhbWVyYV9ib3gsIFtdLCB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5wYXJ0aWNsZXNfYXJyKTtcclxuICAgICAgLy9MaXN0IG9mIGFsbCBvYmplY3RzIHdpdGhpbiB0aGUgY2FtZXJhJ3MgZm92XHJcbiAgICAgIGxldCBjYW1lcmFfY29sbGlkZXJzID0gWy4uLnRoaXMuc3RhdGUuY3VycmVudF9yb29tLmNoZWNrT2JqZWN0cyhjYW1lcmFfYm94KSwgLi4ucGFydGljbGVfY29sbGlkZXNdO1xyXG5cclxuICAgICAgbGV0IHJlbmRlcl9hcmdzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsXHJcbiAgICAgICAgY2FtZXJhOiBjYW1lcmEsXHJcbiAgICAgIH07XHJcbiAgICAgIC8vUmVuZGVycyB0aGUgcm9vbSdzIGJhY2tncm91bmQuXHJcbiAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcil7XHJcbiAgICAgICAgc3ByaXRlX3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICBzcHJpdGU6IHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnJlbmRlcmYoZGVsdGFfdGltZSksXHJcbiAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgeTogMCxcclxuICAgICAgICAgIHJvdGF0aW9uOiAwLFxyXG4gICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjYWxlX3R5cGU6c2NhbGVfdHlwZS5ncm93XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9BcnJheSBvZiBoaXRib3hlcyBmb3IgZWFjaCBpdGVtIGluIHRoZSByb29tXHJcbiAgICAgIGxldCBoaXRib3hlczogY29sbGlzaW9uX2JveFtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGEgb2YgY2FtZXJhX2NvbGxpZGVycy5maWx0ZXIoKGIpID0+IGIucmVuZGVyKS5zb3J0KChhLCBiKSA9PiAoYS5sYXllciAtIGIubGF5ZXIpKSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZCA9IGEucmVuZGVyVHJhY2sodCk7XHJcblxyXG4gICAgICAgIC8vT2JqZWN0cyBjYW4gcmV0dXJuIGVpdGhlciBhIHNwcml0ZSwgb3IgYW4gYXJyYXkgb2Ygc3ByaXRlcyB0byBzaW1wbGlmeSB0aGUgQVBJXHJcbiAgICAgICAgLy9Gb3IgdGhlIHVzZXIsIGFuZCBmb3IgdXNlIGluIGNvbXBvc2l0ZSBvYmplY3RzKG9iamVjdCB0aGF0IGJ1bmRsZXMgb3RoZXIgb2JqZWN0cyB0b2dldGhlcilcclxuICAgICAgICAvL0ludGVybmFsbHksIHdlIGNvbnZlcnQgYW55IHNpbmdsZSBzcHJpdGUgaW50byBhbiBhcnJheSBvZiBvbmUgc3ByaXRlLlxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcG9zaXRpb25lZF9zcHJpdGUgb2YgcmVuZGVyZWQpXHJcbiAgICAgICAgICBzcHJpdGVfcmVuZGVyZXIocmVuZGVyX2FyZ3MsIHtcclxuICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uZWRfc3ByaXRlLngsXHJcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uZWRfc3ByaXRlLnksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiBhLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICBzY2FsZTogYS5zdGF0ZS5zY2FsaW5nLFxyXG4gICAgICAgICAgICBzY2FsZV90eXBlOmEuc2NhbGVfdHlwZVxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvL0hpdGJveGVzIGFyZSByZW5kZXJlZCBsYXRlIGluIHRoZSByZW5kZXIgbG9vcCwgdG8gZW5zdXJlIG9iamVjdHMgZG9uJ3Qgb3ZlcmxhcCB0aGVtXHJcbiAgICAgICAgLy9BcyB3ZSByZW5kZXIgb2JqZWN0cywgd2UgYWRkIHRoZWlyIGhpdGJveGVzIHRvIHRoaXMgbGlzdFxyXG4gICAgICAgIGlmIChERUJVRyAmJiBhLmNvbGxpc2lvbikge1xyXG4gICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5hLmdldEFsbENvbGxpc2lvbkJveGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgaXMgYSBzcGVjaWFsIGNsYXNzIG9mIG9iamVjdCB0aGF0IGV4aXN0cyBpbiB0aGUgZ2FtZSB3b3JsZFxyXG4gICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLnRleHRfbm9kZXMpIHtcclxuICAgICAgICB0ZXh0X3JlbmRlcmVyKHJlbmRlcl9hcmdzLCB7XHJcbiAgICAgICAgICB4OiBub2RlLnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB5OiBub2RlLnN0YXRlLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICBmb250OiBub2RlLnJlbmRlcmYodClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2FtZXJhLmh1ZCkge1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IGNhbWVyYS5odWQuZ3JhcGhpY19lbGVtZW50cztcclxuICAgICAgICBsZXQgdGV4dF9lbGVtZW50cyA9IGNhbWVyYS5odWQudGV4dF9lbGVtZW50cztcclxuICAgICAgICAvL1JlbmRlcnMgc3RhdGljIGdyYXBoaWNzIHRoYXQgYXJlIGEgcGFydCBvZiB0aGUgaHVkXHJcbiAgICAgICAgZm9yIChsZXQgZ3JhcGhpYyBvZiBncmFwaGljcykge1xyXG4gICAgICAgICAgbGV0IHJlbmRlcmVkID0gZ3JhcGhpYy5yZW5kZXJUcmFjayh0KTtcclxuICAgICAgICAgIGlmIChncmFwaGljLnJlbmRlcikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb3NpdGlvbmVkX3Nwcml0ZSBvZiByZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgIHNwcml0ZV9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlOiBwb3NpdGlvbmVkX3Nwcml0ZS5zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICB4OiBwb3NpdGlvbmVkX3Nwcml0ZS54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zaXRpb25lZF9zcHJpdGUueSxcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBncmFwaGljLnN0YXRlLnJvdGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IGdyYXBoaWMuc3RhdGUuc2NhbGluZyxcclxuICAgICAgICAgICAgICAgIHNjYWxlX3R5cGU6Z3JhcGhpYy5zY2FsZV90eXBlXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgdGV4dCBvZiB0ZXh0X2VsZW1lbnRzKSB7XHJcbiAgICAgICAgICBodWRfdGV4dF9yZW5kZXJlcihyZW5kZXJfYXJncywge1xyXG4gICAgICAgICAgICB4OiB0ZXh0LnN0YXRlLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRleHQuc3RhdGUucG9zaXRpb24ueSxcclxuICAgICAgICAgICAgZm9udDogdGV4dC5yZW5kZXJmKHQpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL0lmIGEgY2FtZXJhIGlzIG1hcmtlZCBhcyBhIGRlYnVnIGNhbWVyYSwgd2UgcmVuZGVyIHRoZVxyXG4gICAgICAvLyAgaGl0Ym94ZXMsIGFuZCBwb3RlbnRpYWxseSB1cGRhdGUgdGhlIGVkaXRvclxyXG4gICAgICBpZiAoY2FtZXJhLnN0YXRlLmRlYnVnKSB7XHJcbiAgICAgICAgbGV0IGJveDogY29sbGlzaW9uX2JveDtcclxuICAgICAgICBsZXQgYm94ZXNfY29weSA9IFsuLi5ib3hlc11cclxuICAgICAgICB3aGlsZSAoYm94ZXNfY29weS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgYm94ID0gYm94ZXNfY29weS5wb3AoKTtcclxuICAgICAgICAgIGxldCByZWN0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogYm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGJveC5oZWlnaHRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCByZWN0LCBib3gueCwgYm94LnksIFwiI0ZGMDAwMFwiLCAxLCBjYW1lcmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaGl0Ym94ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGJveCA9IGhpdGJveGVzLnBvcCgpO1xyXG4gICAgICAgICAgbGV0IHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBib3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYm94LmhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3Ryb2tlZF9yZWN0X3JlbmRlcmVyKHRoaXMub2Zmc2NyZWVuX2NvbnRleHQsIHJlY3QsIGJveC54LCBib3gueSwgXCIjMDA4MDAwXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRHJhd3MgYSBzcGVjaWFsIGJveCBhcm91bmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICAgICAgLy9pbnNpZGUgdGhlIGVkaXRvciBVSVxyXG4gICAgICAgIGlmIChERUJVRyAmJiBkZWJ1Z19zdGF0ZS5zZWxlY3RlZF9wcm9wZXJ0aWVzX2VsZW1lbnQpIHtcclxuICAgICAgICAgIGxldCBjb2xsID0gZGVidWdfc3RhdGUuc2VsZWN0ZWRfcHJvcGVydGllc19lbGVtZW50LmdldEZ1bGxDb2xsaXNpb25Cb3goKTtcclxuICAgICAgICAgIHJlY3RfcmVuZGVyZXIodGhpcy5vZmZzY3JlZW5fY29udGV4dCwgeyB3aWR0aDogMjUsIGhlaWdodDogMjUgfSwgY29sbC54LCBjb2xsLnksIFwic2t5Ymx1ZVwiLCAxMCwgY2FtZXJhKTtcclxuICAgICAgICAgIHN0cm9rZWRfcmVjdF9yZW5kZXJlcih0aGlzLm9mZnNjcmVlbl9jb250ZXh0LCBjb2xsLCBjb2xsLngsIGNvbGwueSwgXCJibHVlXCIsIDEsIGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vU2VwYXJhdGUgY2FudmFzIGZvciB0aGUgZWRpdG9yIGNhbWVyYVxyXG4gICAgICBpZiAoYSAhPT0gZWRpdG9yX2NhbWVyYV9pbmRleCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5vZmZzY3JlZW5fY2FudmFzLCBjYW1lcmEuc3RhdGUudmlld3BvcnQueCwgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlYnVnX3N0YXRlLnRhcmdldC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMub2Zmc2NyZWVuX2NhbnZhcywgY2FtZXJhLnN0YXRlLnZpZXdwb3J0LngsIGNhbWVyYS5zdGF0ZS52aWV3cG9ydC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKERFQlVHKVxyXG4gICAgICBib3hlcyA9IFtdO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChhKSA9PiB7IHRoaXMucmVuZGVyKGEpIH0pO1xyXG4gIH1cclxuICBzdGFydF9sb2dpYyhhOiBudW1iZXIpIHtcclxuICAgIC8vdGhpcyBpcyB0aGUgcm9vbSdzIHN0YXRlIGxvb3BcclxuICAgIHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIVBBVVNFRCkge1xyXG4gICAgICAgIGxldCBuZXdfdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRpbWVfc2luY2UgPSBuZXdfdGltZS5nZXRUaW1lKCkgLSBsYXN0X3RpbWUuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxhc3RfdGltZSA9IG5ld190aW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSkge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLmh1ZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbS5odWQuc3RhdGVmKHRpbWVfc2luY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvL1RoaXMgZnVuY3Rpb25zIGhhbmRsZXMgYmluZHMgdGhhdCBvY2N1ciBvbiBhbiBpbnRlcnZhbFxyXG4gICAgICBFeGVjdXRlUmVwZWF0QmluZHMoYSk7XHJcbiAgICB9LCBhKTtcclxuICB9XHJcbiAgZ2V0Um9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbTtcclxuICB9XHJcbiAgYXN5bmMgbG9hZFJvb21TdHJpbmcoeDogc3RyaW5nKSB7XHJcbiAgICAvL3Jvb20gbGlzdCBpcyBhIG9iamVjdCB0aGF0IGNvbnRhaW5zIGVhY2ggcm9vbSdzIGNsYXNzLFxyXG4gICAgLy93aXRoIHRoZSByb29tJ3MgbmFtZSBhcyB0aGUga2V5IGZvciBjbGFzc1xyXG4gICAgLy9UaGlzIG9iamVjdCBpcyBwb3B1bGF0ZWQgYXQgY29tcGlsZSB0aW1lXHJcbiAgICBmb3IgKGxldCBhIG9mIE9iamVjdC5rZXlzKHJvb21fbGlzdCkpIHtcclxuICAgICAgaWYgKGEgPT0geCkge1xyXG4gICAgICAgIC8vdGhpcyBpc24ndCBwYXJ0aWN1bGFybHkgdHlwZS1zYWZlLlxyXG4gICAgICAgIGxldCBuZXdfcm9vbSA9IDxyb29tPHt9Pj5uZXcgcm9vbV9saXN0W2FdKHRoaXMpXHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUm9vbShuZXdfcm9vbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRSb29tKHg6IHJvb208dW5rbm93bj4pIHtcclxuICAgIC8vQ2xlYXJzIHRoZSByb29tJ3MgbG9naWMgbG9vcCBpZiBvbmVcclxuICAgIC8vV2FzIGFscmVhZHkgcnVubmluZ1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9naWMpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5sb2dpYyk7XHJcbiAgICB9XHJcbiAgICAvL1RoaXMgcmVmZXJlbmNlIGlzIHVzZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uXHJcbiAgICB4LmdhbWUgPSB0aGlzO1xyXG4gICAgLy9EZWxldGVzIGVhY2ggb2JqZWN0IGluIHRoZSByb29tICh3aGljaCBhbHNvIHVuYmluZHMgdGhlaXIgYmluZHMpLFxyXG4gICAgLy9hbmQgdW5iaW5kcyB0aGUgcm9vbSdzIGJpbmRpbmdzLlxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2hpbGUgKHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudF9yb29tLm9iamVjdHNbMF0uZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaWQgb2YgdGhpcy5zdGF0ZS5jdXJyZW50X3Jvb20uYmluZHMpIHtcclxuICAgICAgICBVbmJpbmQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbmV3X3Jvb20gPSBhd2FpdCB4LmxvYWQoKTtcclxuICAgIHgucmVnaXN0ZXJDb250cm9scygpO1xyXG4gICAgeC5yZWdpc3RlclBhcnRpY2xlcygpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubG9naWMgPSB0aGlzLnN0YXJ0X2xvZ2ljKGxvZ2ljX2xvb3BfaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnN0YXRlLmN1cnJlbnRfcm9vbSA9IHg7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgZGVidWdfdXBkYXRlX3Jvb21fbGlzdCgpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfcHJlZmFicygpO1xyXG4gICAgICBkZWJ1Z191cGRhdGVfb2JqX2xpc3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIC8vVGhpcyBzdGFydHMgdGhlIHJlbmRlciBsb29wIGZvciB0aGUgcm9vbVxyXG4gICAgICB0aGlzLnJlbmRlcigwKTtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=