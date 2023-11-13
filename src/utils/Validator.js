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
}

export default Validator;
