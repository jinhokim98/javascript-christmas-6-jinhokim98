import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.WHEN_IS_VISIT_DAY);
    return input;
  },
};

export default InputView;
