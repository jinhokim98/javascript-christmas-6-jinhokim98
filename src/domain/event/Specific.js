import { NONE, SPECIFIC_DISCOUNT_AMOUNT } from '../../constants/Discount.js';

class Specific {
  static apply(visitDay) {
    if (!visitDay.isSpecificDay()) {
      return NONE;
    }

    return this.#discount();
  }

  static #discount() {
    return SPECIFIC_DISCOUNT_AMOUNT;
  }
}

export default Specific;
