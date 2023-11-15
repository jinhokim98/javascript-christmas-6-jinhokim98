import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';

import { CHRISTMAS } from './event/ChristmasDDay.js';
import { DAY_OF_WEEK } from './event/Specific.js';

const DECEMBER = '2023-12';

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

  isWeekend() {
    const dayOfWeek = this.#visitDay.getDay();
    return (
      dayOfWeek === DAY_OF_WEEK.FRIDAY || dayOfWeek === DAY_OF_WEEK.SATURDAY
    );
  }

  isSpecificDay() {
    const isSunday = this.#visitDay.getDay() === DAY_OF_WEEK.SUNDAY;
    const isChristmas = this.#visitDay.getDate() === CHRISTMAS.getDate();

    return isSunday || isChristmas;
  }
}

export default VisitDay;
