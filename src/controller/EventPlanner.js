import OutputView from '../view/OutputView.js';

class EventPlanner {
  async init() {
    EventPlanner.start();
  }

  static start() {
    OutputView.printWelcome();
  }
}

export default EventPlanner;
