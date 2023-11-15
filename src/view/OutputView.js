import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import FORMATTING_MESSAGE from '../constants/FormatMessage.js';
import { NONE } from '../constants/Discount.js';

const OutputView = {
  printWelcome() {
    Console.print(MESSAGE.WELCOME);
  },

  printMenu(menus) {
    Console.print(MESSAGE.ORDERED_MENU);

    menus.forEach((menu) => {
      Console.print(menu);
    });
  },

  printTotalBillBeforeDiscount(totalBill) {
    Console.print(MESSAGE.TOTAL_BILL_BEFORE_DISCOUNT);
    Console.print(FORMATTING_MESSAGE.won(totalBill));
  },

  printGift(gift) {
    Console.print(MESSAGE.GIFT_MENU);

    if (gift === NONE) {
      Console.print(MESSAGE.NONE);
      return;
    }

    Console.print(MESSAGE.GIFT_CHAMPAGNE);
  },

  printBenefits(benefits) {
    Console.print(MESSAGE.BENEFITS);

    if (benefits === undefined) {
      Console.print(MESSAGE.NONE);
      return;
    }

    benefits.forEach((benefit) => {
      if (benefit !== undefined) Console.print(benefit);
    });
  },

  printTotalBenefits(benefits) {
    Console.print(MESSAGE.TOTAL_BENEFITS);

    if (benefits === NONE) {
      Console.print(MESSAGE.NONE);
      return;
    }

    Console.print(FORMATTING_MESSAGE.discountWon(benefits));
  },

  printTotalBillAfterDiscount(totalBill) {
    Console.print(MESSAGE.TOTAL_BILL_AFTER_DISCOUNT);
    Console.print(FORMATTING_MESSAGE.won(totalBill));
  },

  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
