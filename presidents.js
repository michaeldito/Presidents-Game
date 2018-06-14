const {Card} = require('./card');
const {Deck} = require('./deck');
const {Player} = require('./player');
const {DEFAULT_STRATEGY} = require('./strategy-constants');
const {CardSelection} = require('./card-selection');
const readline = require('readline');

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

const determineWhoHas3Clubs = (...players) => {
  let i = 1;
  for (let player of players) {
    if (player.hasThreeOfClubs)
      return i;
  }
}

const shiftPlayersLeftBy = (amount, players) => {
  left = players.slice(amount);
  right = players.slice(0, amount);
  whole = left.concat(right);
  return whole;
}

const presidents = () => {
  let deck = new Deck();

  console.log(`${PRESIDENTS} Displaying the shuffled deck of cards.\n`);
  console.log(deck.toString());
  console.log();

  let player1 = new Player('Foo', DEFAULT_STRATEGY);
  let player2 = new Player('Bar', DEFAULT_STRATEGY);
  let player3 = new Player('Other', DEFAULT_STRATEGY);
  let players = [player1, player2, player3];

  let dealToPlayer = getRandomIntBetweenZeroAnd(2);

  console.log(`${PRESIDENTS} Dealing cards to players.\n`);
  if (dealToPlayer === 0) {
    dealToPlayers(deck, player1, player2, player3);
  } else if (dealToPlayer === 1) {
    dealToPlayers(deck, player2, player1, player3);
  } else {
    dealToPlayers(deck, player3, player1, player2);
  }

  console.log(`${PRESIDENTS} Displaying player1\'s hand.\n`);
  console.log(player1.displayHand());
  console.log();

  console.log(`${PRESIDENTS} Displaying player2\'s hand.\n`);
  console.log(player2.displayHand());
  console.log();

  console.log(`${PRESIDENTS} Displaying player3\'s hand.\n`);
  console.log(player3.displayHand());
  console.log();

  let indexOfPlayerWith3Clubs = determineWhoHas3Clubs(player1, player2, player3);

  console.log(`Player ${indexOfPlayerWith3Clubs+1} has the 3 of Clubs`);
  
  console.log(`${PRESIDENTS} Before: ${players.map(p => p.getName())}`)
  players = shiftPlayersLeftBy(indexOfPlayerWith3Clubs, players);
  console.log(`${PRESIDENTS} After: ${players.map(p => p.getName())}`);

  let gameOn = true;
  let current = indexOfPlayerWith3Clubs;
  let previousCardSelection = new Card('EMPTY', '0');
  let currentCardSelection = null;

  while (gameOn) {
    let player = players[current];
    currentCardSelection = player.selectCardsBetterThan(previousCardSelection.getValue());
    if (currentCardSelection === undefined)
      return;
    console.log(`Player ${current+1} selected: ${currentCardSelection.toString()}`);
    if (currentCardSelection.getValue() >= previousCardSelection.getValue()) {
      console.log('Valid Selection');
      previousCardSelection = currentCardSelection;
    }
    else {
      console.log('Game Over!');
      gameOn = false;
    }
    current = (current + 1) % players.length;
  }

}

presidents();