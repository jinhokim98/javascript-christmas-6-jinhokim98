import { DECEMBER } from '../constants/Day.js';
import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';

class VisitDay {
  #visitDay;

  constructor(visitDay) {
    VisitDay.#validate(visitDay);

    this.#visitDay = new Date(
      `${DECEMBER}-${PlannerUtils.fixDateFormat(visitDay)}`,
    );
  }

  static #validate(visitDay) {
    Validator.isNotEmpty(visitDay);
    Validator.isOnlyNumber(visitDay);
    Validator.isDayFormat(visitDay);
  }

  getVisitDay() {
    return this.#visitDay.getDate();
  }
}

export default VisitDay;
