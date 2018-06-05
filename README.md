# Presidents Game

The game of Presidents requires at least 2 players, and a deck of cards.
Randomly choose a player as the dealer. The dealer deals the cards one at
a time in a clockwise manner. When all cards are dealt each player now has 
owns their hand. The player who owns the 3 of clubs begins the game by 
making the first selection.

A selection has 1-4 cards, and the value of those cards must be >= the most 
recent selection (MRS) made in the game. If it is >= the MRS, it is the next 
player's turn. If it is == the MRS, the next player is skipped. A special 
case of this is when the selection is == the MRS, with a multiplicity of > 1. 
If this is the case, we skip multiple players, based on the multiplicity.

Another special case is the 2. If a player plays a 2, the current round is over,
and that player may begin the next round with any selection they choose.

When a player cannot put down a selection that is >= the MRS, and they do not play 
a 2 if they own one, they get skipped. If no player can match or beat the MRS, then
when it becomes the player who made the MRS's turn, they can choose to continue the
round, or start a new round.

We determine the value of a selection based on the rank and multiplicity of the
cards in the selection.

Their rank from lowest -> highest is as follows:
3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A, 2

The first person to play their entire hand is deemed the President, and the game is 
played until nobody has any cards left.

[Model of the Game]
(https://go.gliffy.com/go/publish/12680779)
