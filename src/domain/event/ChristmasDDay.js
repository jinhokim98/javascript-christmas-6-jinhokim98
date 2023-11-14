import { CHRISTMAS } from '../../constants/Day.js';
import {
  DDAY_BASIC_DISCOUNT,
  INCREASE_DISCOUNT_PER_DAY,
  NONE,
} from '../../constants/Discount.js';

class ChristmasDDAy {
  static apply(visitDay) {
    if (visitDay.getVisitDay() > CHRISTMAS.getDate()) {
      return NONE;
    }

    return ChristmasDDAy.#discount(visitDay);
  }

  static #discount(visitDay) {
    const discount =
      DDAY_BASIC_DISCOUNT + visitDay.getVisitDay() * INCREASE_DISCOUNT_PER_DAY;
    return discount;
  }
}

export default ChristmasDDAy;
