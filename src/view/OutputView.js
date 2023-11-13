import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

const OutputView = {
  printWelcome() {
    Console.print(MESSAGE.WELCOME);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
