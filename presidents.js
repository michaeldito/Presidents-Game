const {Deck} = require('./deck');
const {Player} = require('./player');
const {DEFAULT_STRATEGY} = require('./strategy-constants');

const PRESIDENTS = '[presidents]';

const getRandomIntBetweenZeroAnd = (max) => {
 return Math.floor(Math.random() * Math.floor(max));
}

const dealToPlayers = (deck, ...players) => {
  const numPlayers = players.length;
  let i = 0;
  while (! deck.isEmpty()) {
    try {
      let card = deck.deal();
      console.log(`${PRESIDENTS} Dealing ${card.toString()}`);
      players[i].addCardToHand(card);
      i = (i + 1) % numPlayers;
    } catch (e) {  }
  }
}

const presidents = () => {
  let deck = new Deck();

  console.log(`${PRESIDENTS} Displaying the shuffled deck of cards.\n`);
  console.log(deck.toString());
  console.log();

  let player1 = new Player('Foo', DEFAULT_STRATEGY);
  let player2 = new Player('Bar', DEFAULT_STRATEGY);
  let dealToPlayer = getRandomIntBetweenZeroAnd(1);

  console.log(`${PRESIDENTS} Dealing cards to players.\n`);
  if (dealToPlayer === 0)
    dealToPlayers(deck, player1, player2);
  else if (dealToPlayer === 1)
    dealToPlayers(deck, player2, player1);

  console.log(`${PRESIDENTS} Displaying player1\'s hand.\n`);
  console.log(player1.displayHand());
  console.log();

  console.log(`${PRESIDENTS} Displaying player2\'s hand.\n`);
  console.log(player2.displayHand());
  console.log();

  console.log(`${PRESIDENTS} player1 is selecting a card.\n`);
  let player1Selection = player1.selectCardFromHand();
  console.log(player1Selection.toString());
  console.log();

  console.log(`${PRESIDENTS} player2 is selecting a card.\n`);
  let player2Selection = player2.selectCardFromHand();
  console.log(player2Selection.toString());
  console.log();
}

presidents();