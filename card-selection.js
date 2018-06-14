const reducer = (total, current) => total + current.getValue();

class CardSelection {
  constructor(cards) {
    this.cards = cards
  }

  toString() {
    return this.cards.map(card => card.toString());
  }

  getValue() {
    this.cards.reduce(reducer);
  }
}

module.exports = {CardSelection};