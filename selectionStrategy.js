class DefaultStrategy {
  constructor(hand) {
    this.hand = hand;
  }

  selection() {
    return this.hand.pop();
  }
}

module.exports = {DefaultStrategy};