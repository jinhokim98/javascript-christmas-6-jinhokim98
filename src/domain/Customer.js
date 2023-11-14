import { MIN_BILL_FOR_APPLY_EVENT, NONE } from '../constants/Discount.js';
import ChristmasDDAy from './event/ChristmasDDay.js';
import Weekday from './event/Weekday.js';
import Weekend from './event/Weekend.js';
import Specific from './event/Specific.js';
import Gift from './event/Gift.js';
import BADGE, {
  MIN_BENEFITS_FOR_SANTA_BADGE,
  MIN_BENEFITS_FOR_STAR_BADGE,
  MIN_BENEFITS_FOR_TREE_BADGE,
} from '../constants/Badge.js';

class Customer {
  #visitDay;

  #order;

  #benefits;

  #badge;

  constructor(visitDay) {
    this.#visitDay = visitDay;
  }

  completeOrder(order) {
    this.#order = order;
  }

  getTotalBill() {
    return this.#order.calculateTotalBill();
  }

  giveDuplicateDiscount() {
    const totalBill = this.getTotalBill();

    if (totalBill < MIN_BILL_FOR_APPLY_EVENT) {
      return;
    }

    const benefits = this.#applyEvents();
    this.#benefits = benefits;
  }

  #applyEvents() {
    const benefits = new Map();
    benefits.set(ChristmasDDAy.name(), ChristmasDDAy.apply(this.#visitDay));
    benefits.set(Weekday.name(), Weekday.apply(this.#visitDay, this.#order));
    benefits.set(Weekend.name(), Weekend.apply(this.#visitDay, this.#order));
    benefits.set(Specific.name(), Specific.apply(this.#visitDay));
    benefits.set(Gift.name(), Gift.apply(this.getTotalBill()));

    return benefits;
  }

  getTotalBenefitsAmount() {
    if (this.#benefits === undefined) {
      return NONE;
    }

    const totalBenefits = Array.from(this.#benefits.values()).reduce(
      (acc, cur) => acc + cur,
      0,
    );

    return totalBenefits;
  }

  getTotalDiscountsAmount() {
    if (this.#benefits === undefined) {
      return NONE;
    }

    const nonGift = new Map(
      [...this.#benefits].filter(([key]) => key !== Gift.name()),
    );

    const totalDiscounts = Array.from(nonGift.values()).reduce(
      (acc, cur) => acc + cur,
      0,
    );
    return totalDiscounts;
  }

  issueBadge() {
    if (
      this.#benefits === undefined ||
      this.getTotalBenefitsAmount() < MIN_BENEFITS_FOR_STAR_BADGE
    ) {
      return;
    }

    const totalBenefits = this.getTotalBenefitsAmount();
    this.#issueStarBadge(totalBenefits);
    this.#issueTreeBadge(totalBenefits);
    this.#issueSantaBadge(totalBenefits);
  }

  #issueStarBadge(totalBenefits) {
    if (totalBenefits >= MIN_BENEFITS_FOR_TREE_BADGE) {
      return;
    }

    this.#badge = BADGE.STAR;
  }

  #issueTreeBadge(totalBenefits) {
    if (totalBenefits >= MIN_BENEFITS_FOR_SANTA_BADGE) {
      return;
    }

    this.#badge = BADGE.TREE;
  }

  #issueSantaBadge(totalBenefits) {
    if (totalBenefits < MIN_BENEFITS_FOR_SANTA_BADGE) {
      return;
    }

    this.#badge = BADGE.SANTA;
  }
}

export default Customer;
