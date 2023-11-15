import Badge, { BADGE_INFO } from "../../src/domain/Badge.js";

describe('배지 테스트', () => {
  const GIVENS = [[4300, undefined], [5000, BADGE_INFO.STAR.name], [9900, BADGE_INFO.STAR.name], [10100, BADGE_INFO.TREE.name], [19900, BADGE_INFO.TREE.name], [20010, BADGE_INFO.SANTA.name]];
  test.each(GIVENS)('금액별로 배지 발급 테스트.', (totalBenefits, answer) => {
    // given
    const TOTAL_BENEFITS = totalBenefits;
    const ANSWER = answer;

    // when
    const badge = new Badge(TOTAL_BENEFITS);

    // then
    expect(badge.loadBadgeName()).toEqual(ANSWER);
  });
});
