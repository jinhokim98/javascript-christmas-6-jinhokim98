import Order from "../../src/domain/Order.js";
import VisitDay from "../../src/domain/VisitDay";
import ChristmasDDay from "../../src/domain/event/ChristmasDDay.js";
import Specific from "../../src/domain/event/Specific.js";
import Weekday from "../../src/domain/event/Weekday.js";
import Weekend from "../../src/domain/event/Weekend.js";

describe('이벤트 테스트', () => {
  describe('크리스마스 디데이 할인 테스트', () => {
    test('26일에 방문할 경우 디데이 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(26);
      const ANSWER = 0;

      // when
      const applied = ChristmasDDay.apply(VISIT_DAY)

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('25일에 방문할 경우 디데이 할인은 3400원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(25);
      const ANSWER = 3400;

      // when
      const applied = ChristmasDDay.apply(VISIT_DAY)

      // then
      expect(applied).toEqual(ANSWER);
    });
  });
  describe('평일 할인 테스트', () => {
    test('주말에 방문할 경우 평일 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(23);
      const ORDER = new Order('타파스-1,초코케이크-2')
      const ANSWER = 0;

      // when
      const applied = Weekday.apply(VISIT_DAY, ORDER);

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('평일에 방문했지만 주문 중에 디저트가 없으면 평일 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(27);
      const ORDER = new Order('타파스-1,바비큐립-2');
      const ANSWER = 0;

      // when
      const applied = Weekday.apply(VISIT_DAY, ORDER);

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('평일에 방문했고 초코케이크 1개가 포함되면 할인 금액은 2023원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(27);
      const ORDER = new Order('타파스-1,초코케이크-1');
      const ANSWER = 2023;

      // when
      const applied = Weekday.apply(VISIT_DAY, ORDER);

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('평일에 방문했고 초코케이크 2개가 포함되면 할인 금액은 4046원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(27);
      const ORDER = new Order('타파스-1,초코케이크-2');
      const ANSWER = 4046;

      // when
      const applied = Weekday.apply(VISIT_DAY, ORDER);

      // then
      expect(applied).toEqual(ANSWER);
    });
  });
  describe('주말 할인 테스트', () => {
    test('주중에 방문할 경우 주말 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(27);
      const ORDER = new Order('바비큐립-1,제로콜라-2');
      const ANSWER = 0;

      // when
      const applied = Weekend.apply(VISIT_DAY, ORDER)

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('주말에 방문했지만 주문 중에 메인메뉴가 없으면 주말 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(23);
      const ORDER = new Order('타파스-1,제로콜라-2');
      const ANSWER = 0;

      // when
      const applied = Weekend.apply(VISIT_DAY, ORDER)

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('주말에 방문했고 바비큐립을 1개 주문하면 주말 할인은 2023원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(23);
      const ORDER = new Order('바비큐립-1,제로콜라-2');
      const ANSWER = 2023;

      // when
      const applied = Weekend.apply(VISIT_DAY, ORDER)

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('주말에 방문했고 바비큐립을 2개 주문하고 크리스마스파스타를 1개 주문하면 주말 할인은 6069원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(23);
      const ORDER = new Order('바비큐립-2,크리스마스파스타-1');
      const ANSWER = 6069;

      // when
      const applied = Weekend.apply(VISIT_DAY, ORDER)

      // then
      expect(applied).toEqual(ANSWER);
    });
  });
  describe('특별 할인 테스트', () => {
    test('특별한 날짜에 방문하지 않은 경우 특별 할인은 없다.', () => {
      // given
      const VISIT_DAY = new VisitDay(4);
      const ANSWER = 0;

      // when
      const applied = Specific.apply(VISIT_DAY)

      // then
      expect(applied).toEqual(ANSWER);
    });
    test('특별한 날짜에 방문한 경우 특별 할인은 1000원이다.', () => {
      // given
      const VISIT_DAY = new VisitDay(25);
      const ANSWER = 1000;

      // when
      const applied = Specific.apply(VISIT_DAY)

      // then
      expect(applied).toEqual(ANSWER);
    });
  });
});
