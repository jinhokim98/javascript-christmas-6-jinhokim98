class EventStatistics {
  #customersInfo;

  constructor() {
    this.#customersInfo = [];
  }

  enrollCustomer(customer) {
    this.#customersInfo.push(customer);
  }

  // 12월 총 판매 금액 (할인 후 금액) 통계
  calculateSalesPerformanceThisEvent() {
    if (this.#customersInfo.length <= 0) return null;

    return this.#customersInfo.reduce(
      (acc, customer) => acc + customer.getTotalBillAfterDiscount(),
      0,
    );
  }

  // 고객 별 배지발급 현황 (새해 이벤트 때 활용하기 위해)
  putTogetherTotalIssuedBadge() {
    if (this.#customersInfo.length <= 0) return null;

    const totalIssuedBadge = [];

    this.#customersInfo.forEach((customer) => {
      totalIssuedBadge.push({ customer, badge: customer.loadEventBadge() });
    });

    return totalIssuedBadge;
  }
}

export default EventStatistics;
