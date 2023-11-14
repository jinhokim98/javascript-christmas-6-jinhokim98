import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';
import FORMATTING_MESSAGE from '../constants/FormatMessage.js';

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

  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
