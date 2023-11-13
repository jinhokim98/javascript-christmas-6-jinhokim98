class EventStatistics {
  #customersInfo;

  constructor() {
    this.#customersInfo = [];
  }

  enrollCustomer(customer) {
    this.#customersInfo.push(customer);
  }
}

export default EventStatistics;
