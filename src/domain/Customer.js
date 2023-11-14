import { MIN_BILL_FOR_APPLY_EVENT, NONE } from '../constants/Discount.js';
import ChristmasDDAy from './event/ChristmasDDay.js';
import Weekday from './event/Weekday.js';
import Weekend from './event/Weekend.js';
import Specific from './event/Specific.js';
import Gift from './event/Gift.js';

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

    const christmasDDayDiscount = ChristmasDDAy.apply(this.#visitDay);
    const weekdayDiscount = Weekday.apply(this.#visitDay, this.#order);
    const weekendDiscount = Weekend.apply(this.#visitDay, this.#order);
    const specificDiscount = Specific.apply(this.#visitDay);
    const gift = Gift.apply(this.getTotalBill());
  }
}

export default Customer;
