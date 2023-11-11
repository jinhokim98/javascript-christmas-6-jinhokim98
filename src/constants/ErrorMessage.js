const ERROR_MESSAGE = {
  EMPTY_INPUT: '[ERROR]: 빈 입력입니다. 다시 입력해 주세요.',
  INVALID_FORM: '[ERROR]: 형식에 맞지 않는 입력입니다. 다시 입력해 주세요.',
  INVALID_DAY: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  INVALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  TOO_MANY_ORDER:
    '[ERROR] 20개를 초과하는 주문은 허용되지 않습니다. 다시 입력해주세요.',
  NOT_ALLOWED_ONLY_DRINK:
    '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해주세요',
};

Object.freeze(ERROR_MESSAGE);

export default ERROR_MESSAGE;
