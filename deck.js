class Deck {
  constructor() {
    this.deck = []
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = []
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    for (let suit of suits) {
      for (let rank of ranks) {
        let card = { suit, rank }
        this.deck.push(card)
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

  toString() {
    return JSON.stringify(this.deck)
  }
}

const D = new Deck();
while (D.deck.length > 0)
  console.log(D.deal())
