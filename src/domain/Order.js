import PlannerUtils from '../utils/PlannerUtils.js';
import Validator from '../utils/Validator.js';
import FORMATTING_MESSAGE from '../constants/FormatMessage.js';

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
    Validator.isOrLessThanMaximunOrder(orders);

    Validator.isNotOnlyDrink(orders);
  }

  calculateTotalBill() {
    let totalBill = 0;

    this.#order.forEach((count, menu) => {
      totalBill += PlannerUtils.findPrice(menu) * count;
    });

    return totalBill;
  }

  getCategoryCountInOrder(category) {
    const categories = Array.from(this.#order.keys()).map((menu) =>
      PlannerUtils.findCategory(menu),
    );

    const menuCount = Array.from(this.#order.values());

    const count = PlannerUtils.counter(category, categories, menuCount);
    return count;
  }

  getOrderMenus() {
    return Array.from(this.#order.entries()).map(([menu, count]) =>
      FORMATTING_MESSAGE.menuAndCount(menu, count),
    );
  }
}

export default Order;
