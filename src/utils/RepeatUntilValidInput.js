import OutputView from '../view/OutputView.js';

const tryInput = async (func, ...args) => {
  try {
    const input = await func(...args);
    return input;
  } catch (error) {
    OutputView.printError(error);
    return undefined;
  }
};

const repeatUntilValidInput = async (func, ...args) => {
  for (;;) {
    const input = await tryInput(func, ...args);
    if (input !== undefined) return input;
  }
};

export default repeatUntilValidInput;
