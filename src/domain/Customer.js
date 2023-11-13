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
}

export default Customer;
