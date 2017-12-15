import CanvasView from './views/CanvasView';
import ScoreView from './views/ScoreView';
import StartButtonView from './views/StartButtonView';

import State from './models/State';
import KeyboardEventsController from './controllers/KeyboardEventsController';
import SnakeController from './controllers/SnakeController';
import FoodController from './controllers/FoodController';

import { INTERVAL_SPEED } from './constants/game';
import { DIRECTION_RIGHT } from './constants/directions';

let interval;

const initialState = {
  score: 0,
  nextDirection: DIRECTION_RIGHT,
  direction: DIRECTION_RIGHT,
  snakeCoords: [[4, 5], [3, 5], [2, 5], [1, 5]],
  foodCoords: [],
  gameOver: true,
  shouldGenerateFood: true,
};

// init model
const state = new State(initialState);

// init views
const canvasView = new CanvasView();
const startButtonView = new StartButtonView();
const scoreView = new ScoreView();

// init controllers
new KeyboardEventsController({ state });
const foodController = new FoodController({ state, canvasView });
const snakeController = new SnakeController({
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
  interval = setInterval(update, INTERVAL_SPEED);
};

const stop = () => {
  clearInterval(interval);
  startButtonView.setActive();
};

document.querySelector('.startBtn').addEventListener('click', start);
