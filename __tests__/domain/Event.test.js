import VisitDay from "../../src/domain/VisitDay";
import ChristmasDDay from "../../src/domain/event/ChristmasDDay.js";

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
});
