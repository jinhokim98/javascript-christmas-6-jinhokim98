export const BADGE_INFO = {
  SANTA: { name: '산타', constraint: 20000 },
  TREE: { name: '트리', constraint: 10000 },
  STAR: { name: '별', constraint: 5000 },
};

Object.freeze(BADGE_INFO);

class Badge {
  #badge;

  constructor(totalBenefits) {
    this.#issueBadge(totalBenefits);
  }

  #issueBadge(totalBenefits) {
    if (totalBenefits >= BADGE_INFO.SANTA.constraint) {
      this.#badge = BADGE_INFO.SANTA;
      return;
    }
    if (totalBenefits >= BADGE_INFO.TREE.constraint) {
      this.#badge = BADGE_INFO.TREE;
      return;
    }
    if (totalBenefits >= BADGE_INFO.STAR.constraint) {
      this.#badge = BADGE_INFO.STAR;
    }
  }

  loadBadgeName() {
    if (this.#badge === undefined) {
      return undefined;
    }

    return this.#badge.name;
  }
}

export default Badge;
