import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';

class Order {
  #menus;

  constructor(menus) {
    const orders = PlannerUtils.seperateByComma(menus);
    Order.#validate(orders);
    this.#menus = menus;
  }

  static #validate(orders) {
    Validator.isNotIncludeEmptyOrder(orders);
    Validator.isValidOrderForm(orders);

    Validator.isInMenu(orders);
    Validator.isNotDuplicateMenu(orders);

    Validator.isNaturalNumber(orders);
    Validator.isNotMoreThanTwentyOrder(orders);

    Validator.isNotOnlyDrink(orders);
  }
}

export default Order;
