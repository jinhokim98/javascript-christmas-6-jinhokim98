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
    this.#issueStarBadge(totalBenefits);
    this.#issueTreeBadge(totalBenefits);
    this.#issueSantaBadge(totalBenefits);
  }

  #issueStarBadge(totalBenefits) {
    if (totalBenefits >= BADGE_INFO.TREE.constraint) {
      return;
    }

    this.#badge = BADGE_INFO.STAR;
  }

  #issueTreeBadge(totalBenefits) {
    if (totalBenefits >= BADGE_INFO.SANTA.constraint) {
      return;
    }

    this.#badge = BADGE_INFO.TREE;
  }

  #issueSantaBadge(totalBenefits) {
    if (totalBenefits < BADGE_INFO.SANTA.constraint) {
      return;
    }

    this.#badge = BADGE_INFO.SANTA;
  }

  loadBadgeName() {
    return this.#badge.name;
  }
}

export default Badge;
