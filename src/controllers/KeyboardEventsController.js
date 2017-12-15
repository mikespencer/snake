import {
  KEYCODE_ARROW_UP,
  KEYCODE_ARROW_DOWN,
  KEYCODE_ARROW_LEFT,
  KEYCODE_ARROW_RIGHT,
} from '../constants/keycodes';

import {
  DIRECTION_UP,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
} from '../constants/directions';

export default class KeyboardEventsController {
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
      case KEYCODE_ARROW_UP:
        if (direction !== DIRECTION_DOWN) {
          this.state.setState({ nextDirection: DIRECTION_UP });
        }
        break;
      case KEYCODE_ARROW_DOWN:
        if (direction !== DIRECTION_UP) {
          this.state.setState({ nextDirection: DIRECTION_DOWN });
        }
        break;
      case KEYCODE_ARROW_LEFT:
        if (direction !== DIRECTION_RIGHT) {
          this.state.setState({ nextDirection: DIRECTION_LEFT });
        }
        break;
      case KEYCODE_ARROW_RIGHT:
        if (direction !== DIRECTION_LEFT) {
          this.state.setState({ nextDirection: DIRECTION_RIGHT });
        }
        break;
    }
  }
}
