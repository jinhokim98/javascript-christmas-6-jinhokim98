import { SPECIFIC_DISCOUNT_AMOUNT } from '../../constants/Discount.js';

const Specific = {
  discount: (totalBill) => totalBill - SPECIFIC_DISCOUNT_AMOUNT,
};

export default Specific;
