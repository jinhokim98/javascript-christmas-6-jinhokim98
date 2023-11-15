import {
  DDAY_BASIC_DISCOUNT,
  INCREASE_DISCOUNT_PER_DAY,
  NONE,
} from '../../constants/Discount.js';
import EVENT_NAME from '../../constants/EventName.js';

export const CHRISTMAS = new Date('2023-12-25');

class ChristmasDDay {
  static name() {
    return EVENT_NAME.CHRISTMAS_D_DAY;
  }

  static apply(visitDay) {
    if (visitDay.getVisitDay() > CHRISTMAS.getDate()) {
      return NONE;
    }

    return ChristmasDDay.#discount(visitDay);
  }

  static #discount(visitDay) {
    const discount =
      DDAY_BASIC_DISCOUNT + visitDay.getVisitDay() * INCREASE_DISCOUNT_PER_DAY;
    return discount;
  }
}

export default ChristmasDDay;
