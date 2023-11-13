import Validator from '../utils/Validator.js';

class VisitDay {
  #visitDay;

  constructor(visitDay) {
    VisitDay.#validate(visitDay);
    this.#visitDay = visitDay;
  }

  static #validate(visitDay) {
    Validator.isNotEmpty(visitDay);
  }

  getVisitDay() {
    return this.#visitDay;
  }
}

export default VisitDay;
