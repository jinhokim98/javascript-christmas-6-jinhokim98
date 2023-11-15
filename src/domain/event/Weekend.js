import { DISCOUNT_AMOUNT, NONE } from '../../constants/Discount.js';
import EVENT_NAME from '../../constants/EventName.js';
import { MAIN } from '../../constants/Menu.js';

class Weekend {
  static name() {
    return EVENT_NAME.WEEKEND;
  }

  static apply(visitDay, order) {
    if (!visitDay.isWeekend()) {
      return NONE;
    }

    const count = order.getCategoryCountInOrder(MAIN);
    return this.#discount(count);
  }

  static #discount(dessertCount) {
    const discount = dessertCount * DISCOUNT_AMOUNT;
    return discount;
  }
}

export default Weekend;
