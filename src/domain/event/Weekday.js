import { DISCOUNT_AMOUNT } from '../../constants/Discount.js';

const Weekday = {
  discount: (dessertCount, totalBill) => {
    const discount = dessertCount * DISCOUNT_AMOUNT;
    return totalBill - discount;
  },
};

export default Weekday;
