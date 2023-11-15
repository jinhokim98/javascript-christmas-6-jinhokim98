import { NONE, SPECIFIC_DISCOUNT_AMOUNT } from '../../constants/Discount.js';
import EVENT_NAME from '../../constants/EventName.js';

export const DAY_OF_WEEK = {
  SUNDAY: 0,
  FRIDAY: 5,
  SATURDAY: 6,
};

class Specific {
  static name() {
    return EVENT_NAME.SPECIFIC;
  }

  static apply(visitDay) {
    if (!visitDay.isSpecificDay()) {
      return NONE;
    }

    return this.#discount();
  }

  static #discount() {
    return SPECIFIC_DISCOUNT_AMOUNT;
  }
}

export default Specific;
