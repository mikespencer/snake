import {
  DIRECTION_UP,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
} from '../constants/directions';

import { CELL_COUNT_X, CELL_COUNT_Y } from '../constants/game';

export default class SnakeController {
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
      frontX > CELL_COUNT_X - 1 || // -1 due to zero index
      frontY < 0 ||
      frontY > CELL_COUNT_Y - 1 // -1 due to zero index
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
      case DIRECTION_UP:
        return [[frontCoords[0], frontCoords[1] - 1], ...snakeCoords];
      case DIRECTION_DOWN:
        return [[frontCoords[0], frontCoords[1] + 1], ...snakeCoords];
      case DIRECTION_LEFT:
        return [[frontCoords[0] - 1, frontCoords[1]], ...snakeCoords];
      case DIRECTION_RIGHT:
        return [[frontCoords[0] + 1, frontCoords[1]], ...snakeCoords];
    }
  }

  draw() {
    this.state.getState().snakeCoords.forEach(coord => {
      this.canvasView.drawRect(...coord);
    });
  }
}
