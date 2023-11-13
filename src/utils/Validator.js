import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PlannerUtils from './PlannerUtils.js';
import MAX_ORDER from '../constants/MaxOrder.js';

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

  static isNaturalNumber(orders) {
    const menusCount = PlannerUtils.seperateMenuCountFromOrder(orders);

    this.findInvalidOrder(menusCount, (menuCount) => menuCount <= 0);
  }

  static isNotMoreThanTwentyOrder(orders) {
    const menusCount = PlannerUtils.seperateMenuCountFromOrder(orders);
    const sumMenusCount = menusCount.reduce((acc, cur) => acc + Number(cur), 0);

    if (sumMenusCount > MAX_ORDER) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }

  static isNotOnlyDrink(orders) {
    const menus = PlannerUtils.seperateMenuFromOrder(orders);
    const dessertMenu = PlannerUtils.getDrinkMenu();

    if (menus.every((menu) => dessertMenu.includes(menu))) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }

  static findInvalidOrder(orders, condition) {
    if (orders.find((order) => condition(order)) !== undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}

export default Validator;
