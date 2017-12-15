export default class StartButtonView {
  constructor() {
    this.el = document.querySelector('.score');
  }

  render(score) {
    this.el.innerHTML = score;
  }
}
