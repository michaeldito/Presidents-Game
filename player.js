const {DEFAULT_STRATEGY} = require('./strategy-constants');
const {DefaultStrategy} = require('./selectionStrategy');
const {Card} = require('./card');
const _ = require('lodash');

const PLAYER = '[player]';

class Player {
  constructor(name, strategyType) {
    this.name = name;
    this.hand = [];
    this.selectionStrategy = null;
    this.setSelectionStrategy(strategyType);
  }

  setSelectionStrategy(strategyType) {
    if (strategyType === DEFAULT_STRATEGY)
      this.selectionStrategy = new DefaultStrategy(this.hand);
  }

  addCardToHand(card) {
    console.log(`${PLAYER} pushing ${card.toString()}\n`);
    this.hand.push(card);
  }

  selectCardFromHand() {
    return this.selectionStrategy.selection();
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
