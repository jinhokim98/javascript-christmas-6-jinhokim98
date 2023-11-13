import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class Validator {
  static isNotEmpty(input) {
    if (input.length <= 0) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static isOnlyNumber(input) {
    const regEx = /^\d+$/;

    if (!regEx.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_DAY);
    }
  }

  static isDayFormat(input) {
    const regEx = /^(?:[1-9]|[12][0-9]|3[0-1])$/;

    if (!regEx.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_DAY);
    }
  }

  static isNotIncludeEmptyOrder(orders) {
    if (orders.find((order) => order.length <= 0) !== undefined) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}

export default Validator;
