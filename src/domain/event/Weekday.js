import { DISCOUNT_AMOUNT, NONE } from '../../constants/Discount.js';
import EVENT_NAME from '../../constants/EventName.js';
import { DESSERT } from '../../constants/Menu.js';

class Weekday {
  static name() {
    return EVENT_NAME.WEEKDAY;
  }

  static apply(visitDay, order) {
    if (visitDay.isWeekend()) {
      return NONE;
    }

    const count = order.getCategoryCountInOrder(DESSERT);
    return this.#discount(count);
  }

  static #discount(dessertCount) {
    const discount = dessertCount * DISCOUNT_AMOUNT;
    return discount;
  }
}

export default Weekday;
