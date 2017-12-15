import { CELL_COUNT_X, CELL_COUNT_Y } from '../constants/game';

export default class FoodController {
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
      Math.floor(Math.random() * CELL_COUNT_X),
      Math.floor(Math.random() * CELL_COUNT_Y),
    ];
  }
}
