import { DISCOUNT_AMOUNT } from '../../constants/Discount.js';

const Weekend = {
  discount: (dessertCount, totalBill) => {
    const discount = dessertCount * DISCOUNT_AMOUNT;
    return totalBill - discount;
  },
};

export default Weekend;
