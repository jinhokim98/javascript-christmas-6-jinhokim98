const FORMATTING_MESSAGE = {
  previewEventBenefits: (day) =>
    `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menuAndCount: (menu, count) => `${menu} ${count}개`,
  won: (won) => `${won}원`,
  christmasEventDiscount: (discount) =>
    `크리스마스 디데이 할인: -${discount}원`,
  weekdayDiscount: (discount) => `평일 할인: -${discount}원`,
  weekendDiscount: (discount) => `주말 할인: -${discount}원`,
  specialDiscount: (discount) => `특별 할인: -${discount}원`,
  gift: (gift) => `증정 이벤트: -${gift}원`,
  discountWon: (won) => `-${won}원`,
};

Object.freeze(FORMATTING_MESSAGE);

export default FORMATTING_MESSAGE;
