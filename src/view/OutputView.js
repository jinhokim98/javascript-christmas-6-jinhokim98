import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import FORMATTING_MESSAGE from '../constants/FormatMessage.js';
import { NONE } from '../constants/Discount.js';

const OutputView = {
  printWelcome() {
    Console.print(MESSAGE.WELCOME);
  },

  printPreviewEventBenefits(visitDay) {
    Console.print(FORMATTING_MESSAGE.previewEventBenefits(visitDay));
    this.printNewLine();
  },

  printMenu(menus) {
    Console.print(MESSAGE.ORDERED_MENU);

    menus.forEach((menu) => {
      Console.print(menu);
    });

    this.printNewLine();
  },

  printTotalBillBeforeDiscount(totalBill) {
    Console.print(MESSAGE.TOTAL_BILL_BEFORE_DISCOUNT);
    Console.print(FORMATTING_MESSAGE.won(totalBill));
    this.printNewLine();
  },

  printGift(gift) {
    Console.print(MESSAGE.GIFT_MENU);

    if (gift === NONE) {
      Console.print(MESSAGE.NONE);
      this.printNewLine();
      return;
    }

    Console.print(MESSAGE.GIFT_CHAMPAGNE);
    this.printNewLine();
  },

  printBenefits(benefits) {
    Console.print(MESSAGE.BENEFITS);

    if (benefits === undefined) {
      Console.print(MESSAGE.NONE);
      this.printNewLine();
      return;
    }

    benefits.forEach((benefit) => {
      if (benefit !== undefined) Console.print(benefit);
    });
    this.printNewLine();
  },

  printTotalBenefits(benefits) {
    Console.print(MESSAGE.TOTAL_BENEFITS);

    if (benefits === NONE) {
      Console.print(MESSAGE.NONE);
      this.printNewLine();
      return;
    }

    Console.print(FORMATTING_MESSAGE.discountWon(benefits));
    this.printNewLine();
  },

  printTotalBillAfterDiscount(totalBill) {
    Console.print(MESSAGE.TOTAL_BILL_AFTER_DISCOUNT);
    Console.print(FORMATTING_MESSAGE.won(totalBill));
    this.printNewLine();
  },

  printEventBadge(badge) {
    if (badge === undefined) {
      this.printNewLine();
      return;
    }

    Console.print(MESSAGE.EVENT_BADGE);
    Console.print(badge);
    this.printNewLine();
  },

  printError(error) {
    Console.print(error.message);
  },

  printNewLine() {
    Console.print('');
  },
};

export default OutputView;
