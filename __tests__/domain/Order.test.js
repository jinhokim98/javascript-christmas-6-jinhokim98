import Order from "../../src/domain/Order";
import PlannerUtils from "../../src/utils/PlannerUtils";

describe('주문 테스트', () => {
  // 콤마를 기준으로 입력 구분 테스트 수행하기

  test('콤마를 기준으로 문자열을 분리합니다.', () => {
    // given
    const INPUT = '공습경보,경찰력총동원';
    const ANSWER = ['공습경보', '경찰력총동원'];

    // when
    const seperatedString = PlannerUtils.seperateByComma(INPUT);
    
    // then
    expect(seperatedString).toEqual(ANSWER);
  });

  // given
  const INVALID_INPUTS = [[',타파스-1'], ['공습경보-a'], ['공습경보-1'], ['타파스-1,타파스-1'], ['타파스-0'], ['타파스-7,제로콜라-14'], ['제로콜라-15']];

  test.each(INVALID_INPUTS)('주문 형식에 맞지 않는 입력이 들어오면 에러를 일으킨다.', (input) => {
    // when & then
    expect(() => new Order(input)).toThrow('[ERROR]');
  });

  test('정상적인 입력이 들어올 때 예외가 발생하지 않는다.', () => {
    // given
    const VALID_INPUT = '해산물파스타-1,타파스-2';
    
    // when & then
    expect(() => new Order(VALID_INPUT)).not.toThrow('[ERROR]');
  });
});
