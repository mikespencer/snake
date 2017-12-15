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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const INTERVAL_SPEED = 100;
/* harmony export (immutable) */ __webpack_exports__["g"] = INTERVAL_SPEED;

const BOARD_WIDTH = 500;
/* harmony export (immutable) */ __webpack_exports__["b"] = BOARD_WIDTH;

const BOARD_HEIGHT = 500;
/* harmony export (immutable) */ __webpack_exports__["a"] = BOARD_HEIGHT;

const CELL_COUNT_X = 40;
/* harmony export (immutable) */ __webpack_exports__["c"] = CELL_COUNT_X;

const CELL_COUNT_Y = 40;
/* harmony export (immutable) */ __webpack_exports__["d"] = CELL_COUNT_Y;

const CELL_WIDTH = BOARD_WIDTH / CELL_COUNT_X;
/* harmony export (immutable) */ __webpack_exports__["f"] = CELL_WIDTH;

const CELL_HEIGHT = BOARD_HEIGHT / CELL_COUNT_Y;
/* harmony export (immutable) */ __webpack_exports__["e"] = CELL_HEIGHT;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DIRECTION_UP = 'DIRECTION_UP';
/* harmony export (immutable) */ __webpack_exports__["d"] = DIRECTION_UP;

const DIRECTION_DOWN = 'DIRECTION_DOWN';
/* harmony export (immutable) */ __webpack_exports__["a"] = DIRECTION_DOWN;

const DIRECTION_LEFT = 'DIRECTION_LEFT';
/* harmony export (immutable) */ __webpack_exports__["b"] = DIRECTION_LEFT;

const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
/* harmony export (immutable) */ __webpack_exports__["c"] = DIRECTION_RIGHT;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_CanvasView__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_ScoreView__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_StartButtonView__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_State__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_KeyboardEventsController__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_SnakeController__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_FoodController__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_game__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_directions__ = __webpack_require__(1);












let interval;

const initialState = {
  score: 0,
  nextDirection: __WEBPACK_IMPORTED_MODULE_8__constants_directions__["c" /* DIRECTION_RIGHT */],
  direction: __WEBPACK_IMPORTED_MODULE_8__constants_directions__["c" /* DIRECTION_RIGHT */],
  snakeCoords: [[4, 5], [3, 5], [2, 5], [1, 5]],
  foodCoords: [],
  gameOver: true,
  shouldGenerateFood: true,
};

// init model
const state = new __WEBPACK_IMPORTED_MODULE_3__models_State__["a" /* default */](initialState);

// init views
const canvasView = new __WEBPACK_IMPORTED_MODULE_0__views_CanvasView__["a" /* default */]();
const startButtonView = new __WEBPACK_IMPORTED_MODULE_2__views_StartButtonView__["a" /* default */]();
const scoreView = new __WEBPACK_IMPORTED_MODULE_1__views_ScoreView__["a" /* default */]();

// init controllers
new __WEBPACK_IMPORTED_MODULE_4__controllers_KeyboardEventsController__["a" /* default */]({ state });
const foodController = new __WEBPACK_IMPORTED_MODULE_6__controllers_FoodController__["a" /* default */]({ state, canvasView });
const snakeController = new __WEBPACK_IMPORTED_MODULE_5__controllers_SnakeController__["a" /* default */]({
  state,
  canvasView,
  foodController,
});

const drawCanvas = () => {
  canvasView.clear();
  foodController.draw();
  snakeController.draw();
};

const update = () => {
  snakeController.handleUpdate();

  const { score, gameOver } = state.getState();

  foodController.handleUpdate();
  scoreView.render(score);

  if (gameOver) {
    stop();
  } else {
    drawCanvas();
  }
};

const start = () => {
  state.setToInitialState();
  state.setState({ gameOver: false });
  startButtonView.setDisabled();
  foodController.generateFood();
  drawCanvas();
  interval = setInterval(update, __WEBPACK_IMPORTED_MODULE_7__constants_game__["g" /* INTERVAL_SPEED */]);
};

const stop = () => {
  clearInterval(interval);
  startButtonView.setActive();
};

document.querySelector('.startBtn').addEventListener('click', start);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_game__ = __webpack_require__(0);


class CanvasView {
  constructor() {
    const canvasElement = document.querySelector('.board');
    this.ctx = canvasElement.getContext('2d');
  }

  drawRect(x, y, color = '#333') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * __WEBPACK_IMPORTED_MODULE_0__constants_game__["f" /* CELL_WIDTH */], y * __WEBPACK_IMPORTED_MODULE_0__constants_game__["e" /* CELL_HEIGHT */], __WEBPACK_IMPORTED_MODULE_0__constants_game__["f" /* CELL_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__constants_game__["e" /* CELL_HEIGHT */]);
  }

  clear() {
    this.ctx.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__constants_game__["b" /* BOARD_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__constants_game__["a" /* BOARD_HEIGHT */]);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasView;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StartButtonView {
  constructor() {
    this.el = document.querySelector('.score');
  }

  render(score) {
    this.el.innerHTML = score;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartButtonView;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StartButtonView {
  constructor() {
    this.el = document.querySelector('.startBtn');
  }

  setDisabled() {
    this.el.setAttribute('disabled', true);
  }

  setActive() {
    this.el.removeAttribute('disabled');
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StartButtonView;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class State {
  constructor(initialState = {}) {
    this.initialState = initialState;
    this.setToInitialState();
  }

  setState(stateObject) {
    this.state = Object.assign({}, this.state, stateObject);
  }

  getState() {
    return this.state;
  }

  clear() {
    this.state = {};
  }

  setToInitialState() {
    this.state = this.initialState;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = State;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_keycodes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_directions__ = __webpack_require__(1);




class KeyboardEventsController {
  constructor({ state }) {
    this.state = state;
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  handleKeyup(event) {
    const { direction } = this.state.getState();

    switch (event.keyCode) {
      case __WEBPACK_IMPORTED_MODULE_0__constants_keycodes__["d" /* KEYCODE_ARROW_UP */]:
        if (direction !== __WEBPACK_IMPORTED_MODULE_1__constants_directions__["a" /* DIRECTION_DOWN */]) {
          this.state.setState({ nextDirection: __WEBPACK_IMPORTED_MODULE_1__constants_directions__["d" /* DIRECTION_UP */] });
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__constants_keycodes__["a" /* KEYCODE_ARROW_DOWN */]:
        if (direction !== __WEBPACK_IMPORTED_MODULE_1__constants_directions__["d" /* DIRECTION_UP */]) {
          this.state.setState({ nextDirection: __WEBPACK_IMPORTED_MODULE_1__constants_directions__["a" /* DIRECTION_DOWN */] });
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__constants_keycodes__["b" /* KEYCODE_ARROW_LEFT */]:
        if (direction !== __WEBPACK_IMPORTED_MODULE_1__constants_directions__["c" /* DIRECTION_RIGHT */]) {
          this.state.setState({ nextDirection: __WEBPACK_IMPORTED_MODULE_1__constants_directions__["b" /* DIRECTION_LEFT */] });
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__constants_keycodes__["c" /* KEYCODE_ARROW_RIGHT */]:
        if (direction !== __WEBPACK_IMPORTED_MODULE_1__constants_directions__["b" /* DIRECTION_LEFT */]) {
          this.state.setState({ nextDirection: __WEBPACK_IMPORTED_MODULE_1__constants_directions__["c" /* DIRECTION_RIGHT */] });
        }
        break;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardEventsController;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const KEYCODE_ARROW_LEFT = 37;
/* harmony export (immutable) */ __webpack_exports__["b"] = KEYCODE_ARROW_LEFT;

const KEYCODE_ARROW_UP = 38;
/* harmony export (immutable) */ __webpack_exports__["d"] = KEYCODE_ARROW_UP;

const KEYCODE_ARROW_RIGHT = 39;
/* harmony export (immutable) */ __webpack_exports__["c"] = KEYCODE_ARROW_RIGHT;

const KEYCODE_ARROW_DOWN = 40;
/* harmony export (immutable) */ __webpack_exports__["a"] = KEYCODE_ARROW_DOWN;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_directions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_game__ = __webpack_require__(0);




class SnakeController {
  constructor({ state, canvasView }) {
    this.state = state;
    this.canvasView = canvasView;
  }

  handleUpdate() {
    this.state.setState({ direction: this.state.getState().nextDirection });
    this.move();
  }

  move() {
    // add a block to the front of the snake in the direction that it is moving.
    this.state.setState({
      snakeCoords: this.addCoordsToFront(),
    });

    if (this.hasCollidedWithWall() || this.hasCollidedWithSelf()) {
      this.state.setState({ gameOver: true });
    } else if (this.hasCollidedWithFood()) {
      // when the snake collides with food, we leave the last block of the snake
      // in place so that it grows by 1.
      this.state.setState({
        shouldGenerateFood: true,
        score: this.state.getState().score + 1,
      });
    } else {
      // in this case the snake has not collided with a wall, itself or food.
      // we need to remove the last block from the end of the snake.
      const { snakeCoords } = this.state.getState();
      this.state.setState({
        snakeCoords: snakeCoords.slice(0, snakeCoords.length - 1),
      });
    }
  }

  getFrontCoords() {
    return this.state.getState().snakeCoords[0];
  }

  hasCollidedWithFood() {
    const [snakeX, snakeY] = this.getFrontCoords();
    const [foodX, foodY] = this.state.getState().foodCoords;

    return foodX === snakeX && foodY === snakeY;
  }

  hasCollidedWithWall() {
    const [frontX, frontY] = this.getFrontCoords();

    return (
      frontX < 0 ||
      frontX > __WEBPACK_IMPORTED_MODULE_1__constants_game__["c" /* CELL_COUNT_X */] - 1 || // -1 due to zero index
      frontY < 0 ||
      frontY > __WEBPACK_IMPORTED_MODULE_1__constants_game__["d" /* CELL_COUNT_Y */] - 1 // -1 due to zero index
    );
  }

  hasCollidedWithSelf() {
    const { snakeCoords } = this.state.getState();
    const [frontX, frontY] = this.getFrontCoords();

    return !!snakeCoords
      // get the rest of the snake without the front
      .slice(1, snakeCoords.length)
      // check if the front of the snake's coords === any other part of the snake
      .find(([x, y]) => x === frontX && y === frontY);
  }

  addCoordsToFront() {
    const { direction, snakeCoords } = this.state.getState();
    const frontCoords = snakeCoords[0];

    // add a coord to the front of the snake based on the direction it is moving
    switch (direction) {
      case __WEBPACK_IMPORTED_MODULE_0__constants_directions__["d" /* DIRECTION_UP */]:
        return [[frontCoords[0], frontCoords[1] - 1], ...snakeCoords];
      case __WEBPACK_IMPORTED_MODULE_0__constants_directions__["a" /* DIRECTION_DOWN */]:
        return [[frontCoords[0], frontCoords[1] + 1], ...snakeCoords];
      case __WEBPACK_IMPORTED_MODULE_0__constants_directions__["b" /* DIRECTION_LEFT */]:
        return [[frontCoords[0] - 1, frontCoords[1]], ...snakeCoords];
      case __WEBPACK_IMPORTED_MODULE_0__constants_directions__["c" /* DIRECTION_RIGHT */]:
        return [[frontCoords[0] + 1, frontCoords[1]], ...snakeCoords];
    }
  }

  draw() {
    this.state.getState().snakeCoords.forEach(coord => {
      this.canvasView.drawRect(...coord);
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SnakeController;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_game__ = __webpack_require__(0);


class FoodController {
  constructor({ state, canvasView }) {
    this.state = state;
    this.canvasView = canvasView;
  }

  generateFood() {
    const cell = this.getEmptyCell();
    this.state.setState({ foodCoords: cell, shouldGenerateFood: false });
  }

  draw() {
    this.canvasView.drawRect(...this.state.getState().foodCoords, '#209620');
  }

  handleUpdate() {
    if (this.state.getState().shouldGenerateFood) {
      this.generateFood();
    }
  }

  getEmptyCell() {
    const cell = this.getRandomCell();
    if (this.isOccupiedCell(...cell)) {
      return this.getEmptyCell();
    }
    return cell;
  }

  isOccupiedCell(x, y) {
    const snakeCoords = this.state.getState().snakeCoords;
    return snakeCoords.find(
      ([snakeCellX, snakeCellY]) => x === snakeCellX && y === snakeCellY
    );
  }

  getRandomCell() {
    return [
      Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__constants_game__["c" /* CELL_COUNT_X */]),
      Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__constants_game__["d" /* CELL_COUNT_Y */]),
    ];
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FoodController;



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjBjNzhiMjNhOTk5ZTRkYzVkMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvZGlyZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NhbnZhc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1Njb3JlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvU3RhcnRCdXR0b25WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0tleWJvYXJkRXZlbnRzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2tleWNvZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9TbmFrZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL0Zvb2RDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FB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O0FBQ0w7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ3BHcUM7O0FBRXJDO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjBjNzhiMjNhOTk5ZTRkYzVkMjciLCJleHBvcnQgY29uc3QgSU5URVJWQUxfU1BFRUQgPSAxMDA7XG5leHBvcnQgY29uc3QgQk9BUkRfV0lEVEggPSA1MDA7XG5leHBvcnQgY29uc3QgQk9BUkRfSEVJR0hUID0gNTAwO1xuZXhwb3J0IGNvbnN0IENFTExfQ09VTlRfWCA9IDQwO1xuZXhwb3J0IGNvbnN0IENFTExfQ09VTlRfWSA9IDQwO1xuZXhwb3J0IGNvbnN0IENFTExfV0lEVEggPSBCT0FSRF9XSURUSCAvIENFTExfQ09VTlRfWDtcbmV4cG9ydCBjb25zdCBDRUxMX0hFSUdIVCA9IEJPQVJEX0hFSUdIVCAvIENFTExfQ09VTlRfWTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnN0YW50cy9nYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBESVJFQ1RJT05fVVAgPSAnRElSRUNUSU9OX1VQJztcbmV4cG9ydCBjb25zdCBESVJFQ1RJT05fRE9XTiA9ICdESVJFQ1RJT05fRE9XTic7XG5leHBvcnQgY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnRElSRUNUSU9OX0xFRlQnO1xuZXhwb3J0IGNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdESVJFQ1RJT05fUklHSFQnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uc3RhbnRzL2RpcmVjdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENhbnZhc1ZpZXcgZnJvbSAnLi92aWV3cy9DYW52YXNWaWV3JztcbmltcG9ydCBTY29yZVZpZXcgZnJvbSAnLi92aWV3cy9TY29yZVZpZXcnO1xuaW1wb3J0IFN0YXJ0QnV0dG9uVmlldyBmcm9tICcuL3ZpZXdzL1N0YXJ0QnV0dG9uVmlldyc7XG5cbmltcG9ydCBTdGF0ZSBmcm9tICcuL21vZGVscy9TdGF0ZSc7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyJztcbmltcG9ydCBTbmFrZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9TbmFrZUNvbnRyb2xsZXInO1xuaW1wb3J0IEZvb2RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvRm9vZENvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBJTlRFUlZBTF9TUEVFRCB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUnO1xuaW1wb3J0IHsgRElSRUNUSU9OX1JJR0hUIH0gZnJvbSAnLi9jb25zdGFudHMvZGlyZWN0aW9ucyc7XG5cbmxldCBpbnRlcnZhbDtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzY29yZTogMCxcbiAgbmV4dERpcmVjdGlvbjogRElSRUNUSU9OX1JJR0hULFxuICBkaXJlY3Rpb246IERJUkVDVElPTl9SSUdIVCxcbiAgc25ha2VDb29yZHM6IFtbNCwgNV0sIFszLCA1XSwgWzIsIDVdLCBbMSwgNV1dLFxuICBmb29kQ29vcmRzOiBbXSxcbiAgZ2FtZU92ZXI6IHRydWUsXG4gIHNob3VsZEdlbmVyYXRlRm9vZDogdHJ1ZSxcbn07XG5cbi8vIGluaXQgbW9kZWxcbmNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbi8vIGluaXQgdmlld3NcbmNvbnN0IGNhbnZhc1ZpZXcgPSBuZXcgQ2FudmFzVmlldygpO1xuY29uc3Qgc3RhcnRCdXR0b25WaWV3ID0gbmV3IFN0YXJ0QnV0dG9uVmlldygpO1xuY29uc3Qgc2NvcmVWaWV3ID0gbmV3IFNjb3JlVmlldygpO1xuXG4vLyBpbml0IGNvbnRyb2xsZXJzXG5uZXcgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKHsgc3RhdGUgfSk7XG5jb25zdCBmb29kQ29udHJvbGxlciA9IG5ldyBGb29kQ29udHJvbGxlcih7IHN0YXRlLCBjYW52YXNWaWV3IH0pO1xuY29uc3Qgc25ha2VDb250cm9sbGVyID0gbmV3IFNuYWtlQ29udHJvbGxlcih7XG4gIHN0YXRlLFxuICBjYW52YXNWaWV3LFxuICBmb29kQ29udHJvbGxlcixcbn0pO1xuXG5jb25zdCBkcmF3Q2FudmFzID0gKCkgPT4ge1xuICBjYW52YXNWaWV3LmNsZWFyKCk7XG4gIGZvb2RDb250cm9sbGVyLmRyYXcoKTtcbiAgc25ha2VDb250cm9sbGVyLmRyYXcoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgc25ha2VDb250cm9sbGVyLmhhbmRsZVVwZGF0ZSgpO1xuXG4gIGNvbnN0IHsgc2NvcmUsIGdhbWVPdmVyIH0gPSBzdGF0ZS5nZXRTdGF0ZSgpO1xuXG4gIGZvb2RDb250cm9sbGVyLmhhbmRsZVVwZGF0ZSgpO1xuICBzY29yZVZpZXcucmVuZGVyKHNjb3JlKTtcblxuICBpZiAoZ2FtZU92ZXIpIHtcbiAgICBzdG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgZHJhd0NhbnZhcygpO1xuICB9XG59O1xuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgc3RhdGUuc2V0VG9Jbml0aWFsU3RhdGUoKTtcbiAgc3RhdGUuc2V0U3RhdGUoeyBnYW1lT3ZlcjogZmFsc2UgfSk7XG4gIHN0YXJ0QnV0dG9uVmlldy5zZXREaXNhYmxlZCgpO1xuICBmb29kQ29udHJvbGxlci5nZW5lcmF0ZUZvb2QoKTtcbiAgZHJhd0NhbnZhcygpO1xuICBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgSU5URVJWQUxfU1BFRUQpO1xufTtcblxuY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIHN0YXJ0QnV0dG9uVmlldy5zZXRBY3RpdmUoKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnQpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgQ0VMTF9XSURUSCxcbiAgQ0VMTF9IRUlHSFQsXG4gIEJPQVJEX1dJRFRILFxuICBCT0FSRF9IRUlHSFQsXG59IGZyb20gJy4uL2NvbnN0YW50cy9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICB0aGlzLmN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGRyYXdSZWN0KHgsIHksIGNvbG9yID0gJyMzMzMnKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoeCAqIENFTExfV0lEVEgsIHkgKiBDRUxMX0hFSUdIVCwgQ0VMTF9XSURUSCwgQ0VMTF9IRUlHSFQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIEJPQVJEX1dJRFRILCBCT0FSRF9IRUlHSFQpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9DYW52YXNWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0QnV0dG9uVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbiAgfVxuXG4gIHJlbmRlcihzY29yZSkge1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc2NvcmU7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL1Njb3JlVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEJ1dHRvblZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XG4gIH1cblxuICBzZXREaXNhYmxlZCgpIHtcbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSgpIHtcbiAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvU3RhcnRCdXR0b25WaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLnNldFRvSW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZU9iamVjdCkge1xuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBzdGF0ZU9iamVjdCk7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHNldFRvSW5pdGlhbFN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWxzL1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XG4gIEtFWUNPREVfQVJST1dfVVAsXG4gIEtFWUNPREVfQVJST1dfRE9XTixcbiAgS0VZQ09ERV9BUlJPV19MRUZULFxuICBLRVlDT0RFX0FSUk9XX1JJR0hULFxufSBmcm9tICcuLi9jb25zdGFudHMva2V5Y29kZXMnO1xuXG5pbXBvcnQge1xuICBESVJFQ1RJT05fVVAsXG4gIERJUkVDVElPTl9ET1dOLFxuICBESVJFQ1RJT05fTEVGVCxcbiAgRElSRUNUSU9OX1JJR0hULFxufSBmcm9tICcuLi9jb25zdGFudHMvZGlyZWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHsgc3RhdGUgfSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleXVwLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlS2V5dXAoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWUNPREVfQVJST1dfVVA6XG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09IERJUkVDVElPTl9ET1dOKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSh7IG5leHREaXJlY3Rpb246IERJUkVDVElPTl9VUCB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZQ09ERV9BUlJPV19ET1dOOlxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSBESVJFQ1RJT05fVVApIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKHsgbmV4dERpcmVjdGlvbjogRElSRUNUSU9OX0RPV04gfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWUNPREVfQVJST1dfTEVGVDpcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gRElSRUNUSU9OX1JJR0hUKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSh7IG5leHREaXJlY3Rpb246IERJUkVDVElPTl9MRUZUIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlDT0RFX0FSUk9XX1JJR0hUOlxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSBESVJFQ1RJT05fTEVGVCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoeyBuZXh0RGlyZWN0aW9uOiBESVJFQ1RJT05fUklHSFQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVycy9LZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEtFWUNPREVfQVJST1dfTEVGVCA9IDM3O1xuZXhwb3J0IGNvbnN0IEtFWUNPREVfQVJST1dfVVAgPSAzODtcbmV4cG9ydCBjb25zdCBLRVlDT0RFX0FSUk9XX1JJR0hUID0gMzk7XG5leHBvcnQgY29uc3QgS0VZQ09ERV9BUlJPV19ET1dOID0gNDA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25zdGFudHMva2V5Y29kZXMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgRElSRUNUSU9OX1VQLFxuICBESVJFQ1RJT05fRE9XTixcbiAgRElSRUNUSU9OX0xFRlQsXG4gIERJUkVDVElPTl9SSUdIVCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2RpcmVjdGlvbnMnO1xuXG5pbXBvcnQgeyBDRUxMX0NPVU5UX1gsIENFTExfQ09VTlRfWSB9IGZyb20gJy4uL2NvbnN0YW50cy9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSwgY2FudmFzVmlldyB9KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuY2FudmFzVmlldyA9IGNhbnZhc1ZpZXc7XG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSh7IGRpcmVjdGlvbjogdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLm5leHREaXJlY3Rpb24gfSk7XG4gICAgdGhpcy5tb3ZlKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIC8vIGFkZCBhIGJsb2NrIHRvIHRoZSBmcm9udCBvZiB0aGUgc25ha2UgaW4gdGhlIGRpcmVjdGlvbiB0aGF0IGl0IGlzIG1vdmluZy5cbiAgICB0aGlzLnN0YXRlLnNldFN0YXRlKHtcbiAgICAgIHNuYWtlQ29vcmRzOiB0aGlzLmFkZENvb3Jkc1RvRnJvbnQoKSxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmhhc0NvbGxpZGVkV2l0aFdhbGwoKSB8fCB0aGlzLmhhc0NvbGxpZGVkV2l0aFNlbGYoKSkge1xuICAgICAgdGhpcy5zdGF0ZS5zZXRTdGF0ZSh7IGdhbWVPdmVyOiB0cnVlIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb2xsaWRlZFdpdGhGb29kKCkpIHtcbiAgICAgIC8vIHdoZW4gdGhlIHNuYWtlIGNvbGxpZGVzIHdpdGggZm9vZCwgd2UgbGVhdmUgdGhlIGxhc3QgYmxvY2sgb2YgdGhlIHNuYWtlXG4gICAgICAvLyBpbiBwbGFjZSBzbyB0aGF0IGl0IGdyb3dzIGJ5IDEuXG4gICAgICB0aGlzLnN0YXRlLnNldFN0YXRlKHtcbiAgICAgICAgc2hvdWxkR2VuZXJhdGVGb29kOiB0cnVlLFxuICAgICAgICBzY29yZTogdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLnNjb3JlICsgMSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHNuYWtlIGhhcyBub3QgY29sbGlkZWQgd2l0aCBhIHdhbGwsIGl0c2VsZiBvciBmb29kLlxuICAgICAgLy8gd2UgbmVlZCB0byByZW1vdmUgdGhlIGxhc3QgYmxvY2sgZnJvbSB0aGUgZW5kIG9mIHRoZSBzbmFrZS5cbiAgICAgIGNvbnN0IHsgc25ha2VDb29yZHMgfSA9IHRoaXMuc3RhdGUuZ2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoe1xuICAgICAgICBzbmFrZUNvb3Jkczogc25ha2VDb29yZHMuc2xpY2UoMCwgc25ha2VDb29yZHMubGVuZ3RoIC0gMSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGcm9udENvb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLnNuYWtlQ29vcmRzWzBdO1xuICB9XG5cbiAgaGFzQ29sbGlkZWRXaXRoRm9vZCgpIHtcbiAgICBjb25zdCBbc25ha2VYLCBzbmFrZVldID0gdGhpcy5nZXRGcm9udENvb3JkcygpO1xuICAgIGNvbnN0IFtmb29kWCwgZm9vZFldID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLmZvb2RDb29yZHM7XG5cbiAgICByZXR1cm4gZm9vZFggPT09IHNuYWtlWCAmJiBmb29kWSA9PT0gc25ha2VZO1xuICB9XG5cbiAgaGFzQ29sbGlkZWRXaXRoV2FsbCgpIHtcbiAgICBjb25zdCBbZnJvbnRYLCBmcm9udFldID0gdGhpcy5nZXRGcm9udENvb3JkcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGZyb250WCA8IDAgfHxcbiAgICAgIGZyb250WCA+IENFTExfQ09VTlRfWCAtIDEgfHwgLy8gLTEgZHVlIHRvIHplcm8gaW5kZXhcbiAgICAgIGZyb250WSA8IDAgfHxcbiAgICAgIGZyb250WSA+IENFTExfQ09VTlRfWSAtIDEgLy8gLTEgZHVlIHRvIHplcm8gaW5kZXhcbiAgICApO1xuICB9XG5cbiAgaGFzQ29sbGlkZWRXaXRoU2VsZigpIHtcbiAgICBjb25zdCB7IHNuYWtlQ29vcmRzIH0gPSB0aGlzLnN0YXRlLmdldFN0YXRlKCk7XG4gICAgY29uc3QgW2Zyb250WCwgZnJvbnRZXSA9IHRoaXMuZ2V0RnJvbnRDb29yZHMoKTtcblxuICAgIHJldHVybiAhIXNuYWtlQ29vcmRzXG4gICAgICAvLyBnZXQgdGhlIHJlc3Qgb2YgdGhlIHNuYWtlIHdpdGhvdXQgdGhlIGZyb250XG4gICAgICAuc2xpY2UoMSwgc25ha2VDb29yZHMubGVuZ3RoKVxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGZyb250IG9mIHRoZSBzbmFrZSdzIGNvb3JkcyA9PT0gYW55IG90aGVyIHBhcnQgb2YgdGhlIHNuYWtlXG4gICAgICAuZmluZCgoW3gsIHldKSA9PiB4ID09PSBmcm9udFggJiYgeSA9PT0gZnJvbnRZKTtcbiAgfVxuXG4gIGFkZENvb3Jkc1RvRnJvbnQoKSB7XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIHNuYWtlQ29vcmRzIH0gPSB0aGlzLnN0YXRlLmdldFN0YXRlKCk7XG4gICAgY29uc3QgZnJvbnRDb29yZHMgPSBzbmFrZUNvb3Jkc1swXTtcblxuICAgIC8vIGFkZCBhIGNvb3JkIHRvIHRoZSBmcm9udCBvZiB0aGUgc25ha2UgYmFzZWQgb24gdGhlIGRpcmVjdGlvbiBpdCBpcyBtb3ZpbmdcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBESVJFQ1RJT05fVVA6XG4gICAgICAgIHJldHVybiBbW2Zyb250Q29vcmRzWzBdLCBmcm9udENvb3Jkc1sxXSAtIDFdLCAuLi5zbmFrZUNvb3Jkc107XG4gICAgICBjYXNlIERJUkVDVElPTl9ET1dOOlxuICAgICAgICByZXR1cm4gW1tmcm9udENvb3Jkc1swXSwgZnJvbnRDb29yZHNbMV0gKyAxXSwgLi4uc25ha2VDb29yZHNdO1xuICAgICAgY2FzZSBESVJFQ1RJT05fTEVGVDpcbiAgICAgICAgcmV0dXJuIFtbZnJvbnRDb29yZHNbMF0gLSAxLCBmcm9udENvb3Jkc1sxXV0sIC4uLnNuYWtlQ29vcmRzXTtcbiAgICAgIGNhc2UgRElSRUNUSU9OX1JJR0hUOlxuICAgICAgICByZXR1cm4gW1tmcm9udENvb3Jkc1swXSArIDEsIGZyb250Q29vcmRzWzFdXSwgLi4uc25ha2VDb29yZHNdO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLnNuYWtlQ29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgdGhpcy5jYW52YXNWaWV3LmRyYXdSZWN0KC4uLmNvb3JkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udHJvbGxlcnMvU25ha2VDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENFTExfQ09VTlRfWCwgQ0VMTF9DT1VOVF9ZIH0gZnJvbSAnLi4vY29uc3RhbnRzL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHsgc3RhdGUsIGNhbnZhc1ZpZXcgfSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmNhbnZhc1ZpZXcgPSBjYW52YXNWaWV3O1xuICB9XG5cbiAgZ2VuZXJhdGVGb29kKCkge1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldEVtcHR5Q2VsbCgpO1xuICAgIHRoaXMuc3RhdGUuc2V0U3RhdGUoeyBmb29kQ29vcmRzOiBjZWxsLCBzaG91bGRHZW5lcmF0ZUZvb2Q6IGZhbHNlIH0pO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNhbnZhc1ZpZXcuZHJhd1JlY3QoLi4udGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLmZvb2RDb29yZHMsICcjMjA5NjIwJyk7XG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2V0U3RhdGUoKS5zaG91bGRHZW5lcmF0ZUZvb2QpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVGb29kKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RW1wdHlDZWxsKCkge1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldFJhbmRvbUNlbGwoKTtcbiAgICBpZiAodGhpcy5pc09jY3VwaWVkQ2VsbCguLi5jZWxsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlDZWxsKCk7XG4gICAgfVxuICAgIHJldHVybiBjZWxsO1xuICB9XG5cbiAgaXNPY2N1cGllZENlbGwoeCwgeSkge1xuICAgIGNvbnN0IHNuYWtlQ29vcmRzID0gdGhpcy5zdGF0ZS5nZXRTdGF0ZSgpLnNuYWtlQ29vcmRzO1xuICAgIHJldHVybiBzbmFrZUNvb3Jkcy5maW5kKFxuICAgICAgKFtzbmFrZUNlbGxYLCBzbmFrZUNlbGxZXSkgPT4geCA9PT0gc25ha2VDZWxsWCAmJiB5ID09PSBzbmFrZUNlbGxZXG4gICAgKTtcbiAgfVxuXG4gIGdldFJhbmRvbUNlbGwoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENFTExfQ09VTlRfWCksXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDRUxMX0NPVU5UX1kpLFxuICAgIF07XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXJzL0Zvb2RDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9