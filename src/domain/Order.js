import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';

class Order {
  #menus;

  constructor(menus) {
    const orders = PlannerUtils.seperateOrdersByComma(menus);
    Order.#validate(orders);
    this.#menus = menus;
  }

  static #validate(orders) {
    Validator.isNotIncludeEmptyOrder(orders);
    Validator.isValidOrderForm(orders);
  }
}

export default Order;
