import EventStatistics from "../src/EventStatistics";
import Customer from "../src/domain/Customer.js";
import Order from "../src/domain/Order";
import VisitDay from "../src/domain/VisitDay.js";

describe('이벤트 통계 테스트', () => {
  describe('12월 총 판매금액 테스트', () => {
    test('12월 25일에 세 고객이 방문하여 식사를 할 때, 총 판매 금액(할인 후 금액)을 출력해보자.', () => {
      // given
      const VISIT_dAY = new VisitDay(25);
      const POBI = new Customer(VISIT_dAY);
      const RUPEE = new Customer(VISIT_dAY);
      const CRONG = new Customer(VISIT_dAY);

      const POBI_ORDER = new Order('크리스마스파스타-2,타파스-1,레드와인-1');
      const RUPEE_ORDER = new Order('바비큐립-1,양송이수프-1,해산물파스타-1');
      const CRONG_ORDER = new Order('티본스테이크-1,제로콜라-1,시저샐러드-1');

      const ANSWER = 263300;
      
      // when
      POBI.completeOrder(POBI_ORDER);
      RUPEE.completeOrder(RUPEE_ORDER);
      CRONG.completeOrder(CRONG_ORDER);

      POBI.giveDuplicateDiscount();
      RUPEE.giveDuplicateDiscount();
      CRONG.giveDuplicateDiscount();

      const eventStatistics = new EventStatistics();

      eventStatistics.enrollCustomer(POBI);
      eventStatistics.enrollCustomer(RUPEE);
      eventStatistics.enrollCustomer(CRONG);

      // then
      expect(eventStatistics.calculateSalesPerformanceThisEvent()).toEqual(ANSWER);
    });
  });
  describe('고객 별 배지발급 현황 테스트', () => {
    test('12월 25일에 세 고객이 방문하여 식사를 할 때, 고객의 배지발급 현황을 확인해보자', () => {
      // given
      const VISIT_dAY = new VisitDay(25);
      const POBI = new Customer(VISIT_dAY);
      const RUPEE = new Customer(VISIT_dAY);
      const CRONG = new Customer(VISIT_dAY);

      const POBI_ORDER = new Order('크리스마스파스타-2,아이스크림-1,레드와인-1');
      const RUPEE_ORDER = new Order('티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1');
      const CRONG_ORDER = new Order('티본스테이크-1,제로콜라-1,시저샐러드-1');

      const ANSWER = [{customer: POBI, badge: '별'}, {customer: RUPEE, badge: '산타'}, {customer: CRONG, badge: undefined}];
      
      // when
      POBI.completeOrder(POBI_ORDER);
      RUPEE.completeOrder(RUPEE_ORDER);
      CRONG.completeOrder(CRONG_ORDER);

      POBI.giveDuplicateDiscount();
      RUPEE.giveDuplicateDiscount();
      CRONG.giveDuplicateDiscount();

      POBI.issueBadge();
      RUPEE.issueBadge();
      CRONG.issueBadge();

      const eventStatistics = new EventStatistics();

      eventStatistics.enrollCustomer(POBI);
      eventStatistics.enrollCustomer(RUPEE);
      eventStatistics.enrollCustomer(CRONG);

      // then
      expect(eventStatistics.putTogetherTotalIssuedBadge()).toEqual(ANSWER);
    });
  });
});
