export default class State {
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
