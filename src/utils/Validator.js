import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class Validator {
  static isNotEmpty(input) {
    if (input.length <= 0) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }
}

export default Validator;
