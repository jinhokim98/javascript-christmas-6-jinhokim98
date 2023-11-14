import MEMU from '../constants/Menu.js';

class PlannerUtils {
  static seperateByComma(input) {
    const seperated = input.split(',');
    return seperated;
  }

  static seperateMenuFromOrder(orders) {
    return orders.map((order) => order.split('-')[0]);
  }

  static seperateMenuCountFromOrder(orders) {
    return orders.map((order) => order.split('-')[1]);
  }

  static checkInMenuList(menu, menuList) {
    return !menuList.find((inMenu) => menu === inMenu);
  }

  static checkOnlyOneCategoryMenu(menu, menuList) {
    return menuList.find((inMenu) => menu !== inMenu);
  }

  static getMenuList() {
    const apitager = Object.entries(MEMU.애피타이저).toString();
    const dessert = Object.entries(MEMU.디저트).toString();
    const main = Object.entries(MEMU.메인).toString();
    const drink = Object.entries(MEMU.음료).toString();

    const inMenu = [apitager, dessert, main, drink].join();
    return this.seperateByComma(inMenu);
  }

  static getDrinkMenu() {
    const dessert = Object.entries(MEMU.음료).toString();
    return this.seperateByComma(dessert);
  }

  static findPrice(menu) {
    const menus = Object.entries(MEMU);
    const foundCategory = menus.find((category) => menu in category[1]);

    return foundCategory[1][menu];
  }

  static findCategory(menu) {
    const menus = Object.entries(MEMU);
    const foundCategory = menus.find((category) => menu in category[1]);

    return foundCategory[0];
  }

  static counter(element, list) {
    const countNumber = list.reduce(
      (count, cur) => this.#counterPlus(element, count, cur),
      0,
    );

    return countNumber;
  }

  static #counterPlus(element, count, cur) {
    if (element === cur) {
      return count + 1;
    }
    return count;
  }

  static checkDuplicateInList(list, element) {
    return list.indexOf(element) !== list.lastIndexOf(element);
  }

  static fixDateFormat(visitDay) {
    if (visitDay < 10) {
      return `0${visitDay}`;
    }
    return `${visitDay}`;
  }
}

export default PlannerUtils;
