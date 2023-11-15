import Customer from "../../src/domain/Customer";
import Order from "../../src/domain/Order";
import VisitDay from "../../src/domain/VisitDay";

describe('고객 테스트', () => {
  describe('할인 테스트', () => {
    test('총 주문 금액이 10000원 미만일 때 이벤트를 적용받지 못한다.', () => {
      // given
      const VISIT_DAY = 12;
      const ORDER_MENU = '타파스-1';
      const ANSWER = 0;

      // when
      const customer = new Customer(VISIT_DAY);
      customer.completeOrder(new Order(ORDER_MENU));
      customer.giveDuplicateDiscount();

      // then
      expect(customer.getTotalBenefitsAmount()).toEqual(ANSWER);
    });

    const INPUTS = [['12', '해산물파스타-2,아이스크림-1', 4123], ['25', '바비큐립-1,레드와인-1,초코케이크-2', 33446], ['30', '바비큐립-2', 4046]];
    test.each(INPUTS)('총 혜택 금액 검증하기', (day, order, answer) => {
      // given
      const VISIT_DAY = new VisitDay(day);
      const ORDER_MENU = order;
      const ANSWER = answer;

      // when
      const customer = new Customer(VISIT_DAY);
      customer.completeOrder(new Order(ORDER_MENU));
      customer.giveDuplicateDiscount();

      expect(customer.getTotalBenefitsAmount()).toEqual(ANSWER);
    });
  });
});
