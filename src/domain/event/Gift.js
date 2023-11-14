import { MIN_BILL_FOR_GIFT_EVENT, NONE } from '../../constants/Discount.js';
import GIFT from '../../constants/Gift.js';

class Gift {
  static apply(totalBill) {
    if (totalBill < MIN_BILL_FOR_GIFT_EVENT) {
      return NONE;
    }

    return Gift.gift();
  }

  static gift() {
    return GIFT.champagne;
  }
}

export default Gift;
