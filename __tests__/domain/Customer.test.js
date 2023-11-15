import Customer from "../../src/domain/Customer";
import Order from "../../src/domain/Order";

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
  });
});
