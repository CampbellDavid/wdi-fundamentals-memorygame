console.log("Up and running!");

var cards = ["Queen", "Queen", "King", "King"];

var cardOne = cards[0]; {
console.log("User flipped " + cards[0]);
}

var cardTwo = cards[1];	{
console.log("User flipped " + cards[1]);
}

const cardsInPlay = [];
	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	} if (cardOne === cardTwo) {
		alert("Match found!");
	} else {
		alert("Try Again!");
	}