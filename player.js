const {DEFAULT_STRATEGY} = require('./strategy-constants');
const {DefaultStrategy} = require('./selectionStrategy');

const PLAYER = '[player]';

class Player {
  constructor(name, strategyType) {
    this.name = name;
    this.hand = [];
    this.selectionStrategy = null;
    this.setSelectionStrategy(strategyType);
  }

  getName() {
    return this.name;
  }

  setSelectionStrategy(strategyType) {
    if (strategyType === DEFAULT_STRATEGY)
      this.selectionStrategy = new DefaultStrategy(this.hand);
  }

  addCardToHand(card) {
    console.log(`${PLAYER} pushing ${card.toString()}\n`);
    this.hand.push(card);
  }

  selectCardsBetterThan(previousSelectionValue) {
    return this.selectionStrategy.selection(previousSelectionValue);
  }

  stillHasCards() {
    return this.hand.length > 0;
  }

  hasThreeOfClubs() {
    for (let card in this.hand) {
      if (card.isThreeOfClubs())
        return true;
    }
  }

  displayHand() {
    return this.hand.map(card => card.toString());
  }
}

module.exports = {Player};
