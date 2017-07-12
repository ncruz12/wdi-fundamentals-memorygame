//Holds all four cards
var cards = ["queen", "queen", "king", "king"];

//Holds cards that are in play
var cardsInPlay = []

//Represents the first card user flipped and storing the first element
var cardOne = cards[0];

//adding first card to cardsInPlay array
cardsInPlay.push(cardOne);

console.log("User flipped queen");

//second card user flips and storing the third element in cards array to cardTwo
var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped king");

if(cardsInPlay.length === 2) {
  if(cardsInPlay[0] === cardsInPlay[1] ) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }

}

