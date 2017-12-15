import {
  CELL_WIDTH,
  CELL_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT,
} from '../constants/game';

export default class CanvasView {
  constructor() {
    const canvasElement = document.querySelector('.board');
    this.ctx = canvasElement.getContext('2d');
  }

  drawRect(x, y, color = '#333') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * CELL_WIDTH, y * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
  }

  clear() {
    this.ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
  }
}
