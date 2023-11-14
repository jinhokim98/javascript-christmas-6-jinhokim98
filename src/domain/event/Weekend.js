import { DISCOUNT_AMOUNT, NONE } from '../../constants/Discount.js';
import { MAIN } from '../../constants/MenuCategory.js';

class Weekend {
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
