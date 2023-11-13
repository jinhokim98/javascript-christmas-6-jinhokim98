import { MIN_BILL_FOR_APPLY_EVENT, NONE } from '../constants/Discount.js';

class Customer {
  #visitDay;

  #order;

  constructor(visitDay) {
    this.#visitDay = visitDay;
  }

  completeOrder(order) {
    this.#order = order;
  }

  getTotalBill() {
    return this.#order.calculateTotalBill();
  }

  giveDuplicateDiscount() {
    const totalBill = this.getTotalBill();

    if (totalBill < MIN_BILL_FOR_APPLY_EVENT) {
      return NONE;
    }
  }
}

export default Customer;
