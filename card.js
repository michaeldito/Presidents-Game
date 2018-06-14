const {CLUBS} = require('./card_constants');

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  toString() {
    return `(suit: ${this.suit}, rank: ${this.rank}, value: ${this.getValue()})`;
  }

  getValue() {
    if (this.rank === 'J')
      return 11;
    else if (this.rank === 'Q')
      return 12;
    else if (this.rank === 'K')
      return 13;
    else if (this.rank === 'A')
      return 14;
    else
      return parseInt(this.rank, 10);
  }

  isThreeOfClubs() {
    return this.suit == CLUBS && this.rank == '3';
  }
}

module.exports = {Card};