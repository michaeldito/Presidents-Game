const {Card} = require('./card');
const {SUITS, RANKS} = require('./card_constants');

class Deck {
  constructor() {
    this.deck = []
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = []
    for (let suit of SUITS) {
      for (let rank of RANKS) {
        let card = new Card(suit, rank);
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length, i;
    while(m){
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }

  deal() {
    return this.deck.pop();
  }

  isEmpty() {
    return this.deck.length == 0;
  }

  toString() {
    return this.deck.map(card => card.toString());
  }
}

module.exports = {Deck};
