import VisitDay from '../domain/VisitDay.js';
import Customer from '../domain/Customer.js';
import Order from '../domain/Order.js';

import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import repeatUntilValidInput from '../utils/RepeatUntilValidInput.js';

class EventPlanner {
  async init(eventStatistics) {
    EventPlanner.start();
    const visitDay = await repeatUntilValidInput(this.inputVisitDay);
    const customer = new Customer(visitDay);
    const order = await repeatUntilValidInput(this.inputOrder);
    customer.completeOrder(order);
    eventStatistics.enrollCustomer(customer);
  }

  static start() {
    OutputView.printWelcome();
  }

  async inputVisitDay() {
    const inputVisitDay = await InputView.readDate();
    const visitDay = new VisitDay(inputVisitDay);

    return visitDay;
  }

  async inputOrder() {
    const inputOrder = await InputView.readOrder();
    const order = new Order(inputOrder);
    return order;
  }
}

export default EventPlanner;
