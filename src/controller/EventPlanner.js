import VisitDay from '../domain/VisitDay.js';

import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import repeatUntilValidInput from '../utils/RepeatUntilValidInput.js';

class EventPlanner {
  async init() {
    EventPlanner.start();
    const visitDay = await repeatUntilValidInput(this.inputVisitDay);
  }

  static start() {
    OutputView.printWelcome();
  }

  async inputVisitDay() {
    const inputVisitDay = await InputView.readDate();
    const visitDay = new VisitDay(inputVisitDay);

    return visitDay;
  }
}

export default EventPlanner;
