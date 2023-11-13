class PlannerUtils {
  static calculateChristmasDiscount(day) {
    return 900 + day * 100;
  }

  static seperateOrdersByComma(orderInput) {
    const order = orderInput.split(',');
    return order;
  }
}

export default PlannerUtils;
