import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

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
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
