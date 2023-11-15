import VisitDay from "../../src/domain/VisitDay";

describe('방문 날짜 테스트', () => {
  // given
  const INVALID_INPUTS = [[''], ['공습경보'], ['32']];

  test.each(INVALID_INPUTS)('빈 문자열, 숫자가 아닌 입력, 벗어난 날짜가 입력이 들어올 때 에러를 일으킨다.', (input) => {
    // when & then
    expect(() => new VisitDay(input)).toThrow('[ERROR]');
  });

  test('정상적인 입력이 들어올 때 예외가 발생하지 않는다.', () => {
    // given
    const VALID_INPUT = '20';
    
    // when & then
    expect(() => new VisitDay(VALID_INPUT)).not.toThrow('[ERROR]');
  })
});
