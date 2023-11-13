import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PlannerUtils from './PlannerUtils.js';
import MEMU from '../constants/Menu.js';

class Validator {
  static isNotEmpty(input) {
    if (input.length <= 0) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static isOnlyNumber(input) {
    const regEx = /^\d+$/;

    if (!regEx.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_DAY);
    }
  }

  static isDayFormat(input) {
    const regEx = /^(?:[1-9]|[12][0-9]|3[0-1])$/;

    if (!regEx.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_DAY);
    }
  }

  static isNotIncludeEmptyOrder(orders) {
    this.findInvalidOrder(orders, (order) => order.length <= 0);
  }

  static isValidOrderForm(orders) {
    const orderForm = /^[가-힣]+-\d+$/;

    this.findInvalidOrder(orders, (order) => !orderForm.test(order));
  }

  static isInMenu(orders) {
    const menus = PlannerUtils.seperateMenuFromOrder(orders);
    const menuList = PlannerUtils.getMenuList();

    this.findInvalidOrder(menus, (menu) =>
      PlannerUtils.checkInMenuList(menu, menuList),
    );
  }

  static isNotDuplicateMenu(orders) {
    const menus = PlannerUtils.seperateMenuFromOrder(orders);

    this.findInvalidOrder(menus, (menu) =>
      PlannerUtils.checkDuplicateInList(menus, menu),
    );
  }

  static findInvalidOrder(orders, condition) {
    if (orders.find((order) => condition(order)) !== undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}

export default Validator;
