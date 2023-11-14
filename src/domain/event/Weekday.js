import { DISCOUNT_AMOUNT, NONE } from '../../constants/Discount.js';
import { DESSERT } from '../../constants/MenuCategory.js';

class Weekday {
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
