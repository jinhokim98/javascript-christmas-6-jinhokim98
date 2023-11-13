import PlannerUtils from '../../utils/PlannerUtils.js';

const ChristmasDDAy = {
  discount: (totalBill, visitDay) => {
    const discount = PlannerUtils.calculateChristmasDiscount(visitDay);

    return totalBill - discount;
  },
};

export default ChristmasDDAy;
