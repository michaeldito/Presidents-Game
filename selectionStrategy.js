class DefaultStrategy {
  constructor(hand) {
    this.hand = hand;
  }

  selection(previousSelectionValue) {
    return this.hand.find((card) => card.getValue() > previousSelectionValue);
  }
}

module.exports = {DefaultStrategy};