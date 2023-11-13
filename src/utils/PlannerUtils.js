import MEMU from '../constants/Menu.js';

class PlannerUtils {
  static calculateChristmasDiscount(day) {
    return 900 + day * 100;
  }

  static seperateOrdersByComma(orderInput) {
    const order = orderInput.split(',');
    return order;
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

  static getMenuList() {
    const apitager = Object.entries(MEMU.애피타이저).toString();
    const dessert = Object.entries(MEMU.디저트).toString();
    const main = Object.entries(MEMU.메인).toString();
    const drink = Object.entries(MEMU.음료).toString();

    const inMenu = [apitager, dessert, main, drink].join();
    return this.seperateOrdersByComma(inMenu);
  }

  static checkDuplicateInList(list, element) {
    return list.indexOf(element) !== list.lastIndexOf(element);
  }
}

export default PlannerUtils;
