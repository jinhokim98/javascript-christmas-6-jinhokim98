const FORMATTING_MESSAGE = {
  previewEventBenefits: (day) =>
    `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menuAndCount: (menu, count) => `${menu} ${count}개`,
  won: (won) => `${won.toLocaleString()}원`,
  benefits: (eventName, benefit) =>
    `${eventName} -${benefit.toLocaleString()}원`,
  discountWon: (won) => `-${won}원`,
};

Object.freeze(FORMATTING_MESSAGE);

export default FORMATTING_MESSAGE;
