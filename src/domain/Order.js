import MEMU from '../constants/Menu.js';
import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';

class Order {
  #order;

  constructor(menus) {
    const orderInput = PlannerUtils.seperateByComma(menus);
    Order.#validate(orderInput);

    const order = new Map();

    orderInput.forEach((menu) => {
      const [dish, count] = menu.split('-');
      order.set(dish, Number(count));
    });

    this.#order = order;
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

  calculateTotalBill() {
    let totalBill = 0;

    this.#order.forEach((count, menu) => {
      totalBill += PlannerUtils.findPrice(menu) * count;
    });

    return totalBill;
  }
}

export default Order;
