export default class StartButtonView {
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
